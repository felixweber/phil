import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import store from './store'
import { connect } from 'react-redux';
var FileSaver = require('file-saver');


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // labels: this.props.fields,
            // value: this.props.fields
        };
        this.handleAddImage = this.handleAddImage.bind(this);
        this.handleAddFields = this.handleAddFields.bind(this);
        this.handleExport = this.handleExport.bind(this);      
    }
    handleAddImage(image){
      store.dispatch({
        type: 'ADD_IMAGE',
        image: image
      }); 
    }
    handleAddFields(fields){
      store.dispatch({
        type: 'ADD_FIELDS',
        fields: fields
      });      
    }
    handleExport(newFields){
        // var data = "text/json;charset=utf-8," + encodeURIComponent();
        
        var blob = new Blob([JSON.stringify(newFields.labels)], {type: "text/json;charset=utf-8"});
        FileSaver.saveAs(blob, "labels.txt");

        console.log('booboo', newFields);

    }

    onDrop(files) {
        console.log('dropped some files', files, files.length);
        for (let i = 0; i < files.length; i++) {
            if (files[i].name === 'preview.png') {
              this.handleAddImage(files[i].preview)
            } 
            else if (files[i].name === 'labels.json') {
                  const reader = new FileReader();
                  reader.onload = () => {
                    const fileAsBinaryString = reader.result;
                    // console.log('fileAsBinary', fileAsBinaryString);
                    const json = JSON.parse(fileAsBinaryString);
                   // do whatever you want with the file content
                    this.handleAddFields(json)
                  };
                  reader.onabort = () => console.log('file reading was aborted');
                  reader.onerror = () => console.log('file reading has failed');
                  reader.readAsBinaryString(files[i]);
            }
        }
    }


    render() {
        const props = this.props;
        var exportFields;
        if (props.newFields){
            console.log('header newFields', props.newFields.labels);
            exportFields = props.newFields.labels;
        }
        return (
            <div className="Header">
                <div className="Logo"> </div>
                <div className="FileName"> Placheholder for Artboard Name </div>
                <div className="buttons">
                    <Dropzone className="ImportButton" onDrop={files => this.onDrop(files)}> Import </Dropzone>
                    <div className="ExportButton" onClick={() => this.handleExport(props.newFields)}> Export </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        image: state.image,
        fields: state.fields,
        newFields: state.newFields
    };
}

export default connect(mapStateToProps)(Header);


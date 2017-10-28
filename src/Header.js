import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import store from './store'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // labels: this.props.fields,
            // value: this.props.fields
        };
        this.handleAddImage = this.handleAddImage.bind(this);
        this.handleAddFields = this.handleAddFields.bind(this);        
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
        return (
            <div className="Header">
                <div className="Logo"> </div>
                <div className="FileName"> </div>
                <div className="ExportButton"> Export </div>
                <Dropzone className="ImportButton" onDrop={files => this.onDrop(files)}> Import </Dropzone>
            </div>
        );
    }
}

export default Header;

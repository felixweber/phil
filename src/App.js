import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import LabelEditor from './LabelEditor';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header'
import store from './store'
/* global window, document, FileReader */
/* eslint-disable */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            fields: null
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
            <div className="app-container">
                <Header />
                <div className="phil" > HELLO HACKATHON</div>
                <Dropzone onDrop={files => this.onDrop(files)} />
                {
                  (this.props.fields) ?
                  <LabelEditor image={this.props.image} fields={this.props.fields} /> : 
                  null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        image: state.image,
        fields: state.fields
    };
}

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import LabelEditor from './LabelEditor';
import './App.css';
/* global window, document, FileReader */
/* eslint-disable */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            fields: null
        };
        // this.onDrop = this.onDrop.bind(this);
    }

    onDrop(files) {
        console.log('dropped some files', files, files.length);
        for (let i = 0; i < files.length; i++) {
            if (files[i].name === 'preview.png') {
                this.setState({
                    image: files[i].preview
                });
            } 
            else if (files[i].name === 'labels.json') {
                  const reader = new FileReader();
                  reader.onload = () => {
                    const fileAsBinaryString = reader.result;
                    // console.log('fileAsBinary', fileAsBinaryString);
                    const json = JSON.parse(fileAsBinaryString);
                   // do whatever you want with the file content
                    this.setState({
                      fields: json
                    })
                  };
                  reader.onabort = () => console.log('file reading was aborted');
                  reader.onerror = () => console.log('file reading has failed');
                  reader.readAsBinaryString(files[i]);
            }
            console.log('done');
        }
    }

    getImage() {
    }

    getFields() {
    }

    render() {
        const props = this.props;
        return (
            <div className="app-container">
                <div className="phil" > HELLO HACKATHON</div>
                <Dropzone onDrop={files => this.onDrop(files)} />
                {
                  (this.state.fields) ?
                  <LabelEditor image={this.state.image} fields={this.state.fields} /> : 
                  null
                }
                
            </div>
        );
    }
}

export default App;

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
        this.handleExport = this.handleExport.bind(this);      
    }
    handleExport(newFields){
        // var data = "text/json;charset=utf-8," + encodeURIComponent();
        var blob = new Blob([JSON.stringify(newFields.labels)], {type: "text/json;charset=utf-8"});
        FileSaver.saveAs(blob, "edited-labels.json");
        console.log('booboo', newFields);
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
                    {
                        props.image ? <div className="ExportButton" onClick={() => this.handleExport(props.newFields)}> Export </div> : null
                    }
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


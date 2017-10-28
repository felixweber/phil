import React, { Component } from 'react';
/* global window, document, FileReader */
/* eslint-disable */

import WebFont from 'webfontloader';

class LabelEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: this.props.fields,
            value: this.props.fields
        };
        // this.handleChange = this.handleChange.bind(this);        
    }

    // handleChange(event){
    //     this.setState({
    //         value: this.state.value.values.concat([event.target.value])
    //     })
    // }

    render() {

        const props = this.props;
        const fields = props.fields;
        console.log('my labels ->', props.fields );
        

        return (
            <div className="LabelEditor">
                <img className="image" src={this.props.image} />

                { this.props.fields.labels.map(field => 
                    <textarea
                        // onChange={this.handleChange}
                        className='input-field' 
                        key={field.id} 
                        // value={this.state.value.labels[field.id]} 
                        value={field.content} 
                        style={
                            {
                                width: field.size.width + 'px',
                                height: field.size.height + 'px',
                                fontSize: field.font.size + 'px',
                                left: field.position.x + 'px',
                                top: field.position.y + 'px',
                                fontFamily: field.font.family 
                            }
                        }
                    />) 
                }
            </div>
        );
    }
}

export default LabelEditor;

import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux';
import Transition from 'react-transition-group/Transition';

class LabelEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: this.props.fields,
            value: this.props.fields
        };
    }

    handleChange = (fieldId, newContent) => {
        console.log('changes', fieldId, newContent);
        store.dispatch({
            type: 'CHANGE_FIELD',
            fieldContent: newContent,
            fieldId: fieldId
        });
        
    }


    alignText(align){
        if (align === 0) {
            return 'left';
        } else if (align === 1) {
            return 'right';
        } else if (align === 2) {
            return 'center';
        } else if (align === 3) {
            return 'justified';
        } else if (align === "align") {
            return 'right';
        }
    }

    transformText(transform){
        if (transform === 0) {
            return 'none';
        } else if (transform === 1) {
            return 'uppercase';
        } else if (transform === 2) {
            return 'lowercase';
        }
    }

    render() {
        const props = this.props;
        const fields = props.fields;
        console.log('my labels ->', fields);
        return (
            <div className="LabelEditor">
                <img className="image" alt="artboad" src={this.props.image} />

                { fields.labels.map(field => 
                    <textarea
                        onChange={(e) => this.handleChange(field.id, e.target.value)}
                        className='input-field' 
                        key={field.id} 
                        defaultValue={field.content} 
                        style={
                            {
                                width: field.size.width + 'px',
                                height: field.size.height + 'px',
                                fontSize: field.font.size + 'px',
                                left: field.position.x + 'px',
                                top: field.position.y + 'px',
                                fontFamily: field.font.family.replace(/\s+/g, '-'),
                                color: field.font.color.toString(),
                                letterSpacing: field.font.letterSpacing + 'px',
                                textAlign:  this.alignText(field.font.textAlignment),
                                textTransform: this.transformText(field.font.textTransform)
                            }
                        }
                    />) 
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

export default connect(mapStateToProps)(LabelEditor);


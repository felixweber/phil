import React, { Component } from 'react';
import store from './store'
import { connect } from 'react-redux';

class LabelEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: this.props.fields,
            value: this.props.fields
        };
        // this.handleChange = this.handleChange.bind(this);        
    }

    handleChange = (fieldId, newContent) => {
        console.log('changes', fieldId, newContent);
        store.dispatch({
            type: 'CHANGE_FIELD',
            fieldContent: newContent,
            fieldId: fieldId
        });
        
    }

    // shouldComponentUpdate(nextProps){
    //     if(this.props != nextProps) {
    //         return true
    //     }
    //     return false;
    // }

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
                                color: field.font.color,
                                letterSpacing: field.font.letterSpacing,
                                textAlign:  this.alignText('align')
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


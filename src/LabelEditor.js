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
                                fontFamily: field.font.family,
                                color: field.font.color 
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


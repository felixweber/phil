import React, { Component } from 'react';
import LabelEditor from './LabelEditor';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            fields: null
        };
    }

    render() {
        const props = this.props;
        return (
            <div className="app-container">
                <Header />
                {
                  (props.fields) ?
                  <LabelEditor image={props.image} fields={props.fields} /> : 
                  <p> Please Import Some Files </p>
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

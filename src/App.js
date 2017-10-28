import React, { Component } from 'react';
import LabelEditor from './LabelEditor';
import { connect } from 'react-redux';
import './App.css';
import Header from './Header'
import store from './store'

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

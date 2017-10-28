import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // labels: this.props.fields,
            // value: this.props.fields
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
        return (
            <div className="Header">
                <div className="Logo"> </div>
                <div className="FileName"> </div>
                <div className="ImportButton"> Import </div>
                <div className="ExportButton"> Export </div>
            </div>
        );
    }
}

export default Header;

import React, { Component } from 'react';
import './Titlebar.css';

class Titlebar extends Component {
    state = {
        titleContent: this.props.titleContent
    }
    render() {
        return(
            <p className="titlebar">{this.state.titleContent}</p>
        )
    }
}

export default Titlebar
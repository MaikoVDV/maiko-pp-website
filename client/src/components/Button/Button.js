import React, { Component } from 'react';

import './Button.css'

class Button extends Component {
    render() {
        var uniqueStyle = {}
        if(this.props.uniqueStyle !== undefined) this.uniqueStyle = this.props.uniqueStyle;
        return (
            <button style={this.uniqueStyle} className={`default-button ${this.props.buttonType}`} onClick={this.props.buttonTrigger}>
                <p style={{whiteSpace: "nowrap"}}>{this.props.buttonText}</p>
            </button>
        )
    }
}

export default Button;
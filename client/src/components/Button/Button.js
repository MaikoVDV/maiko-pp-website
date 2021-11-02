import React, { Component } from 'react';

import './Button.css'

class Button extends Component {
    render() {
        return (
            <button className={`default-button ${this.props.buttonType}`} onClick={this.props.buttonTrigger}>
                <p>{this.props.buttonText}</p>
            </button>
        )
    }
}

export default Button;
import react, { Component } from 'react';

import './Button.css'

class Button extends Component {
    render() {
        return (
            <button className={`default-button ${this.props.buttonType}`} onClick={this.props.buttonTrigger}>
                <p>Add card</p>
            </button>
        )
    }
}

export default Button;
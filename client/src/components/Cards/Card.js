import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <p className="card-title">{this.props.cardData.title}</p>
                <p className="card-desc">{this.props.cardData.desc}</p>
            </div>
        )
    }
}

export default Card
import React, { Component } from 'react';

import './Card.css';

class Card extends Component {
    removeCard = (id) => {
        this.props.deleteCard(id)
    }

    render() {
        return (
            <div className="card">
                <p className="card-title">{this.props.cardData.title}</p>
                <p className="card-desc">{this.props.cardData.desc}</p>
                <button onClick={this.removeCard.bind(this, this.props.cardData._id)}></button>
            </div>
        )
    }
}

export default Card
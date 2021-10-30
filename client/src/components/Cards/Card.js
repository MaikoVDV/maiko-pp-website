// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux'
// Components & other scripts
import { deleteCard } from '../../actions/cardActions'
// Stylesheets
import './Card.css';

class Card extends Component {
    removeCard = (cardId, groupId) => {
        this.props.deleteCard(cardId, groupId)
    }

    render() {
        return (
            <div className="card">
                <p className="card-title">{this.props.cardData.title}</p>
                <p className="card-desc">{this.props.cardData.desc}</p>
                <button onClick={this.removeCard.bind(this, this.props.cardData._id, this.props.groupId)}></button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentGroup: state.group.currentGroup,
    deleteCard: state.deleteCard
});

export default connect(mapStateToProps, { deleteCard })(Card);
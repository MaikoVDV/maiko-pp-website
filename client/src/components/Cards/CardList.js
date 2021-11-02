// Libraries
import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
// Components & Other scripts
import Card from './Card';

// Stylesheets
import './CardList.css'

class CardList extends Component {
    render() {
        let cards = [];
        if(this.props.currentGroup._id !== undefined) {
            cards = this.props.cards
        }

        return (
            <div id="card-list">
                {cards.map((card) => (
                    <Card key={card._id} cardData={card} groupId={this.props.currentGroup._id} />
                ))}
            </div>
        )
    }
}
// getCards(this.props.currentGroup._id)
CardList.propTypes = {
    currentGroup: PropTypes.object.isRequired,
    cards: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    currentGroup: state.group.currentGroup,
    cards: state.card.cards
});

export default connect(mapStateToProps)(CardList);
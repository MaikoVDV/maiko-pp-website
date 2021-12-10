// Libraries
import React, { Component } from 'react';
import store from '../../store'
import { connect } from "react-redux";
import PropTypes from 'prop-types';
// Components & Other scripts
import Card from './Card';
import LoadingIndicator from '../Misc/LoadingIndicator/CardLoadingIndicator';
import { getCards } from '../../actions/cardActions'

// Stylesheets
import './CardList.css'

class CardList extends Component {
    render() {
        let cards = this.props.cards;

        return (
            <div id="card-list">
                {/* <LoadingIndicator /> */}
                {cards.map((card) => (
                    <Card key={card._id} cardData={card} />
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
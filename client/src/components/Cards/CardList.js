// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components & Other scripts
import { getCards, deleteCard } from '../../actions/cardActions.js';
import Card from './Card';

// Stylesheets
import './CardList.css'

class CardList extends Component {
    componentDidMount() {
        this.props.getCards()
    }

    removeCard = (id) => {
        this.props.deleteCard(id)
    }

    render() {
        const { cards } = this.props.card;

        return (
            <div id="card-list">
                {cards.map((card) => (
                    <>
                        <Card cardData={card} />
                        <button onClick={this.removeCard.bind(this, card._id)}></button>
                    </>
                ))}
            </div>
        )
    }
}

CardList.propTypes = {
    getCards: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    card: state.card
});

export default connect(mapStateToProps, { getCards, deleteCard })(CardList);
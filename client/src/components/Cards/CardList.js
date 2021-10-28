// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components & Other scripts
import { getCards, deleteCard } from '../../actions/cardActions.js';
import { getGroups, test } from '../../actions/groupActions.js';
import Card from './Card';

// Stylesheets
import './CardList.css'

class CardList extends Component {
    removeCard = (id) => {
        this.props.deleteCard(id)
    }

    render() {
        const groups = this.props.groups;
        const cards = groups[0].cards;
        console.log(groups)

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
    groups: state.group.groups
});

export default connect(mapStateToProps, { test })(CardList);
// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components & Other scripts
import { getCards } from '../../actions/cardActions.js';
import Card from './Card';

// Stylesheets
import './CardList.css'

class CardList extends Component {
    componentDidMount() {
        this.props.getCards()
    }

    render() {
        const { cards } = this.props.card;
        
        console.log(cards)
        return (
            <div id="card-list">
                {cards.map((card) => (
                    <Card cardData={card}/>
                ))}
            </div>
        )
    }
}

//getCards: PropTypes.func.isRequired,
CardList.propTypes = {
    getCards: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    card: state.card
});

export default connect(mapStateToProps, { getCards })(CardList);
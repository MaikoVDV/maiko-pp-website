// Libraries
import React, { Component } from 'react';
import { connect } from "react-redux";
// Components & Other scripts
import Card from './Card';

// Stylesheets
import './CardList.css'

class CardList extends Component {
    render() {
        let cards = [];
        cards = this.props.currentGroup.cards;

        return (
            <div id="card-list">
                {cards.map((card) => (
                    <>
                        <Card key={card._id} cardData={card} />
                    </>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    groups: state.group.groups,
    currentGroup: state.group.currentGroup
});

export default connect(mapStateToProps)(CardList);
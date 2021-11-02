import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cardActions';
import { connect } from 'react-redux';

import CardList from '../Cards/CardList';
import '../../App.css';

class GroupContentArea extends Component {
    AddCard = () => {
      const newCard = {
        title: "Frontend card",
        desc: "I added this card with the frontend!"
      }
  
      this.props.addCard(newCard, this.props.currentGroup._id);
    }

    render() {
        return(
            <div id="group-content-area">
                <CardList cards={this.props.cards} />
            </div>
        )
    }
}

GroupContentArea.propTypes = {
    addCard: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    currentGroup: state.group.currentGroup,
    card: state.card
});

export default connect(mapStateToProps, { addCard })(GroupContentArea);
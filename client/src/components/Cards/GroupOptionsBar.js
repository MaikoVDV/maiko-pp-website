// Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components & other scripts
import { addCard } from '../../actions/cardActions';
import { changeOverlayStatus, changeCardModalStatus } from '../../actions/prefActions';
import Button from '../Button/Button';
// Stylesheets
import './GroupOptionsBar.css';

class GroupOptionsBar extends Component {
    AddCard = () => {
      const newCard = {
        title: "Frontend card",
        desc: "I added this card with the frontend!"
      }
  
      this.props.addCard(newCard, this.props.currentGroup._id);
      this.props.changeOverlayStatus(true)
      this.props.changeCardModalStatus(true)
    }

    render() {
        return (
            <div id="group-options-bar">
                <Button buttonType="list-item-h" buttonTrigger={this.AddCard} buttonText="Add card"/>
            </div>
        )
    }
}

GroupOptionsBar.propTypes = {
    addCard: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    currentGroup: state.group.currentGroup,
    card: state.card
});

export default connect(mapStateToProps, { addCard, changeOverlayStatus, changeCardModalStatus })(GroupOptionsBar);
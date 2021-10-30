import react, { Component } from 'react';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cardActions';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import CardList from '../Cards/CardList';

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
            <div style={{display: "flex"}}>
                <CardList cards={this.props.cards} />
                <Button buttonType="confirm" buttonTrigger={this.AddCard} buttonText="Add card"/>
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
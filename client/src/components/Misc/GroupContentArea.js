import react, { Component } from 'react';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cardActions';
import { connect } from 'react-redux';

import Button from '../Button/Button';
import CardList from '../Cards/CardList';

class GroupContentArea extends Component {
    test = () => {
      const newCard = {
        title: "test card"
      }
  
      this.props.addCard(newCard);
    }

    render() {
        return(
            <div style={{display: "flex"}}>
                <CardList cards={this.props.cards} />
                <Button buttonType="confirm" buttonTrigger={this.test} buttonText="Add card"/>
            </div>
        )
    }
}

GroupContentArea.propTypes = {
    addCard: PropTypes.func.isRequired,
    card: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    card: state.card
});

export default connect(mapStateToProps, { addCard })(GroupContentArea);
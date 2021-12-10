import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addCard } from '../../actions/cardActions';
import { connect } from 'react-redux';

import CardList from '../Cards/CardList';
import GroupInfoPanel from '../Modals/Group Modal/GroupInfoPanel';
import LoadingIndicator from './LoadingIndicator/CardLoadingIndicator';
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
        return (
            <div id="group-content-area">
                <LoadingIndicator />
                <div style={{
                    overflowY: "scroll",
                    position: "absolute",
                    bottom: "0px", top: "0px", left: "0px", right: "0px"
                }}><CardList cards={this.props.cards} /></div>
                <div style={{ position: "absolute", top: "0px", bottom: "0px", right: "0px", left: "0px", background: "white" }} ><GroupInfoPanel /> </div>
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
    card: state.card,
    groupInfoStatus: state.runtimeVars.groupInfoModalStatus
});

export default connect(mapStateToProps, { addCard })(GroupContentArea);
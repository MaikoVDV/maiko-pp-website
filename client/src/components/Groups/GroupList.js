// Libraries & frameworks
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components & Other scripts
import Button from '../Button/Button';
import { getGroups, getGroupById } from '../../actions/groupActions.js';
import { getCards } from '../../actions/cardActions.js';
// Stylesheets
import './GroupList.css'


class GroupList extends Component {
    componentDidMount() {
        this.props.getGroups();
    }

    openGroup(group) {
        this.props.getGroupById(group._id)
        this.props.getCards(group._id)
    }

    render() {
        const { groups } = this.props.group;

        return(
            <div className="group-list">
                {groups.map((group) => (
                    <Button key={group._id} buttonType="list-item-v" buttonText={group.name} g={group} buttonTrigger={() => {
                        this.openGroup(group)
                    }} />
                ))}
            </div>
        )
    }
}

GroupList.propTypes = {
    getGroups: PropTypes.func.isRequired,
    group: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    group: state.group,
    getGroupById: state.getGroupById,
    getCards: state.getCards
});

export default connect(mapStateToProps, { getGroups, getGroupById, getCards })(GroupList);
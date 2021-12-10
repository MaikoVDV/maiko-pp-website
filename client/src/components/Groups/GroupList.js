// Libraries & frameworks
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components & Other scripts
import Button from '../Button/Button';
import LoadingIndicator from '../Misc/LoadingIndicator/GroupLoadingIndicator';
import { getGroups, getGroupById } from '../../actions/groupActions.js';
import { getCards } from '../../actions/cardActions.js';
// Stylesheets
import './GroupList.css'


class GroupList extends Component {
    openGroup(group) {
        this.props.getGroupById(group.groupId)
        this.props.getCards(group.groupId)
    }

    render() {
        let groups = [];
        if (this.props.currentUser !== undefined) groups = this.props.groups;

        return (
            <div className="group-list">
                <LoadingIndicator />
                {groups.map((group) => (
                    <Button key={group.groupId} buttonType="list-item-v" buttonText={group.groupName} g={group} buttonTrigger={() => {
                        this.openGroup(group)
                    }} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    groups: state.user.groups,
    currentUser: state.user
});

export default connect(mapStateToProps, { getGroups, getGroupById, getCards })(GroupList);
// Libraries
import { connect } from 'react-redux';
import React, { Component } from 'react';
// Components & other scripts
import Button from '../../Button/Button';
import { changeOverlayStatus, changeJoinGroupModalStatus } from '../../../actions/prefActions';
import { joinGroup } from '../../../actions/userActions';
// Stylesheets
import './GroupModal.css';

class JoinGroupModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupId: ""
        }
        this.idField = React.createRef()
    }

    SendGroup = () => {
        // Creating a group JSON object to send to server
        const newGroupId = this.state.groupId;
        this.idField.current.value = ""
        // Triggering the addGroup action in groupActions.js. Hiding overlay & modal
        this.props.joinGroup(this.props.jwt, newGroupId);
        this.CloseModal();
    }
    UpdateId = e => { this.setState({ groupId: e.target.value }) } // Updating groupName in state upon change in input field

    CloseModal = () => {
        this.props.changeJoinGroupModalStatus(false);
        this.props.changeOverlayStatus(false);
    }

    render() {
        return (
            <div className="group-modal" style={{ visibility: this.props.groupModalStatus === false ? 'hidden' : 'visible' }}>
                <input ref={this.idField} className="modal-title" onChange={this.UpdateId} type="text" placeholder="Enter the group code" />
                <div className="modal-buttons" style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                    <Button buttonType="modal-button" buttonText="Cancel" buttonTrigger={this.CloseModal} />
                    <Button buttonType="modal-button" buttonText="Join group" buttonTrigger={this.SendGroup} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    overlayStatus: state.runtimeVars.overlayStatus,
    groupModalStatus: state.runtimeVars.joinGroupModalStatus,
    currentGroup: state.group.currentGroup,
    jwt: state.user.currentJwt
});

export default connect(mapStateToProps, { joinGroup, changeOverlayStatus, changeJoinGroupModalStatus })(JoinGroupModal);
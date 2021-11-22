// Libraries
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components & other scripts
import Button from '../../Button/Button';
import { changeOverlayStatus, changeCreateGroupModalStatus } from '../../../actions/prefActions';
import { addGroup } from '../../../actions/groupActions';
// Stylesheets
import './GroupModal.css';

class CreateGroupModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: "",
            groupDesc: ""
        }
        this.groupTitleInput = React.createRef();
        this.groupDescInput = React.createRef();
    }

    SendGroup = () => {
        // Creating a group JSON object to send to server
        const newGroup = {
          name: this.state.groupName,
          desc: this.state.groupDesc
        }
        
        this.groupTitleInput.current.value = ""
        this.groupDescInput.current.value = ""
        
        // Triggering the addGroup action in groupActions.js. Hiding overlay & modal
        this.props.addGroup(this.props.currentJwt, newGroup);
        this.props.changeOverlayStatus(false)
        this.props.changeCreateGroupModalStatus(false)
      }
    UpdateName = e => { this.setState({groupName: e.target.value}) } // Updating groupName in state upon change in input field
    UpdateDesc = e => { this.setState({groupDesc: e.target.value}) } // Updating groupDesc in state upon change in input field

    render() {
        return(
            <div className="group-modal" style={{ visibility: this.props.groupModalStatus === false? 'hidden': 'visible'}}>
                <input ref={this.groupTitleInput} className="modal-title" onChange={this.UpdateName} type="text" placeholder="Name your group" />
                <input ref={this.groupDescInput} className="modal-content" onChange={this.UpdateDesc} type="text" placeholder="Describe your group"/>
                <div className="modal-buttons" style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                    <Button buttonType="modal-button" buttonText="Create group" buttonTrigger={this.SendGroup}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    overlayStatus: state.runtimeVars.overlayStatus,
    groupModalStatus: state.runtimeVars.createGroupModalStatus,
    currentGroup: state.group.currentGroup,
    currentJwt: state.user.currentJwt
});

export default connect(mapStateToProps, { addGroup, changeOverlayStatus, changeCreateGroupModalStatus })(CreateGroupModal);
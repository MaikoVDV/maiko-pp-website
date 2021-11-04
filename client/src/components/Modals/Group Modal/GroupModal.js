// Libraries
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components & other scripts
import Button from '../../Button/Button';
import { changeOverlayStatus, changeGroupModalStatus } from '../../../actions/prefActions';
import { addGroup } from '../../../actions/groupActions';
// Stylesheets
import './GroupModal.css';

class GroupModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: "",
            groupDesc: ""
        }
    }

    SendGroup = () => {
        // Creating a group JSON object to send to server
        const newGroup = {
          name: this.state.groupName,
          desc: this.state.groupDesc
        }
        
        // Triggering the addGroup action in groupActions.js. Hiding overlay & modal
        this.props.addGroup(newGroup);
        this.props.changeOverlayStatus(false)
        this.props.changeGroupModalStatus(false)
      }
    UpdateName = e => { this.setState({groupName: e.target.value}) } // Updating groupName in state upon change in input field
    UpdateDesc = e => { this.setState({groupDesc: e.target.value}) } // Updating groupDesc in state upon change in input field

    render() {
        return(
            <div className="group-modal" style={{ visibility: this.props.groupModalStatus === false? 'hidden': 'visible'}}>
                <input className="modal-title" onChange={this.UpdateName} type="text" placeholder="Name your group" />
                <input className="modal-content" onChange={this.UpdateDesc} type="text" placeholder="Describe your group"/>
                <div className="modal-buttons" style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                    <Button buttonType="modal-button" buttonText="Create group" buttonTrigger={this.SendGroup}/>
                </div>
            </div>
        )
    }
}

GroupModal.propTypes = {
    overlayStatus: PropTypes.bool.isRequired,
    groupModalStatus: PropTypes.bool.isRequired,
    changeOverlayStatus: PropTypes.func.isRequired,
    changeGroupModalStatus: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    overlayStatus: state.prefs.overlayStatus,
    groupModalStatus: state.prefs.groupModalStatus,
    currentGroup: state.group.currentGroup
});

export default connect(mapStateToProps, { addGroup, changeOverlayStatus, changeGroupModalStatus })(GroupModal);
// Libraries
import { connect } from 'react-redux';
import React, { Component } from 'react';
// Components & other scripts
import Button from '../../Button/Button';
import { changeGroupInfoModalStatus } from '../../../actions/prefActions';
import { leaveGroup } from '../../../actions/userActions';
// Stylesheets
import './GroupModal.css';
import './GroupInfoPanel.css';

class GroupInfoPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: "",
            groupDesc: ""
        }
        this.groupTitleInput = React.createRef();
        this.groupDescInput = React.createRef();
    }
    ClosePanel = e => { this.props.changeGroupInfoModalStatus(false); }
    LeaveGroup = e => {
        this.props.leaveGroup(this.props.currentJwt, this.props.currentGroup._id);
        this.ClosePanel();
    }
    
    render() {
        const d = new Date(this.props.currentGroup.date)
        const gDateFormatted = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
        if(this.props.currentGroup.name === "") {
            return (
                <div id="group-info-panel" className="group-modal" style={{ visibility: this.props.groupModalStatus === false? 'hidden': 'visible'}}>
                    <p className="modal-title" style={{fontWeight: "bold"}}>Open a group to view info about it here!</p>
                    <div className="modal-buttons" style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                        <Button buttonType="modal-button" buttonText="Close" buttonTrigger={this.ClosePanel}/>
                    </div>
                </div>
            )
        }
        return(
            <div id="group-info-panel" className="group-modal" style={{ visibility: this.props.groupModalStatus === false? 'hidden': 'visible'}}>
                <p className="modal-title" style={{fontWeight: "bold"}}>{this.props.currentGroup.name}</p>
                <p className="modal-content">{this.props.currentGroup.desc}</p>
                <p className="modal-content">Join code: {this.props.currentGroup._id}</p>
                <p className="modal-content">Creation date: {gDateFormatted}</p>
                <div id="participant-list">
                    <p className="modal-title">Participants</p>
                    {this.props.currentGroup.users.map(user => (
                        <div key={user.userId} className="listed-user">
                            <img className="pfp" src={user.pfp} />
                            <p className="modal-content">{user.userName}</p>
                            <p className="modal-content">User rank</p>
                        </div>
                    ))}
                </div>
                <div className="modal-buttons" style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                    <Button buttonType="modal-button" buttonText="Close" buttonTrigger={this.ClosePanel}/>
                    <Button buttonType="modal-button" buttonText="Leave group" buttonTrigger={this.LeaveGroup}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    groupModalStatus: state.runtimeVars.groupInfoModalStatus,
    currentGroup: state.group.currentGroup,
    currentJwt: state.user.currentJwt,
    groupDate: new Date(state.group.currentGroup.date)
});

export default connect(mapStateToProps, { changeGroupInfoModalStatus, leaveGroup })(GroupInfoPanel);
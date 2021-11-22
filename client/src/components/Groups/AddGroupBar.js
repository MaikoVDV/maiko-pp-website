// Libraries
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components & other scripts
import { changeOverlayStatus, changeCreateGroupModalStatus, changeJoinGroupModalStatus } from '../../actions/prefActions';
import Button from '../Button/Button';
// Stylesheets
import './AddGroupBar.css';

class GroupOptionsBar extends Component {
    CreateGroup = () => {
      this.props.changeOverlayStatus(true)
      this.props.changeCreateGroupModalStatus(true)
    }
    JoinGroup = () => {
        this.props.changeOverlayStatus(true)
        this.props.changeJoinGroupModalStatus(true)
      }

    render() {
        return (
            <div id="group-options-bar">
                <Button uniqueStyle={{marginRight: "auto", marginLeft: "auto", flex: "0 1 45%"}} buttonType="list-item-h" buttonTrigger={this.CreateGroup} buttonText="Create group"/>
                <Button uniqueStyle={{marginLeft: "auto", marginRight: "auto", flex: "0 1 45%"}} buttonType="list-item-h" buttonTrigger={this.JoinGroup} buttonText="Join group"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { changeOverlayStatus, changeCreateGroupModalStatus, changeJoinGroupModalStatus })(GroupOptionsBar);
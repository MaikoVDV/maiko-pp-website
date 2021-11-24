// Libraries
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components & other scripts
import { changeOverlayStatus, changeCardModalStatus, changeGroupInfoModalStatus } from '../../actions/prefActions';
import Button from '../Button/Button';
// Stylesheets
import './GroupOptionsBar.css';

class GroupOptionsBar extends Component {
    AddCard = () => {
        this.props.changeOverlayStatus(true)
        this.props.changeCardModalStatus(true)
    }
    OpenInfo = () => {
        this.props.changeOverlayStatus(true)
        this.props.changeGroupInfoModalStatus(true)
    }

    render() {
        return (
            <div style={{display: "block", position: "relative"}} id="group-options-bar">
                <Button uniqueStyle={{position: "absolute", transform: "translateY(-50%)", top: "50%"}} buttonType="list-item-h" buttonTrigger={this.AddCard} buttonText="Add card"/>
                <Button uniqueStyle={{right: "0px", position: "absolute", transform: "translateY(-50%)", top: "50%"}} buttonType="list-item-h" buttonTrigger={this.OpenInfo} buttonText="Group Info"/>
            </div>
        )
    }
}

GroupOptionsBar.propTypes = {
    
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { changeOverlayStatus, changeCardModalStatus, changeGroupInfoModalStatus })(GroupOptionsBar);
// Libraries
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components & other scripts
import { changeOverlayStatus, changeCardModalStatus } from '../../actions/prefActions';
import Button from '../Button/Button';
// Stylesheets
import './GroupOptionsBar.css';

class GroupOptionsBar extends Component {
    AddCard = () => {
      this.props.changeOverlayStatus(true)
      this.props.changeCardModalStatus(true)
    }

    render() {
        return (
            <div id="group-options-bar">
                <Button buttonType="list-item-h" buttonTrigger={this.AddCard} buttonText="Add card"/>
            </div>
        )
    }
}

GroupOptionsBar.propTypes = {
    
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { changeOverlayStatus, changeCardModalStatus })(GroupOptionsBar);
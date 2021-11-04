// Libraries
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components & other scripts
import { changeOverlayStatus, changeGroupModalStatus } from '../../actions/prefActions';
import Button from '../Button/Button';
// Stylesheets
import './AddGroupBar.css';

class GroupOptionsBar extends Component {
    AddGroup = () => {
      this.props.changeOverlayStatus(true)
      this.props.changeGroupModalStatus(true)
    }

    render() {
        return (
            <div id="group-options-bar">
                <Button buttonType="list-item-h" buttonTrigger={this.AddGroup} buttonText="Add group"/>
            </div>
        )
    }
}

GroupOptionsBar.propTypes = {
    
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { changeOverlayStatus, changeGroupModalStatus })(GroupOptionsBar);
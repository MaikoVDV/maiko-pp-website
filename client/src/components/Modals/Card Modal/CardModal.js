// Libraries
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components & other scripts
import Button from '../../Button/Button';
import { changeOverlayStatus } from '../../../actions/prefActions';
// Stylesheets
import './CardModal.css';

class CardModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: "",
            cardDesc: ""
        }
    }
    SendCard = () => {
        console.log(this.state);
    }
    UpdateOverlay = () => {
        this.props.changeOverlayStatus(false);
    }
    UpdateTitle = e => { this.setState({cardTitle: e.target.value}) }
    UpdateDesc = e => { this.setState({cardDesc: e.target.value}) }

    render() {
        return(
            <div className="card-modal">
                <input className="modal-title" onChange={this.UpdateTitle} type="text" placeholder="Add a title" />
                <input className="modal-content" onChange={this.UpdateDesc} type="text" placeholder="Add some details"/>
                <div className="modal-buttons" style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                    <Button buttonType="modal-button" buttonText="Add card" buttonTrigger={this.SendCard}/>
                    <Button buttonType="modal-button" buttonText="Overlay" buttonTrigger={this.UpdateOverlay}/>
                </div>
            </div>
        )
    }
}

CardModal.propTypes = {
    overlayStatus: PropTypes.object.isRequired,
    changeOverlayStatus: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    overlayStatus: state.prefs.overlayStatus
});

export default connect(mapStateToProps, { changeOverlayStatus })(CardModal);
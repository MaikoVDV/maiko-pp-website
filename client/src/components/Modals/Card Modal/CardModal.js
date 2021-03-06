// Libraries
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Components & other scripts
import Button from '../../Button/Button';
import { changeOverlayStatus, changeCardModalStatus } from '../../../actions/prefActions';
import { addCard } from '../../../actions/cardActions';
// Stylesheets
import './CardModal.css';

class CardModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: "",
            cardDesc: ""
        }
        this.titleField = React.createRef()
        this.descField = React.createRef()
    }
    CloseModal = () => {
        this.props.changeCardModalStatus(false);
        this.props.changeOverlayStatus(false);
    }

    SendCard = () => {
        const newCard = {
            title: this.state.cardTitle,
            desc: this.state.cardDesc
        }

        this.titleField.current.value = ""
        this.descField.current.value = ""

        this.props.addCard(newCard, this.props.currentGroup._id);
        this.CloseModal();
    }
    UpdateTitle = e => { this.setState({ cardTitle: e.target.value }) }
    UpdateDesc = e => { this.setState({ cardDesc: e.target.value }) }

    render() {
        return (
            <div className="card-modal" style={{ visibility: this.props.cardModalStatus === false ? 'hidden' : 'visible' }}>
                <input ref={this.titleField} className="modal-title" onChange={this.UpdateTitle} type="text" placeholder="Add a title" />
                <input ref={this.descField} className="modal-content" onChange={this.UpdateDesc} type="text" placeholder="Add some details" />
                <div className="modal-buttons" style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                    <Button buttonType="modal-button" buttonText="Cancel" buttonTrigger={this.CloseModal} />
                    <Button buttonType="modal-button" buttonText="Add card" buttonTrigger={this.SendCard} />
                </div>
            </div>
        )
    }
}

CardModal.propTypes = {
    overlayStatus: PropTypes.bool.isRequired,
    cardModalStatus: PropTypes.bool.isRequired,
    changeOverlayStatus: PropTypes.func.isRequired,
    changeCardModalStatus: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    overlayStatus: state.runtimeVars.overlayStatus,
    cardModalStatus: state.runtimeVars.cardModalStatus,
    currentGroup: state.group.currentGroup
});

export default connect(mapStateToProps, { addCard, changeOverlayStatus, changeCardModalStatus })(CardModal);
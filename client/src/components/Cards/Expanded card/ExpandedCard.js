// Libraries
import { connect } from 'react-redux';
import React, { Component } from 'react';
// Components & other scripts
import Button from '../../Button/Button';
import { changeOverlayStatus, changeExpandedCardModalStatus } from '../../../actions/prefActions';
import { deleteCard } from '../../../actions/cardActions';
// Stylesheets
import './ExpandedCard.css';

class CardModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardTitle: "",
            cardDesc: ""
        }
        this.button = React.createRef()
        this.modalContentContainer = React.createRef()
    }
    CloseModal = () => {
        this.props.changeExpandedCardModalStatus(false);
        this.props.changeOverlayStatus(false);
    }
    RemoveCard = () => {
        this.props.deleteCard(this.props.currentCard._id, this.props.currentGroup._id)
        this.props.changeExpandedCardModalStatus(false);
        this.props.changeOverlayStatus(false);
    }

    render() {
        return(
            <div className="card-modal" style={{ 
                visibility: this.props.modalStatus === false? 'hidden': 'visible', 
                height: `${this.modalContentContainer?.current?.clientHeight + this.button?.current?.clientHeight}px`}}>
                <div ref={this.modalContentContainer}>
                    <p className="modal-title">{this.props.currentCard?.title}</p>
                    <p className="modal-content">{this.props.currentCard?.desc}</p>
                </div>
                <div className="modal-buttons" style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
                    <Button ref={this.button} buttonType="" buttonText="Close" buttonTrigger={this.CloseModal}/>
                    <Button ref={this.button} buttonType="danger" buttonText="Remove card" buttonTrigger={this.RemoveCard}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    overlayStatus: state.runtimeVars.overlayStatus,
    modalStatus: state.runtimeVars.expandedCardModalStatus,
    currentCard: state.runtimeVars.currentCard,
    currentGroup: state.group.currentGroup
});

export default connect(mapStateToProps, { changeOverlayStatus, changeExpandedCardModalStatus, deleteCard })(CardModal);
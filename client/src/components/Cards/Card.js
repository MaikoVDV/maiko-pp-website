// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux'
// Components & other scripts
import { changeExpandedCardModalStatus, changeOverlayStatus } from '../../actions/prefActions';
// Stylesheets
import './Card.css';

class Card extends Component {
    openCard = () => {
        this.props.changeExpandedCardModalStatus(true, this.props.cardData)
        this.props.changeOverlayStatus(true)
    }

    render() {
        return (
            <div className="card" onClick={this.openCard}>
                <p className="card-title">{this.props.cardData.title}</p>
                <p className="card-desc">{this.props.cardData.desc}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentGroup: state.group.currentGroup
});

export default connect(mapStateToProps, { changeExpandedCardModalStatus, changeOverlayStatus })(Card);
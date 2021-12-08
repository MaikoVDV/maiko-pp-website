import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LoadingIndicator.css'

import loadingGif from './Loading.gif'

class LoadingIndicator extends Component {
    render() {
        return (
            <img className="loading-indicator" style={{ visibility: this.props.loadingCards === false ? 'hidden' : 'visible' }} src={loadingGif} />
        )
    }
}
const mapStateToProps = (state) => ({
    loadingCards: state.card.loading
})
export default connect(mapStateToProps)(LoadingIndicator)
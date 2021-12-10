import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LoadingIndicator.css'

import loadingGif from './Loading.gif'

class LoadingIndicator extends Component {
    render() {
        return (
            <img className="loading-indicator" style={{ visibility: this.props.loading === false ? 'hidden' : 'visible' }} src={loadingGif} />
        )
    }
}
const mapStateToProps = (state) => ({
    loading: state.group.loading
})
export default connect(mapStateToProps)(LoadingIndicator)
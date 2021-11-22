import { connect } from 'react-redux';
import React, { Component } from 'react';

import './Overlay.css';

class Overlay extends Component {
    render() {
        return (
            <div id="overlay" style={{ background: this.props.overlayStatus === true? '#000000cc': 'transparent'}} />
        )
    }
}

const mapStateToProps = (state) => ({
    overlayStatus: state.runtimeVars.overlayStatus
})
export default connect(mapStateToProps)(Overlay);
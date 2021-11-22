import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store'

import { joinGroup } from '../actions/userActions.js';

class TestComp extends Component {
    testFunction(that) {
        //console.log(store.getState().users.currentJwt)
        this.props.joinGroup(store.getState().user.currentJwt, "617d2eb15da2a883fceb81e8");
    }

    render() {
        return(
            <button style={{zIndex: 1000, position: 'absolute', right: 10, bottom: 10}} onClick={this.testFunction.bind(this)}>test</button>
        )
    }
}

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps, { joinGroup })(TestComp);
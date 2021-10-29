import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getGroups, getGroupList } from '../actions/groupActions.js';

class TestComp extends Component {
    componentDidMount() {
        this.props.getGroupList()
    }
    testFunction(that) {
        console.log(this.props.group);
    }

    render() {
        return(
            <button style={{zIndex: 1000, position: 'absolute', right: 10, bottom: 10}} onClick={this.testFunction.bind(this)}>test</button>
        )
    }
}

TestComp.propTypes = {
    getGroups: PropTypes.func.isRequired,
    getGroupList: PropTypes.func.isRequired,
    group: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
    group: state.group
});

export default connect(mapStateToProps, { getGroups, getGroupList })(TestComp);
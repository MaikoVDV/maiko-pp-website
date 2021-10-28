// Libraries & frameworks
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components & Other scripts
import { getGroups } from '../../actions/groupActions.js';
import store from '../../store'


class GroupList extends Component {
    componentDidMount() {
        this.props.getGroups()
    }

    render() {
        const { groups } = this.props.group;
        

        return(
            <div className="group-list">
                {groups.map((group) => (
                    <div>{group.name}</div>
                ))}
            </div>
        )
    }
}

GroupList.propTypes = {
    getGroups: PropTypes.func.isRequired,
    group: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    group: state.group
});

export default connect(mapStateToProps, { getGroups })(GroupList);
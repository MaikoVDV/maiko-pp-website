import axios from 'axios'
import { GET_GROUPS, GET_GROUPLIST, GET_GROUP_BY_ID, ADD_GROUP, DELETE_GROUP, GROUPS_LOADING } from "./types.js";
import { getCards } from './cardActions';

export const getGroups = (callback) => dispatch => {
    dispatch(setGroupsLoading());
    axios
        .get('/api/groups')
        .then(res => {
            dispatch({
                type: GET_GROUPS,
                payload: res.data
            })
            if(callback !== undefined) callback()
        })
        
}
export const getGroupById = id => dispatch => {
    axios
        .post('/api/getGroupById', { id: id } )
        .then(res => {
            dispatch({
                type: GET_GROUP_BY_ID,
                payload: res.data
            })
        }
        )
}
export const getGroupList = () => dispatch => {
    dispatch(setGroupsLoading());
    axios
        .get('/api/groupListItems')
        .then(res => 
            dispatch({
                type: GET_GROUPLIST,
                payload: res.data
            })
        )
}
export const addGroup = group => dispatch => {
    axios
        .post('/api/groups', group)
        .then(res => 
            dispatch({
                type: ADD_GROUP,
                payload: res.data
            })
        )
}
export const deleteGroup = id => dispatch => {
    axios
        .delete(`/api/groups/${id}`)
        .then(res => dispatch({
            type: DELETE_GROUP,
            payload: id
        }))
}
export const setGroupsLoading = () => {
    return {
        type: GROUPS_LOADING
    }
}
/*export const changeCurrentGroup = id => {
    return {
        type: CHANGE_CURRENT_GROUP,
        payload: id
    }
}*/
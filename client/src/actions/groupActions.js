import axios from 'axios'
import { GET_GROUPS, ADD_GROUP, DELETE_GROUP, GROUPS_LOADING } from "./types.js";

export const getGroups = () => dispatch => {
    /*return {
        type: GET_GROUPS
    }*/
    dispatch(setGroupsLoading());
    axios
        .get('/api/groups')
        .then(res => 
            dispatch({
                type: GET_GROUPS,
                payload: res.data
            })
        )
}
export const test = () => {
    return {
        type: GET_GROUPS
    }
}
/*
export const addCard = card => dispatch => {
    axios
        .post('/api/cards', card)
        .then(res => 
            dispatch({
                type: ADD_CARD,
                payload: res.data
            })
            )
}
export const deleteCard = id => dispatch => {
    axios
        .delete(`/api/cards/${id}`)
        .then(res => dispatch({
            type: DELETE_CARD,
            payload: id
        }))
}*/
export const setGroupsLoading = () => {
    return {
        type: GROUPS_LOADING
    }
}
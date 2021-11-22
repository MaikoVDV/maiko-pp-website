import axios from 'axios';
import { ADD_JWT, LOGIN_USER, JOIN_GROUP, LEAVE_GROUP } from "./types";

export const addJwt = jwtToken => dispatch => {
    dispatch({
        type: ADD_JWT,
        payload: jwtToken
    })
}
export const loginUser = jwtToken => dispatch => {
    axios
        .post('/api/users/login', {jwt: jwtToken})
        .then(res => {
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            })
        }
        ).catch(err => {
            console.log("An error occured whilst attempting to register a new user:\n\n" + err)
        })
}
export const joinGroup = (jwtToken, groupId) => dispatch => {
    axios
        .post('/api/users/joinGroup', {jwt: jwtToken, groupId: groupId})
        .then(res => {
            dispatch({
                type: JOIN_GROUP,
                payload: res.data
            })
        })
        .catch(err => {
            console.error("An error occured whilst attempting to join a group:\n\n" + err + "\n\n" + err.response.statusText)
        })
}
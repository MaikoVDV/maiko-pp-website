import axios from 'axios';
import { ADD_JWT, LOGIN_USER, JOIN_GROUP, LEAVE_GROUP, GROUPS_LOADING } from "./types";
import { getGroupById } from "./groupActions";
import { getCards } from "./cardActions";

export const addJwt = jwtToken => dispatch => {
    dispatch({
        type: ADD_JWT,
        payload: jwtToken
    })
}
export const loginUser = jwtToken => dispatch => {
    axios.defaults.baseURL = "https://maiko-pp-website.herokuapp.com"
    //console.log(axios.defaults.withCredentials);
    axios.defaults.withCredentials = false;
    dispatch({
        type: GROUPS_LOADING,
        payload: true
    })

    axios
        .post('/api/users/login', { jwt: jwtToken }, { withCredentials: false }, { headers: { "Mode": "cors", "credentials": "omit", "Credentials": "omit" } })
        .then(res => {
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            })
            dispatch({
                type: GROUPS_LOADING,
                payload: false
            })
        }
        ).catch(err => {
            console.log("An error occured whilst attempting to register a new user:\n\n" + err)
        })
}
export const joinGroup = (jwtToken, groupId) => dispatch => {
    axios
        .post('/api/users/joinGroup', { jwt: jwtToken, groupId: groupId })
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
export const leaveGroup = (jwtToken, groupId) => dispatch => {
    axios
        .post('/api/users/leaveGroup', { jwt: jwtToken, groupId: groupId })
        .then(res => {
            dispatch({
                type: LEAVE_GROUP,
                payload: res.data
            })
            //console.log(res.data)
            dispatch(getGroupById(res.data[0].groupId))
            dispatch(getCards(res.data[0].groupId))
        })
        .catch(err => {
            if (err.response == undefined) err.response = ""
            console.error("An error occured whilst attempting to leave a group:\n\n" + err + "\n\n" + err.response.statusText)
        })
}
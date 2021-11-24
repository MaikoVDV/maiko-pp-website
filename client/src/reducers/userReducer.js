import { ADD_JWT, LOGIN_USER, JOIN_GROUP, LEAVE_GROUP } from "../actions/types.js";

const initState = {
    name: "",
    pfp: "",
    groups: [],
    date: Date.now,
    currentJwt: ""
};

export default function(state = initState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                name: action.payload.userName,
                pfp: action.payload.pfp,
                groups: action.payload.groups
            }
        case ADD_JWT:
            return {
                ...state,
                currentJwt: action.payload
            }
        case JOIN_GROUP:
            return {
                ...state,
                groups: action.payload
            }
        case LEAVE_GROUP:
            return {
                ...state,
                groups: action.payload
            }
        default:
            return state;
    }
}
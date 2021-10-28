import { GET_GROUPS } from "../actions/types.js";

const initState = {
    groups: [],
    loading: false
};

export default function(state = initState, action) {
    switch(action.type) {
        case GET_GROUPS:
            return {
                ...state,
                groups: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
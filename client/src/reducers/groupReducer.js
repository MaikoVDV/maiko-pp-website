import { 
    GET_GROUPS, 
    GET_GROUP_BY_ID, 
    GET_GROUPLIST, 
    ADD_GROUP, 
    DELETE_GROUP, 
    GROUPS_LOADING
} from "../actions/types.js";

const initState = {
    currentGroup: {
        name: "",
        desc: "",
        date: Date.now,
        users: [],
        cards: []
    },
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
            
        case GET_GROUP_BY_ID:
            return {
                ...state,
                currentGroup: action.payload,
                loading: false
            }
        case GET_GROUPLIST:
            return {
                ...state,
                groupList: action.payload,
                loading: false
            }
        case ADD_GROUP:
            return {
                ...state,
                groups: [action.payload, ...state.groups]
            }
        case DELETE_GROUP:
            return {
                ...state,
                groups: state.groups.filter(group => group._id !== action.payload)
            }
        case GROUPS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
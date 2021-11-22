import { CHANGE_OVERLAY_STATUS, CHANGE_CARDMODAL_STATUS, CHANGE_CREATE_GROUPMODAL_STATUS, CHANGE_JOIN_GROUPMODAL_STATUS } from "../actions/types.js";

const initState = {
    overlayStatus: false,
    cardModalStatus: false,
    joinGroupModalStatus: false,
    createGroupModalStatus: false
};

export default function(state = initState, action) {
    switch(action.type) {
        case CHANGE_OVERLAY_STATUS:
            return {
                ...state,
                overlayStatus: action.payload
            }
        case CHANGE_CARDMODAL_STATUS:
            return {
                ...state,
                cardModalStatus: action.payload
            }
        case CHANGE_CREATE_GROUPMODAL_STATUS:
            return {
                ...state,
                createGroupModalStatus: action.payload
            }
        case CHANGE_JOIN_GROUPMODAL_STATUS:
            return {
                ...state,
                joinGroupModalStatus: action.payload
            }
        default:
            return state;
    }
}
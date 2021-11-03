import { CHANGE_OVERLAY_STATUS, CHANGE_CARDMODAL_STATUS } from "../actions/types.js";

const initState = {
    overlayStatus: false,
    cardModalStatus: false
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
        default:
            return state;
    }
}
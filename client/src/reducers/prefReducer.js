import { CHANGE_OVERLAY_STATUS } from "../actions/types.js";

const initState = {
    overlayStatus: false
};

export default function(state = initState, action) {
    switch(action.type) {
        case CHANGE_OVERLAY_STATUS:
            return {
                ...state,
                overlayStatus: action.payload
            }
        default:
            return state;
    }
}
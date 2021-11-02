import { CHANGE_OVERLAY_STATUS } from "./types";

export const changeOverlayStatus = (newState) => {
    return {
        type: CHANGE_OVERLAY_STATUS,
        payload: newState
    }
}
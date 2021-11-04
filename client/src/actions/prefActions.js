import { CHANGE_OVERLAY_STATUS, CHANGE_CARDMODAL_STATUS, CHANGE_GROUPMODAL_STATUS } from "./types";

export const changeOverlayStatus = (newState) => {
    return {
        type: CHANGE_OVERLAY_STATUS,
        payload: newState
    }
}
export const changeCardModalStatus = (newState) => {
    return {
        type: CHANGE_CARDMODAL_STATUS,
        payload: newState
    }
}
export const changeGroupModalStatus = (newState) => {
    return {
        type: CHANGE_GROUPMODAL_STATUS,
        payload: newState
    }
}
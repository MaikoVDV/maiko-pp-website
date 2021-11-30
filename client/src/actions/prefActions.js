import { 
    CHANGE_OVERLAY_STATUS,
    CHANGE_CARDMODAL_STATUS,
    CHANGE_CREATE_GROUPMODAL_STATUS,
    CHANGE_JOIN_GROUPMODAL_STATUS,
    CHANGE_GROUPINFO_MODAL_STATUS,
    CHANGE_EXPANDED_CARDMODAL_STATUS
} from "./types";

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
export const changeCreateGroupModalStatus = (newState) => {
    return {
        type: CHANGE_CREATE_GROUPMODAL_STATUS,
        payload: newState
    }
}
export const changeJoinGroupModalStatus = (newState) => {
    return {
        type: CHANGE_JOIN_GROUPMODAL_STATUS,
        payload: newState
    }
}
export const changeGroupInfoModalStatus = (newState) => {
    return {
        type: CHANGE_GROUPINFO_MODAL_STATUS,
        payload: newState
    }
}
export const changeExpandedCardModalStatus = (newState, cardData) => {
    return {
        type: CHANGE_EXPANDED_CARDMODAL_STATUS,
        changedState: newState,
        data: cardData
    }
}
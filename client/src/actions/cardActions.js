import axios from 'axios'
import { GET_CARDS, ADD_CARD, DELETE_CARD, CARDS_LOADING, CHANGE_CURRENT_GROUP } from "./types.js";

export const getCards = groupId => dispatch => {
    axios
        .get('/api/cards', { params: { groupId: groupId } })
        .then(res => 
            dispatch({
                type: GET_CARDS,
                payload: res.data
            })
        )
}

export const addCard = (card, groupId) => dispatch => {
    axios
        .post('/api/cards', { title: card.title, desc: card.desc, groupId: groupId })
        .then(res => 
            dispatch({
                type: ADD_CARD,
                payload: res.data
            })
            )
}
export const deleteCard = (cardId, groupId) => dispatch => {
    const data = {
        cardId: cardId,
        groupId: groupId
    }
    dispatch({
        type: DELETE_CARD,
        payload: cardId
    })
    axios
        .delete(`/api/cards`, { data })
}
export const setCardsLoading = () => {
    return {
        type: CARDS_LOADING
    }
}
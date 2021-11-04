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
        ).catch(err => {
            console.log("An error occured whilst attempting to get the cards in a group. Here's the error mesage:\n\n" + err)
        })
}

export const addCard = (card, groupId) => dispatch => {
    axios
        .post('/api/cards', { title: card.title, desc: card.desc, groupId: groupId })
        .then(res => 
            dispatch({
                type: ADD_CARD,
                payload: res.data
            })
            ).catch(err => {
                console.log("An error has occured whilst attempting to add a card. Here's the error mesage:\n\n" + err)
            })
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
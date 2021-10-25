import axios from 'axios'
import { GET_CARDS, ADD_CARD, DELETE_CARD, CARDS_LOADING } from "./types.js";

export const getCards = () => {
    return {
        type: GET_CARDS
    }
    /*dispatch(setCardsLoading());
    axios
        .get('/api/cards')
        .then(res => 
            dispatch({
                type: GET_CARDS,
                payload: res.data
            })
        )*/
}
export const addCard = card => dispatch => {
    return {
        type: ADD_CARD
    }
    /*axios
        .post('/api/cards', card)
        .then(res => 
            dispatch({
                type: ADD_CARD,
                payload: res.data
            })
            )*/
}
export const deleteCard = id => dispatch => {
    return {
        type: DELETE_CARD
    }
    /*axios
        .delete(`/api/cards/${id}`)
        .then(res => dispatch({
            type: DELETE_CARD,
            payload: id
        }))*/
}
export const setCardsLoading = () => {
    return {
        type: CARDS_LOADING
    }
}
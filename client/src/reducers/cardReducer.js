import { GET_CARDS, ADD_CARD, DELETE_CARD, CARDS_LOADING } from "../actions/types.js";

const initState = {
    cards: [],
    loading: false
};

export default function(state = initState, action) {
    switch(action.type) {
        case GET_CARDS:
            return {
                ...state,
                cards: action.payload,
                loading: false
            }
        case ADD_CARD:
            return {
                ...state,
                cards: [action.payload, ...state.cards]
            }
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => card._id !== action.payload)
            }
        case CARDS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
import { GET_CARDS, ADD_CARD, DELETE_CARD, CARDS_LOADING } from "../actions/types.js";

const initState = {
    cards: [
        {
            _id: "dummy card. not from the db",
            title: "Important notice!",
            desc: "If you've just opened the website for the 1st time, it might take a minute to load your data. The server goes to sleep if no one is connected, and it takes 10-15s to start back up."
        },
        {
            _id: "dummy card, not from the db",
            title: "Click me!",
            desc: "Welcome to my Personal Project website! To begin, login with your Google account using the button in the top-right corner.\nNext, you can join some groups. Use the button in the top-left to enter a group ID.\nHere are some groups I made so you can check out my website as easily as possible: \n617d8c6f1b0c1a50f95c006a\n61afaccaa6c37312d3a2df74"
        }],
    loading: false
};

export default function (state = initState, action) {
    switch (action.type) {
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
import { GET_CARDS, ADD_CARD, DELETE_CARD, CARDS_LOADING } from "../actions/types.js";

const initState = {
    cards: [
        {
            title: "What's the homework for Friday?",
            desc: "I was abscent yesterday. What problems should we solve for Friday?",
            date: "10-6-21",
            cardAuthor: "14938679572",
            isPinned: false,
            attachments: [
                {
                    fileName: "cool example file",
                    downloadLink: "https://www.example.com"
                }
            ],
            comments: [
                {
                    commentAuthor: "2073687247436",
                    commentText: "We have to do problems 5-13 on p.59",
                    replies: [
                        {
                            replyAuthor: "320974702975",
                            replyText: "I thought we only had to do 5-10?"
                        }
                    ]
                }
            ]
        }
    ],
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
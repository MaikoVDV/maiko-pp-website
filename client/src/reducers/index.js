import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import groupReducer from "./groupReducer";

export default combineReducers({
    card: cardReducer,
    group: groupReducer
});
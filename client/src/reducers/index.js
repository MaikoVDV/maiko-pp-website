import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import groupReducer from "./groupReducer";
import prefReducer from "./prefReducer";

export default combineReducers({
    card: cardReducer,
    group: groupReducer,
    prefs: prefReducer
});
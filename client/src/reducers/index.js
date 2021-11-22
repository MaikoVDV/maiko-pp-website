import { combineReducers } from "redux";
import cardReducer from "./cardReducer";
import groupReducer from "./groupReducer";
import userReducer from "./userReducer";
import prefReducer from "./prefReducer";

export default combineReducers({
    card: cardReducer,
    group: groupReducer,
    runtimeVars: prefReducer,
    user: userReducer
});
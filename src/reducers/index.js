import { combineReducers } from "redux";
import todoReducer from "./todoReducers";

export default combineReducers({
    todo: todoReducer
})
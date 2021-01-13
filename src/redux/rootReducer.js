import { combineReducers } from "redux";
import { appReducer } from "./appreducer";
import { postsReducer } from './postsReducer'

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
});
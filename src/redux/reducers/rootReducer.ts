import { combineReducers } from "redux";
import { seenArticlesReducer } from "./seenArticlesReducer";


export const rootReducer = combineReducers({
    seenArticles: seenArticlesReducer
});

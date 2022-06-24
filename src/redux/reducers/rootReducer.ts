import { combineReducers } from "redux";
import { lastSeenSpotifyReducer } from "./lastSeenSpotifyReducer";
import { seenArticlesReducer } from "./seenArticlesReducer";


export const rootReducer = combineReducers({
    seenArticles: seenArticlesReducer,
    lastSeenSpotify: lastSeenSpotifyReducer
});

import { Reducer } from "redux";
import { AddSeenArticleAction } from "../actions";


export enum ArticleActionTypes {
    ADD_SEEN_ARTICLE = "ADD_SEEN_ARTICLE"
}

const defaultState: string[] = [];

export const seenArticlesReducer: Reducer<string[], AddSeenArticleAction> =
    (state: string[] = defaultState, action: AddSeenArticleAction) => {
        switch (action.type) {
            case ArticleActionTypes.ADD_SEEN_ARTICLE:
                if (!state.includes(action.payload))
                    return [ ...state, action.payload ];
                else
                    return state;
            default:
                return state;
        }
    };

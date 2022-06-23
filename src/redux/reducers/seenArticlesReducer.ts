import { AnyAction } from "@reduxjs/toolkit";
import { Reducer } from "redux";


// export interface AddArticleAction extends AnyAction {
//     payload: string;
// }
export enum ArticleActionTypes {
    ADD_SEEN_ARTICLE = "ADD_SEEN_ARTICLE"
}

const defaultState: string[] = [];

export const seenArticlesReducer: Reducer<string[]> = (state: string[] = defaultState, action: AnyAction) => {
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

import { ArticleActionTypes } from "../reducers";


export interface AddSeenArticleAction {
    type: string,
    payload: string
}

export const markSeenArticle = (articleId: string): AddSeenArticleAction => {
    return ({
        type: ArticleActionTypes.ADD_SEEN_ARTICLE,
        payload: articleId
    });
};

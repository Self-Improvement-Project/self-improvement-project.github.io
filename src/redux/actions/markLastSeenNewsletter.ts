import { NullableDateNumber } from "../../typing";
import { NewsletterActionTypes } from "../reducers";


export interface SetLastSeenNewsletterAction {
    type: string,
    payload: NullableDateNumber
}

export const markLastSeenNewsletter = (date: NullableDateNumber): SetLastSeenNewsletterAction => {
    return ({
        type: NewsletterActionTypes.SET_LAST_SEEN_NEWSLETTER,
        payload: date
    });
};

import { Reducer } from "redux";
import { NullableDateNumber } from "../../typing";
import { SetLastSeenNewsletterAction } from "../actions";


export enum NewsletterActionTypes {
    SET_LAST_SEEN_NEWSLETTER = "SET_LAST_SEEN_NEWSLETTER"
}

const defaultState: NullableDateNumber = null;

export const lastSeenNewsletterReducer: Reducer<NullableDateNumber, SetLastSeenNewsletterAction> =
    (state: NullableDateNumber = defaultState, action: SetLastSeenNewsletterAction) => {
        switch (action.type) {
            case NewsletterActionTypes.SET_LAST_SEEN_NEWSLETTER:
                return action.payload;
            default:
                return state;
        }
    };

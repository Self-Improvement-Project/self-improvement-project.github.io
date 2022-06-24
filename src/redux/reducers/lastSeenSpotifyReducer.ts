import { Reducer } from "redux";
import { SetLastSeenSpotifyAction } from "../actions";


export enum SpotifyActionTypes {
    SET_LAST_SEEN_SPOTIFY = "SET_LAST_SEEN_SPOTIFY"
}

export type NullableDateNumber = number | null;
const defaultState: NullableDateNumber = null;

export const lastSeenSpotifyReducer: Reducer<NullableDateNumber, SetLastSeenSpotifyAction> =
    (state: NullableDateNumber = defaultState, action: SetLastSeenSpotifyAction) => {
        switch (action.type) {
            case SpotifyActionTypes.SET_LAST_SEEN_SPOTIFY:
                return action.payload;
            default:
                return state;
        }
    };

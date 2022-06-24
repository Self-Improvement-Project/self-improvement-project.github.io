import { NullableDateNumber, SpotifyActionTypes } from "../reducers/lastSeenSpotifyReducer";


export interface SetLastSeenSpotifyAction {
    type: string,
    payload: NullableDateNumber
}

export const markLastSeenSpotify = (date: NullableDateNumber): SetLastSeenSpotifyAction => {
    return ({
        type: SpotifyActionTypes.SET_LAST_SEEN_SPOTIFY,
        payload: date
    });
};

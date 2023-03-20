import { RootState } from "../store";


export const selectLastSeenNewsletterDate = (state: RootState) => state.lastSeenNewsletter;

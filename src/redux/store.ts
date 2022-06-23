import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";


const composeEnhancers =
    process.env.NODE_ENV === "development" ? composeWithDevTools({}) : compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk),
        offline(offlineConfig)
    )
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

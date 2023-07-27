// store.ts
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { podcastsReducer, PodcastsState } from "./reducers";

export interface RootState {
  podcasts: PodcastsState;
  // Otros reducers y estados adicionales pueden agregarse aquí si es necesario.
}

const store = createStore(
  podcastsReducer,
  applyMiddleware(thunk)
);

export default store;

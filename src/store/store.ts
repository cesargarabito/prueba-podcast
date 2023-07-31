// store.ts
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { podcastsReducer } from "./reducers";

const store = createStore(
  podcastsReducer,
  applyMiddleware(thunk)
);

export default store;

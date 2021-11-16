import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"; //used to  to return functions, rather than just actions, within Redux
import logger from "redux-logger"; //used to log state changes in the app (it must be last in middleware chain)

import reducer from "../reducers/index"; //importing combined reducer

let store;
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}

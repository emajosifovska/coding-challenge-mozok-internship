import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import quotesReducer from "./reducers/quotesReducer";

const rootReducer = combineReducers({
  allQuotes: quotesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type Store = ReturnType<typeof rootReducer>;

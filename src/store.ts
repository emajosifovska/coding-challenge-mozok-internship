import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import quotesReducer from "./reducers/quotesReducer";
import randomQuoteReducer from "./reducers/randomQuoteReducer";

const rootReducer = combineReducers({
  allQuotes: quotesReducer,
  randomQuote: randomQuoteReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type Store = ReturnType<typeof rootReducer>;

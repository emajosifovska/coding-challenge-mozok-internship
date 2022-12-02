import { RandomQuote } from "../@types/types";
import {
  FetchRandomQuoteSuccess,
  FetchRandomQuoteFailure,
  RandomQuoteActions,
} from "../action-types/randomQuoteActionsTypes";
import {
  FETCH_RANDOM_QUOTE_REQUEST,
  FETCH_RANDOM_QUOTE_SUCCESS,
  FETCH_RANDOM_QUOTE_FAILURE,
} from "../actions/randomQuoteActions";

const initialState = {
  loadingQuote: false,
  randomQuote: undefined,
  error: "",
};

interface State {
  loadingQuote: boolean;
  randomQuote?: RandomQuote;
  error?: string;
}

const randomQuoteReducer = (
  state: State = initialState,
  action: RandomQuoteActions
) => {
  switch (action.type) {
    case FETCH_RANDOM_QUOTE_REQUEST:
      return {
        loadingQuote: true,
      };
    case FETCH_RANDOM_QUOTE_SUCCESS:
      return {
        loadingQuote: false,
        quotes: (action as FetchRandomQuoteSuccess).payload,
      };
    case FETCH_RANDOM_QUOTE_FAILURE:
      return {
        ...state,
        loadingQuote: false,
        error: (action as FetchRandomQuoteFailure).payload,
      };
    default:
      return state;
  }
};

export default randomQuoteReducer;

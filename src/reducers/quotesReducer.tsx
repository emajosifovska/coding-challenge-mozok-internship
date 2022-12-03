import { AllQuotes } from "../@types/types";
import { QuotesActions } from "../action-types/quotesActionsTypes";
import {
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
} from "../actions/quotesActions";

const initialState = {
  loadingQuotes: false,
  quote: {
    quotes: [],
  },
  error: "",
};

interface State {
  loadingQuotes: boolean;
  quote?: AllQuotes;
  error?: string;
}

const quotesReducer = (state: State = initialState, action: QuotesActions) => {
  switch (action.type) {
    case FETCH_QUOTES_REQUEST:
      return {
        loadingQuotes: true,
      };
    case FETCH_QUOTES_SUCCESS:
      return {
        loadingQuotes: false,
        quote: action.payload,
      };
    case FETCH_QUOTES_FAILURE:
      return {
        ...state,
        loadingQuotes: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default quotesReducer;

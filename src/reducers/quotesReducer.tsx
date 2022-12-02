import { Quotes } from "../@types/types";
import {
  FetchQuotesSuccess,
  FetchQuotesFailure,
  QuotesActions,
} from "../action-types/quotesActionsTypes";
import {
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
} from "../actions/quotesActions";

const initialState = {
  loadingQuotes: false,
  quotes: undefined,
  error: "",
};

interface State {
  loadingQuotes: boolean;
  quotes?: Quotes;
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
        quotes: (action as FetchQuotesSuccess).payload,
      };
    case FETCH_QUOTES_FAILURE:
      return {
        ...state,
        loadingQuotes: false,
        error: (action as FetchQuotesFailure).payload,
      };
    default:
      return state;
  }
};

export default quotesReducer;

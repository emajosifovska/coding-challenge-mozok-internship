import axios from "axios";
import { Dispatch } from "redux";
import { Quotes } from "../@types/types";
import { QuotesActions } from "../action-types/quotesActionsTypes";

export const FETCH_QUOTES_REQUEST = "FETCH_QUOTES_REQUEST" as const;
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS" as const;
export const FETCH_QUOTES_FAILURE = "FETCH_QUOTES_FAILURE" as const;

export const fetchQuotesRequest = () => ({ type: FETCH_QUOTES_REQUEST });
export const fetchQuotesSuccess = (quotes: Quotes) => ({
  type: FETCH_QUOTES_SUCCESS,
  payload: quotes,
});
export const fetchQuotesFailure = (error: string) => ({
  type: FETCH_QUOTES_FAILURE,
  payload: error,
});

export const fetchQuotes = () => {
  return (dispatch: Dispatch<QuotesActions>) => {
    dispatch(fetchQuotesRequest());
    axios
      .get("https://zenquotes.io/api/quotes")
      .then((res) => {
        const quotes = res.data.sections;
        dispatch(fetchQuotesSuccess(quotes));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchQuotesFailure(errorMsg));
      });
  };
};

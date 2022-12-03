import axios from "axios";
import { Dispatch } from "redux";
import { AllQuotes } from "../@types/types";
import { QuotesActions } from "../action-types/quotesActionsTypes";

export const FETCH_QUOTES_REQUEST = "FETCH_QUOTES_REQUEST" as const;
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS" as const;
export const FETCH_QUOTES_FAILURE = "FETCH_QUOTES_FAILURE" as const;

export const fetchQuotesRequest = () => ({ type: FETCH_QUOTES_REQUEST });
export const fetchQuotesSuccess = (quote: AllQuotes) => ({
  type: FETCH_QUOTES_SUCCESS,
  payload: quote,
});
export const fetchQuotesFailure = (error: string) => ({
  type: FETCH_QUOTES_FAILURE,
  payload: error,
});

export const fetchQuotes = () => async (dispatch: Dispatch<QuotesActions>) => {
  try {
    dispatch(fetchQuotesRequest());

    const response = await axios.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );

    dispatch(fetchQuotesSuccess(response.data));
  } catch (err) {
    if (err instanceof Error) {
      dispatch(fetchQuotesFailure(err.message));
    }
  }
};

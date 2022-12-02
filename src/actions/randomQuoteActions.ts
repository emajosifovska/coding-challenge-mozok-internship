import axios from "axios";
import { Dispatch } from "redux";
import { RandomQuote } from "../@types/types";
import { RandomQuoteActions } from "../action-types/randomQuoteActionsTypes";

export const FETCH_RANDOM_QUOTE_REQUEST = "FETCH_RANDOM_QUOTE_REQUEST" as const;
export const FETCH_RANDOM_QUOTE_SUCCESS = "FETCH_RANDOM_QUOTE_SUCCESS" as const;
export const FETCH_RANDOM_QUOTE_FAILURE = "FETCH_RANDOM_QUOTE_FAILURE" as const;

export const fetchRandomQuoteRequest = () => ({
  type: FETCH_RANDOM_QUOTE_REQUEST,
});
export const fetchRandomQuoteSuccess = (quote: RandomQuote) => ({
  type: FETCH_RANDOM_QUOTE_SUCCESS,
  payload: quote,
});
export const fetchRandomQuoteFailure = (error: string) => ({
  type: FETCH_RANDOM_QUOTE_FAILURE,
  payload: error,
});

export const fetchRandomQuote = () => {
  return (dispatch: Dispatch<RandomQuoteActions>) => {
    dispatch(fetchRandomQuoteRequest());
    axios
      .get("https://zenquotes.io/api/random")
      .then((res) => {
        const quote = res.data.sections;
        dispatch(fetchRandomQuoteSuccess(quote));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchRandomQuoteFailure(errorMsg));
      });
  };
};

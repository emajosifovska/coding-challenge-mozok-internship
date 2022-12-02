import { RandomQuote } from "../@types/types";
import {
  FETCH_RANDOM_QUOTE_REQUEST,
  FETCH_RANDOM_QUOTE_SUCCESS,
  FETCH_RANDOM_QUOTE_FAILURE,
} from "../actions/randomQuoteActions";

export interface FetchRandomQuoteRequest {
  type: typeof FETCH_RANDOM_QUOTE_REQUEST;
}

export interface FetchRandomQuoteSuccess {
  type: typeof FETCH_RANDOM_QUOTE_SUCCESS;
  payload: RandomQuote;
}

export interface FetchRandomQuoteFailure {
  type: typeof FETCH_RANDOM_QUOTE_FAILURE;
  payload: string;
}

export type RandomQuoteActions =
  | FetchRandomQuoteRequest
  | FetchRandomQuoteSuccess
  | FetchRandomQuoteFailure;

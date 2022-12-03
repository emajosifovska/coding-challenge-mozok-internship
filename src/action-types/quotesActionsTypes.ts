import { AllQuotes } from "../@types/types";
import {
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
} from "../actions/quotesActions";

export interface FetchQuotesRequest {
  type: typeof FETCH_QUOTES_REQUEST;
}

export interface FetchQuotesSuccess {
  type: typeof FETCH_QUOTES_SUCCESS;
  payload: AllQuotes;
}

export interface FetchQuotesFailure {
  type: typeof FETCH_QUOTES_FAILURE;
  payload: string;
}

export type QuotesActions =
  | FetchQuotesRequest
  | FetchQuotesSuccess
  | FetchQuotesFailure
  | any;

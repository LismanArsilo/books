import * as ActionType from "../constants/booksConstans";

export const GetBooksRequest = (payload) => ({
  type: ActionType.GET_BOOKS_REQUEST,
  payload,
});
export const GetBooksSuccess = (payload) => ({
  type: ActionType.GET_BOOKS_SUCCESS,
  payload,
});
export const GetBooksFailed = (payload) => ({
  type: ActionType.GET_BOOKS_FAILED,
  payload,
});

import { takeEvery, all } from "redux-saga/effects";
import { handleGetBooks } from "./booksMiddleware";
import * as ActionTypeBooks from "../constants/booksConstans";

export default function* watchAll() {
  yield all([takeEvery(ActionTypeBooks.GET_BOOKS_REQUEST, handleGetBooks)]);
}

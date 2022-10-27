import { call, put } from "redux-saga/effects";
import booksApi from "../../api/booksApi";
import { GetBooksSuccess, GetBooksFailed } from "../actions/booksActions";

function* handleGetBooks(action) {
  const { payload } = action;
  try {
    const result = yield call(booksApi.listBooks, payload);
    yield put(GetBooksSuccess(result));
  } catch (error) {
    yield put(GetBooksFailed(error));
  }
}
export { handleGetBooks };

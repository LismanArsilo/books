import { takeEvery, all } from "redux-saga/effects";
import { handleGetBooks } from "./booksMiddleware";
import { handleAddUsers, handleGetUsers } from "./usersMiddleware";
import * as ActionTypeBooks from "../constants/booksConstans";
import * as ActionTypeUsers from "../constants/userConstants";

export default function* watchAll() {
  yield all([
    takeEvery(ActionTypeBooks.GET_BOOKS_REQUEST, handleGetBooks),
    takeEvery(ActionTypeUsers.ADD_USERS_REQUEST, handleAddUsers),
    takeEvery(ActionTypeUsers.GET_USERS_REQUEST, handleGetUsers),
  ]);
}

import { call, put } from "redux-saga/effects";
import {
  AddUserSuccess,
  AddUserFailed,
  GetUserSuccess,
  GetUserFailed,
} from "../actions/userActions";

function* handleAddUsers(action) {
  const { payload } = action;
  try {
    yield put(AddUserSuccess(payload));
  } catch (error) {
    yield put(AddUserFailed(error));
  }
}
function* handleGetUsers(action) {
  const { payload } = action;
  try {
    yield put(GetUserSuccess(payload));
  } catch (error) {
    yield put(GetUserFailed(error));
  }
}

export { handleAddUsers, handleGetUsers };

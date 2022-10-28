import * as ActionType from "../constants/userConstants";

export const AddUserRequest = (payload) => ({
  type: ActionType.ADD_USERS_REQUEST,
  payload,
});
export const AddUserSuccess = (payload) => ({
  type: ActionType.ADD_USERS_SUCCESS,
  payload,
});
export const AddUserFailed = (payload) => ({
  type: ActionType.ADD_USERS_FAILED,
  payload,
});

export const GetUserRequest = (payload) => ({
  type: ActionType.GET_USERS_REQUEST,
  payload,
});
export const GetUserSuccess = (payload) => ({
  type: ActionType.GET_USERS_SUCCESS,
  payload,
});
export const GetUserFailed = (payload) => ({
  type: ActionType.GET_USERS_FAILED,
  payload,
});

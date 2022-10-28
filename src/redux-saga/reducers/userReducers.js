import * as ActionType from "../constants/userConstants";

const INIT_STATE = {
  user: [],
  loading: false,
  login: false,
};

const usersReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.ADD_USERS_REQUEST:
      return { ...state, loading: true };
    case ActionType.ADD_USERS_SUCCESS:
      return AddUsersSuccedd(state, action);
    case ActionType.GET_USERS_REQUEST:
      return { ...state, loading: true };
    case ActionType.GET_USERS_SUCCESS:
      return GetUsersSuccedd(state, action);
    default:
      return { ...state };
  }
};

const AddUsersSuccedd = (state, action) => {
  const { payload } = action;
  if (state.user.email === payload.email) {
    return {
      ...state,
      loading: false,
    };
  } else {
    return {
      ...state,
      user: [...state.user, payload],
      loading: false,
    };
  }
};
const GetUsersSuccedd = (state, action) => {
  return { ...state, loading: false, login: true };
};

export default usersReducer;

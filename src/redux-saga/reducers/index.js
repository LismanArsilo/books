import { combineReducers } from "redux";
import booksReducer from "./booksReducers";
import usersReducer from "./userReducers";
const rootReducer = combineReducers({
  booksState: booksReducer,
  usersState: usersReducer,
});
export default rootReducer;

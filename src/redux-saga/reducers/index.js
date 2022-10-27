import { combineReducers } from "redux";
import booksReducer from "./booksReducers";
const rootReducer = combineReducers({
  booksState: booksReducer,
});
export default rootReducer;

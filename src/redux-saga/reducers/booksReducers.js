import * as ActionType from "../constants/booksConstans";

const INIT_STATE = {
  books: [],
  loading: false,
};

const booksReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_BOOKS_REQUEST:
      return { ...state, loading: true };
    case ActionType.GET_BOOKS_SUCCESS:
      return getBooksSuccedd(state, action);
    default:
      return { ...state };
  }
};

const getBooksSuccedd = (state, action) => {
  console.info({ ...state });
  return { ...state, books: action.payload, loading: false };
};
export default booksReducer;

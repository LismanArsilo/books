import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBooksRequest } from "../redux-saga/actions/booksActions";

export default function Test() {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.booksState);

  useEffect(() => {
    dispatch(GetBooksRequest("Coding"));
  }, []);
  console.info(books);
  return (
    <div>
      {loading ? (
        "Loading. . ."
      ) : (
        <>
          <h1>Hello React</h1>
        </>
      )}
    </div>
  );
}

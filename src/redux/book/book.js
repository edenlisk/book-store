import { createAction } from '@reduxjs/toolkit/src/createAction';
import { createReducer } from "@reduxjs/toolkit/src/createReducer";
import { nanoid } from '@reduxjs/toolkit';
const ADD_BOOK = createAction('bookstore/books/ADD_BOOK', (book) => {
  return {
    payload: {
      id: nanoid(),
      title: book.title,
      author: book.author,
      completed: false,
    }
  }
});
const REMOVE_BOOK = createAction('bookstore/books/REMOVE_BOOK');

const INITIAL_STATE = [];

const bookReducer = createReducer(INITIAL_STATE, (builder => {
  builder
      .addCase(ADD_BOOK, (state, action) => {
        return [...state, action.payload];
      })
      .addCase(REMOVE_BOOK, (state, action) => {
        return [state.filter((book) => book !== action.payload)];
      })
      .addDefaultCase(state => state);
}))

export default bookReducer;

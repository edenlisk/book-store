import { createAction } from '@reduxjs/toolkit/src/createAction';
import { createReducer } from '@reduxjs/toolkit/src/createReducer';
import { nanoid } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addBook = createAction(ADD_BOOK, (book) => ({
  payload: {
    id: nanoid(),
    title: book.title,
    author: book.author,
    completed: false,
  },
}));

export const removeBook = createAction(REMOVE_BOOK);

const INITIAL_STATE = [];

const bookReducer = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(addBook, (state, action) => [...state, action.payload])
    .addCase(removeBook, (state, action) => [state.filter((book) => book !== action.payload)])
    .addDefaultCase((state) => state);
}));

export default bookReducer;

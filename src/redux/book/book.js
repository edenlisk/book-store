import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addBook = createAction(ADD_BOOK, (book) => ({
  payload: book,
}));

export const removeBook = createAction(REMOVE_BOOK, (book) => ({
  payload: book,
}));

const INITIAL_STATE = [
  {
    id: nanoid(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    progress: 0.82,
  },
  {
    id: nanoid(),
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Fiction',
    progress: 0.47,
  },
  {
    id: nanoid(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Science',
    progress: 0.64,
  },
];

const bookReducer = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(addBook, (state, action) => [...state, action.payload])
  // eslint-disable-next-line
    .addCase(removeBook, (state, action) => [...state.filter((book) => book.title !== action.payload.title)])
    .addDefaultCase((state) => state);
}));

export default bookReducer;

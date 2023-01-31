import { createAction } from '@reduxjs/toolkit/src/createAction';
import { nanoid } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

const bookReducer = (state = INITIAL_STATE, actions) => {
  if (actions.type === 'ADD_BOOK') {
    return [...state, actions.payload];
  } if (actions.type === 'REMOVE_BOOK') {
    return [state.filter((book) => book !== actions.payload.id)];
  }
  return state;
};

export const addBook = createAction('ADD_BOOK', (book) => ({
  payload: {
    id: nanoid(),
    title: book.title,
    author: book.author,
    completed: false,
  },
}));

export const removeBook = createAction('REMOVE_BOOK');

export default bookReducer;

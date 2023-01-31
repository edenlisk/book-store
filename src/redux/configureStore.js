import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookReducer from './book/book';

const reducers = combineReducers(
  {
    book: bookReducer,
    categories: categoriesReducer,
  },
);

const store = configureStore({ reducer: reducers });

export default store;

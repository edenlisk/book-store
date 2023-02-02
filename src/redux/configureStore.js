import { legacy_createStore as createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import bookReducer from './book/book';

const reducers = combineReducers(
  {
    book: bookReducer,
    category: categoriesReducer,
  },
);

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

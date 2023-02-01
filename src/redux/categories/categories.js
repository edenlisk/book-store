import { createAction, createReducer } from '@reduxjs/toolkit';

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const INITIAL_STATE = [];

export const checkStatus = createAction(CHECK_STATUS);

const categoriesReducer = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(checkStatus, () => 'Under Construction')
    .addDefaultCase((state) => state);
}));

export default categoriesReducer;

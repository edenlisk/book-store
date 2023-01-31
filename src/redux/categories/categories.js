import { createAction } from '@reduxjs/toolkit/src/createAction';
import { createReducer } from '@reduxjs/toolkit/src/createReducer';

export const CHECK_STATUS = createAction('bookstore/categories/CHECK_STATUS');
const INITIAL_STATE = [];

const categoriesReducer = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(CHECK_STATUS, () => 'Under Construction')
    .addDefaultCase((state) => state);
}));

export default categoriesReducer;

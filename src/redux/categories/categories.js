import { createAction } from '@reduxjs/toolkit/src/createAction';
import { createReducer } from '@reduxjs/toolkit/src/createReducer';

const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const INITIAL_STATE = [];

export const checkStatus = createAction(CHECK_STATUS);

const categoriesReducer = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(checkStatus, () => 'Under Construction')
    .addDefaultCase((state) => state);
}));

export default categoriesReducer;

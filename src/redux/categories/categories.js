import { createAction } from '@reduxjs/toolkit/src/createAction';

const INITIAL_STATE = [];

const categoriesReducer = (state = INITIAL_STATE, actions) => {
  if (actions.type === 'COMPLETED') {
    return 'Under Construction';
  } if (actions.type === 'IN_PROGRESS') {
    return 'Under Construction';
  }
  return state;
};

export const completed = createAction('COMPLETED');
export const progress = createAction('IN_PROGRESS');

export default categoriesReducer;

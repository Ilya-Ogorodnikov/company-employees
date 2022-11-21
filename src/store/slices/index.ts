import { combineReducers } from '@reduxjs/toolkit';
import { employeesReducer } from './employees.slice';

export const rootReducer = combineReducers({
  employeesReducer,
});

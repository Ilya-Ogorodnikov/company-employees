import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { employeesActions } from '../store/slices/employees.slice';

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...employeesActions,
    },
    dispatch,
  );
};

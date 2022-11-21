import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IEmployee,
  IEmployeeState,
  IFilter,
  sortingFields,
} from '../../models';
import { reverseDateRepresentation } from '../../utils/helpers';
import { fakeEmployees } from '../../constants';

const initialState: IEmployeeState = {
  employees: fakeEmployees,
  editedEmployees: [],
  newEmployees: [],
};

const employeesSlices = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Omit<IEmployee, 'id'>>) => {
      state.newEmployees = [
        ...state.newEmployees,
        { ...action.payload, id: state.employees.length + 1 },
      ];
    },

    sortingEmployees: (state, action: PayloadAction<sortingFields>) => {
      if (!action.payload) {
        state.employees.sort(
          (firstEmployee, secondEmployee) =>
            firstEmployee.id - secondEmployee.id,
        );
        return;
      }

      if (action.payload === 'birthday') {
        state.employees = state.employees
          .map(el => ({
            ...el,
            birthday: reverseDateRepresentation(el.birthday),
          }))
          .sort((firstEmployee, secondEmployee) =>
            firstEmployee.birthday < secondEmployee.birthday ? -1 : 1,
          )
          .map(el => ({
            ...el,
            birthday: reverseDateRepresentation(el.birthday),
          }));

        return;
      }

      state.employees.sort((firstEmployee, secondEmployee) =>
        firstEmployee[action.payload] < secondEmployee[action.payload] ? -1 : 1,
      );
    },

    filterEmployees: (state, action: PayloadAction<IFilter>) => {
      if (!action.payload.fields) {
        state.employees = [...fakeEmployees, ...state.newEmployees].map(
          element => {
            const editedEmployee = state.editedEmployees.find(
              employee => employee.id === element.id,
            );

            if (editedEmployee?.id === element.id) {
              return editedEmployee;
            }
            return element;
          },
        );

        if (action.payload.isArhive) {
          state.employees = state.employees.filter(
            employee => employee.isArchive === action.payload.isArhive,
          );
        }
        return;
      }

      state.employees = [...fakeEmployees, ...state.newEmployees]
        .filter(employee => employee.role === action.payload.fields)
        .map(element => {
          const editedEmployee = state.editedEmployees.find(
            employee => employee.id === element.id,
          );

          if (editedEmployee?.id === element.id) {
            return editedEmployee;
          }
          return element;
        });

      if (action.payload.isArhive) {
        state.employees = state.employees.filter(
          employee => employee.isArchive === action.payload.isArhive,
        );
        return;
      }
    },

    changeEmployee: (state, action: PayloadAction<IEmployee>) => {
      state.editedEmployees = [...state.editedEmployees, action.payload];
    },
  },
});

export const employeesReducer = employeesSlices.reducer;
export const employeesActions = employeesSlices.actions;

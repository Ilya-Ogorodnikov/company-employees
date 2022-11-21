import { fakeEmployees } from './fakeData';
import { appRoutes } from './routes';

export const tableHeader = [
  { id: 0, title: 'Статус' },
  { id: 1, title: 'Имя' },
  { id: 2, title: 'Номер телефона' },
  { id: 3, title: 'Должность' },
  { id: 4, title: 'Дата рождения' },
];

export const sortingOptions = [
  { value: '', title: '' },
  { value: 'birthday', title: 'Дата рождения' },
  { value: 'name', title: 'Имя' },
];

export const employeesRoles = [
  { value: '', title: '' },
  { value: 'cook', title: 'Повар' },
  { value: 'waiter', title: 'Официант' },
  { value: 'driver', title: 'Водитель' },
];

export { fakeEmployees, appRoutes };

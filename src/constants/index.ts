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

export const ERROR_MESSAHE_FOR_NAME = 'Введите имя сотрудника, минимум 1 буква';
export const ERROR_MESSAHE_FOR_ROLE = 'Выберите должность сотрудника';
export const ERROR_MESSAHE_FOR_PHONE =
  'Заполните номер в виде +7 (ххх) хххх-хххх';
export const ERROR_MESSAHE_FOR_BIRTHDAY =
  'Заполните дату рождения в виде dd.mm.yyyy';

export { fakeEmployees, appRoutes };

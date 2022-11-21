import { AddPage, EditPage, MainPage, NotFoundPage } from '../pages';

export const appRoutes = [
  { path: '/', element: <MainPage /> },
  { path: '/edit-employee/:id', element: <EditPage /> },
  { path: '/add-employee', element: <AddPage /> },
  { path: '*', element: <NotFoundPage /> },
];

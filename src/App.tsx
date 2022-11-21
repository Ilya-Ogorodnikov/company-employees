import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { appRoutes } from './constants';

import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

const App: FC = () => (
  <>
    <Routes>
      {appRoutes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>

    <ToastContainer />
  </>
);

export default App;

import { createBrowserRouter, redirect } from 'react-router-dom';

import { App } from './App';
import { Details } from './Details';
import { NotFound } from './NotFound';

export const router = createBrowserRouter([
  {
    path: '/page/:pageNumber',
    element: <App />,
    children: [
      {
        path: 'character/:charId',
        element: <Details />,
      },
    ],
  },
  {
    path: '/',
    element: <App />,
    loader: () => redirect('/page/1/'),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

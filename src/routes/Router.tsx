import { createBrowserRouter, redirect } from 'react-router-dom';

import { Details } from './Details';
import { NotFound } from './NotFound';
import { Root } from './Root';

export const router = createBrowserRouter([
  {
    path: '/page/:pageNumber',
    element: <Root />,
    children: [
      {
        path: 'character/:charId',
        element: <Details />,
      },
    ],
  },
  {
    path: '/',
    element: <Root />,
    loader: () => redirect('/page/1/'),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

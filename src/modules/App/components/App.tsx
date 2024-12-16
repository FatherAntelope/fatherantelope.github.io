import React from 'react';
import {router} from '~/modules';
import {RouterProvider} from 'react-router-dom';

export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

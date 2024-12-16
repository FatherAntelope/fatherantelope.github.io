import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {HomeScreen} from '~/modules/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
  },
]);

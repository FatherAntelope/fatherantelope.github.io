import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {HomeScreen} from '~/modules/App';
import {AboutScreen} from '~/modules/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen/>,
  },
  {
    path: '/about',
    element: <AboutScreen/>,
  },
]);

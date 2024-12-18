import {Container, createRoot} from 'react-dom/client';
import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from '~/router';
import {App} from '~/modules';

import '~/assets/styles/global.scss';

const root = createRoot(document.getElementById('root') as Container);
root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
  </React.StrictMode>,
);

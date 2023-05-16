import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './modules/login/Index';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

const router = createBrowserRouter(
  [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

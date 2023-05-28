// import ReactButton from 'remoteReactApp/Button';

import React from 'react';
import './common/assets/scss/styles.scss';
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import IndexRoutes from './routes/Routes';
import Login from './modules/login/Index';
import NotFound from './modules/not-found/Index';
// import Sidebar from 'remoteReactApp/Sidebar';
// import Button from 'remoteReactApp/Button';
import RemoteHome from 'remoteReactApp/Home';
import PageLayout from './common/layout/Layout';


function App() {
  // const vueRef = useRef(null);

  // useEffect(() => {
  //   mount(vueRef.current)
  // }, [])
  const router = createBrowserRouter(
    [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <PageLayout />,
        children: [
          {
            path: "",
            element: <div>
              <React.Suspense fallback='Loading App'>
                <RemoteHome />
              </React.Suspense>
            </div>,
          },
          {
            path: "test",
            element: <div>Test</div>
          }
        ]
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;

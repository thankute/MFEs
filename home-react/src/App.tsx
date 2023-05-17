// import ReactButton from 'remoteReactApp/Button';

import React from 'react';
import './common/assets/scss/styles.scss';
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import IndexRoutes from './routes/Routes';
import Login from './modules/login/Index';
import NotFound from './modules/not-found/Index';
import Sidebar from 'remoteReactApp/Sidebar';


function App() {
  // const vueRef = useRef(null);

  // useEffect(() => {
  //   mount(vueRef.current)
  // }, [])
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/a",
        element: <React.Suspense fallback='Loading Button'>
          <Sidebar />
        </React.Suspense>,
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

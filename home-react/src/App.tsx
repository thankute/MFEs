// import ReactButton from 'remoteReactApp/Button';

import React from 'react';
import './common/assets/scss/styles.scss';
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import IndexRoutes from './routes/Routes';
import Login from './modules/login/Index';
import Hello from './modules/Hello/Index';


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
        element: <div>Hello world!</div>,
      },
    ]
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;

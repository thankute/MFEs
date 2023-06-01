// import ReactButton from 'remoteReactApp/Button';

import React from 'react';
import './common/assets/scss/styles.scss';
import { RouterProvider } from "react-router-dom";
import { router } from './routes/Routes';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

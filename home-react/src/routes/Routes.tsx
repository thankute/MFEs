import React from 'react'
import { Route, createBrowserRouter, } from "react-router-dom";
import Login from '../modules/login/Index';
import NotFound from '../modules/not-found/Index';
// import Sidebar from 'remoteReactApp/Sidebar';
// import Button from 'remoteReactApp/Button';
import RemoteHome from 'remoteReactApp/Home';
import PageLayout from '../common/layout/Layout';
import RemoteVue from '../modules/vue/Index';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter(
    [
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/",
            element: <PrivateRoute>
                <PageLayout />
            </PrivateRoute>,
            children: [
                {
                    path: "",
                    element: <div>
                        <PrivateRoute>
                            <React.Suspense fallback='Loading App'>
                                <RemoteHome />
                            </React.Suspense>
                        </PrivateRoute>
                    </div>,
                },
                {
                    path: "explore",
                    element:
                        <PrivateRoute>
                            <RemoteVue />
                        </PrivateRoute>,
                }
            ]
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]
);

const Index = () => {
    return (
        <>
        </>
    );
}

export default Index;
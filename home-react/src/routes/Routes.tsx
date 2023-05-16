import React from 'react'
import Login from '../modules/login/Index';
import NotFound from '../modules/not-found/Index';
import Hello from '../modules/Hello/Index';
import { Route, Routes } from "react-router-dom";


const Index = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/a' element={<Hello />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default Index;
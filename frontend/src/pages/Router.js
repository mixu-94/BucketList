import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Impressum from '../pages/Impressum'
import ErrorPage from "./ErrorPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="Impressum" element={<Impressum />} />
            <Route path="*" element={<ErrorPage />} />
           
        </Routes>
    )
}

export default Router

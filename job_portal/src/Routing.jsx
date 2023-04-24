import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import JobNotFound from "./pages/JobNotFound";
import JobDetails from "./Components/JobDetails";
import Vacancies from "./Components/Vacancies";
import NewJob from './pages/NewJob';

const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/vacancies" exact element={<Vacancies />} />
                <Route path="/addnew" exact element={<NewJob />} />
                <Route path="/job/:id" exact element={<JobDetails />} />
                <Route path="/404" exact element={<JobNotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
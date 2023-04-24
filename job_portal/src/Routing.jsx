import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import JobNotFound from "./pages/JobNotFound";
import JobDetails from "./Components/JobDetails";
import NewJob from './pages/NewJob';
import VacanciesPage from './pages/VacanciesPage';
import Contact from './pages/Contact'
import Footer from './pages/Footer'


const Routing = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/vacancies" exact element={<VacanciesPage />} />
                <Route path="/addnew" exact element={<NewJob />} />
                <Route path="/job/:id" exact element={<JobDetails />} />
                <Route path="/404" exact element={<JobNotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/Contact" exact element={<Contact />} />
                <Route path="/Contact" exact element={<Footer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
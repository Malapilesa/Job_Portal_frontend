import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../Components/Header';

const JobNotFound =() =>{
    return(
        <>
            <Header />
            <h1>
                404
            </h1>
            <h3>Oops! We couldnt find the page you are looking for.</h3>
            <Link to={'/'}>Home</Link>
        </>
    )
}

export default JobNotFound
import React from 'react';
import {Link} from 'react-router-dom'
const JobNotFound =() =>{
    return(
        <main className="notfound">
            <h1>
                404
            </h1>
            <h3>Oops! We couldnt find the page you are looking for.</h3>
            <Link to={'/'}>Home</Link>
        </main>
    )
}

export default JobNotFound
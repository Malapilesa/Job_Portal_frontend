import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';

const JobDetails = () => {
    const [job, setJob] = useState("");
    const {id} = useParams();

    useEffect(() =>{
        fetch(`http://127.0.0.1:8000/jobs/${id}`, {
            method : 'GET',
            headers : {'Content-Type': 'application/json'}
            })
            .then((res) => res.json())
            .then((job) => {
                setJob(job);
            })
        },[]);

	return (
		<>
            <Header />
		    <h3>{job.title}</h3>
            <h5>{job.location}</h5>
            <h5>{job.company}</h5> 
            <h5>{job.description}</h5>
            <h5>{job.requirements}</h5> 
            <h5>{job.salary}</h5>
            <h5>{job.level}</h5> 
		</>
	);
};

export default JobDetails;
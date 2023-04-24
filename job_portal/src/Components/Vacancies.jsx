import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom'

const Vacancies = () => {
	const [jobs, setJobs] = useState([]);

	useEffect(() =>{
	fetch('http://127.0.0.1:8000/jobs/', {
		method : 'GET',
		headers : {'Content-Type': 'application/json'}
		})
		.then((res) => res.json())
		.then((jobs) => {
			setJobs(jobs);
		})
	},[]);

	return (  
		jobs.map((job) => (
			<ul>
				<Link to={`/job/${job.id}`}>
					<h3 key={job.id}>{job.title}</h3>
				</Link>
				<h5>{job.location}</h5>
				<h5>{job.company}</h5> 
			</ul>
						
		))
	);
};

export default Vacancies;
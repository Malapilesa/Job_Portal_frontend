import React from 'react';
import { Link } from "react-router-dom";
import ViewVacancies from '../Components/ViewVacancies';
import AddNewJob from '../Components/AddNewJob';
import Header from '../Components/Header';

const Home = () => {
	return (
		<>
			<Header />
			<h1>Job Portal</h1>
			<Link to={'/vacancies'}>
            	<ViewVacancies />
			</Link>
			<Link to={'/addnew'}>
				<AddNewJob />  
			</Link>
               
		</>
	);
};

export default Home;
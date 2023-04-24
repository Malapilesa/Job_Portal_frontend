import React from 'react';
import { Link } from "react-router-dom";
import ViewVacancies from '../Components/ViewVacancies';
import AddNewJob from '../Components/AddNewJob';
import Header from '../Components/Header';
import Footer from "../Components/Footer"

const Home = () => {
	return (
		<>
			<Header />			
			<Link to={'/vacancies'}>
            	<ViewVacancies />
			</Link>
			<Link to={'/addnew'}>
				<AddNewJob />  
			</Link>
            <Footer />  
		</>
	);
};

export default Home;
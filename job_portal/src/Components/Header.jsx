import React from "react";
import jpLogo from "../assets/logo.jpg";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <main>
            <header>
                <nav>
                    <Link to="/" className="nav-logo">
                        <img src={jpLogo} alt="logo"/>
                    </Link>
                    <ul className="nav-menu">
                        <li className="menu-item">
                            <Link to="/addnew">Add New Vacancy</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/vacancies">Vacancies</Link>
                        </li>
                        <li className="menu-item">
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </header>
           
        </main>
    )
} 
export default Header
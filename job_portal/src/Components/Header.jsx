import React from "react";
import jpLogo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import '../App.css'

const Header = () => {
    return (
        <main>
            <header>
                <nav className="navbar navbar-light fixed-top navbar-expand-lg justify-content-between bg- p-3">
                    <a className="navbar-brand" href="/">
                        <img src={jpLogo} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Job Portal
                    </a>
                    <ul className="navbar-nav mr-auto float-lg-right nav-menu">
                        <li className="menu-item">
                            <Link to="/addnew">Add New Vacancy</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/vacancies">Vacancies</Link>
                        </li>
                        <li className="menu-item">
                            <a href="/Contact">Contact Us</a>
                        </li>
                    </ul>
                </nav>


            </header>
        </main>
    )
}
export default Header
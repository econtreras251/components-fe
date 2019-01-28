import React, { Component } from 'react';
import { Link } from "react-router-dom";
import icon from '../images/icon_football.png';

class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link  to="/" className="navbar-brand" >
                    <img src={icon} alt="Icon" width="30" height="30" ></img>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/dashboard"className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">Sign In</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signout" className="nav-link">Sign Out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default Header;
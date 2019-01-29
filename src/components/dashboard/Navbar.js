import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    render(){
        return(
            <nav className="menu d-flex d-sm-block justify-content-center flex-wrap">
                <Link to="/admin" className="item">
                    <i className="fas fa-user-tie"></i> 
                    <span> Admin</span>
                </Link>
                <Link to="/home" className="item">
                    <i className="fas fa-users"></i> 
                    <span> Teams</span>
                </Link>
                <Link to="/" className="item">
                    <i className="fas fa-futbol"></i> 
                    <span> Matches</span>
                </Link>
                <Link to="/" className="item">
                    <i className="fas fa-sitemap"></i>
                    <span> Fixture</span>
                </Link>
                <Link to="/" className="item">
                    <i className="fas fa-running"></i>
                    <span> Players</span>
                </Link>
                <Link to="/" className="item">
                    <i className="fas fa-sign-out-alt"></i>
                    <span> Salir</span>
                </Link>
            </nav>
        );
    }
};

export default Navbar;
import React, { Component } from 'react';
import Navbar from './Navbar';
import Notification from './Notification';
import './Dashboard.css';

import icon from '../../images/icon_football.png';


class Dashboard extends Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="side-bar col-12 col-sm-auto">
                        <div className="logo">
                            <h2>
                                <img src={icon} alt="" width="50" height="50" /> Copa America
                            </h2>
                        </div>
                        <Navbar />
                    </div>
                    <div className="main col">
                        <div className="row">
                            <div className="column col-lg-8">
                                { this.props.children }
                            </div>
                            <div className="column col-lg-4">
                                <Notification />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Dashboard;
import React, { Component } from 'react';
import './Notification.css';

class Notification extends Component {
    render() {
        return (
            <div className="widget">
                <h3>Notifications</h3>
                <div className="d-flex flex-wrap notifications">
                    <div className="box">
                        <h3>36</h3>
                        <p>Usuarios</p>
                    </div>
                    <div className="box">
                        <h3>15</h3>
                        <p>Partidos</p>
                    </div>
                    <div className="box">
                        <h3>8</h3>
                        <p>Equipos</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notification;
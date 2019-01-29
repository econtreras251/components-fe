import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

class NewUser extends Component {
    render() {
        return (
            <div className="widget new-entrie">
                <h3>USER FORM</h3>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Username" />
                    <div className="d-flex justify-content-end">
                        <Link to="/admin/confirm"><i className="fas fa-edit"></i> Create</Link>
                    </div>
                </form>
            </div>
        );
    }
};

export default NewUser;
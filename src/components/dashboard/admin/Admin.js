import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

class Admin extends Component {
    render() {
        return (
            <div className="new-entrie">
                <h3>New User</h3>
                <Link to="/admin/new" className="btn btn-primary"><i className="fas fa-edit"></i> Create</Link>
            </div>
        );
    }
};

export default Admin;
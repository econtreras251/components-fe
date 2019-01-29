import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'

class NewUser extends Component {
    render() {
        return (
            <div className="widget new-entrie">
                <h3>User Form</h3>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Username" />
                    <div className="d-flex flex-wrap">
                        <div>
                            <Link to="/admin" className="cancel"><i className="fas fa-arrow-circle-left"></i> Cancel</Link>
                        </div>
                        <div>
                            <Link to="/admin/confirm" className="confirm"><i className="fas fa-edit"></i> Create</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default NewUser;
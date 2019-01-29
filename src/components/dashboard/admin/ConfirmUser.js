import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ConfirmUser extends Component {
    render() {
        return(
            <div className="widget new-entrie">
                <h3>USER CONFIRM</h3>
                <form>
                    <label className="">Name</label>
                    <input type="email" placeholder="Email" readOnly />
                    <input type="password" placeholder="Password" readOnly />
                    <input type="text" placeholder="Username" readOnly />
                    <div className="d-flex justify-content-start">
                        <Link to="/admin/new"><i className="fas fa-edit"></i> Edit</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default ConfirmUser;
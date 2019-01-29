import React, { Component } from 'react';
import Dashboard from './dashboard/Dashboard';
import { BrowserRouter, Route } from "react-router-dom";
import Admin from './dashboard/admin/Admin';
import NewUser from './dashboard/admin/NewUser';
import ConfirmUser from './dashboard/admin/ConfirmUser';
import Twitter from './Twitter';
import Home from './Home';

class App extends Component {
    state = { isAuthenticated: false, user: null, token: '' };

    render(){
        return(
           <div>
            <BrowserRouter>
                <Dashboard>
                    <Route path="/admin" exact component={Admin} />
                    <Route path="/admin/new" component={NewUser} />
                    <Route path="/home" component={Home} />
                    <Route path="/admin/confirm" component={ConfirmUser} />
                    <Route path="/twitter" component={Twitter} />
                </Dashboard>
            </BrowserRouter>
           </div>
        );
    }
}

export default App;
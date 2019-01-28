import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import App from './components/App';
import Home from './components/Home';
import Twitter from './components/Twitter';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={Twitter} />
        </App>
    </BrowserRouter>, 
    document.querySelector('#root')
);
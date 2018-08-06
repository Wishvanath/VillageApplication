import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './component/home/home';
import Verify from './component/verify/verify';
import Login from './component/login/login';
//our components

ReactDOM.render(
    <Router>
        <div>
            <Route exact path = "/" component = {HomePage} />
            <Route exact path = "/verify" component = {Verify} />
            <Route exact path = "/login"  component = {Login} />
            <Route exact path = "/app" component={App} />
        </div>
    </Router>       
   
    , document.getElementById('root'));
registerServiceWorker();
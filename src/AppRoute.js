import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import DefaultLayout from './DefaultLayout';
import Login from './Login';
import NotFound from './NotFound';

const AppRoute = ({ history }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={DefaultLayout} />
                <Route path="/login" component={Login} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default AppRoute;
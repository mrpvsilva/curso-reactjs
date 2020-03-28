import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DefaultLayout from './Layouts/DefaultLayout';
import Login from './Pages/Login';
import PageNotFound from './Pages/PageNotFound';

const AppRoute = ({ match }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/" component={DefaultLayout} /> 
            </Switch>
        </Router>
    );
}

export default AppRoute;
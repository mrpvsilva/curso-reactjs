import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import DefaultLayout from './Layouts/DefaultLayout';
import Login from './Pages/Login';
import PrivateRoute from './PrivateRoute';

const AppRoute = () => {
    return (
        <Router basename="curso-reactjs">
            <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute path="/" component={DefaultLayout} />
            </Switch>
        </Router>
    );
}

export default AppRoute;
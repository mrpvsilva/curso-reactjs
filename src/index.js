import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import NavBar from './NavBar'
import NotFound from './NotFound';
import Routes from './Routes';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <header>
            <NavBar />
        </header>
        <div className="container-fluid">
            <Switch>
                {
                    Routes.map(r => (
                        <Route key={r.path} path={r.path} exact={r.exact} component={r.component} />
                    ))
                }
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
        <Footer />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

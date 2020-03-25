import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import { Nav } from './Nav';
import Home from './Home';


class DefaultLayout extends Component {


    render() {
        return (
            <div>
                <Header {...this.props} />
                <div className="container">
                    <Switch>
                        {
                            Nav.map(r => (
                                <Route key={r.path} path={r.path} component={r.component} />
                            ))
                        }
                    </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}


export default DefaultLayout;

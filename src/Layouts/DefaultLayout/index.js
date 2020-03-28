import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Nav from '../../Nav';

function DefaultLayout({ ...rest }) {
    return (
        <div>
            <Header {...rest} />
            <Switch>
                {
                    Nav.map(n => <Route path={n.path} component={n.component} key={n.description} />)
                }
                <Redirect from="*" to="/home" />
            </Switch>
            <Footer />
        </div>
    );
}

export default DefaultLayout;

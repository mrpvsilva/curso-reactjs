import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Nav from '../Nav';
import Auth from '../Auth';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.logout = this.logout.bind(this);
    }
    toggleNavbar() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    logout() {
        Auth.sigout();
        this.props.history.push("/login");
    }
    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
       
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <NavLink className="navbar-brand" to="/">Home</NavLink >
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${classOne}`}>
                        <ul className="navbar-nav mr-auto">
                            {
                                Nav.map(r => (
                                    <li className="nav-item" key={r.path}>
                                        <NavLink className="nav-link" to={`${r.path}`}>{r.description}</NavLink >
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="navbar-nav">
                            <a style={{ cursor: "pointer" }} className="nav-item nav-link" onClick={this.logout}>Logout</a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
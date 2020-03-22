import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Routes from './Routes';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }
    toggleNavbar() {
        this.setState({ collapsed: !this.state.collapsed });
    }
    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <NavLink className="navbar-brand" to="/">Home</NavLink >
                <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${classOne}`}>
                    <ul className="navbar-nav mr-auto">
                        {
                            Routes.map(r => (
                                <li className="nav-item" key={r.path}>
                                    <NavLink className="nav-link" to={r.path}>{r.description}</NavLink >
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
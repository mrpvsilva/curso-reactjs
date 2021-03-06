import React, { Component } from 'react';

import Auth from '../../Auth';

class Login extends Component {

    constructor(props) {
        super(props)

        if (Auth.isAuthenticated())
            this.props.history.push('/');

        this.state = {
            email: '',
            password: '',
            remember: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    onSubmit() {
        Auth.sigin(JSON.stringify(this.state));
        this.props.history.push("/");
    }

    render() {
        return (           
            <div className="container login">
                <div className="row justify-content-md-center">
                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-xs-12">
                        <div className="form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email"
                                className="form-control"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={(e) => this.onChange({ email: e.target.value })} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={this.state.password}
                                onChange={(e) => this.onChange({ password: e.target.value })} />
                        </div>
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input"
                                    type="checkbox"
                                    value={this.state.remember}
                                    onChange={(e) => this.onChange({ remember: e.target.checked })} /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-primary" onClick={() => this.onSubmit()}>Submit</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;
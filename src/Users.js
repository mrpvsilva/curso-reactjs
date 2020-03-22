import React, { Component } from 'react';
import UserList from './UserList';
import { Route, Link } from 'react-router-dom';
import User from './User';


class Users extends Component {
    render() {
        const { match } = this.props

        return (
            <div className="row justify-content-md-center" style={{ marginTop: '40px' }}>
                <div className="col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                UserList.map(({ id, nome }) => (
                                    <tr key={id}>
                                        <td>
                                            <Link to={`${match.url}/${id}`}>
                                                {id}
                                            </Link>
                                        </td>
                                        <td>{nome}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12">
                    <Route path={`${match.path}/:id`} component={User} />
                </div>

            </div>
        );
    }
}

export default Users;
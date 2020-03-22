import React, { Component } from 'react';
import UserList from './UserList';

class User extends Component {
    render() {
        const { match } = this.props;

        const user = UserList.find(({ id }) => id === parseInt(match.params.id))


        return (
            <div style={{ marginTop: '20px' }}>
                <h3>{user.nome}</h3>
                <div className="card">
                    <div className="card-header">
                        Cursos
                    </div>
                    <ul className="list-group list-group-flush">
                        {
                            user.cursos.map(c => (
                                <li className="list-group-item" key={c}>{c}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default User;
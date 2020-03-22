import React, { Component } from 'react';
import UserList from './UserList';

class User extends Component {
    render() {
        const { match } = this.props;

        const user = UserList.find(({ id }) => id === parseInt(match.params.id))


        return (
            <div>
                <label>user:</label>{user.nome}
                <ul>
                    {
                        user.cursos.map(c => (
                            <li key={c}>{c}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default User;
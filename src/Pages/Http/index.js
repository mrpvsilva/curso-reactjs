import React, { Component } from 'react';
import http from '../../HttpClient';

class Http extends Component {

    constructor(props) {
        super(props)

        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        http
            .get('https://jsonplaceholder.typicode.com/users')
            .then(({ data: persons }) => this.setState({ persons }));
    }

    componentWillUnmount() {
        http.cancel('Operation canceled by the user.');
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {this.state.persons.map(({ id, name }, i) => <li className={`list-group-item ${i % 2 === 0 ? 'list-group-item-secondary' : ''}`} key={id}>{name}</li>)}
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}

export default Http;
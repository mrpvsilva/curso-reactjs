import React, { Component } from 'react';
import axios from 'axios';

class Http extends Component {

    constructor(props) {
        super(props)

        this.state = {
            persons: []
        }
    }

    

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(({ data: persons }) => this.setState({ persons }))
    }
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {this.state.persons.map(({ id, name }) => <li className="list-group-item" key={id}>{name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Http;
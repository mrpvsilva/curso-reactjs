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
            <div className="row justify-content-md-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12">
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
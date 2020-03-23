import React, { Component } from 'react'
import axios from 'axios';

import './filmes.css'

export default class Filmes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filmes: []
        }
    }


    componentDidMount() {
        axios.get('https://sujeitoprogramador.com/r-api/?api=filmes')
            .then(({ data: filmes }) => this.setState({ filmes }))
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12">
                    <div className="card">
                        <div className="card-header">
                            Filmes
                        </div>
                        <ul className="list-group list-group-flush">
                            {
                                this.state.filmes.map(({ id, nome, foto }) => (
                                    <li className="list-group-item" key={id}>
                                        <p>{nome}</p>
                                        <img src={foto} className="img-thumbnail" alt={nome}></img>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

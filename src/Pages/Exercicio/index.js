import React, { Component } from 'react'
import Pessoa from './pessoa';

export default class Excercicio extends Component {

    pessoas = ["Maria", "joão", "Lucas", "Pedro"];

    render() {
        return (
            <div className="row">
                <div className="col">
                    <h3>Exercício</h3>
                    <hr />
                    {
                        this.pessoas.map((p, i) => <Pessoa key={p} pessoas={this.pessoas} init={this.pessoas[i]} />)
                    }
                </div>
            </div>
        )
    }
}

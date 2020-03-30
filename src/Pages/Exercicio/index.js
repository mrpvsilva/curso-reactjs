import React, { Component } from 'react'
import Pessoa from './pessoa';
import faker from 'faker';

export default class Excercicio extends Component {

    pessoas = [];

    constructor() {
        super();

        for (let i = 0; i < 10; i++)
            this.pessoas.push(faker.name.firstName())
    }

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

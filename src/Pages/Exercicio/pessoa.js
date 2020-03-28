import React, { Component } from 'react'

export default class Pessoa extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pessoa: this.props.init
        }
    }



    handleClick = () => {
        const min = 0;
        const max = this.props.pessoas.length-1;

        const idx = Math.floor(Math.random() * (max - min + 1) + min)
        console.log(idx);

        this.setState({ pessoa: this.props.pessoas[idx] });
    }
    render() {
        return (
            <div className="row" style={{ marginBottom: "10px" }}>
                <div className="col">
                    <p>Nome: {this.state.pessoa}</p>
                    <button className="btn btn-primary" onClick={this.handleClick}>Alterar</button>
                </div>

            </div>
        )
    }
}

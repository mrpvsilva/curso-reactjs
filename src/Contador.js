import React, { Component } from 'react';

class Contador extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contador: 0
        }

        this.increment = this.increment.bind(this);
    }

    increment(value) {
        let state = this.state;
        state.contador += value;

        this.setState(state);
    }
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12">
                    <div className="card ">
                        <div className="card-body ">
                            <h3 className="card-title" style={{ textAlign: 'center' }}> {this.state.contador}</h3>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" style={{ marginRight: '10px' }} onClick={() => this.increment(-1)} >-</button>
                            <button className="btn btn-primary" onClick={() => this.increment(1)}>+</button>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Contador;

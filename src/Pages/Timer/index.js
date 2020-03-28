import React, { Component } from 'react';

class Timer extends Component {
    interval
    constructor(props) {
        super(props);

        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ timer: new Date().toLocaleTimeString() })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12">
                    <h3>Timer: {this.state.timer}</h3>
                </div>
            </div>
        );
    }
}

export default Timer;
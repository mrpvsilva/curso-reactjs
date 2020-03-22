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
            <div>
                <h1>Timer</h1>
                <h3>{this.state.timer}</h3>
            </div>
        );
    }
}

export default Timer;
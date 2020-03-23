import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div>
                <img src="/assets/images/PageNotFound.jpg" style={{ width: 400, height: 400, display: 'block', margin: 'auto', position: 'relative' }} alt="page not found" />
                <center><Link to="/">Return to Home Page</Link></center>
            </div>
        );
    }
}

export default NotFound;
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'


const NotFound = () => {
    return (
        <div>
            <div className="notFound">

            </div>

            <div className="btnNotFound">
                <Link to="/home">
                    <button className="notFoundBtn">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, img, shortDesc } = props.service;
    return (
        <div className="carts">
            <div className="cart">
                <div className="cart-img">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="cart-text">
                    <h3>{name}</h3>
                    <p>{shortDesc}</p>
                    <Link to={`/reservation/${id}`}>
                        <button className="serviceBtn">Reservation</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
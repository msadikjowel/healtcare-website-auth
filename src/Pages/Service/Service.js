import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, img, shortDesc } = props.service;
    return (
        <div className="carts">
            <div className="cart">
                <div className="cart-img">
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="cart-text">
                    <h3>{name}</h3>
                    <p>{shortDesc}</p>
                    <button className="serviceBtn">Reservation</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
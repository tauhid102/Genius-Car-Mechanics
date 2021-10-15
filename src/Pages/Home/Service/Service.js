import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id,name, price, description, img } = service;
    return (
        <div className="col">
            <div className="card">
                <img src={img} class="card-img-top" alt="..."/>
                <div className ="card-body">
                <h5 className ="card-title">{name}</h5>
                <h6>{price}</h6>
                <p className ="card-text">{description}</p>
                <Link to={`/booking/${id}`}><button className="btn-warning btn">Book {name.toLowerCase()}</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default Service;
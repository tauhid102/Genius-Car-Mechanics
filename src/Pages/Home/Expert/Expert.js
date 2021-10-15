import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col">
            <div className="card">
                <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-danger">{expertize}</p>
                </div>
            </div>
        </div>
    );
};

export default Expert;
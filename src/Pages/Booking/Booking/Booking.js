import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceID } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);
    return (
        <div className="container">
            <h1>This booking {serviceID}</h1>
            <div className="card mb-3 w-75">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={service.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{service.name}</h4>
                            <h5 className="card-title">{service.price}</h5>
                            <p className="card-text">{service.description}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
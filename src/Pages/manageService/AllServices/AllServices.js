import React, { useEffect, useState } from 'react';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleDelete = (id) => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const restService=services.filter(service=>service._id!==id);
                setServices(restService);
            })
    }

    return (
        <div className="container mt-3">
            <h2>All Services Manage</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    services.map(service => <div
                        key={service._id}
                    >

                        <div className="col">
                            <div className="card">
                                <img src={service.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{service.name}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-dark">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllServices;
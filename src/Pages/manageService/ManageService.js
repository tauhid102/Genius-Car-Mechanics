import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .thne(data => setServices(data));
    }, [])
    return (
        <div>
            <h1>This is services</h1>
            {
                services.map(service => <div
                    key={service._id}
                    className="row row-cols-1 row-cols-md-2 g-4" >
                    <div class="col">
                        <div class="card">
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageService;
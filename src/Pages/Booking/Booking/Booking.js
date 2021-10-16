import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceID}=useParams();
    return (
        <div>
            <h1>This booking {serviceID}</h1>
        </div>
    );
};

export default Booking;
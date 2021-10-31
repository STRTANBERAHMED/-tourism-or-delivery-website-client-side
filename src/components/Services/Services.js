import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://afternoon-ocean-08044.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container my-3">
            <div className="text-center">
                <h1>Our Plans</h1>
            </div>
            <div className="row">
                {
                    services.map(service =>
                        <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
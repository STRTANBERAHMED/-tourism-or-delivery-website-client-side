import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Services from '../Services/Services';

const ManageServices = () => {
    const { id } = useParams()
    const [manageServices, setManageServices] = useState([])
    const [specific, setSpecific] = useState({})

    useEffect(() => {
        fetch("https://afternoon-ocean-08044.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setManageServices(data))
    }, [])

    useEffect(() => {
        if (manageServices.length > 0) {
            const matchedData = manageServices.find(item => item._id == id)
            setSpecific(matchedData)
        }

    }, [manageServices]);

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={specific?.picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{specific?.name}</h5>
                        <p className="card-text">{specific?.season}</p>
                        <p className="card-text">${specific?.price}</p>
                        <button className="btn btn-dark">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;
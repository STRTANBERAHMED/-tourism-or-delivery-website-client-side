import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';;

const ManageOrders = () => {
    const { id } = useParams()
    const [manageOrders, setManageOrders] = useState([])
    const [specific, setSpecific] = useState({})

    useEffect(() => {
        fetch("https://afternoon-ocean-08044.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [])

    useEffect(() => {
        if (manageOrders.length > 0) {
            const matchedData = manageOrders.find(item => item._id == id)
            setSpecific(matchedData)
        }

    }, [manageOrders]);

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

export default ManageOrders;
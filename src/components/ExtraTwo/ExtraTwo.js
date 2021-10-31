import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faMountain, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './ExtraTwo.css'

const ExtraTwo = () => {

    // font awesome
    const destination = <FontAwesomeIcon icon={faCloud} />
    const trip = <FontAwesomeIcon icon={faMountain} />
    const positive = <FontAwesomeIcon icon={faPlus} />
    const negative = <FontAwesomeIcon icon={faMinus} />

    return (
        <div className="container">
            <div className="count row p-4 mt-5">
                <div className="list p-2 col-md-3 text-center">
                    <h2>{destination}</h2>
                    <h1>35K</h1>
                    <p>Total Destination</p>
                </div>
                <div className="list p-2 col-md-3 text-center">
                    <h2>{trip}</h2>
                    <h1>564+</h1>
                    <p>Total Trip</p>
                </div>
                <div className="list p-2 col-md-3 text-center">
                    <h2>{positive}</h2>
                    <h1>150K</h1>
                    <p>Positive Review</p>
                </div>
                <div className="list p-2 col-md-3 text-center">
                    <h2>{negative}</h2>
                    <h1>1k</h1>
                    <p>Negative Review</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraTwo;
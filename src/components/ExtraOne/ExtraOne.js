import React from 'react';
import image from '../../images/Traveling.png';

const ExtraOne = () => {
    return (
        <div className="container">
            <div className="mx-5 d-flex">
                <div className="col-md-7">
                    <img style={{ width: '75%' }} src={image} alt="" />
                </div>
                <div className="col-md-5 mt-5 pt-5 text-dark text-start">
                    <h3>Get Lost With Us</h3>
                    <h1>Let’s Get Lost and Find Paradise</h1>
                    <p>The Turkey tourist e-Pass is rapidly growing in popularity with visitors thanks to huge savings and many attractions, museums, and experiences. After a few slow years, the tourism industry in Turkey is up and running again at full pace! We try to offer visitors the best tours, packages, experiences, and value for money. So, no matter your holiday style or budget, you will find the tour you want and see the beautiful cities your way! But we think this Turkey e-pass is worth looking at. See Our website here, or read on to find out why you need it when visiting Turkey.</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraOne;
import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark p-5 mt-5 text-white">
            <h1>Contact Info</h1>
            <div className="d-flex justify-content-center mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Address</h3>
                        <p>1st Avenue, Karabuk, NY10168, Turkey</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Phone</h3>
                        <p>7546-9123</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Email</h3>
                        <p>contact@dreamland.com</p>
                    </div>
                </div>
            </div>
            <p>©2021. Dreamland. All rights reserved. Turkey.</p>
        </div>
    );
};

export default Footer;
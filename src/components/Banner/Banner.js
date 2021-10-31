import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/picture1.jpg';
import banner2 from '../../images/banner/picture2.jpg';
import banner3 from '../../images/banner/picture3.jpg';


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Turkey</h3>
                        <p>Grab your Dreams with us</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Turkey</h3>
                        <p>Grab your Dreams with us</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Turkey</h3>
                        <p>Grab your Dreams with us</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
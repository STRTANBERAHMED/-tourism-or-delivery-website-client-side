import React from 'react';
import Banner from '../Banner/Banner';
import ExtraOne from '../ExtraOne/ExtraOne';
import ExtraTwo from '../ExtraTwo/ExtraTwo';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ExtraOne></ExtraOne>
            <ExtraTwo></ExtraTwo>
        </div>
    );
};

export default Home;
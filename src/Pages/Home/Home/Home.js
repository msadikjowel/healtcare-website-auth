import React from 'react';
import ExtraDetails from '../../ExtraDetails/ExtraDetails';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ExtraDetails></ExtraDetails>
        </div>
    );
};

export default Home;
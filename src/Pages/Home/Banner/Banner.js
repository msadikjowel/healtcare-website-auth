import React from 'react';
import './Banner.css'
import banner from './../../../image/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="banner-img"></div>
            <div className="banner-text">
                <h1>Great therafy. <span>Better lives.</span>
                </h1>
            </div>
        </div>
    );
};

export default Banner;
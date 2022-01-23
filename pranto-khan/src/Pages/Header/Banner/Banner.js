import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='container'>
            <div className="hero-section">
                <div className="intro-text">
                    <h6>12 YEARS EXPERIENCED</h6>
                    <h1 className='fw-bold'>Leading, Trusted. <br /> Enabling growth.</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br /> tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="discover-more-btn">
                        <button className='discover-more'>Discover More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;
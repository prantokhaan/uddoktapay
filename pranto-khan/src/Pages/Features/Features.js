import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div className='container my-5'>
            <div className="features text-center mt-5">
                <h5>FEATURED</h5>
            </div>
            <div className="futers-title text-center mb-5">
                <h1>Smart Solution for Your Payment</h1>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-4">
                <div className="div">
                    <div className="items">
                        <div className="p-3 card-item">
                            <div className="icon"><h6>icopns</h6></div>
                            <h3>Payment Methods</h3>
                            <p>Metus ridiculus maximus est facilisi dolor ante penatibus cursus litora</p>
                            <div className="learn-more-btn">
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div">
                    <div className="items">
                        <div className="p-3 card-item">
                            <div className="icon"><h6>icopns</h6></div>
                            <h3>Payment Methods</h3>
                            <p>Metus ridiculus maximus est facilisi dolor ante penatibus cursus litora</p>
                            <div className="learn-more-btn">
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div">
                    <div className="items">
                        <div className="p-3 card-item">
                            <div className="icon"><h6>icopns</h6></div>
                            <h3>Payment Methods</h3>
                            <p>Metus ridiculus maximus est facilisi dolor ante penatibus cursus litora</p>
                            <div className="learn-more-btn">
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Features;
import React from 'react';
import './AboutUs.css';
import img from '../../Images/page-5.png';

const AboutUs = () => {
    return (
        <div className='about-bg'>
            <div className="container">
                <div className="row row-cols-lg-2 g-4">
                    <div className="about-us">
                        <div className="div">
                            <h6>WHY CHOOSE US</h6>
                            <h1 className='fw-bold'>The better we know you, <br /> the more we can do.</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit <br /> tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                        <div className="about-info">
                            <div className="bord">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <div className="icons">
                                            <i class="far p-3 fs-1 fa-arrow-alt-circle-right"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <h5>Easy to Setup</h5>
                                        <p>
                                            Imperdiet fusce pede nec ipsum quis placerat nunc eros ante risus laoreet
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bord">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <div className="icons">
                                            <i class="far p-3 fs-1 fa-arrow-alt-circle-right"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <h5>Easy to Setup</h5>
                                        <p>
                                            Imperdiet fusce pede nec ipsum quis placerat nunc eros ante risus laoreet
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bord">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <div className="icons">
                                            <i class="far p-3 fs-1 fa-arrow-alt-circle-right"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <h5>Easy to Setup</h5>
                                        <p>
                                            Imperdiet fusce pede nec ipsum quis placerat nunc eros ante risus laoreet
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="about-img">
                        <div className="img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
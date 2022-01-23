import React from 'react';
import './Phones.css';
import phone from '../../Images/phone_mockup.png';
import img1 from '../../Images/Google-Play_button.png';
import img2 from '../../Images/App-Store_button.png';

const Phones = () => {
    return (
        <div className='phones'>
            <div className="container">
                <div className="row row-cols-lg-2 g-4">
                    <div className="phone-img">
                        <div className="phone">
                            <img src={phone} alt="" />
                        </div>
                    </div>
                    <div className="phone-info">
                        <div className="phone-text">
                            <h6>MOBILE APP</h6>
                            <h1 className='fw-bold'>
                                Moxpay app available. Easy to control everywhere.
                            </h1>
                            <p className='py-3'>
                                Aliquam pretium dictumst imperdiet potenti tempor sit molestie <br /> fringilla platea duis commodo
                            </p>
                            <div className="d-flex">
                                <img src={img1} className='pe-3' alt="" />
                                <img src={img2} className='' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phones;
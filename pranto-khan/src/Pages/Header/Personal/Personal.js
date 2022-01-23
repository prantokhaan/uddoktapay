import React from 'react';
import './Personal.css';


const Personal = () => {
    return (
        <div className='container parsonal'>
            <div className="row row-cols-lg-2 g-4">
                <div className="left">
                    <div className="bg-info left-bg">
                        <div className="row p-4">
                            <div className="icon col-lg-3">
                                <h4 className='p-5'>omar</h4>
                            </div>
                            <div className="info col-lg-9">
                                <h1>Personal Account</h1>
                                <p>Metus ridiculus maximus est facilisi dolor ante <br /> penatibus cursus litora</p>
                                <div className="button">
                                    <button className='common-btn'>Get start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="bg-success left-bg">
                        <div className="row p-4">
                            <div className="icon col-lg-3">
                                <h4 className='p-5'>omar</h4>
                            </div>
                            <div className="info col-lg-9">
                                <h1>Personal Account</h1>
                                <p>Metus ridiculus maximus est facilisi dolor ante <br /> penatibus cursus litora</p>
                                <div className="button">
                                    <button className='common-btn'>Get start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Personal;
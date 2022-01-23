import React from 'react';
import './Blog.css';
import blogImg1 from '../../Images/small-business-owner-behind-the-counter-of-a-sandwich-bar.jpg';
import blogImg2 from '../../Images/young-adult-african-american-girl-sitting-indoors-doing-mobile-payment-online--e1629443172975.jpg';
import blogImg3 from '../../Images/making-easy-online-payments-while-drinking-coffee-e1629443123771.jpg';


const Blog = () => {
    return (
        <div className='container blog'>
            <div className="news">
                <div className="">
                    <h6>INSIGHT</h6>
                    <h2 className="fw-bold"> Latest Article</h2>
                </div>
                <div className="more">
                    <button className='more-btn'>More news</button>
                </div>
            </div>

            <div className="row row-cols-lg-3 g-4">
                <div className="blog-card mt-5">
                    <div className="blog-item">
                        <img src={blogImg1} alt="" className="img-fluid overflow-hidden" />
                        <div className="blog-title p-3">
                            <h5 className='py-2 blog-header'>
                                Small Business Confidence Index Finds SMBs More Optimistic and Focused on Digitization
                            </h5>
                            <p className='py-2'><small>August 18, 2021</small></p>
                            <p className='py-'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            </p>
                        </div>
                    </div>
                </div>
                <div className="blog-card mt-5">
                    <div className="blog-item">
                        <img src={blogImg2} alt="" className="img-fluid overflow-hidden" />
                        <div className="blog-title p-3">
                            <h5 className='py-2 blog-header'>
                                Small Business Confidence Index Finds SMBs More Optimistic and Focused on Digitization
                            </h5>
                            <p className='py-2'><small>August 18, 2021</small></p>
                            <p className='py-'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            </p>
                        </div>
                    </div>
                </div>
                <div className="blog-card mt-5">
                    <div className="blog-item">
                        <img src={blogImg3} alt="" className="img-fluid overflow-hidden" />
                        <div className="blog-title p-3">
                            <h5 className='py-2 blog-header'>
                                Small Business Confidence Index Finds SMBs More Optimistic and Focused on Digitization
                            </h5>
                            <p className='py-2'><small>August 18, 2021</small></p>
                            <p className='py-'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;
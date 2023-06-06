import React from 'react';
import {Link} from 'react-router-dom';

const Contact = () => {
	return (
		<>

			{/*<!-- Page Banner Section Start -->*/}
    <div className="section page-banner-section" style={{backgroundImage: 'url(../assets/images/page-banner.jpg)'}}>
        <div className="container">
            {/*<!-- Page Banner Content End -->*/}
            <div className="page-banner-content">
                <h2 className="title">Contact Us</h2>

                <ul className="breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Contact Us</li>
                </ul>
            </div>
            {/*<!-- Page Banner Content End -->*/}
        </div>
    </div>
    {/*<!-- Page Banner Section End -->*/}

    {/*<!-- Contact Section Start -->*/}
    <div className="section section-padding">
        <div className="container">
            {/*<!-- Contact Wrapper Start -->*/}
            <div className="contact-wrapper">
                <div className="row gx-0">
                    <div className="col-lg-4">
                        <div className="contact-info">
                            <h2 className="title">Contact Info</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit sed eiusmod
                            </p>

                            {/*<!-- Contact Info Items Start -->*/}
                            <div className="contact-info-items">
                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="pe-7s-call"></i>
                                    </div>
                                    <div className="info-content">
                                        <p>
                                            <Link to="tel:+00125458222">+00 125 458 222</Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="pe-7s-mail"></i>
                                    </div>
                                    <div className="info-content">
                                        <p>
                                            <Link to="mailto:demo@yourmail.com">demo@yourmail.com</Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="single-contact-info">
                                    <div className="info-icon">
                                        <i className="pe-7s-map-marker"></i>
                                    </div>
                                    <div className="info-content">
                                        <p>Your Address Goese Here</p>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Contact Info Items End -->*/}

                            {/*<!-- Contact Social Start -->*/}
                            <ul className="social">
                                <li>
                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-tumblr"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-facebook-f"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-instagram"></i></Link>
                                </li>
                            </ul>
                            {/*<!-- Contact Social End -->*/}

                            <img src="../assets/images/contact-info.png" alt="Contact-info" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {/*<!-- Contact Form Start  -->*/}
                        <div className="contact-form">
                            <form id="contact-form" action="" method="post">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-form">
                                            <input type="text" name="name" placeholder="Name*" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form">
                                            <input type="email" name="email" placeholder="Email*" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form">
                                            <input type="text" name="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-form">
                                            <input type="text" name="phone" placeholder="Phone No" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="single-form">
                                            <textarea name="message" placeholder="Write your comments here"></textarea>
                                        </div>
                                    </div>
                                    <p className="form-message"></p>
                                    <div className="col-md-12">
                                        <div className="single-form">
                                            <button type="submit" className="btn btn-dark btn-hover-primary">
                                                Submit Review
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*<!-- Contact Form End  -->*/}
                    </div>
                </div>
            </div>
            {/*<!-- Contact Wrapper End -->*/}
        </div>
    </div>
    {/*<!-- Contact Section End -->*/}

    {/*<!-- Contact Map Start -->*/}
    <div className="contact-map">
        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
    </div>
    {/*<!-- Contact Map End -->*/}
			
		</>
	)
}

export default Contact
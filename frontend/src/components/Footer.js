import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import ReactStars from 'react-rating-stars-component';

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation,FreeMode,Thumbs } from "swiper";

const options = {
    edit: false,
    color: "#dbdbdb",
    activeColor: "#f2a100",
    value: 2.5,
    isHalf: true,
}

const Footer = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (
		<div>
				
				{/*<!-- Footer Section Start -->*/}
    <div className="section footer-section">
        {/*<!-- Footer Top Start -->*/}
        {/*<div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-md-4">
                        <!-- Footer Logo Start -->
                        <div className="footer-logo">
                            <Link to="/"><img src="../assets/images/logo.png" width="154" height="46" alt="Logo" /></Link>
                        </div>
                        <!-- Footer Logo End -->
                    </div>
                    <div className="col-xl-5 col-md-8">
                        <!-- Footer Contact & Payment End -->
                        <div className="footer-contact-payment">
                            <div className="footer-contact">
                                <div className="contact-icon">
                                    <img src="../assets/images/icon/icon-4.png" width="39" height="46" alt="Icon" />
                                </div>

                                <div className="contact-content">
                                    <h6 className="title">Call Us:</h6>
                                    <p>00 123 456 789</p>
                                </div>
                            </div>
                            <div className="footer-payment">
                                <img src="../assets/images/payment.png" width="192" height="21" alt="Payment" />
                            </div>
                        </div>
                        <!-- Footer Contact & Payment End -->
                    </div>
                    <div className="col-xl-5">
                        <!-- Footer Subscribe End -->
                        <div className="footer-subscribe">
                            <span className="title">Subscribe Now :</span>
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Your Mail" />
                                    <button>
                                        <i className="pe-7s-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <!-- Footer Subscribe End -->
                    </div>
                </div>
            </div>
        </div>*/}
        {/*<!-- Footer Top End -->*/}

        {/*<!-- Footer Widget Section Start -->*/}
        <div className="footer-widget-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        {/*<!-- Footer Widget Start -->*/}
                        <div className="footer-widget">
                            <h4 className="footer-widget-title">Customer Service</h4>

                            <ul className="footer-link">
                                <li><Link to="">Payment Methods</Link></li>
                                <li><Link to="">Money-back guarantee!</Link></li>
                                <li><Link to="">Returns-Shipping</Link></li>
                                <li><Link to="">Terms and conditions</Link></li>
                                <li><Link to="">Privacy Policy</Link></li>
                            </ul>
                        </div>
                        {/*<!-- Footer Widget End -->*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        {/*<!-- Footer Widget Start -->*/}
                        <div className="footer-widget">
                            <h4 className="footer-widget-title">Information</h4>

                            <ul className="footer-link">
                                <li><Link to="/about">About</Link></li>
                                <li>
                                    <Link to="/shop">How to Shop</Link>
                                </li>
                                <li><Link to="">FAQ</Link></li>
                                <li><Link to="/contact">Contact us</Link></li>
                                <li><Link to="/login">Log in</Link></li>
                            </ul>
                        </div>
                        {/*<!-- Footer Widget End -->*/}
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        {/*<!-- Footer Widget Start -->*/}
                        <div className="footer-widget">
                            <h4 className="footer-widget-title">My Account</h4>

                            <ul className="footer-link">
                                <li><Link to="/register">Sign In</Link></li>
                                <li><Link to="">View Cart</Link></li>
                                <li><Link to="">My Wishlist</Link></li>
                                <li><Link to="">Track My Order</Link></li>
                                <li><Link to="">Help</Link></li>
                            </ul>
                        </div>
                        {/*<!-- Footer Widget End -->*/}
                    </div>
                    <div className="col-lg-2 col-md-5 col-sm-6">
                        {/*<!-- Footer Widget Start -->*/}
                        <div className="footer-widget">
                            <h4 className="footer-widget-title">Our Stores</h4>

                            <ul className="footer-link">
                                <li><Link to="">New aYork</Link></li>
                                <li><Link to="">London SF</Link></li>
                                <li><Link to="">Cockfosters BP</Link></li>
                                <li><Link to="">Los Angeles</Link></li>
                                <li><Link to="">Chicago</Link></li>
                            </ul>
                        </div>
                        {/*<!-- Footer Widget End -->*/}
                    </div>
                    <div className="col-lg-3 col-md-7">
                        {/*<!-- Footer Widget Start -->*/}
                        <div className="footer-widget">
                            <h4 className="footer-widget-title">About Us</h4>

                            <div className="widget-about">
                                <p>
                                    Lorem ipsum dolor sit amet consect adipisicing
                                    elit sed do eiusmod temp incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim
                                </p>
                            </div>
                            <div className="widget-social">
                                <ul>
                                    <li>
                                        <Link to=""><i className="fa fa-twitter"></i></Link>
                                    </li>
                                    <li>
                                        <Link to=""><i className="fa fa-tumblr"></i></Link>
                                    </li>
                                    <li>
                                        <Link to=""><i className="fa fa-facebook"></i></Link>
                                    </li>
                                    <li>
                                        <Link to=""><i className="fa fa-instagram"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/*<!-- Footer Widget End -->*/}
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- Footer Widget End -->*/}

        {/*<!-- Footer Copyright End -->*/}
        <div className="copyright">
            <div className="container">
                <div className="copyright-text">
                    <p>
                        &copy; 2023 <span> KBM </span>{/* Made with
                        <i className="fa fa-heart" aria-hidden="true"></i> by
                        <Link to="#"></Link>*/}
                    </p>
                </div>
            </div>
        </div>
        {/*<!-- Footer Copyright End -->*/}
    </div>
    {/*<!-- Footer Section End -->*/}

    {/*<!--Back To Start-->*/}
    <button id="backBtn" className="back-to-top"><i className="pe-7s-angle-up"></i></button>
    {/*<!--Back To End-->*/}
    
{/*<!-- Quick View Start -->*/}
    <div className="modal fade" id="quickView">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-6">
                            {/*<!-- Quick View Images Start -->*/}
                            <div className="quick-view-images">
                                {/*<!-- Quick Gallery Images Start -->*/}
                                <div className="quick-gallery-images">
                                    <div className="swiper-container">
                                    <Swiper
                                        style={{
                                          // "--swiper-navigation-color": "#fff",
                                          // "--swiper-pagination-color": "#fff",
                                          "marginBottom" : '10px',
                                        }}
                                        loop={true}
                                        spaceBetween={10}
                                        navigation={true}
                                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper2"
                                      >
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="single-img">
                                                    <img src="../assets/images/product-details/product-details-1.jpg" alt="Product Image" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="single-img">
                                                    <img src="../assets/images/product-details/product-details-2.jpg" alt="Product Image" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="single-img">
                                                    <img src="../assets/images/product-details/product-details-3.jpg" alt="Product Image" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="single-img">
                                                    <img src="../assets/images/product-details/product-details-4.jpg" alt="Product Image" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="swiper-slide">
                                                <div className="single-img">
                                                    <img src="../assets/images/product-details/product-details-5.jpg" alt="Product Image" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                      >
                                        <SwiperSlide>
                                                <img src="../assets/images/product-details/product-details-1.jpg" alt="Product Thumbnail" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <img src="../assets/images/product-details/product-details-2.jpg" alt="Product Thumbnail" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <img src="../assets/images/product-details/product-details-3.jpg" alt="Product Thumbnail" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <img src="../assets/images/product-details/product-details-4.jpg" alt="Product Thumbnail" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                                <img src="../assets/images/product-details/product-details-5.jpg" alt="Product Thumbnail" />
                                        </SwiperSlide>                                     
                                    </Swiper>
                                        
                                    </div>
                                    
                                </div>
                                {/*<!-- Quick Gallery Thumbs End -->*/}
                            </div>
                            {/*<!-- Quick View Images End -->*/}
                        </div>
                        <div className="col-lg-6">
                            {/*<!-- Quick View Description Start -->*/}
                            <div className="quick-view-description">
                                <h4 className="product-name">
                                    Your Products Name Here.
                                </h4>
                                <div className="price">
                                    <span className="sale-price">$240.00</span>
                                    <span className="old-price">$290.00</span>
                                </div>
                                <div className="review-wrapper">
                                    <ReactStars {...options} />
                                    {/*<div className="review-star">
                                        <div className="star" style={{width: '80%'}}></div>
                                    </div>*/}
                                    <p>( 1 Customer Review )</p>
                                </div>
                                <div className="product-color">
                                    <span className="lable">Color:</span>
                                    <ul>
                                        <li>
                                            <input type="radio" name="colors" id="quick-color1" />
                                            <label htmlFor="quick-color1"><span className="color-blue"></span></label>
                                        </li>
                                        <li>
                                            <input type="radio" name="colors" id="quick-color2" />
                                            <label htmlFor="quick-color2"><span className="color-gray"></span></label>
                                        </li>
                                        <li>
                                            <input type="radio" name="colors" id="quick-color3" />
                                            <label htmlFor="quick-color3"><span
                                                className="color-dark-blue"
                                            ></span></label>
                                        </li>
                                        <li>
                                            <input type="radio" name="colors" id="quick-color4" />
                                            <label htmlFor="quick-color4"><span
                                                className="color-gray-dark"
                                            ></span></label>
                                        </li>
                                    </ul>
                                </div>

                                <p>
                                    Lorem ipsum dolor sit amet, consectet
                                    adipisicing elit, sed do eiusmod temporf
                                    incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, quis tyu nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate.
                                </p>

                                <div className="product-meta">
                                    <div className="product-quantity d-inline-flex">
                                        <button type="button" className="sub">-</button>
                                        <input type="text" defaultValue="1" />
                                        <button type="button" className="add">+</button>
                                    </div>
                                    <div className="meta-action">
                                        <button className="btn btn-dark btn-hover-primary">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="meta-action">
                                        <Link className="action" to="#"><i className="pe-7s-like"></i></Link>
                                    </div>
                                    <div className="meta-action">
                                        <Link className="action" to="#"><i className="pe-7s-shuffle"></i></Link>
                                    </div>
                                </div>

                                <div className="product-info">
                                    <div className="single-info">
                                        <span className="lable">SKU:</span>
                                        <span className="value">Ch-256xl</span>
                                    </div>
                                    <div className="single-info">
                                        <span className="lable">Categories:</span>
                                        <span className="value"
                                        ><Link to="#">Office,</Link>
                                        <Link to="#">Home</Link></span>
                                    </div>
                                    <div className="single-info">
                                        <span className="lable">tag:</span>
                                        <span className="value"
                                        ><Link to="#">Furniture</Link></span>
                                    </div>
                                    <div className="single-info">
                                        <span className="lable">Share:</span>
                                        <ul className="social">
                                            <li>
                                                <Link to="#"><i className="fa fa-facebook-f"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="fa fa-dribbble"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i
                                                    className="fa fa-pinterest-p"
                                                ></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#"><i className="fa fa-linkedin"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Quick View Description End -->*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Quick View End -->*/}
		</div>
	)
}

export default Footer
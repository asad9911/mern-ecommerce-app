import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import { Pagination } from "swiper";
const About = () => {
	return (
		<>
			
			{/*<!-- Page Banner Section Start -->*/}
    <div className="section page-banner-section" style={{backgroundImage: 'url(../assets/images/page-banner.jpg)'}}>
        <div className="container">
            {/*<!-- Page Banner Content End -->*/}
            <div className="page-banner-content">
                <h2 className="title">About Us</h2>

                <ul className="breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">About Us</li>
                </ul>
            </div>
            {/*<!-- Page Banner Content End -->*/}
        </div>
    </div>
    {/*<!-- Page Banner Section End -->*/}

    {/*<!-- History Section Start -->*/}
    <div className="section section-padding-02">
        <div className="container">
            {/*<!-- History content End -->*/}
            <div className="history-content text-center">
                <div className="section-title-03">
                    <h6 className="sub-title">Our History</h6>
                    <h2 className="title">Furbar Furniture Shop</h2>
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectet adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nullaotho pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natusxcl error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dictapteo sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos
                    qui ratione voluptatem drt sequi nesciunt. Neque porro
                    quisquam est, qui dolorem ipsum quia dolor sit amet,
                    consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem.
                </p>
            </div>
            {/*<!-- History content End -->*/}

            {/*<!-- History Icon End -->*/}
            <div className="history-icon text-center">
                <img src="../assets/images/icon/icon-5.jpg" alt="Icon" />
            </div>
            {/*<!-- History Icon End -->*/}
        </div>
    </div>
   {/* <!-- History Section End -->*/}

   {/* <!-- Images Gallery Section Start -->*/}
    <div className="section section-padding-02">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {/*<!-- Image Gallery Start -->*/}
                    <div className="image-gallery">
                        <img src="../assets/images/images-gallery/image-1.jpg" width="770" height="290" alt="gallery" />
                    </div>
                   {/*<!-- Image Gallery End -->*/}
                </div>
                <div className="col-lg-4">
                    {/*<!-- Image Gallery Start -->*/}
                    <div className="image-gallery">
                        <img src="../assets/images/images-gallery/image-2.jpg" width="370" height="290" alt="gallery" />
                    </div>
                   {/*<!-- Image Gallery End -->*/}
                </div>
                <div className="col-lg-6">
                    {/*<!-- Image Gallery Start -->*/}
                    <div className="image-gallery">
                        <img src="../assets/images/images-gallery/image-3.jpg" height="570" height="290" alt="gallery" />
                    </div>
                   {/*<!-- Image Gallery End -->*/}
                </div>
                <div className="col-lg-6">
                    {/*<!-- Image Gallery Start -->*/}
                    <div className="image-gallery">
                        <img src="../assets/images/images-gallery/image-4.jpg" width="570" height="290" alt="gallery" />
                    </div>
                   {/*<!-- Image Gallery End -->*/}
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Images Gallery Section End -->*/}

    {/*<!-- Counter Section Start -->*/}
    <div className="section section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-6">
                    {/*<!-- Single Counter Start -->*/}
                    <div className="single-counter">
                        <span className="count">
                            {/*<Counter start={0} end={21} delay={10} />*/}
                            <sub>+</sub>
                        </span>
                        <p>Years of Exprience</p>
                    </div>
                    {/*<!-- Single Counter End -->*/}
                </div>
                <div className="col-lg-3 col-6">
                    {/*<!-- Single Counter Start -->*/}
                    <div className="single-counter">
                       <span className="count">
                            {/*<Counter start={0} end={30} delay={10} />*/}
                            <sub>K</sub>
                        </span>
                        <p>Happy Customers</p>
                    </div>
                    {/*<!-- Single Counter End -->*/}
                </div>
                <div className="col-lg-3 col-6">
                    {/*<!-- Single Counter Start -->*/}
                    <div className="single-counter">
                        <span className="count">
                            {/*<Counter start={0} end={15} delay={10} />*/}
                            <sub>+</sub>
                        </span>
                        <p>Award Winner</p>
                    </div>
                    {/*<!-- Single Counter End -->*/}
                </div>
                <div className="col-lg-3 col-6">
                    {/*<!-- Single Counter Start -->*/}
                    <div className="single-counter">
                        <span className="count">
                            {/*<Counter start={0} end={30} delay={10} />*/}
                            <sub>%</sub>
                        </span>
                        <p>Products Guranteed</p>
                    </div>
                    {/*<!-- Single Counter End -->*/}
                </div>
            </div>
        </div>
    </div>
   {/* <!-- Counter Section End -->*/}

    {/*<!-- Testimonial Section Start -->*/}
    <div className="section section-padding bg-color-02">
        <div className="container">
            {/*<!-- Testimonial Wrapper Start -->*/}
            <div className="testimonial-wrapper testimonial-active">
                <div className="swiper-container">
                <Swiper
		        spaceBetween={30}
		        pagination={{
		          clickable: true,
		        }}
		        modules={[Pagination]}
		        className="mySwiper"
		      >
		        <SwiperSlide>
		        	<div className="single-testimonial swiper-slide">
                        <img className="quote" src="../assets/images/icon/quote.png" alt="Icon" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore dolorelo magna aliqua.
                            Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit
                        </p>
                        <img className="author-thumb" src="../assets/images/author-1.jpg" width="100" height="100" alt="Author" />
                        <h6 className="name">Taelynn Thorpe</h6>
                        <span className="designation">Customer</span>
                    </div>
		        </SwiperSlide>
		        <SwiperSlide>
		        	<div className="single-testimonial swiper-slide">
                        <img className="quote" src="../assets/images/icon/quote.png" alt="Icon" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore dolorelo magna aliqua.
                            Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit
                        </p>
                        <img className="author-thumb" src="../assets/images/author-1.jpg" width="100" height="100" alt="Author" />
                        <h6 className="name">Taelynn Thorpe</h6>
                        <span className="designation">Customer</span>
                    </div>
		        </SwiperSlide>
		        <SwiperSlide>
		        	<div className="single-testimonial swiper-slide">
                        <img className="quote" src="../assets/images/icon/quote.png" alt="Icon" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore dolorelo magna aliqua.
                            Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit
                        </p>
                        <img className="author-thumb" src="../assets/images/author-1.jpg" width="100" height="100" alt="Author" />
                        <h6 className="name">Taelynn Thorpe</h6>
                        <span className="designation">Customer</span>
                    </div>
		        </SwiperSlide>
		      </Swiper>
                    
                    {/*<!-- Add Pagination -->*/}
                    {/*<div className="swiper-pagination"></div>*/}
                </div>
            </div>
            {/*<!-- Testimonial Wrapper End -->*/}
        </div>
    </div>
    {/*<!-- Testimonial Section End -->*/}

    {/*<!-- Team Section Start -->*/}
    <div className="section section-padding-02">
        <div className="container">
            {/*<!-- Section Title Start -->*/}
            <div className="section-title-03 text-center">
                <h6 className="sub-title">Our Team</h6>
                <h2 className="title">Meet Our Team</h2>
            </div>
            {/*<!-- Section Title End -->*/}

            <div className="team-wrapper">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        {/*<!-- Single Team Satrt -->*/}
                        <div className="single-team">
                            <div className="team-images">
                                <img src="../assets/images/team/team-1.jpg" width="370" height="406" alt="Team" />
                            </div>
                            <div className="team-content">
                                <h5 className="name">Makiyah Yeager</h5>
                                <span className="designation">Customer</span>
                            </div>
                        </div>
                        {/*<!-- Single Team End -->*/}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/*<!-- Single Team Satrt -->*/}
                        <div className="single-team">
                            <div className="team-images">
                                <img src="../assets/images/team/team-2.jpg" width="370" height="406" alt="Team" />
                            </div>
                            <div className="team-content">
                                <h5 className="name">Taelynn Thorpe</h5>
                                <span className="designation">Customer</span>
                            </div>
                        </div>
                        {/*<!-- Single Team End -->*/}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/*<!-- Single Team Satrt -->*/}
                        <div className="single-team">
                            <div className="team-images">
                                <img src="../assets/images/team/team-3.jpg" width="370" height="406" alt="Team" />
                            </div>
                            <div className="team-content">
                                <h5 className="name">Sara Koivisto</h5>
                                <span className="designation">Customer</span>
                            </div>
                        </div>
                        {/*<!-- Single Team End -->*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Team Section End -->*/}

    {/*<!-- Brand Logo Section Start -->*/}
    <div className="section section-padding">
        <div className="container">
            <div className="brand-row">
                <div className="brand-col">
                    {/*<!-- Single Brand Start -->*/}
                    <div className="single-brand">
                        <img src="../assets/images/brand/brand-1.png" width="118" height="87" alt="brand" />
                    </div>
                    {/*<!-- Single Brand Start -->*/}
                </div>

                <div className="brand-col">
                    {/*<!-- Single Brand Start -->*/}
                    <div className="single-brand">
                        <img src="../assets/images/brand/brand-2.png" width="118" height="87" alt="brand" />
                    </div>
                    {/*<!-- Single Brand Start -->*/}
                </div>

                <div className="brand-col">
                    {/*<!-- Single Brand Start -->*/}
                    <div className="single-brand">
                        <img src="../assets/images/brand/brand-3.png" width="118" height="87" alt="brand" />
                    </div>
                    {/*<!-- Single Brand Start -->*/}
                </div>

                <div className="brand-col">
                    {/*<!-- Single Brand Start -->*/}
                    <div className="single-brand">
                        <img src="../assets/images/brand/brand-4.png" width="118" height="87" alt="brand" />
                    </div>
                    {/*<!-- Single Brand Start -->*/}
                </div>

                <div className="brand-col">
                    {/*<!-- Single Brand Start -->*/}
                    <div className="single-brand">
                        <img src="../assets/images/brand/brand-5.png" width="118" height="87" alt="brand" />
                    </div>
                    {/*<!-- Single Brand Start -->*/}
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Brand Logo Section End -->*/}

		</>
	)
}

export default About
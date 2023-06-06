import React,{useRef,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import MetaData from '../components/MetaData.js';
import { clearErrors, getProduct } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader.js";
import { useAlert } from "react-alert";
import { getAllCategories } from "../actions/categoryAction";
// Import Swiper styles
// import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade,Autoplay,Navigation,Pagination,FreeMode,Thumbs } from "swiper";

const Home = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);
    const { categories } = useSelector((state) => state.categories);

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getProduct());
        dispatch(getAllCategories());
    }, [dispatch, error, alert]);

	return (
		<>

        {
            loading? ( <Loader />) :(

               <>

        <MetaData title="Home" />
			
			{/*<!-- Slider Section Start -->*/}
    <div className="section slider-section">
        <div className="slider-shape"></div>

        <div className="container">
            <div className="slider-active">
                <div className="swiper-container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                    effect={"fade"}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: true,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    loop={true}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      1024: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                    }}
                    modules={[ EffectFade,Autoplay,Navigation,Pagination ]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                        {/*<!-- Single Slider Start  -->*/}
                        <div className="single-slider swiper-slide">
                            {/*<!-- Slider Content Start -->*/}
                            <div className="slider-content">
                                <h2 className="title">
                                    New Stylish <br />
                                        Decore Furniture
                                </h2>
                                <p>
                                    Unique Furniture Style Design for Your
                                    Family
                                </p>
                                <Link to="/shop" className="btn btn-primary btn-hover-dark btn-margin">purchase now</Link>
                            </div>
                            {/*<!-- Slider Content End -->*/}

                            {/*<!-- Slider images Start -->*/}
                            <div className="slider-images">
                                <img src="../assets/images/slider/slider-item-1.png" width="707" height="477" alt="Slider" />
                            </div>
                           {/* <!-- Slider images End -->*/}
                        </div>
                        {/*<!-- Single Slider End  -->*/}
                    </SwiperSlide>
                    <SwiperSlide>
                        {/*<!-- Single Slider Start  -->*/}
                        <div className="single-slider swiper-slide">
                            {/*<!-- Slider Content Start -->*/}
                            <div className="slider-content">
                                <h2 className="title">
                                    New Stylish <br />
                                        Decore Furniture
                                </h2>
                                <p>
                                    Unique Furniture Style Design for Your
                                    Family
                                </p>
                                <Link to="/shop" className="btn btn-primary btn-hover-dark btn-margin">purchase now</Link>
                            </div>
                            {/*<!-- Slider Content End -->*/}

                            {/*<!-- Slider images Start -->*/}
                            <div className="slider-images">
                                <img src="../assets/images/slider/slider-item-2.png" width="707" height="477" alt="Slider" />
                            </div>
                            {/*<!-- Slider images End -->*/}
                        </div>
                        {/*<!-- Single Slider End  -->*/}
                    </SwiperSlide>
                    <SwiperSlide>
                        {/*<!-- Single Slider Start  -->*/}
                        <div className="single-slider swiper-slide">
                            {/*<!-- Slider Content Start -->*/}
                            <div className="slider-content">
                                <h2 className="title">
                                    New Stylish <br />
                                        Decore Furniture
                                </h2>
                                <p>
                                    Unique Furniture Style Design for Your
                                    Family
                                </p>
                                <Link to="/shop" className="btn btn-primary btn-hover-dark btn-margin">purchase now</Link>
                            </div>
                           {/* <!-- Slider Content End -->*/}

                            {/*<!-- Slider images Start -->*/}
                            <div className="slider-images">
                                <img src="../assets/images/slider/slider-item-3.png" width="707" height="477" alt="Slider" />
                            </div>
                            {/*<!-- Slider images End -->*/}
                        </div>
                       {/* <!-- Single Slider End  -->*/}
                    </SwiperSlide>
                </Swiper>
                    
                    {/*<!-- Add Pagination -->*/}
                    {/*<div className="swiper-pagination"></div>*/}
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Slider Section End -->*/}

    {/*<!-- Banner Section Start -->*/}
    <div className="section section-padding-02">
        <div className="container">
            {/*<!-- Banner Wrapper Start -->*/}
            <div className="banner-wrapper">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        {/*<!-- Single Banner Start -->*/}
                        <div className="single-banner">
                            <img src="../assets/images/banner/banner-01.jpg" width="370" height="245" alt="Banner" />

                            <div className="banner-content">
                                <h3 className="title">
                                    <Link to="/shop">New Ruben Teak <br />
                                            Sideboard</Link>
                                </h3>
                                <span className="discount">30% Off</span>
                                <Link className="btn btn-primary btn-hover-dark" to="/shop">Shop Now</Link>
                            </div>
                        </div>
                        {/*<!-- Single Banner End -->*/}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/*<!-- Single Banner Start -->*/}
                        <div className="single-banner">
                            <img src="../assets/images/banner/banner-02.jpg" width="370" height="245" alt="Banner" />

                            <div className="banner-content content-02">
                                <h3 className="title">
                                    <Link to="/shop">New Reversible <br />
                                            Sofa</Link>
                                </h3>
                                <span className="discount">30% Off</span>
                                <Link className="btn btn-primary btn-hover-dark" to="/shop">Shop Now</Link>
                            </div>
                        </div>
                        {/*<!-- Single Banner End -->*/}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/*<!-- Single Banner Start -->*/}
                        <div className="single-banner">
                            <img src="../assets/images/banner/banner-03.jpg" width="370" height="245" alt="Banner" />

                            <div className="banner-content">
                                <h3 className="title">
                                    <Link to="/shop">New Lamp Light <br />
                                            Collection</Link>
                                </h3>
                                <span className="discount">30% Off</span>
                                <Link className="btn btn-primary btn-hover-dark" to="/shop">Shop Now</Link>
                            </div>
                        </div>
                        {/*<!-- Single Banner End -->*/}
                    </div>
                </div>
            </div>
            {/*<!-- Banner Wrapper End -->*/}
        </div>
    </div>
    {/*<!-- Banner Section End -->*/}

    {/*<!-- New Product Section Start -->*/}
    <div className="section section-padding">
        <div className="container">
            {/*<!-- Product Section Wrapper Start -->*/}
            <div className="product-section-wrapper">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        {/*<!-- Single Banner Start -->*/}
                        <div className="single-banner-02">
                            <img src="../assets/images/banner/banner-04.jpg" width="270" height="429" alt="Banner" />

                            <div className="banner-content">
                                <h3 className="title">
                                    <Link to="/shop">All New Furniture</Link>
                                </h3>
                                <span className="discount">40% Off</span>
                                <Link className="btn btn-primary btn-hover-dark" to="/shop">Shop Now</Link>
                            </div>
                        </div>
                       {/* <!-- Single Banner End -->*/}
                    </div>
                    <div className="col-lg-9">
                        {/*<!-- Product Wrapper Start -->*/}
                        <div className="product-wrapper product-active">
                            {/*<!-- Product Top Wrapper Start -->*/}
                            <div className="product-top-wrapper">
                                {/*<!-- Section Title Start -->*/}
                                <div className="section-title order-md-1">
                                    <h2 className="title"># New Products</h2>
                                </div>
                                {/*<!-- Section Title End -->*/}

                                {/*<!-- Swiper Arrows End -->*/}
                                {/*<div className="swiper-arrows order-md-3">
                                   
                                    <div className="swiper-button-prev">
                                        <i className="pe-7s-angle-left"></i>
                                    </div>
                                    <div className="swiper-button-next">
                                        <i className="pe-7s-angle-right"></i>
                                    </div>
                                </div>*/}
                                {/*<!-- Swiper Arrows End -->*/}

                                {/*<!-- Product Menu Start -->*/}
                                <div className="product-menu order-md-2">
                                    <ul className="nav">
                                        <li>
                                            <button className="active" data-bs-toggle="tab" data-bs-target="#tab1">
                                                Just Now
                                            </button>
                                        </li>
                                        <li>
                                            <button data-bs-toggle="tab" data-bs-target="#tab2">
                                                New Arrival
                                            </button>
                                        </li>
                                        <li>
                                            <button data-bs-toggle="tab" data-bs-target="#tab3">
                                                Top Seals
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                {/*<!-- Product Menu End -->*/}
                            </div>
                            {/*<!-- Product Top Wrapper End -->*/}

                            {/*<!-- Product Tabs Content Start -->*/}
                            <div className="product-tabs-content">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab1">
                                        <div className="swiper-container">

                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={10}
                                                navigation={true}
                                                breakpoints={{
                                                  640: {
                                                    slidesPerView: 1,
                                                    spaceBetween: 10,
                                                  },
                                                  768: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 20,
                                                  },
                                                  1024: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 20,
                                                  },
                                                }}
                                                modules={[ Navigation ]}
                                                className="mySwiper"
                                              >

                                                {products && products.map((product) => (
                                                        <SwiperSlide key={product._id}>
                                                            <div className="swiper-slide">
                                                        
                                                                {/*<!-- Single Product Start -->*/}
                                                                <div className="single-product">
                                                                    <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>
                                                                    <div className="product-content">
                                                                        <h4 className="title">
                                                                            <Link to="{`/product/${product._id}`}">
                                                                                {product.name}</Link>
                                                                        </h4>
                                                                        <div className="price">
                                                                            <span
                                                                                    className="sale-price"
                                                                                    >{`$${product.price}`}</span>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                {/*<!-- Single Product End -->*/}
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                                
                                               
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab2">
                                        <div className="swiper-container">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            navigation={true}
                                            breakpoints={{
                                              640: {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                              },
                                              768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                              },
                                              1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                              },
                                            }}
                                            modules={[ Navigation ]}
                                            className="mySwiper"
                                          >
                                            {products && products.map((product) => (
                                                        <SwiperSlide key={product._id}>
                                                            <div className="swiper-slide">
                                                        
                                                                {/*<!-- Single Product Start -->*/}
                                                                <div className="single-product">
                                                                    <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>
                                                                    <div className="product-content">
                                                                        <h4 className="title">
                                                                            <Link to="{`/product/${product._id}`}">
                                                                                {product.name}</Link>
                                                                        </h4>
                                                                        <div className="price">
                                                                            <span
                                                                                    className="sale-price"
                                                                                    >{`$${product.price}`}</span>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                {/*<!-- Single Product End -->*/}
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                        </Swiper>
                                            
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab3">
                                        <div className="swiper-container">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            navigation={true}
                                            breakpoints={{
                                              640: {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                              },
                                              768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                              },
                                              1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                              },
                                            }}
                                            modules={[ Navigation ]}
                                            className="mySwiper"
                                          >
                                            {products && products.map((product) => (
                                                        <SwiperSlide key={product._id}>
                                                            <div className="swiper-slide">
                                                        
                                                                {/*<!-- Single Product Start -->*/}
                                                                <div className="single-product">
                                                                    <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>
                                                                    <div className="product-content">
                                                                        <h4 className="title">
                                                                            <Link to="{`/product/${product._id}`}">
                                                                                {product.name}</Link>
                                                                        </h4>
                                                                        <div className="price">
                                                                            <span
                                                                                    className="sale-price"
                                                                                    >{`$${product.price}`}</span>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                {/*<!-- Single Product End -->*/}
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                        </Swiper>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product Tabs Content End -->*/}
                        </div>
                        {/*<!-- Product Wrapper End -->*/}
                    </div>
                </div>
            </div>
            {/*<!-- Product Section Wrapper End -->*/}
        </div>
    </div>
    {/*<!-- New Product Section End -->*/}

    {/*<!-- Call To Action Section Start -->*/}
    <div className="section call-to-action" style={{backgroundImage: 'url(../assets/images/bg-1.jpg)'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    {/*<!-- Call To Action Content Start -->*/}
                    <div className="call-to-action-content text-center">
                        <h1 className="title">Welcome To Store</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <Link to="/shop" className="btn btn-primary btn-hover-dark btn-margin">purchase now</Link>
                    </div>
                    {/*<!-- Call To Action Content End -->*/}
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Call To Action Section End -->*/}

    {/*<!-- Brand Logo Section Start -->*/}
    <div className="section brand-logo">
        <div className="container">
           {/* <!-- Brand Logo Wrapper Start -->*/}
            <div className="brand-logo-wrapper brand-active">
                <div className="swiper-container">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    navigation={true}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                      },
                    }}
                    modules={[ Navigation ]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                        <div className=" single-brand-02">
                            <img src="../assets/images/brand/brand-2-1.png" width="118" height="87" alt="Brand" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" single-brand-02">
                            <img src="../assets/images/brand/brand-2-2.png" width="118" height="87" alt="Brand" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" single-brand-02">
                            <img src="../assets/images/brand/brand-2-3.png" width="118" height="87" alt="Brand" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" single-brand-02">
                            <img src="../assets/images/brand/brand-2-4.png" width="118" height="87" alt="Brand" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" single-brand-02">
                            <img src="../assets/images/brand/brand-2-5.png" width="118" height="87" alt="Brand" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" single-brand-02">
                            <img src="../assets/images/brand/brand-2-1.png" width="118" height="87" alt="Brand" />
                        </div>
                    </SwiperSlide>
                </Swiper>
                    
                </div>
            </div>
            {/*<!-- Brand Logo Wrapper End -->*/}
        </div>
    </div>
    {/*<!-- Brand Logo Section End -->*/}

    {/*<!-- Best Sellers Section Start -->*/}
    <div className="section section-padding-02">
        <div className="container">
            {/*<!-- Product Section Wrapper Start -->*/}
            <div className="product-section-wrapper">
                <div className="row flex-row-reverse justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        {/*<!-- Single Banner Start -->*/}
                        <div className="single-banner-02">
                            <img src="../assets/images/banner/banner-04.jpg" width="429" height="303" alt="Banner" />

                            <div className="banner-content">
                                <h3 className="title">
                                    <Link to="/shop">All New Furniture</Link>
                                </h3>
                                <span className="discount">40% Off</span>
                                <Link className="btn btn-primary btn-hover-dark" to="/shop">Shop Now</Link>
                            </div>
                        </div>
                       {/* <!-- Single Banner End -->*/}
                    </div>
                    <div className="col-lg-9">
                       {/* <!-- Product Wrapper Start -->*/}
                        <div className="product-wrapper product-active">
                            {/*<!-- Product Top Wrapper Start -->*/}
                            <div className="product-top-wrapper">
                                {/*<!-- Section Title Start -->*/}
                                <div className="section-title order-md-1">
                                    <h2 className="title"># Best Sellers</h2>
                                </div>
                                {/*<!-- Section Title End -->*/}

                                {/*<!-- Swiper Arrows End -->*/}
                                {/*<div className="swiper-arrows order-md-3">
                                    
                                    <div className="swiper-button-prev">
                                        <i className="pe-7s-angle-left"></i>
                                    </div>
                                    <div className="swiper-button-next">
                                        <i className="pe-7s-angle-right"></i>
                                    </div>
                                </div>*/}
                                {/*<!-- Swiper Arrows End -->*/}

                                {/*<!-- Product Menu Start -->*/}
                                <div className="product-menu order-md-2">
                                    <ul className="nav">
                                        <li>
                                            <button className="active" data-bs-toggle="tab" data-bs-target="#tab4">
                                                All Time
                                            </button>
                                        </li>
                                        <li>
                                            <button data-bs-toggle="tab" data-bs-target="#tab5">
                                                This Year
                                            </button>
                                        </li>
                                        <li>
                                            <button data-bs-toggle="tab" data-bs-target="#tab6">
                                                This Month
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                               {/* <!-- Product Menu End -->*/}
                            </div>
                            {/*<!-- Product Top Wrapper End -->*/}

                            {/*<!-- Product Tabs Content Start -->*/}
                            <div className="product-tabs-content">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab4">
                                        <div className="swiper-container">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            navigation={true}
                                            breakpoints={{
                                              640: {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                              },
                                              768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                              },
                                              1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                              },
                                            }}
                                            modules={[ Navigation ]}
                                            className="mySwiper"
                                          >
                                            {products && products.map((product) => (
                                                        <SwiperSlide key={product._id}>
                                                            <div className="swiper-slide">
                                                        
                                                                {/*<!-- Single Product Start -->*/}
                                                                <div className="single-product">
                                                                    <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>
                                                                    <div className="product-content">
                                                                        <h4 className="title">
                                                                            <Link to="{`/product/${product._id}`}">
                                                                                {product.name}</Link>
                                                                        </h4>
                                                                        <div className="price">
                                                                            <span
                                                                                    className="sale-price"
                                                                                    >{`$${product.price}`}</span>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                {/*<!-- Single Product End -->*/}
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                        </Swiper>
                                            
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab5">
                                        <div className="swiper-container">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            navigation={true}
                                            breakpoints={{
                                              640: {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                              },
                                              768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                              },
                                              1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                              },
                                            }}
                                            modules={[ Navigation ]}
                                            className="mySwiper"
                                          >
{products && products.map((product) => (
                                                        <SwiperSlide key={product._id}>
                                                            <div className="swiper-slide">
                                                        
                                                                {/*<!-- Single Product Start -->*/}
                                                                <div className="single-product">
                                                                    <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>
                                                                    <div className="product-content">
                                                                        <h4 className="title">
                                                                            <Link to="{`/product/${product._id}`}">
                                                                                {product.name}</Link>
                                                                        </h4>
                                                                        <div className="price">
                                                                            <span
                                                                                    className="sale-price"
                                                                                    >{`$${product.price}`}</span>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                {/*<!-- Single Product End -->*/}
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                        </Swiper>
                                            
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tab6">
                                        <div className="swiper-container">
                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={10}
                                            navigation={true}
                                            breakpoints={{
                                              640: {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                              },
                                              768: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                              },
                                              1024: {
                                                slidesPerView: 3,
                                                spaceBetween: 20,
                                              },
                                            }}
                                            modules={[ Navigation ]}
                                            className="mySwiper"
                                          >
                                            {products && products.map((product) => (
                                                        <SwiperSlide key={product._id}>
                                                            <div className="swiper-slide">
                                                        
                                                                {/*<!-- Single Product Start -->*/}
                                                                <div className="single-product">
                                                                    <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>
                                                                    <div className="product-content">
                                                                        <h4 className="title">
                                                                            <Link to="{`/product/${product._id}`}">
                                                                                {product.name}</Link>
                                                                        </h4>
                                                                        <div className="price">
                                                                            <span
                                                                                    className="sale-price"
                                                                                    >{`$${product.price}`}</span>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                {/*<!-- Single Product End -->*/}
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                        </Swiper>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<!-- Product Tabs Content End -->*/}
                        </div>
                        {/*<!-- Product Wrapper End -->*/}
                    </div>
                </div>
            </div>
            {/*<!-- Product Section Wrapper End -->*/}
        </div>
    </div>
    {/*<!-- Best Sellers Section End -->*/}

    {/*<!-- Benefit Section Start -->*/}
    <div className="section section-padding">
        <div className="container">
            {/*<!-- Benefit Wrapper Start -->*/}
            <div className="benefit-wrapper">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        {/*<!-- Single Benefit Start -->*/}
                        <div className="single-benefit">
                            <img src="../assets/images/icon/icon-1.png" width="70" height="92" alt="Icon" />
                            <h3 className="title">Free Shipping</h3>
                            <p>
                                Get 10% cash back, free shipping, free
                                returns, and more at 1000+ top retailers!
                            </p>
                        </div>
                        {/*<!-- Single Benefit End -->*/}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/*<!-- Single Benefit Start -->*/}
                        <div className="single-benefit">
                            <img src="../assets/images/icon/icon-2.png" width="70" height="92" alt="Icon" />
                            <h3 className="title">Safe Payment</h3>
                            <p>
                                Get 10% cash back, free shipping, free
                                returns, and more at 1000+ top retailers!
                            </p>
                        </div>
                        {/*<!-- Single Benefit End -->*/}
                    </div>
                    <div className="col-lg-4 col-md-6">
                        {/*<!-- Single Benefit Start -->*/}
                        <div className="single-benefit">
                            <img src="../assets/images/icon/icon-3.png" width="70" height="92" alt="Icon" />
                            <h3 className="title">Online Support</h3>
                            <p>
                                Get 10% cash back, free shipping, free
                                returns, and more at 1000+ top retailers!
                            </p>
                        </div>
                        {/*<!-- Single Benefit End -->*/}
                    </div>
                </div>
            </div>
            {/*<!-- Benefit Wrapper End -->*/}
        </div>
    </div>
    {/*<!-- Benefit Section End -->*/}

    {/*<!-- Sale Product Section Start -->*/}
    <div className="section section-padding bg-color-01">
        <div className="container">
            {/*<!-- Product Wrapper Start -->*/}
            <div className="product-active-02">
                {/*<!-- Product Top Wrapper Start -->*/}
                <div className="product-top-wrapper">
                    {/*<!-- Section Title Start -->*/}
                    <div className="section-title order-md-1">
                        <h2 className="title"># Sale Products</h2>
                    </div>
                    {/*<!-- Section Title End -->*/}

                    {/*<!-- Swiper Arrows End -->*/}
                    {/*<div className="swiper-arrows order-md-3">
                        <!-- Add Arrows -->
                        <div className="swiper-button-prev">
                            <i className="pe-7s-angle-left"></i>
                        </div>
                        <div className="swiper-button-next">
                            <i className="pe-7s-angle-right"></i>
                        </div>
                    </div>*/}
                    {/*<!-- Swiper Arrows End -->*/}

                    {/*<!-- Product Menu Start -->*/}
                    <div className="product-menu order-md-2">
                        <ul className="nav">
                            <li>
                                <button className="active" data-bs-toggle="tab" data-bs-target="#tab7">
                                    All Time
                                </button>
                            </li>
                            <li>
                                <button data-bs-toggle="tab" data-bs-target="#tab8">
                                    This Year
                                </button>
                            </li>
                            <li>
                                <button data-bs-toggle="tab" data-bs-target="#tab9">
                                    This Month
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/*<!-- Product Menu End -->*/}
                </div>
                {/*<!-- Product Top Wrapper End -->*/}

               {/* <!-- Product Tabs Content Start -->*/}
                <div className="product-tabs-content">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="tab7">
                            <div className="swiper-container">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                navigation={true}
                                breakpoints={{
                                  640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                  },
                                  768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                  },
                                  1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                  },
                                }}
                                modules={[ Navigation ]}
                                className="mySwiper"
                              >
                                {products && products.map((product) => (
                                                        <SwiperSlide key={product._id}>
                                                            <div className="swiper-slide">
                                                        
                                                                {/*<!-- Single Product Start -->*/}
                                                                <div className="single-product">
                                                                    <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>
                                                                    <div className="product-content">
                                                                        <h4 className="title">
                                                                            <Link to="{`/product/${product._id}`}">
                                                                                {product.name}</Link>
                                                                        </h4>
                                                                        <div className="price">
                                                                            <span
                                                                                    className="sale-price"
                                                                                    >{`$${product.price}`}</span>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                {/*<!-- Single Product End -->*/}
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                            </Swiper>
                                
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab8">
                            <div className="swiper-container">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                navigation={true}
                                breakpoints={{
                                  640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                  },
                                  768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                  },
                                  1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                  },
                                }}
                                modules={[ Navigation ]}
                                className="mySwiper"
                              >
                                {products && products.map((product) => (
                                                        <SwiperSlide key={product._id}>
                                                            <div className="swiper-slide">
                                                        
                                                                {/*<!-- Single Product Start -->*/}
                                                                <div className="single-product">
                                                                    <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>
                                                                    <div className="product-content">
                                                                        <h4 className="title">
                                                                            <Link to="{`/product/${product._id}`}">
                                                                                {product.name}</Link>
                                                                        </h4>
                                                                        <div className="price">
                                                                            <span
                                                                                    className="sale-price"
                                                                                    >{`$${product.price}`}</span>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                {/*<!-- Single Product End -->*/}
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                            </Swiper>
                               
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab9">
                            <div className="swiper-container">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                navigation={true}
                                breakpoints={{
                                  640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                  },
                                  768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                  },
                                  1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                  },
                                }}
                                modules={[ Navigation ]}
                                className="mySwiper"
                              >
                                {products && products.map((product) => (
                                                        <SwiperSlide key={product._id}>
                                                            <div className="swiper-slide">
                                                        
                                                                {/*<!-- Single Product Start -->*/}
                                                                <div className="single-product">
                                                                    <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>
                                                                    <div className="product-content">
                                                                        <h4 className="title">
                                                                            <Link to="{`/product/${product._id}`}">
                                                                                {product.name}</Link>
                                                                        </h4>
                                                                        <div className="price">
                                                                            <span
                                                                                    className="sale-price"
                                                                                    >{`$${product.price}`}</span>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                </div>
                                                                {/*<!-- Single Product End -->*/}
                                                            </div>
                                                        </SwiperSlide>
                                                    ))
                                                }
                            </Swiper>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Product Tabs Content End -->*/}
            </div>
            {/*<!-- Product Wrapper End -->*/}
        </div>
    </div>
{/*    <!-- Sale Product Section End -->*/}

    {/*<!-- Product Banner Section Start -->*/}
    <div className="section bg-color-01">
        <div className="products-banner products-banner-active">
            <div className="swiper-container">
            <Swiper
                slidesPerView={2}
                spaceBetween={0}
                navigation={false}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                  },
                }}
                modules={[ Navigation ]}
                className="mySwiper"
              >
              {/*{categories && categories.slice(0,4).map((item) => (
                                <li key={item._id} className={splitLocation[1] === `shop/category/${item.name}` ? "active" : ``}>
                                    <Link to={`/shop/category/${item.name}`}>{item.name}</Link>
                                </li>
                            ))}*/}
            {categories && categories.map((item) => (
                <SwiperSlide key={item._id}>
                    <div className="swiper-slide">
                        {/*<!-- Single Products Banner Start -->*/}
                        <div className="single-products-banner">
                            <img src={item.images[0]?.url} width="480" height="600" alt="Category" />

                            <div className="products-banner-content">
                                <div className="banner-content-wrapper">
                                    <h4 className="title">
                                        <Link className="text-capitalize" to={`/shop/category/${item.name}`}>{item.name}</Link>
                                    </h4>
                                    <span className="products-count"
                                            >{products && products.length} Products</span>
                                    <Link to={`/shop/category/${item.name}`} className="arrow"><i className="pe-7s-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        {/*<!-- Single Products Banner End -->*/}
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
                
            </div>
        </div>
    </div>
    {/*<!-- Product Banner Section End -->*/}
    </>
     )
        }

		</>
	)
}

export default Home
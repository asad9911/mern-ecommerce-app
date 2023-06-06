import React,{useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import { addItemsToCart } from "../actions/cartAction";
import { Swiper, SwiperSlide } from "swiper/react";
// import ReactStars from 'react-rating-stars-component';
import MetaData from '../components/MetaData.js';
import { clearErrors, getProductDetails, getProduct, newReview } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader.js";
import { useAlert } from "react-alert";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../constants/productConstant";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Navigation,FreeMode,Thumbs } from "swiper";


const ReviewCard = ({review}) =>{

    const options = {
        value: review.rating,
        readOnly: true,
        precision: 0.5,
    };

    return(
    <div className="single-reviews">
        <div className="comment-author">
            <img src="../assets/images/author/author-1.png" width="100" height="100" alt="User" />
        </div>
        <div className="comment-content">
            <div className="author-name-rating">
                <h6 className="name">{review?.name}</h6>
                {/*<div className="review-star">
                    <div className="star" style={{width: '80%'}}></div>
                </div>*/}
                <Rating {...options} />
            </div>
            <span className="date">11/20/2023</span>
            <p>
                {review?.comment}
            </p>
        </div>
    </div>
    )
}

const ProductDetails = () => {

    const { product, loading, error } = useSelector((state) => state.productDetails);

    const { success, error: reviewError } = useSelector((state) => state.newReview);

    const { products } = useSelector((state) => state.products);


    // const options = {
    //     edit: false,
    //     color: "#dbdbdb",
    //     activeColor: "#f2a100",
    //     size: window.innerWidth < 600 ? 20 : 25,
    //     // value: 2.5,
    //     isHalf: true,
    //     value: product.ratings,
    //     readOnly: true,
    //     precision: 0.5,
    // }
    const options = {
        size: "large",
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };


	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const dispatch = useDispatch();
	const { id } = useParams();
    const alert = useAlert();
    const [quantity, setQuantity] = useState(1);
    // const [open, setOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(id));
        dispatch(getProduct());
    }, [dispatch, id, error, alert]);


    const increaseQuantity = () => {
        if (product.Stock <= quantity) return;

        const qty = quantity + 1;
        setQuantity(qty);
    };

    const decreaseQuantity = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);
    };

    const addToCartHandler = () => {
        dispatch(addItemsToCart(id, quantity));
        alert.success("Item Added To Cart");
    };

    const reviewSubmitHandler = (e) => {
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("rating", rating);
        myForm.set("comment", comment);
        myForm.set("productId", id);

        dispatch(newReview(myForm));

        // setOpen(false);
    };

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }

        if (reviewError) {
          alert.error(reviewError);
          dispatch(clearErrors());
        }

        if (success) {
          alert.success("Review Submitted Successfully");
          dispatch({ type: NEW_REVIEW_RESET });
        }
        dispatch(getProductDetails(id));
    }, [dispatch, id, error, alert, reviewError, success]);

	return (
        <>
        {
            loading? ( <Loader />) :( 
        
       
		<>
		
				<MetaData title={`${product.name} -- ECOMMERCE`} />
			
			{/*<!-- Product Details Section Start -->*/}
    <div className="section section-padding-02">
        <div className="container">
           {/* <!-- Product Section Wrapper Start -->*/}
            <div className="">
                <div className="row">
                    <div className="col-lg-6">
                        {/*<!-- Product Details Images Start -->*/}
                        <div className="product-details-images">
                            {/*<!-- Details Gallery Images Start -->*/}
                            <div className="details-gallery-images" id="img-container">
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
                                       {
                                        product.images && product.images.map((item, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="swiper-slide">
                                                <div className="single-img">
                                                    <img src={item.url} alt="Product Image" />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        ))
                                     	}
                                        {/*<SwiperSlide>
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
                                        </SwiperSlide>*/}
                                    </Swiper>
                                    
                                </div>
                            </div>
                                                                
                                    
                            {/*<!-- Details Gallery Images End -->*/}

                            {/*<!-- Details Gallery Thumbs Start -->*/}
                            <div className="details-gallery-thumbs">
                                <div className="swiper-container">
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
                                      	{
                                        product.images && product.images.map((item, i) => (
                                        
                                        <SwiperSlide  key={i}>
                                                <img src={item.url} alt="Product Thumbnail" />
                                        </SwiperSlide>
                                        ))
                                     	}
                                        {/*<SwiperSlide>
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
                                        </SwiperSlide>*/}                                     
                                    </Swiper>

                                </div>
                                
                            </div>
                            {/*<!-- Details Gallery Thumbs End -->*/}
                        </div>
                        {/*<!-- Product Details Images End -->*/}
                    </div>
                    <div className="col-lg-6">
                        {/*<!-- Product Details Description Start -->*/}
                        <div className="product-details-description">
                            
                            
                            <h4 className="product-name text-capitalize">{ product.name }</h4>
                               
                            
                            
                            <div className="price">
                                <span className="sale-price">{`$${product.price}`}</span>
                                {/*<span className="old-price">$290.00</span>*/}
                            </div>
                            <div className="review-wrapper align-items-center">
                                <Rating {...options} />
                                {/*<div className="review-star">
                                    <div className="star" style={{width: '80%'}}></div>
                                </div>*/}
                                <p>
                                    <Link className="mx-2" to="#reviews">({product.numOfReviews} Reviews)</Link>
                                </p>
                            </div>

                            {/*<div className="product-color">
                                <span className="lable">Color:</span>
                                <ul>
                                    <li>
                                        <input type="radio" name="colors" id="color1" />
                                        <label htmlFor="color1"><span className="color-blue"></span></label>
                                    </li>
                                    <li>
                                        <input type="radio" name="colors" id="color2" />
                                        <label htmlFor="color2"><span className="color-gray"></span></label>
                                    </li>
                                    <li>
                                        <input type="radio" name="colors" id="color3" />
                                        <label htmlFor="color3"><span
                                                    className="color-dark-blue"
                                                ></span></label>
                                    </li>
                                    <li>
                                        <input type="radio" name="colors" id="color4" />
                                        <label htmlFor="color4"><span
                                                    className="color-gray-dark"
                                                ></span></label>
                                    </li>
                                </ul>
                            </div>*/}

                            <p>
                                {product.description}
                            </p>

                            <div className="product-meta">
                                <div className="product-quantity d-inline-flex">
                                    <button onClick={decreaseQuantity} type="button" className="sub">
                                        -
                                    </button>
                                    <input className="text-center" readOnly type="text" value={quantity} />
                                    <button onClick={increaseQuantity} type="button" className="add">
                                        +
                                    </button>
                                </div>
                                <div className="meta-action">
                                    <button disabled={product.Stock < 1 ? true : false} className="btn btn-dark btn-hover-primary" onClick={addToCartHandler}>
                                        Add To Cart
                                    </button>
                                </div>
                                {/*<div className="meta-action">
                                    <Link className="action" to="#"><i className="pe-7s-like"></i></Link>
                                </div>
                                <div className="meta-action">
                                    <Link className="action" to="#"><i className="pe-7s-shuffle"></i></Link>
                                </div>*/}
                            </div>

                            <div className="product-info">
                                {/*<div className="single-info">
                                    <span className="lable">SKU:</span>
                                    <span className="value">Ch-256xl</span>
                                </div>*/}
                                <div className="single-info">
                                    <span className="lable">Categories:</span>
                                    <span className="value">
                                        <Link to={`/shop/category/${product.category}`}>{product.category}</Link>
                                    </span>
                                </div>
                                
                                <div className="single-info">
                                    <span className="lable">Status:</span>
                                    <span className={product.Stock < 1 ? "text-danger" : "text-success"}
                                            >
                                                {product.Stock < 1 ? "OutOfStock" : "InStock"}
                                            </span>
                                </div>
                                {/*<div className="single-info">
                                    <span className="lable">Share:</span>
                                    <ul className="social">
                                        <li>
                                            <Link to="#"><i
                                                        className="fa fa-facebook-f"
                                                    ></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i
                                                        className="fa fa-dribbble"
                                                    ></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i
                                                        className="fa fa-pinterest-p"
                                                    ></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i
                                                        className="fa fa-twitter"
                                                    ></i></Link>
                                        </li>
                                        <li>
                                            <Link to="#"><i
                                                        className="fa fa-linkedin"
                                                    ></i></Link>
                                        </li>
                                    </ul>
                                </div>*/}
                            </div>
                        </div>
                        {/*<!-- Product Details Description End -->*/}
                    </div>
                </div>
            </div>
            {/*<!-- Product Section Wrapper End -->*/}
        </div>
    </div>
   {/* <!-- Product Details Section End -->*/}

    {/*<!-- Product Details tab Section Start -->*/}
    <div className="section section-padding-02">
        <div className="container">
            {/*<!-- Product Details Tabs Start -->*/}
            <div className="product-details-tabs">
                <ul className="nav justify-content-center">
                   {/* <li>
                        <button data-bs-toggle="tab" data-bs-target="#information">
                            Information
                        </button>
                    </li>
                    <li>
                        <button className="active" data-bs-toggle="tab" data-bs-target="#description">
                            Description
                        </button>
                    </li>*/}
                    <li>
                        <button className="active" data-bs-toggle="tab" data-bs-target="#reviews">
                            Reviews ({product.numOfReviews})
                        </button>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className="tab-pane fade" id="information">
                        {/*<!-- Information Content Start -->*/}
                        {/*<div className="information-content">
                            <h4 className="title">Information</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit. Donec odio. Quisque volutpat mattis eros.
                                Nullam malesuada erat ut turpis. Suspendisse urna
                                viverra non, semper suscipit, posuere a, pede. Donec
                                nec justo eget felis facilisis fermentum. Aliquam
                                porttitor mauris sit amet orci.
                            </p>

                            <h4 className="title">Fabric & care</h4>
                            <ul>
                                <li>Faux suede fabric</li>
                                <li>Gold tone metal hoop handles.</li>
                                <li>RI branding</li>
                                <li>Snake print trim interior</li>
                                <li>Adjustable cross body strap</li>
                                <li>
                                    Height: 31cm; Width: 32cm; Depth: 12cm; Handle
                                    Drop: 61cm
                                </li>
                            </ul>

                            <h4 className="title">Size</h4>
                            <p>one size</p>
                        </div>*/}
                        {/*<!-- Information Content End -->*/}
                    </div>
                    <div className="tab-pane fade " id="description">
                        {/*<!-- Description Content Start -->*/}
                        {/*<div className="description-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enimlo ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat. Duis aute irure dolor in
                                reprehen in voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officiarty
                                deserunt mollit anim id est laborum. Sed ut
                                perspiciatis unde omnis iste natus error sit
                                voluptatem accusantium doloremque laudantiu totam
                                rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta
                                sunt explicabo. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut fugit,
                            </p>
                        </div>*/}
                        {/*<!-- Description Content End -->*/}
                    </div>
                    <div className="tab-pane fade show active" id="reviews">
                        {/*<!-- Reviews Content Start -->*/}
                        <div className="reviews-content">
                           {/* <!-- Review Comment Start  -->*/}
                            <div className="reviews-comment">
                                {/*<!-- Single Comment Start  -->*/}
                                {/*<div className="single-reviews">
                                    <div className="comment-author">
                                        <img src="../assets/images/author/author-1.png" width="100" height="100" alt="author" />
                                    </div>
                                    <div className="comment-content">
                                        <div className="author-name-rating">
                                            <h6 className="name">Rosie Silva</h6>
                                            <div className="review-star">
                                                <div className="star" style={{width: '80%'}}></div>
                                            </div>
                                        </div>
                                        <span className="date">11/20/2023</span>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur
                                            adipisicing elit. Esse deleniti itaque
                                            velit explicabo at eum incidunt vel
                                            reprehenderit maxime eos facere ut
                                            pariatur voluptas aut, porro quia
                                            molestias sequi cupiditate!
                                        </p>
                                    </div>
                                </div>*/}
                                {product.reviews && product.reviews[0] ? (
                                    <div className="reviews">
                                      {product.reviews &&
                                        product.reviews.map((review) => (
                                          <ReviewCard key={review._id} review={review} />
                                        ))}
                                    </div>
                                  ) : (
                                    <p className="noReviews">No Reviews Yet</p>
                                )}
                                {/*<!-- Single Comment End  -->*/}
                                
                            </div>
                            {/*<!-- Review Comment End  -->*/}

                            {/*<!-- Review Form Start  -->*/}
                            <div className="reviews-form">
                                <h3 className="reviews-title">Add a review</h3>

                                <form action="#">
                                    <div className="row">
                                        {/*<div className="col-md-6">
                                            <div className="single-form">
                                                <input type="text" placeholder="Enter your name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single-form">
                                                <input type="email" placeholder="john.smith@example.com" />
                                            </div>
                                        </div>*/}
                                        <div className="col-md-12">
                                            <div className="review-rating">
                                                <label className="title">Rating:</label>
                                                {/*<ul id="rating" className="rating">
                                                    <li className="star" title="Poor" data-value="1">
                                                        <i className="fa fa-star-o"></i>
                                                    </li>
                                                    <li className="star" title="Poor" data-value="2">
                                                        <i className="fa fa-star-o"></i>
                                                    </li>
                                                    <li className="star" title="Poor" data-value="3">
                                                        <i className="fa fa-star-o"></i>
                                                    </li>
                                                    <li className="star" title="Poor" data-value="4">
                                                        <i className="fa fa-star-o"></i>
                                                    </li>
                                                    <li className="star" title="Poor" data-value="5">
                                                        <i className="fa fa-star-o"></i>
                                                    </li>
                                                </ul>*/}
                                                <Rating
                                                    onChange={(e) => setRating(e.target.value)}
                                                    value={rating}
                                                    size="large"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-form">
                                                <textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Write your comments here"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-form">
                                                <button type='submit' onClick={reviewSubmitHandler} className="btn btn-dark btn-hover-primary">
                                                    Submit Review
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/*<!-- Review Form End  -->*/}
                        </div>
                       {/* <!-- Reviews Content End -->*/}
                    </div>
                </div>
            </div>
            {/*<!-- Product Details Tabs End -->*/}
        </div>
    </div>
    {/*<!-- Product Details tab Section End -->*/}

    {/*<!-- Sale Product Section Start -->*/}
    <div className="section section-padding">
        <div className="container">
            <div className="">
                {/*<!-- Product Wrapper Start -->*/}
                <div className="product-active-02">
                    {/*<!-- Product Top Wrapper Start -->*/}
                    <div className="product-top-wrapper">
                       {/* <!-- Section Title Start -->*/}
                        <div className="section-title">
                            <h2 className="title"># Related Products</h2>
                        </div>
                        {/*<!-- Section Title End -->*/}

                        {/*<!-- Product Menu Start -->*/}
                        <div className="product-menu">
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

                    {/*<!-- Product Tabs Content Start -->*/}
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
                                                                    <ul className="product-meta">
                                                                        <li>
                                                                            <Link className="action" to={`/product/${product._id}`}><i className="pe-7s-search"></i></Link>
                                                                        </li>
                                                                        {/*<li>
                                                                            <Link className="action" to="#"><i className="pe-7s-shopbag"></i></Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link className="action" to="#"><i className="pe-7s-like"></i></Link>
                                                                        </li>*/}
                                                                    </ul>
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
                                                                    <ul className="product-meta">
                                                                        <li>
                                                                            <Link className="action" to={`/product/${product._id}`}><i className="pe-7s-search"></i></Link>
                                                                        </li>
                                                                        {/*<li>
                                                                            <Link className="action" to="#"><i className="pe-7s-shopbag"></i></Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link className="action" to="#"><i className="pe-7s-like"></i></Link>
                                                                        </li>*/}
                                                                    </ul>
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
                                                                    <ul className="product-meta">
                                                                        <li>
                                                                            <Link className="action" to={`/product/${product._id}`}><i className="pe-7s-search"></i></Link>
                                                                        </li>
                                                                        {/*<li>
                                                                            <Link className="action" to="#"><i className="pe-7s-shopbag"></i></Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link className="action" to="#"><i className="pe-7s-like"></i></Link>
                                                                        </li>*/}
                                                                    </ul>
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
    {/*<!-- Sale Product Section End -->*/}
	</>
    )
    }

        </>
	)
}

export default ProductDetails
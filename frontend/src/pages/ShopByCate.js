import React,{useState,useEffect} from 'react';
import { Link,useParams } from 'react-router-dom';
import MetaData from '../components/MetaData.js';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct, getProductByCate } from "../actions/productAction";
import { getAllCategories } from "../actions/categoryAction";
import Loader from "../components/Loader.js";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";

// const categories = [
//   "wall-tiles",
//   "floor-tiles",
//   "bathroom-tiles",
//   "outdoor-tiles",
//   "brick-&-metro tiles",
//   "mosaic-tiles",
// ];

const ShopByCate = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0, 25000]);
    const [cate, setCate] = useState("");
    const [ratings, setRatings] = useState(0);
    const [active, setActive] = useState(null);

    const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const { categories } = useSelector((state) => state.categories);

    const { category } = useParams();

    const setCurrentPageNo = (e) => {
        setCurrentPage(e);
    };

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getProductByCate(category))
        dispatch(getAllCategories());
    }, [dispatch, category, error, alert]);

    let count = filteredProductsCount;

	return (

        <>

        
        <MetaData title="Shop" />
			
			

    

    {/*<!-- Shop Section Start -->*/}
    <div className="section section-padding">
        <div className="container">
            {/*<!-- Product Section Wrapper Start -->*/}
            <div className="product-section-wrapper" style={{marginTop: '0px'}}>
                <div className="row flex-row-reverse">
                    <div className="col-lg-12">
                        {/*<!-- Shop top Bar Start -->*/}
                        <div className="shop-top-bar">
                            <div className="shop-text">
                                <p>
                                    Category Products
                                </p>
                            </div>
                            <div className="shop-tabs">
                                <ul className="nav">
                                    <li>
                                        <button className="active" data-bs-toggle="tab" data-bs-target="#grid">
                                            <i className="fa fa-th"></i>
                                        </button>
                                    </li>
                                    <li>
                                        <button data-bs-toggle="tab" data-bs-target="#list">
                                            <i className="fa fa-list"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/*<div className="shop-sort">
                                <span className="title">Sort By :</span>
                                <select className="select2-2">
                                    <option value="featured">
                                        Featured
                                    </option>
                                    <option value="rating">Rating</option>
                                    <option value="price">Price</option>
                                </select>
                            </div>*/}
                        </div>
                        {/*<!-- Shop top Bar End -->*/}
                        
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="grid">
                                {/*<!-- Shop Product Wrapper Start -->*/}
                                {
            loading? ( <Loader />) :(
        <>
                                <div className="shop-product-wrapper">
                                    <div className="row">
                                    {
                                        products && products.map((product) =>{
                                            return(

                                                <div key={product._id} className="col-lg-4 col-sm-6">
                                                    {/*<!-- Single Product Start -->*/}
                                                    <div className="single-product">
                                                        <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>
                                                        <div className="product-content">
                                                            <h4 className="title">
                                                                <Link to={`/product/${product._id}`}>{product.name}{/*{product?.category}*/}</Link>
                                                            </h4>
                                                            <div className="price">
                                                                <span className="sale-price">{`$${product?.price}`}</span>
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

                                                )
                                            
                                        })
                                    }
                                        
                                    </div>
                                </div>
                                </>
     )
        }
                                {/*<!-- Shop Product Wrapper End -->*/}

                            </div>
                            <div className="tab-pane fade" id="list">
                                {/*<!-- Shop Product Wrapper Start -->*/}
                                {
            loading? ( <Loader />) :(
        <>
                                <div className="shop-product-wrapper">
                                    {/*<!-- Single Product Start -->*/}
                                    {
                                        products && products.map((product) =>{
                                            return(    

                                                    <div key={product._id} className="single-product-02 product-list">
                                                        <div className="product-images">
                                                            <Link to={`/product/${product._id}`}><img src={product.images[0]?.url} width="270" height="303" alt="product" /></Link>

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
                                                        <div className="product-content">
                                                            <h4 className="title">
                                                                <Link to={`/product/${product._id}`}>{product?.name}</Link>
                                                            </h4>
                                                            <div className="price">
                                                                <span className="sale-price">{`$${product?.price}`}</span>
                                                            </div>
                                                            <p>
                                                                {product?.description}
                                                            </p>
                                                        </div>
                                                    </div>

                                                )
                                            
                                        })
                                    }
                                    
                                    {/*<!-- Single Product End -->*/}

                                </div>
                                </>
     )
        }
                                {/*<!-- Shop Product Wrapper End -->*/}

                            </div>

                        </div>

                        {/*<!-- Page pagination Start -->*/}
                        
                            
                       
                    </div>
                    
                </div>
            </div>
            {/*<!-- Product Section Wrapper End -->*/}
        </div>
    </div>
    {/*<!-- Shop Section End -->*/}


        </>
    )
}

export default ShopByCate
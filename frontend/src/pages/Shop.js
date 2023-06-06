import React,{useState,useEffect} from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import MetaData from '../components/MetaData.js';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct, getProductByCate } from "../actions/productAction";
import { getAllCategories } from "../actions/categoryAction";
import Loader from "../components/Loader.js";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { Rating } from "@material-ui/lab";

// const categories = [
//   "wall-tiles",
//   "floor-tiles",
//   "bathroom-tiles",
//   "outdoor-tiles",
//   "brick-&-metro tiles",
//   "mosaic-tiles",
// ];

const Shop = () => {

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

    const  {keyword}  = useParams();

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
        // dispatch(getProductByCate(category))
        dispatch(getProduct(keyword, currentPage, price, cate, ratings));
        dispatch(getAllCategories());
    }, [dispatch, keyword, currentPage, price, cate, ratings, error, alert]);

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
                    <div className="col-lg-9">
                        {/*<!-- Shop top Bar Start -->*/}
                        <div className="shop-top-bar">
                            <div className="shop-text">
                                <p>
                                    All Products
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
                        
                            
                        <div className="page-pagination">
                        {
                            resultPerPage < count  && (
                                    <Pagination
                                        activePage={currentPage}
                                        itemsCountPerPage={resultPerPage}
                                        totalItemsCount={productsCount}
                                        onChange={setCurrentPageNo}
                                        nextPageText="Next"
                                        prevPageText="Prev"
                                        firstPageText="1st"
                                        lastPageText="Last"
                                        itemClass="page-item"
                                        linkClass="page-link"
                                        activeClass="active"
                                        activeLinkClass="active"
                                    />
                                )
                        }
                            
                            {/*<ul className="pagination justify-content-center">
                                <li className="page-item"><Link className="page-link" to="#"><i className="fa fa-angle-left"></i></Link></li>
                                <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link active" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item"><Link className="page-link" to="#"><i className="fa fa-angle-right"></i></Link></li>
                            </ul>*/}

                        </div>
                        {/*<!-- Page pagination End -->*/}
                    </div>
                    <div className="col-lg-3">
                        {/*<!-- Sidebar Start -->*/}
                        <div className="sidebar">
                            {/*<!-- Sidebar Widget Start -->*/}
                            {/*<div className="sidebar-widget">
                                <div className="widget-search">
                                    <form onSubmit={searchSubmitHandler}>
                                        <input type="text" placeholder="Search" onChange={(e) => setKeyword(e.target.value)}/>
                                        <button><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>*/}
                            {/*<!-- Sidebar Widget End -->*/}
                            {/*<!-- Sidebar Widget Start -->*/}
                            <div className="sidebar-widget">

                                <h4 className="widget-title">Filter By Categories</h4>

                                <div className="widget-checkbox widget-categories">
                                    <ul className="checkbox-items">
                                
                                    {categories && categories.map((item) => (
                                        <li key={item._id} onClick={() => setCate(item?.name)}>
                                            <span className={`text-capitalize ${active == item?.name && 'active'}`} onClick={() => setActive(item?.name)}>{item?.name}</span>
                                        </li>
                                    ))}
                                        {/*<li>
                                            <input type="checkbox" id="checkbox2"/>
                                            <label htmlFor="checkbox2"> <span></span>Dining Chair</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox3"/>
                                            <label htmlFor="checkbox3"> <span></span>Office Table</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox4"/>
                                            <label htmlFor="checkbox4"> <span></span>Dining Table</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox5"/>
                                            <label htmlFor="checkbox5"> <span></span>Bed Light</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox6"/>
                                            <label htmlFor="checkbox6"> <span></span>Sofa Set</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox7"/>
                                            <label htmlFor="checkbox7"> <span></span>Office Chair</label>
                                        </li>*/}
                                    </ul>
                                </div>
                            </div>
                            {/*<!-- Sidebar Widget End -->*/}
                            {/*<!-- Sidebar Widget Start -->*/}
                            {/*<div className="sidebar-widget">

                                <h4 className="widget-title">Refine By</h4>

                                <div className="widget-checkbox">
                                    <ul className="checkbox-items">
                                        <li>
                                            <input type="checkbox" id="checkbox8"/>
                                            <label htmlFor="checkbox8"> <span></span>On Sale</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox9"/>
                                            <label htmlFor="checkbox9"> <span></span>New</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox10"/>
                                            <label htmlFor="checkbox10"> <span></span>In Stock</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>*/}
                            {/*<!-- Sidebar Widget End -->*/}
                            {/*<!-- Sidebar Widget Start -->*/}
                            <div className="sidebar-widget">

                                <h4 className="widget-title">Filter By Price</h4>

                                <div className="widget-price">
                                    <Slider
                                      value={price}
                                      onChange={priceHandler}
                                      valueLabelDisplay="auto"
                                      aria-labelledby="range-slider"
                                      min={0}
                                      max={25000}
                                    />
                                </div>

                                {/*<div className="widget-price">
                                    <input id="price-range" type="text"/>
                                </div>*/}
                            </div>
                            <div className="sidebar-widget">

                                <h4 className="widget-title">Filter By Range</h4>

                                <div className="widget-price">
                                    <Slider
                                      value={ratings}
                                      onChange={(e, newRating) => {setRatings(newRating);}}
                                      valueLabelDisplay="auto"
                                      aria-labelledby="continuous-slider"
                                      min={0}
                                      max={5}
                                    />
                                </div>

                                {/*<div className="widget-price">
                                    <input id="price-range" type="text"/>
                                </div>*/}
                            </div>
                            {/*<!-- Sidebar Widget End -->*/}
                            {/*<!-- Sidebar Widget Start -->*/}
                            {/*<div className="sidebar-widget">

                                <h4 className="widget-title">Filter By Color</h4>

                                <div className="widget-checkbox">
                                    <ul className="checkbox-items">
                                        <li>
                                            <input type="checkbox" id="checkbox11"/>
                                            <label htmlFor="checkbox11"> <span className="color-blue"></span>Blue</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox12"/>
                                            <label htmlFor="checkbox12"> <span className="color-dark-blue"></span>Dark Blue</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox13"/>
                                            <label htmlFor="checkbox13"> <span className="color-gray"></span>Gray</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox14"/>
                                            <label htmlFor="checkbox14"> <span className="color-green"></span>Green</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox15"/>
                                            <label htmlFor="checkbox15"> <span className="color-gray-dark"></span>Light Black</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox16"/>
                                            <label htmlFor="checkbox16"> <span className="color-lower-blue"></span>Lower Blue</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>*/}
                            {/*<!-- Sidebar Widget End -->*/}
                            {/*<!-- Sidebar Widget Start -->*/}
                            {/*<div className="sidebar-widget">

                                <h4 className="widget-title">Size</h4>

                                <div className="widget-checkbox">
                                    <ul className="checkbox-items">
                                        <li>
                                            <input type="checkbox" id="checkbox17"/>
                                            <label htmlFor="checkbox17"> <span></span>S</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox18"/>
                                            <label htmlFor="checkbox18"> <span></span>M</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox19"/>
                                            <label htmlFor="checkbox19"> <span></span>Xl</label>
                                        </li>
                                        <li>
                                            <input type="checkbox" id="checkbox20"/>
                                            <label htmlFor="checkbox20"> <span></span>XXL</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>*/}
                            {/*<!-- Sidebar Widget End -->*/}
                            {/*<!-- Sidebar Widget Start -->*/}
                            {/*<div className="sidebar-widget">

                                <h4 className="widget-title">Tags</h4>

                                <div className="widget-tags">
                                    <ul className="tags-list">
                                        <li><Link to="#">Clothing</Link></li>
                                        <li><Link to="#">Accessories</Link></li>
                                        <li><Link to="#">For Men</Link></li>
                                        <li><Link to="#">Women</Link></li>
                                        <li><Link to="#">Fashion</Link></li>
                                    </ul>
                                </div>
                            </div>*/}
                            {/*<!-- Sidebar Widget End -->*/}
                        </div>
                       {/* <!-- Sidebar End -->*/}
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

export default Shop
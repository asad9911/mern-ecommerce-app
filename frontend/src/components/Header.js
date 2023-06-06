import React,{ useState,useEffect } from 'react';
import { Link,NavLink,useNavigate,useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../actions/categoryAction";

const Header = () => {

    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [category, setCategory] = useState("");
    const [active, setActive] = useState(null);

    const { categories } = useSelector((state) => state.categories);

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
          navigate(`/shop/${keyword}`);
        } else {
          navigate("/shop");
        }
    };

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

	return (
		<>

            {/*<!-- Header Start  -->*/}
    <div className="header-area header-sticky d-none d-lg-block">
        <div className="container position-relative">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-3 order-1">
                   {/* <!-- Header Logo Start -->*/}
                    <div className="header-logo">
                        <Link to="/"><img src="../../assets/images/logo.png" style={{width: '154px' , height: '46px'}} alt="Logo" /></Link>
                    </div>
                   {/* <!-- Header Logo End -->*/}
                </div>
                <div className="col-lg-12 order-3">
                    <div className="header-menu">
                        <ul className="nav-menu">
                            <li className={splitLocation[1] === "" ? "active" : ""}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={splitLocation[1] === "shop" ? "active" : ""}>
                                <Link to="/shop">All Tiles</Link>
                            </li>
                            {categories && categories.slice(0,4).map((item) => (
                                <li key={item._id} className={splitLocation[1] === `shop/category/${item.name}` ? "active" : ``}>
                                    <Link to={`/shop/category/${item.name}`}>{item.name}</Link>
                                </li>
                            ))}
                            
                            {/*{
                                categories.map((category) => (
                                <li key={category} className={splitLocation[1] === category ? "active" : ""}>
                                    <Link to="/shop">{category}</Link>
                                </li>
                                ))
                            }*/}
                            <li className={splitLocation[1] === "about" ? "active" : ""}>
                                <Link to="/about">About</Link>
                            </li>
                            <li className={splitLocation[1] === "contact" ? "active" : ""}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 order-2">
                   {/* <!-- Header Meta Start -->*/}
                    <div className="header-meta">
                        <div className="dropdown">
                            <Link className="action" to="#" role="button" data-bs-toggle="dropdown">
                                <i className="pe-7s-search"></i>
                            </Link>

                            <div className="dropdown-menu dropdown-search">
                                {/*<!-- Header Search Start -->*/}
                                <div className="header-search">
                                    <form onSubmit={searchSubmitHandler}>
                                        <input type="text" placeholder="Search" onChange={(e) => setKeyword(e.target.value)}/>
                                        <button type="submit">
                                            <i className="pe-7s-search"></i>
                                        </button>
                                    </form>
                                </div>
                                {/*<!-- Header Search End -->*/}
                            </div>
                        </div>

                        {/*if(isAuthenticated === true) {
                            options.unshift({*/}
                                <div className="dropdown">
                                    <Link className="action" to="#" role="button" data-bs-toggle="dropdown"><i className="pe-7s-user"></i></Link>

                                    <ul className="dropdown-menu dropdown-profile">
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                    </ul>
                                </div>
                                {/*});
                        }
                        */}
                        {/*<Link className="action" to="wishlist.html"><i className="pe-7s-like"></i></Link>*/}

                        {/*<div className="dropdown">
                            <Link className="action" to="/cart" >
                                <i className="pe-7s-shopbag"></i>
                                <span className="number">3</span>
                            </Link>

                            
                        </div>*/}
                    </div>
                    {/*<!-- Header Meta End -->*/}
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Header End -->*/}

    {/*<!-- Header Mobile Start -->*/}
    <div className="header-mobile section d-lg-none">
        {/*<!-- Header Mobile top Start -->*/}
        <div className="header-mobile-top header-sticky">
            <div className="container">
                <div className="row row-cols-3 gx-2 align-items-center">
                    <div className="col">
                        {/*<!-- Header Toggle Start -->*/}
                        <div className="header-toggle">
                            <button className="mobile-menu-open" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        {/*<!-- Header Toggle End -->*/}
                    </div>
                    <div className="col">
                        {/*<!-- Header Logo Start -->*/}
                        <div className="header-logo text-center">
                            <Link to="/"><img src="../assets/images/logo.png" style={{width: '154px' , height: '46px'}} alt="Logo" /></Link>
                        </div>
                        {/*<!-- Header Logo End -->*/}
                    </div>
                    <div className="col">
                        {/*<!-- Header Action Start -->*/}
                        <div className="header-meta">
                            <div className="dropdown">
                                <Link className="action" to="#" role="button" data-bs-toggle="dropdown"><i className="pe-7s-user"></i></Link>

                                <ul className="dropdown-menu dropdown-profile">
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </ul>
                            </div>
                            {/*<Link className="action" to="cart.html">
                                <i className="pe-7s-shopbag"></i>
                                <span className="number">3</span>
                            </Link>*/}
                        </div>
                        {/*<!-- Header Action End -->*/}
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- Header Mobile top End -->*/}

        {/*<!-- Header Mobile Bottom End -->*/}
        <div className="header-mobile-bottom">
            <div className="container">
                {/*<!-- Header Search Start -->*/}
                <div className="header-search">
                    <form onSubmit={searchSubmitHandler}>
                        <input type="text" placeholder="Enter your search key ... "  onChange={(e) => setKeyword(e.target.value)} />
                        <button><i className="pe-7s-search"></i></button>
                    </form>
                </div>
                {/*<!-- Header Search End -->*/}
            </div>
        </div>
        {/*<!-- Header Mobile Bottom End -->*/}
    </div>
    {/*<!-- Header Mobile End -->*/}

    {/*<!-- off Canvas Start -->*/}
    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasMenu">
        <div className="offcanvas-header">
            {/*<!-- Canvas Action Start -->*/}
            {/*<div className="canvas-action">
                <Link className="action" to="compare.html"><i className="icon-sliders"></i> Compare
                    <span className="action-num">(3)</span></Link>
                <Link className="action" to="wishlist.html"><i className="icon-heart"></i> Wishlist
                    <span className="action-num">(3)</span></Link>
            </div>*/}
            {/*<!-- Canvas Action end -->*/}

            {/*<!-- Canvas Close bar Start -->*/}
            <div className="canvas-close-bar">
                <span>Menu</span>
                <button className="menu-close" data-bs-dismiss="offcanvas">
                    <i className="pe-7s-angle-left"></i>
                </button>
            </div>
            {/*<!-- Canvas Close bar End -->*/}
        </div>

        <div className="offcanvas-body">
            {/*<!-- Canvas Menu Start -->*/}
            <div className="canvas-menu">
                <nav>
                    <ul className="nav-menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        
                        <li>
                                <Link to="/shop">All Tiles</Link>
                        </li>
                        {categories && categories.slice(0,4).map((item) => (
                            <li key={item._id}>
                                <Link to={`/shop/category/${item.name}`}>{item.name}</Link>
                            </li>
                        ))}
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            {/*<!-- Canvas Menu End -->*/}
        </div>
    </div>
    {/*<!-- off Canvas End -->*/}

		</>
	)
}

export default Header
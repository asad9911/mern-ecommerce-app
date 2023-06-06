import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart,removeItemsFromCart } from "../actions/cartAction";

const Cart = () => {

	const dispatch = useDispatch();
  	const { cartItems } = useSelector((state) => state.cart);
    const navigate = useNavigate();

  	const increaseQuantity = (id, quantity, stock) => {
	    const newQty = quantity + 1;
	    if (stock <= quantity) {
	      return;
	    }
	    dispatch(addItemsToCart(id, newQty));
	};

	const decreaseQuantity = (id, quantity) => {
	    const newQty = quantity - 1;
	    if (1 >= quantity) {
	      return;
	    }
	    dispatch(addItemsToCart(id, newQty));
	};

	const deleteCartItems = (id) => {
	    dispatch(removeItemsFromCart(id));
	};

    const checkoutHandler = () => {
        navigate("/shipping");
    };

	return (
		<>
		{cartItems.length === 0 ? (
	
		    <div className="section section-padding cart_sec">
		        <div className="container">
		            <div className="cart-wrapper">
		                
		                <div className="empty-cart text-center">
		                    <h2 className="empty-cart-title">
		                        There are no more items in your cart
		                    </h2>
		                    <div className="empty-cart-img">
		                        <img src="assets/images/cart.png" alt="Cart" />
		                    </div>
		                    <p>Your cart is currently empty!</p>
		                    <Link to="/shop" className="btn btn-primary btn-hover-dark"><i className="fa fa-angle-left"></i> Continue
		                        Shopping</Link>
		                </div>
		                
		            </div>
		        </div>
		    </div>
		    
      ) : (
      <>
			{/*<!-- Shopping Cart Section Start -->*/}
    <div className="section section-padding cart_sec">
        <div className="container">
            <div className="cart-wrapper">
                {/*<!-- Cart Wrapper Start -->*/}
                <div className="cart-table table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="product-thumb">Image</th>
                                <th className="product-info">
                                    product Information
                                </th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-total-price">
                                    Total Price
                                </th>
                                <th className="product-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        	cartItems && cartItems.map((item) => (

                        		<tr key={item.product}>
	                                <td className="product-thumb">
	                                    <img src={item.image} alt="" />
	                                </td>
	                                <td className="product-info">
	                                    <h6 className="name">
	                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
	                                    </h6>
	                                    <div className="product-prices">
	                                        <span className="sale-price"
	                                                >{`$${item.price}`}</span>
	                                    </div>
	                                   {/* <div className="product-size-color">
	                                        <p>Size <span>S</span></p>
	                                        <p>Color <span>White</span></p>
	                                    </div>*/}
	                                </td>
	                                <td className="quantity">
	                                    <div className="product-quantity d-inline-flex">
	                                        <button onClick={() =>decreaseQuantity(item.product, item.quantity)} className="sub">
	                                            -
	                                        </button>
	                                        <input type="text" value={item.quantity} readOnly />
	                                        <button onClick={() =>increaseQuantity(item.product,item.quantity,item.stock)} className="add">
	                                            +
	                                        </button>
	                                    </div>
	                                </td>
	                                <td className="product-total-price">
	                                    <span className="price">{`$${item.price * item.quantity}`}</span>
	                                </td>
	                                <td className="product-action">
	                                    <button className="remove" onClick={() => deleteCartItems(item.product)}>
	                                        <i className="pe-7s-trash"></i>
	                                    </button>
	                                </td>
	                            </tr>

                        	))
                        }
                        <tr>
                            <td></td>
                            <td><h6>Total Price</h6></td>
                            <td></td>
                            <td><h4 className="text-center">{`$${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)}`}</h4></td>
                            <td></td>
                        </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
                {/*<!-- Cart Wrapper End -->*/}
                {/*<!-- Cart btn Start -->*/}
                <div className="cart-btn">
                    <div className="left-btn">
                        <Link to="/" className="btn btn-dark btn-hover-primary">Continue Shopping</Link>
                    </div>
                    <div className="right-btn">
                        <button onClick={checkoutHandler} className="btn btn-outline-dark">Proceed To Checkout</button>
                    </div>
                </div>
                {/*<!-- Cart btn Start -->*/}
            </div>
            <div className="row">
                

                <div className="col-lg-4">
                    {/*<!-- Cart Totals Start -->*/}
                    <div className="cart-totals">
                        {/*<div className="cart-title">
                            <h4 className="title">Cart totals</h4>
                        </div>*/}
                        {/*<div className="cart-total-table">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <p className="value">Subtotal</p>
                                        </td>
                                        <td>
                                            <p className="price">£600.00</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="value">Shipping</p>
                                        </td>
                                        <td>
                                            <ul className="shipping-list">
                                                <li className="radio">
                                                    <input type="radio" name="shipping" id="radio1" checked="" />
                                                    <label for="radio1"><span></span> Flat
                                                        Rate</label>
                                                </li>
                                                <li className="radio">
                                                    <input type="radio" name="shipping" id="radio2" />
                                                    <label for="radio2"><span></span> Free
                                                        Shipping</label>
                                                </li>
                                                <li className="radio">
                                                    <input type="radio" name="shipping" id="radio3" />
                                                    <label for="radio3"><span></span> Local
                                                        Pickup</label>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="value">Total</p>
                                        </td>
                                        <td>
                                            <p className="price">£600.00</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>*/}
                        {/*<div className="cart-total-btn">
                            <Link to="#" className="btn btn-dark btn-hover-primary btn-block">Proceed To Checkout</Link>
                        </div>*/}
                    </div>
                    {/*<!-- Cart Totals End -->*/}
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Shopping Cart Section End -->*/}	
    </>
    )}
		</>
	)
}

export default Cart
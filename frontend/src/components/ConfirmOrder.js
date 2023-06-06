import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from '../components/MetaData.js';
import { Typography } from "@material-ui/core";

const ConfirmOrder = () => {

	const navigate = useNavigate();
	const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  	const { user } = useSelector((state) => state.user);

  	const subtotal = cartItems.reduce((acc, item) => acc + item.quantity * item.price,0);

  	const shippingCharges = subtotal > 1000 ? 0 : 200;

  	const tax = subtotal * 0.18;
  	
  	const totalPrice = subtotal + tax + shippingCharges;

  	const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  	const proceedToPayment = () => {
	    const data = {
	      subtotal,
	      shippingCharges,
	      tax,
	      totalPrice,
	    };

	    sessionStorage.setItem("orderInfo", JSON.stringify(data));

	    navigate("/process/payment");
	};

	return (
		<>
			<MetaData title="Confirm Order" />
      		<div className="section section-padding update_password">
        	<div className="container">
        	<div className="row">
        		<CheckoutSteps activeStep={1} />
        	</div>
            <div className="row justify-content-center">
	        <div className="col-12">
      		<div className="confirmOrderPage row">

      			<div className="col-lg-8 col-md-12 col-sm-12">
		          <div className="confirmshippingArea">
		            <h3>Shipping Info</h3>
		            <div className="confirmshippingAreaBox">
		              <div>
		                <p><b>Name:</b></p>
		                <span>{user.name}</span>
		              </div>
		              <div>
		                <p><b>Phone:</b></p>
		                <span>{shippingInfo.phoneNo}</span>
		              </div>
		              <div>
		                <p><b>Address:</b></p>
		                <span>{address}</span>
		              </div>
		            </div>
		          </div>
		          <div className="confirmCartItems">
		            <h3>Your Cart Items:</h3>
		            <div className="confirmCartItemsContainer">
		              {cartItems &&
		                cartItems.map((item) => (
		                  <div key={item.product}>
		                    <img src={item.image} alt="Product" />
		                    <h6><Link to={`/product/${item.product}`}>
		                      {item.name}
		                    </Link></h6>
		                    <span>
		                      {item.quantity} X ${item.price} =
		                      <b>${item.price * item.quantity}</b>
		                    </span>
		                  </div>
		                ))}
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-4 col-md-12 col-sm-12">
		        <div className="orderSummary">
		            <h3>Order Summery</h3>
		              <div>
		                <p><b>Subtotal:</b></p>
		                <span>${subtotal}</span>
		              </div>
		              <div>
		                <p><b>Shipping Charges:</b></p>
		                <span>${shippingCharges}</span>
		              </div>
		              <div>
		                <p><b>GST:</b></p>
		                <span>${tax}</span>
		              </div>

		            <div className="orderSummaryTotal">
		              <p>
		                <b>Total:</b>
		              </p>
		              <span>${totalPrice}</span>
		            </div>

		            <button className="btn btn-primary btn-hover-dark" onClick={proceedToPayment}>Proceed To Payment</button>
		        </div>
		        </div>
		    </div>
		    </div>
		    </div>
		    </div>
		    </div>
		</>
	)
}

export default ConfirmOrder
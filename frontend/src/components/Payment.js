import React,{useRef,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "./CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from '../components/MetaData.js';
import { useAlert } from "react-alert";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { createOrder, clearErrors } from "../actions/orderAction";

const Payment = () => {

	const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const alert = useAlert();
	const stripe = useStripe();
	const elements = useElements();
	const payBtn = useRef(null);

	const { shippingInfo, cartItems } = useSelector((state) => state.cart);
	const { user } = useSelector((state) => state.user);
	const { error } = useSelector((state) => state.newOrder);

	const paymentData = {
    	amount: Math.round(orderInfo.totalPrice * 100),
	};

	const order = {
		shippingInfo,
		orderItems: cartItems,
		itemsPrice: orderInfo.subtotal,
		taxPrice: orderInfo.tax,
		shippingPrice: orderInfo.shippingCharges,
		totalPrice: orderInfo.totalPrice,
	};

	const submitHandler = async (e) =>{
		e.preventDefault();

		payBtn.current.disabled = true;

		try {
	      const config = {
	        headers: {
	          "Content-Type": "application/json",
	        },
	      };
	      const { data } = await axios.post(
	        "/api/v1/payment/process",
	        paymentData,
	        config
	      );

	      const client_secret = data.client_secret;

	      if (!stripe || !elements) return;

	      const result = await stripe.confirmCardPayment(client_secret, {
	        payment_method: {
	          card: elements.getElement(CardNumberElement),
	          billing_details: {
	            name: user.name,
	            email: user.email,
	            address: {
	              line1: shippingInfo.address,
	              city: shippingInfo.city,
	              state: shippingInfo.state,
	              postal_code: shippingInfo.pinCode,
	              country: shippingInfo.country,
	            },
	          },
	        },
	      });

	      if (result.error) {
	        payBtn.current.disabled = false;

	        alert.error(result.error.message);
	      } else {
	        if (result.paymentIntent.status === "succeeded") {
	          order.paymentInfo = {
	            id: result.paymentIntent.id,
	            status: result.paymentIntent.status,
	          };

	          dispatch(createOrder(order));

	          navigate("/success");
	        } else {
	          alert.error("There's some issue while processing payment ");
	        }
	      }
	    } catch (error) {
	      payBtn.current.disabled = false;
	      alert.error(error.response.data.message);
	    }
	}

	useEffect(() => {
		if (error) {
		  alert.error(error);
		  dispatch(clearErrors());
		}
	}, [dispatch, error, alert]);

	return (
		<>
			<MetaData title="Payment" />
			<div className="section section-padding update_password">
        	<div className="container">
        	<div className="row">
        		<CheckoutSteps activeStep={2} />
        	</div>
            <div className="row justify-content-center">
	        <div className="col-md-6 col-sm-12">
      		<div className="paymentContainer">
		        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
		          <h3>Card Info</h3>
		          <div>
		            <CreditCardIcon />
		            <CardNumberElement className="paymentInput" />
		          </div>
		          <div>
		            <EventIcon />
		            <CardExpiryElement className="paymentInput" />
		          </div>
		          <div>
		            <VpnKeyIcon />
		            <CardCvcElement className="paymentInput" />
		          </div>

		          <input
		            type="submit"
		            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
		            ref={payBtn}
		            className="btn btn-primary btn-hover-dark paymentFormBtn"
		          />
		        </form>
		    </div>
		    </div>
		    </div>
		    </div>
		    </div>
		</>
	)
}

export default Payment
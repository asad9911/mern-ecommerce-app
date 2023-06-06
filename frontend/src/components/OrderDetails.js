import React,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { Typography } from "@material-ui/core";
import { clearErrors, getOrderDetails } from "../actions/orderAction";
import Loader from "./Loader";
import MetaData from '../components/MetaData.js';

const OrderDetails = () => {

	const { order, error, loading } = useSelector((state) => state.orderDetails);

	const dispatch = useDispatch();
	const {id} = useParams();
  	const alert = useAlert();

  	useEffect(() => {
	    if (error) {
	      alert.error(error);
	      dispatch(clearErrors());
	    }

	    dispatch(getOrderDetails(id));
	}, [dispatch, alert, error, id]);
	
	return (
		<>
			{loading ? (
		        <Loader />
		      ) : (
		      <>

		      	<MetaData title="Order Details" />

		      	<div className="orderDetailsPage">
		      	<div className="container">
		            <div className="orderDetailsContainer">
		              <h3>
		                Order # {order && order._id}
		              </h3>
		              <div className="row pt-5">
			              
			              <div className="col-lg-4 col-md-12 col-sm-12 mb-4">
				              <div className="orderDetailsContainerBox">
				              <h4>Shipping Info</h4>
				                <div>
				                  <p><b>Name:</b></p>
				                  <span>{order.user && order.user.name}</span>
				                </div>
				                <div>
				                  <p><b>Phone:</b></p>
				                  <span>
				                    {order.shippingInfo && order.shippingInfo.phoneNo}
				                  </span>
				                </div>
				                <div>
				                  <p><b>Address:</b></p>
				                  <span>
				                    {order.shippingInfo &&
				                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
				                  </span>
				                </div>
				              </div>
			              </div>

				           <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
				              <div className="orderDetailsContainerBox">
				              <h4>Payment</h4>
				                <div>
				                  <p
				                    className={
				                      order.paymentInfo &&
				                      order.paymentInfo.status === "succeeded"
				                        ? "greenColor"
				                        : "redColor"
				                    }
				                  >
				                    <b>{order.paymentInfo &&
				                    order.paymentInfo.status === "succeeded"
				                      ? "PAID"
				                      : "NOT PAID"}
				                      </b>
				                  </p>
				                </div>
				                <div>
				                  <p><b>Amount:</b></p>
				                  <span>{order.totalPrice && order.totalPrice}</span>
				                </div>
			               		</div>
		              		</div>

		              		<div className="col-lg-4 col-md-6 col-sm-6 mb-4">
				              <div className="orderDetailsContainerBox">
				              <h4>Order Status</h4>
				                <div>
				                  <p
				                    className={
				                      order.orderStatus && order.orderStatus === "Delivered"
				                        ? "greenColor"
				                        : "redColor"
				                    }
				                  >
				                    <b>{order.orderStatus && order.orderStatus}</b>
				                  </p>
				                </div>
				              </div>
			                </div>

		              </div>
		            </div>

		            <div className="orderDetailsCartItems">
		              <h4>Order Items:</h4>
		              <div className="orderDetailsCartItemsContainer">
		                {order.orderItems &&
		                  order.orderItems.map((item) => (
		                    <div key={item.product}>
		                      <img src={item?.image} alt="Product" />
		                      <Link className="text-capitalize" to={`/product/${item.product}`}>
		                        <b>{item.name}</b>
		                      </Link>
		                      <span>
		                        {item.quantity} X ${item.price} =
		                        <b>${item.price * item.quantity}</b>
		                      </span>
		                    </div>
		                  ))}
		              </div>
		            </div>

		        </div>
		        </div>

		      </>
		      )}
		</>
	)
}

export default OrderDetails
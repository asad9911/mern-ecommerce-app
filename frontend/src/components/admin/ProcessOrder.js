import React,{useEffect,useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./Sidebar";
import { useAlert } from "react-alert";
import { Link,useNavigate,useParams } from "react-router-dom";
import MetaData from '../../components/MetaData.js';
import { clearErrors, getOrderDetails, updateOrder } from "../../actions/orderAction";
import Loader from "../Loader";
import { Button } from "@material-ui/core";
import { UPDATE_ORDER_RESET } from "../../constants/orderConstant";

const ProcessOrder = () => {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {id} = useParams();
  	const alert = useAlert();
  	const [status, setStatus] = useState("");
	const { order, error, loading } = useSelector((state) => state.orderDetails);

	const { error: updateError, isUpdated } = useSelector((state) => state.order);

	const updateOrderSubmitHandler = (e) => {
	    e.preventDefault();

	    const myForm = new FormData();

	    myForm.set("status", status);

	    dispatch(updateOrder(id, myForm));
	};

	useEffect(() => {
	    if (error) {
	      alert.error(error);
	      dispatch(clearErrors());
	    }
	    if (updateError) {
	      alert.error(updateError);
	      dispatch(clearErrors());
	    }
	    if (isUpdated) {
	      alert.success("Order Updated Successfully");
	      dispatch({ type: UPDATE_ORDER_RESET });
	    }

	    dispatch(getOrderDetails(id));
	}, [dispatch, alert, error, id, isUpdated, updateError]);

	return (
		<>
		{loading ? (
            <Loader />
          ) : (
          <>
			<MetaData title="Process Order" />
      		<div className="section section-padding update_password dashboard-panel">
        	<div className="container">
        	
            <div className="row justify-content-center">
	        <div className="col-12">
      		<div className="confirmOrderPage row">
            <Sidebar />	

      			<div className="col-lg-6 col-md-12 col-sm-12">
		          <div className="orderDetailsContainerBox">
	              <h4>Shipping Info</h4>
	                <div>
	                  <p><b>Name:</b></p>
	                  <span>{order?.user && order.user.name}</span>
	                </div>
	                <div>
	                  <p><b>Phone:</b></p>
	                  <span>
	                    {order?.shippingInfo && order.shippingInfo.phoneNo}
	                  </span>
	                </div>
	                <div>
	                  <p><b>Address:</b></p>
	                  <span>
	                    {order?.shippingInfo &&
	                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
	                  </span>
	                </div>
	              </div>
		          <div className="orderDetailsContainerBox">
	              <h4>Payment</h4>
	                <div>
	                  <p
	                    className={
	                      order?.paymentInfo &&
	                      order.paymentInfo.status === "succeeded"
	                        ? "text-success"
	                        : "text-danger"
	                    }
	                  >
	                    <b>{order?.paymentInfo &&
	                    order.paymentInfo.status === "succeeded"
	                      ? "PAID"
	                      : "NOT PAID"}
	                      </b>
	                  </p>
	                </div>
	                <div>
	                  <p><b>Amount:</b></p>
	                  <span>${order?.totalPrice && order.totalPrice}</span>
	                </div>
               		</div>
               		<div className="orderDetailsContainerBox">
		              <h4>Order Status</h4>
		                <div>
		                  <p
		                    className={
		                      order?.orderStatus && order.orderStatus === "Delivered"
		                        ? "text-success"
		                        : "text-danger"
		                    }
		                  >
		                    <b>{order?.orderStatus && order.orderStatus}</b>
		                  </p>
		                </div>
		              </div>
		          <div className="confirmCartItems">
		            <h3>Your Cart Items:</h3>
		            <div className="confirmCartItemsContainer">
		              {order.orderItems &&
                      order.orderItems.map((item) => (
                        <div key={item.product}>
                          <img src={item.image} alt="Product" />
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>{" "}
                          <span>
                            {item.quantity} X ₹{item.price} ={" "}
                            <b>₹{item.price * item.quantity}</b>
                          </span>
                        </div>
                      ))}
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-3 col-md-12 col-sm-12">
		        	<div className="updateOrderForm">
		        		<form
		                  onSubmit={updateOrderSubmitHandler}
		                >
		                  <h3>Process Order</h3>

		                  <div className="single-form">
		                    
		                    <select onChange={(e) => setStatus(e.target.value)}>
		                      <option value="">Choose Category</option>
		                      {order.orderStatus === "Processing" && (
		                        <option value="Shipped">Shipped</option>
		                      )}

		                      {order.orderStatus === "Shipped" && (
		                        <option value="Delivered">Delivered</option>
		                      )}
		                    </select>
		                  </div>

		                  <Button
		                    id="createProductBtn"
		                    className="btn btn-primary btn-hover-dark btn-margin mt-4 w-100"
		                    type="submit"
		                    disabled={
		                      loading ? true : false || status === "" ? true : false
		                    }
		                  >
		                    Process
		                  </Button>
		                </form>
		        	</div>
		        </div>
		    </div>
		    </div>
		    </div>
		    </div>
		    </div>
		    </>
		    )}
		</>
	)
}

export default ProcessOrder
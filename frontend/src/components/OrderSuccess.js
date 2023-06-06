import React from 'react';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Link } from "react-router-dom";
import MetaData from '../components/MetaData.js';

const OrderSuccess = () => {
	return (
		<>
			<MetaData title="Success" />
      		<div className="section section-padding update_password">
        	<div className="container">
			<div className="orderSuccess">
		      <CheckCircleIcon />

		      <h3>Your Order has been Placed successfully </h3>
		      <Link className="btn btn-primary btn-hover-dark" to="/orders">View Orders</Link>
		    </div>	
		    </div>	
		    </div>	
		</>
	)
}

export default OrderSuccess
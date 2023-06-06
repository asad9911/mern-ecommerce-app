import React, { useState, useEffect } from "react";
import {Link,useNavigate} from 'react-router-dom';
import Loader from "../../components/Loader.js";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import MetaData from '../../components/MetaData.js';

const ForgotPassword = () => {

	const dispatch = useDispatch();
	const alert = useAlert();

	const { error, message, loading } = useSelector(
	    (state) => state.forgotPassword
	);

	const [email, setEmail] = useState("");

	const forgotPasswordSubmit = (e) => {
	    e.preventDefault();

	    const myForm = new FormData();

	    myForm.set("email", email);
	    dispatch(forgotPassword(myForm));
	};

	useEffect(() => {
	    if (error) {
	      alert.error(error);
	      dispatch(clearErrors());
	    }

	    if (message) {
	      alert.success(message);
	    }
	}, [dispatch, error, alert, message]);
	
	return (
		<>
			{loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Forgot Password" />
          <div className="section section-padding forgot_password">
          <div className="container">
          <div className="row justify-content-center">
	          <div className="col-lg-6 col-md-6 col-sm-12">
	            <div className="forgotPasswordBox">
	              <h2 className="forgotPasswordHeading">Forgot Password</h2>

	              <form
	                className="forgotPasswordForm"
	                onSubmit={forgotPasswordSubmit}
	              >
	                <div className="single-form">
	                  <input
	                    type="email"
	                    placeholder="Email"
	                    required
	                    name="email"
	                    value={email}
	                    onChange={(e) => setEmail(e.target.value)}
	                  />
	                </div>

	                <div className="single-form">	                
		                <button type="submit" className="btn btn-primary btn-hover-dark">
	                        Send
	                    </button>
		            </div>
	              </form>
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

export default ForgotPassword
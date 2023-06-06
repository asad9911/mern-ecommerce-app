import React, { useState, useEffect } from "react";
import {Link,useNavigate,useParams} from 'react-router-dom';
import Loader from "../../components/Loader.js";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import MetaData from '../../components/MetaData.js';
import {AiFillEye,AiOutlineEyeInvisible} from "react-icons/ai";

const ResetPassword = () => {

	const [showNewPassword, setShowNewPassword] = useState(false);
  const toggleNewPassword = () =>{
      setShowNewPassword(!showNewPassword);
  }

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPassword = () =>{
      setShowConfirmPassword(!showConfirmPassword);
  }

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();
	const {token} = useParams();

	const { error, success, loading } = useSelector(
	    (state) => state.forgotPassword
	);

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const resetPasswordSubmit = (e) => {
	    e.preventDefault();

	    const myForm = new FormData();

	    myForm.set("password", password);
	    myForm.set("confirmPassword", confirmPassword);

	    dispatch(resetPassword(token, myForm));
	};

	useEffect(() => {
	    if (error) {
	      alert.error(error);
	      dispatch(clearErrors());
	    }

	    if (success) {
	      alert.success("Password Updated Successfully");

	      navigate("/login");
	    }
	}, [dispatch, error, alert, navigate, success]);

	return (
		<>
				{loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Change Password" />
          	<div className="section section-padding update_password">
        	<div className="container">
            <div className="row justify-content-center">
	          <div className="col-lg-6 col-md-6 col-sm-12">
	            <div className="resetPasswordBox">
	              <h2 className="resetPasswordHeading">Update Profile</h2>

	              <form
	                className="resetPasswordForm"
	                onSubmit={resetPasswordSubmit}
	              >
	                <div className="single-form">
	                  {/*<LockOpenIcon />*/}
	                  <input
	                    type={showNewPassword ? 'text' : 'password'}
	                    placeholder="New Password"
	                    required
	                    value={password}
	                    onChange={(e) => setPassword(e.target.value)}
	                  />
	                  <div className="password_icon" onClick={toggleNewPassword}>
	                        {showNewPassword ? (<AiOutlineEyeInvisible size={20} />) : (<AiFillEye size={20}/>)}
	                    </div>
	                </div>
	                <div className="single-form">
	                  {/*<LockIcon />*/}
	                  <input
	                    type={showConfirmPassword ? 'text' : 'password'}
	                    placeholder="Confirm Password"
	                    required
	                    value={confirmPassword}
	                    onChange={(e) => setConfirmPassword(e.target.value)}
	                  />
	                  <div className="password_icon" onClick={toggleConfirmPassword}>
	                        {showConfirmPassword ? (<AiOutlineEyeInvisible size={20} />) : (<AiFillEye size={20}/>)}
	                    </div>
	                </div>
	                <div className="single-form">	                
		                <button type="submit" className="btn btn-primary btn-hover-dark">
	                        Update
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

export default ResetPassword
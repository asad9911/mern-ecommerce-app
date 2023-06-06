import React, { useState, useEffect } from "react";
import {Link,useNavigate} from 'react-router-dom';
import Loader from "../../components/Loader.js";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updatePassword } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstant";
import MetaData from '../../components/MetaData.js';
import {AiFillEye,AiOutlineEyeInvisible} from "react-icons/ai";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
// import LockIcon from "@material-ui/icons/Lock";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";

const UpdatePassword = () => {

	const [showOldPassword, setShowOldPassword] = useState(false);
    const toggleOldPassword = () =>{
        setShowOldPassword(!showOldPassword);
    }

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

	const { error, isUpdated, loading } = useSelector((state) => state.profile);

	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const updatePasswordSubmit = (e) => {
	    e.preventDefault();

	    const myForm = new FormData();

	    myForm.set("oldPassword", oldPassword);
	    myForm.set("newPassword", newPassword);
	    myForm.set("confirmPassword", confirmPassword);

	    dispatch(updatePassword(myForm));
	};

	useEffect(() => {
	    if (error) {
	      alert.error(error);
	      dispatch(clearErrors());
	    }

	    if (isUpdated) {
	      alert.success("Profile Updated Successfully");

	      navigate("/account");

	      dispatch({
	        type: UPDATE_PASSWORD_RESET,
	      });
	    }
	}, [dispatch, error, alert, navigate, isUpdated]);

	return (
		<>
		{loading ? (
        <Loader />
      ) : (
    <>
    <MetaData title="Update Password" />
    <div className="section section-padding update_password">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12">
	            <div className="updatePasswordBox">
	              <h2 className="updatePasswordHeading">Update Profile</h2>
	              <form
	                className="updatePasswordForm"
	                onSubmit={updatePasswordSubmit}
	              >
	                <div className="single-form">
	                  {/*<VpnKeyIcon />*/}
	                  <input
	                    type={showOldPassword ? 'text' : 'password'}
	                    placeholder="Old Password"
	                    required
	                    value={oldPassword}
	                    onChange={(e) => setOldPassword(e.target.value)}
	                  />
	                  <div className="password_icon" onClick={toggleOldPassword}>
	                        {showOldPassword ? (<AiOutlineEyeInvisible size={20} />) : (<AiFillEye size={20}/>)}
	                    </div>
	                </div>

	                <div className="single-form">
	                  {/*<LockOpenIcon />*/}
	                  <input
	                    type={showNewPassword ? 'text' : 'password'}
	                    placeholder="New Password"
	                    required
	                    value={newPassword}
	                    onChange={(e) => setNewPassword(e.target.value)}
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
                        Updated
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

export default UpdatePassword
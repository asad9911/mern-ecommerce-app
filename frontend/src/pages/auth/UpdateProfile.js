import React,{useState, useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import MetaData from '../../components/MetaData.js';
import Loader from "../../components/Loader.js";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updateProfile, loadUser } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstant";

const UpdateProfile = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
	const navigate = useNavigate();

	const { user } = useSelector((state) => state.user);
	const { error, isUpdated, loading } = useSelector((state) => state.profile);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState();
	const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

	const updateProfileSubmit = (e) => {
	    e.preventDefault();

	    const myForm = new FormData();

	    myForm.set("name", name);
	    myForm.set("email", email);
	    myForm.set("avatar", avatar);
	    dispatch(updateProfile(myForm));
	};

	const updateProfileDataChange = (e) => {
	    const reader = new FileReader();

	    reader.onload = () => {
	      if (reader.readyState === 2) {
	        setAvatarPreview(reader.result);
	        setAvatar(reader.result);
	      }
	    };

	    reader.readAsDataURL(e.target.files[0]);
	};

	useEffect(() => {
	    if (user) {
	      setName(user.name);
	      setEmail(user.email);
	      setAvatarPreview(user.avatar.url);
	    }

	    if (error) {
	      alert.error(error);
	      dispatch(clearErrors());
	    }

	    if (isUpdated) {
	      alert.success("Profile Updated Successfully");
	      dispatch(loadUser());

	      navigate("/account");

	      dispatch({
	        type: UPDATE_PROFILE_RESET,
	      });
	    }
	}, [dispatch, error, alert, navigate, user, isUpdated]);

	return (
		<>
		{loading ? (
        <Loader />
      ) : (
    <>
    <MetaData title="Update Profile" />
    <div className="section section-padding update_profile">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    {/*<!-- Login & Register Start -->*/}
                    <div className="login-register-wrapper">
                        <h4 className="title">Update Your Profile</h4>
                        <form onSubmit={updateProfileSubmit} encType="multipart/form-data">
                            <div className="single-form" id="registerImage">
                                <img src={avatarPreview} alt="Avatar Preview" />
                                <input
                                    type="file"
                                    name="avatar"
                                    accept="image/*"
                                    onChange={updateProfileDataChange}
                                  />
                            </div>
                            <div className="single-form">
                                <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            {/*<div className="single-form">
                                <input type="text" placeholder="Last Name" />
                            </div>*/}
                            <div className="single-form">
                                <input type="email" placeholder="Email *" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            {/*<div className="single-form">
                                <input type="text" placeholder="Username *" />
                            </div>*/}
                            {/*<div className="single-form">
                            <div className="passwordField">
                                <AiFillEye />
                                <input type="password" placeholder="Password" name="password" value={password} onChange={registerDataChange}/>
                            </div>
                            </div>*/}
                            {/*<div className="single-form">
                                <input type="password" placeholder="Confirm Password" />
                            </div>*/}
                            <div className="single-form">
                                <button type="submit" className="btn btn-primary btn-hover-dark">
                                    Updated
                                </button>
                            </div>
                        </form>
                    </div>
                    {/*<!-- Login & Register End -->*/}
                </div>
            </div>
        </div>
    </div>

	</>
      )}
			
		</>
	)
}

export default UpdateProfile
import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Loader from "../../components/Loader.js";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, register } from "../../actions/userAction";
import {AiFillEye} from "react-icons/ai";

const Register = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();

    const { error, loading, isAuthenticated } = useSelector((state) => state.user);

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = user;

    const [avatar, setAvatar] = useState("/Profile.png");
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

    const registerSubmit = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("avatar", avatar);
        dispatch(register(myForm));
    };

    const registerDataChange = (e) => {
        if (e.target.name === "avatar") {
          const reader = new FileReader();

          reader.onload = () => {
            if (reader.readyState === 2) {
              setAvatarPreview(reader.result);
              setAvatar(reader.result);
            }
          };

          reader.readAsDataURL(e.target.files[0]);
        } else {
          setUser({ ...user, [e.target.name]: e.target.value });
        }
    };

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }

        if (isAuthenticated) {
            navigate('/account');
        }

    }, [dispatch, isAuthenticated, error, alert, navigate]);

	return (
		<>

        {loading ? (
        <Loader />
      ) : (
      <>
			{/*<!-- Register Section Start -->*/}
    <div className="section section-padding login-register-panel">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    {/*<!-- Login & Register Start -->*/}
                    <div className="login-register-wrapper">
                        <h4 className="title">Register Your Account</h4>
                        <form onSubmit={registerSubmit} encType="multipart/form-data">
                            <div className="single-form" id="registerImage">
                                <img src={avatarPreview} alt="Avatar Preview" />
                                <input
                                    type="file"
                                    name="avatar"
                                    accept="image/*"
                                    onChange={registerDataChange}
                                  />
                            </div>
                            <div className="single-form">
                                <input type="text" placeholder="Name" name="name" value={name} onChange={registerDataChange}/>
                            </div>
                            {/*<div className="single-form">
                                <input type="text" placeholder="Last Name" />
                            </div>*/}
                            <div className="single-form">
                                <input type="email" placeholder="Email *" name="email" value={email} onChange={registerDataChange}/>
                            </div>
                            {/*<div className="single-form">
                                <input type="text" placeholder="Username *" />
                            </div>*/}
                            <div className="single-form">
                            <div className="passwordField">
                                <AiFillEye />
                                <input type="password" placeholder="Password" name="password" value={password} onChange={registerDataChange}/>
                            </div>
                            </div>
                            {/*<div className="single-form">
                                <input type="password" placeholder="Confirm Password" />
                            </div>*/}
                            <div className="single-form">
                                <button type="submit" className="btn btn-primary btn-hover-dark">
                                    Register
                                </button>
                            </div>
                            <p>
	                            Already have an account?
	                            <Link to="/login">Log in instead!</Link>
	                        </p>
                        </form>
                    </div>
                    {/*<!-- Login & Register End -->*/}
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Register Section End -->*/}	
    </>
        )}
		</>
	)
}

export default Register
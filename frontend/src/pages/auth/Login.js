import React,{useState,useEffect} from 'react';
import {Link,useNavigate,useLocation} from 'react-router-dom';
import Loader from "../../components/Loader.js";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, login } from "../../actions/userAction";
import {AiFillEye,AiOutlineEyeInvisible} from "react-icons/ai";

const Login = () => {

    const [showpassword, setShowPassword] = useState(false);
    const togglePassword = () =>{
        setShowPassword(!showpassword);
    }

    const dispatch = useDispatch();
    const alert = useAlert();
    const location = useLocation();

    const navigate = useNavigate();

    const { error, loading, isAuthenticated } = useSelector((state) => state.user);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
    };

    const redirect = location.search ? location.search.split("=")[1] : "/account";

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }

        if (isAuthenticated) {
            navigate(redirect);
        }

    }, [dispatch, isAuthenticated, error, alert, navigate, redirect]);

	return (
		<>
        {loading ? (
        <Loader />
      ) : (
      <>
		
    {/*<!-- Login Section Start -->*/}
    <div className="section section-padding login-register-panel">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    {/*<!-- Login & Register Start -->*/}
                    <div className="login-register-wrapper">
                        <h4 className="title">Login to Your Account</h4>
                        <form onSubmit={loginSubmit}>
                            <div className="single-form">
                                <input type="email" placeholder="Email *" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/>
                            </div>
                            <div className="single-form">
                            <div className="passwordField">
                                <input type={showpassword ? 'text' : 'password'} placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                                <div className="password_icon" onClick={togglePassword}>
                                    {showpassword ? (<AiOutlineEyeInvisible size={20} />) : (<AiFillEye size={20}/>)}
                                </div>
                            </div>
                            </div>
                            {/*<div className="single-form">
                                <input type="checkbox" id="remember" />
                                <label for="remember"><span></span> Remember me</label>
                            </div>*/}
                            <div className="single-form">
                                <button type="submit" className="btn btn-primary btn-hover-dark">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="d-flex justify-content-between align-items-baseline">
                        	<p><Link to="/password/forgot">Lost your password?</Link></p>
	                        <p>
	                            No account?
	                            <Link to="/register">Create one here.</Link>
	                        </p>
                        </div>
                    </div>
                    {/*<!-- Login & Register End -->*/}
                </div>
            </div>
        </div>
    </div>
    {/*<!-- Login Section End -->*/}	
		</>
        )}
      </>
	)
}

export default Login
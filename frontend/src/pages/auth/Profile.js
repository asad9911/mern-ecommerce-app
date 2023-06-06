import React,{useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import MetaData from '../../components/MetaData.js';
import Loader from "../../components/Loader.js";
import { useSelector } from "react-redux";

const Profile = () => {

	const { user, loading, isAuthenticated } = useSelector((state) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
	    if (isAuthenticated === false) {
	      navigate("/login");
	    }
	}, [navigate, isAuthenticated]);

	return (
		<>
		{
            loading? ( <Loader />) :(

            <>

			 <MetaData title={`${user.name}'s Profile`} />

			<div className="profileContainer">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-sm-12">
							<div className="profile_image">
								<h3>My Profile</h3>
					            <img src={user.avatar.url} alt={user.name} />
					            <Link className="btn btn-dark btn-hover-primary mt-4" to="/me/update">Edit Profile</Link>
							</div>
			            </div>
			            <div className="col-md-6 col-sm-12">
			              <div className="profile_content">
			              	<div>
				                <h4>Full Name</h4>
				                <p>{user.name}</p>
				            </div>
				            <div>
				                <h4>Email</h4>
				                <p>{user.email}</p>
				            </div>
				            <div>
				                <h4>Joined On</h4>
				                <p>{String(user.createdAt).substr(0, 10)}</p>
				            </div>
				            <div className="mt-4">
				                <Link className="btn btn-dark btn-hover-primary" to="/orders">My Orders</Link>
				                <Link className="btn btn-dark btn-hover-primary" to="/password/update">Change Password</Link>
				            </div>
			              </div>
			            </div>
					</div>
				</div>	            
	        </div>

			</>
     )
        }
		</>
	)
}

export default Profile;
import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams,useNavigate } from "react-router-dom";
import { clearErrors, updateUser, getUserDetails } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MetaData from '../../components/MetaData';
import Loader from "../Loader";
import Sidebar from "./Sidebar";
import { UPDATE_USER_RESET  } from "../../constants/userConstant";

const UpdateUser = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {id} = useParams();
	const alert = useAlert();

	const { loading, error, user } = useSelector((state) => state.userDetails);

	const { loading: updateLoading, error: updateError, isUpdated } = useSelector((state) => state.profile);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");

	useEffect(() => {

		if (user && user._id !== id) {
	      dispatch(getUserDetails(id));
	    } else {
	      setName(user.name);
	      setEmail(user.email);
	      setRole(user.role);
	    }

	    if (error) {
	      alert.error(error);
	      dispatch(clearErrors());
	    }

	    if (updateError) {
	      alert.error(updateError);
	      navigate("/admin/dashboard");
	      dispatch(clearErrors());
	    }

	    if (isUpdated) {
	      alert.success("User Updated Successfully");
	      navigate("/admin/users");
	      dispatch({ type: UPDATE_USER_RESET });
	    }
	}, [dispatch, alert, error, navigate, id, isUpdated, user, updateError]);

	const updateUserSubmitHandler = (e) => {
	    e.preventDefault();

	    const myForm = new FormData();

	    myForm.set("name", name);
	    myForm.set("email", email);
	    myForm.set("role", role);

	    dispatch(updateUser(id, myForm));
	};

	return (
		<>
			{loading ? (
        <Loader />
      ) : (
      	<>

		      		<div className="dashboard-panel">
					<div className="container">
						<MetaData title={`Create Product`} />
						<div className="row">
							<Sidebar />	
							<div className="col-lg-9 col-md-8">
								<div className="dashboardContainer">
							        <h3>Update User</h3>
							        <div className="col-12">
		                    			<form
							            className="createProductForm"
							            onSubmit={updateUserSubmitHandler}
							          >
							            <div className="single-form">
							              <SpellcheckIcon />
							              <input
							                type="text"
							                placeholder="Name"
							                required
							                value={name}
							                onChange={(e) => setName(e.target.value)}
							              />
							            </div>
							            <div className="single-form">
							              <AttachMoneyIcon />
							              <input
							                type="email"
							                placeholder="Email"
							                required
							                value={email}
							                onChange={(e) => setEmail(e.target.value)}
							              />
							            </div>

							            <div className="single-form">
							              {/*<AccountTreeIcon />
							              <select value={category} onChange={(e) => setCategory(e.target.value)}>
							                <option value="">Choose Category</option>
							                {categories.map((cate) => (
							                  <option key={cate} defaultValue={cate}>
							                    {cate}
							                  </option>
							                ))}
							              </select>*/}
							              <select value={role} onChange={(e) => setRole(e.target.value)}>
							                  <option value="">Choose Role</option>
							                  <option value="admin">Admin</option>
							                  <option value="user">User</option>
							               </select>
							            </div>
							          
							            <button
							            className="mt-2 btn btn-primary btn-hover-dark paymentFormBtn"
							              id="createProductBtn"
							              type="submit"
							              disabled={updateLoading ? true : false || role === "" ? true : false}
							            >
							              Update
							            </button>
							          </form>
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

export default UpdateUser
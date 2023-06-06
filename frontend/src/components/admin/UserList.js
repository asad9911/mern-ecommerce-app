import React,{useMemo,useEffect} from 'react';
import Sidebar from "./Sidebar";
import MaterialReactTable from 'material-react-table';
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams,useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { getAllUsers, clearErrors, deleteUser } from "../../actions/userAction";
import Loader from "../Loader";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MetaData from '../../components/MetaData.js';
import { DELETE_USER_RESET } from "../../constants/userConstant";

const UserList = () => {

	const dispatch = useDispatch();
	// const {id} = useParams();
	const alert = useAlert();
	const navigate = useNavigate();
	const { loading, error, users } = useSelector((state) => state.allUsers);

	const { error: deleteError, isDeleted, message } = useSelector((state) => state.profile);

	const deleteUserHandler = (id) => {
	    dispatch(deleteUser(id));
	};

	useEffect(() => {
		if (error) {
		  alert.error(error);
		  dispatch(clearErrors());
		}

		if (deleteError) {
		  alert.error(deleteError);
		  dispatch(clearErrors());
		}

		if (isDeleted) {
		  alert.success(message);
		  // navigate("/admin/dashboard");
		  dispatch({ type: DELETE_USER_RESET });
		}

		dispatch(getAllUsers());
	}, [dispatch, alert, error, deleteError, isDeleted, navigate, message]);

	const columns = useMemo(
	    () => [
	      {
	        accessorFn: (row) => row.name, //alternate way
	        id: 'name', //id required if you use accessorFn instead of accessorKey
	        header: 'Name',
	        Header: () => <span>Name</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => row.email, //alternate way
	        id: 'email', //id required if you use accessorFn instead of accessorKey
	        header: 'Email',
	        Header: () => <span>Email</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => <span className={row.role === "admin" ? "text-success" : "text-danger"}>{row.role}</span>, //alternate way
	        id: 'role', //id required if you use accessorFn instead of accessorKey
	        header: 'Role',
	        Header: () => <span>Role</span>, //optional custom header render
	      },
	      // {
	      //   accessorFn: (row) => <span><img src={row.avatar.url ? row.avatar.url : "../Profile.png"} /></span>, //alternate way
	      //   id: 'avatar', //id required if you use accessorFn instead of accessorKey
	      //   header: 'Profile',
	      //   Header: () => <span>Profile</span>, //optional custom header render
	      // },
	      {
	        accessorFn: (row) => <span>
	                            <Link to={`/admin/user/${row._id}`}>
	                              <EditIcon />
	                            </Link>
	                            <Button onClick={() => deleteUserHandler(row._id)}>
	                              <DeleteIcon />
	                            </Button>
	                          </span>, //alternate way
	        id: 'action', //id required if you use accessorFn instead of accessorKey
	        header: 'Action',
	        Header: () => <span>Action</span>, //optional custom header render
	      },
	    ],
	    [],
	);

	return (
		<>
			{loading ? (
        <Loader />
      ) : (
      	<>

		      		<div className="dashboard-panel">
					<div className="container">
						<MetaData title={`ALL Users - Admin`} />
						<div className="row">
							<Sidebar />	
							<div className="col-lg-9 col-md-8">
								<div className="dashboardContainer">
							        <h3>All Users</h3>
							        <div className="col-12">
		                    			<MaterialReactTable columns={columns} data={users} enableRowNumbers rowNumberMode="original"/>
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

export default UserList
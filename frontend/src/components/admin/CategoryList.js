import React,{useMemo,useEffect} from 'react';
import Sidebar from "./Sidebar";
import MaterialReactTable from 'material-react-table';
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams,useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { clearErrors, getAdminCategories, deleteCategory } from "../../actions/categoryAction";
import Loader from "../Loader";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MetaData from '../../components/MetaData.js';
import { DELETE_CATEGORY_RESET } from "../../constants/categoryConstant";

const CategoryList = () => {

	const dispatch = useDispatch();
	// const {id} = useParams();
	const alert = useAlert();
	const navigate = useNavigate();
	const { loading, error, categories } = useSelector((state) => state.categories);

	const { error: deleteError, isDeleted } = useSelector((state) => state.category);

	const deleteCategoryHandler = (id) => {
		// console.log('ok');
	    dispatch(deleteCategory(id));
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
		  alert.success("Category Deleted Successfully");
		  // navigate("/admin/dashboard");
		  dispatch({ type: DELETE_CATEGORY_RESET });
		}

		dispatch(getAdminCategories());
	}, [dispatch, alert, error, deleteError, isDeleted, navigate]);

	const columns = useMemo(
	    () => [
	      
	      {
	        accessorFn: (row) => row.name, //alternate way
	        id: 'name', //id required if you use accessorFn instead of accessorKey
	        header: 'Name',
	        Header: () => <span>Name</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => <img src={row.images[0]?.url} width="100" height="100" alt="cate-img"/>, //alternate way
	        id: 'image', //id required if you use accessorFn instead of accessorKey
	        header: 'Image',
	        Header: () => <span>Image</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => <span>
	                            <Link to={`/admin/update-category/${row._id}`}>
	                              <EditIcon />
	                            </Link>
	                            <Button onClick={() => deleteCategoryHandler(row._id)}>
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
						<MetaData title={`ALL CATGORIES - Admin`} />
						<div className="row">
							<Sidebar />	
							<div className="col-lg-9 col-md-8">
								<div className="dashboardContainer">
							        <h3>All Categories</h3>
							        <div className="col-12">
		                    			<MaterialReactTable columns={columns} data={categories} enableRowNumbers rowNumberMode="original"/>
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

export default CategoryList
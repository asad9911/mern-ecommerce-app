import React,{useMemo,useEffect,useState} from 'react';
import Sidebar from "./Sidebar";
import MaterialReactTable from 'material-react-table';
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams,useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { clearErrors, getAllReviews, deleteReviews } from "../../actions/productAction";
import Loader from "../Loader";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MetaData from '../../components/MetaData.js';
import { DELETE_REVIEW_RESET } from "../../constants/productConstant";

const ProductReviews = () => {

	const [productId, setProductId] = useState("");
	const dispatch = useDispatch();
	const {id} = useParams();
	const alert = useAlert();
	const navigate = useNavigate();
	const { loading, error, reviews } = useSelector((state) => state.productReviews);

	const { error: deleteError, isDeleted } = useSelector((state) => state.review);

	const deleteReviewHandler = (id) => {
		// console.log('ok');
	    dispatch(deleteReviews(id,productId));
	};

	const productReviewsSubmitHandler = (e) => {
	    e.preventDefault();
	    dispatch(getAllReviews(productId));
	};

	useEffect(() => {
		if (productId.length === 24) {
	      dispatch(getAllReviews(productId));
	    }

		if (error) {
		  alert.error(error);
		  dispatch(clearErrors());
		}

		if (deleteError) {
		  alert.error(deleteError);
		  dispatch(clearErrors());
		}

		if (isDeleted) {
		  alert.success("Review Deleted Successfully");
		  // navigate("/admin/dashboard");
		  dispatch({ type: DELETE_REVIEW_RESET });
		}

	}, [dispatch, alert, error, deleteError, isDeleted, navigate, productId]);

	const columns = useMemo(
	    () => [
	      {
	        accessorFn: (row) => row.name, //alternate way
	        id: 'name', //id required if you use accessorFn instead of accessorKey
	        header: 'User',
	        Header: () => <span>User</span>, //optional custom header render
	      },

	      {
	        accessorFn: (row) => <span>{row.comment}</span>, //alternate way
	        id: 'comment', //id required if you use accessorFn instead of accessorKey
	        header: 'Comment',
	        Header: () => <span>Comment</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => <span className={row.rating >= 3 ? "text-success" : "text-danger"}>{row.rating}</span>, //alternate way
	        id: 'rating', //id required if you use accessorFn instead of accessorKey
	        header: 'Rating',
	        Header: () => <span>Rating</span>, //optional custom header render
	      }, 
	       {
	        accessorFn: (row) => <span>
	                            {/*<Link to={`/admin/update-product/${row._id}`}>
	                              <EditIcon />
	                            </Link>*/}
	                            <Button onClick={() => deleteReviewHandler(row._id)}>
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
						<MetaData title={`ALL REVIEWS - Admin`} />
						<div className="row">
							<Sidebar />	
							<div className="col-lg-9 col-md-8">

								<form
						            className="productReviewsForm"
						            onSubmit={productReviewsSubmitHandler}
						          >
									<h3>All Reviews</h3>
						            <div className="single-form">
						              <input
						                type="text"
						                placeholder="Product Id"
						                required
						                value={productId}
						                onChange={(e) => setProductId(e.target.value)}
						              />
						            </div>

						            <button
						            className="mt-2 btn btn-hover-dark btn-primary btn-margin"
						              id="createProductBtn"
						              type="submit"
						              disabled={
						                loading ? true : false || productId === "" ? true : false
						              }
						            >
						              Search
						            </button>
						          </form>

								<div className="dashboardContainer">
							        
							        <div className="col-12">
		                    			<MaterialReactTable columns={columns} data={reviews} enableRowNumbers rowNumberMode="original"/>
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

export default ProductReviews
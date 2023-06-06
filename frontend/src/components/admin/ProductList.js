import React,{useMemo,useEffect} from 'react';
import Sidebar from "./Sidebar";
import MaterialReactTable from 'material-react-table';
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams,useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { clearErrors, getAdminProducts, deleteProduct } from "../../actions/productAction";
import Loader from "../Loader";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MetaData from '../../components/MetaData.js';
import { DELETE_PRODUCT_RESET } from "../../constants/productConstant";

const ProductList = () => {

	const dispatch = useDispatch();
	// const {id} = useParams();
	const alert = useAlert();
	const navigate = useNavigate();
	const { loading, error, products } = useSelector((state) => state.products);

	const { error: deleteError, isDeleted } = useSelector((state) => state.product);

	const deleteProductHandler = (id) => {
		// console.log('ok');
	    dispatch(deleteProduct(id));
	};

	const alertStock = (Stock) => {
		console.log('ok');
	    // dispatch(getAdminProducts(Stock));
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
		  alert.success("Product Deleted Successfully");
		  // navigate("/admin/dashboard");
		  dispatch({ type: DELETE_PRODUCT_RESET });
		}

		dispatch(getAdminProducts());
	}, [dispatch, alert, error, deleteError, isDeleted, navigate]);

	const columns = useMemo(
	    () => [
	      // {
	      //   accessorFn: (row) => row._id, //alternate way
	      //   id: '_id', //id required if you use accessorFn instead of accessorKey
	      //   header: 'Id',
	      //   Header: () => <span>Id</span>, //optional custom header render
	      // },
	      {
	        accessorFn: (row) => row.name, //alternate way
	        id: 'name', //id required if you use accessorFn instead of accessorKey
	        header: 'Name',
	        Header: () => <span>Name</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => 
	        	<span className={row.Stock <= 10 ? "text-danger" : "text-success"} onChange={alertStock}>
	        		{
	        			row.Stock 
	        			
						
	        		}
	        	</span>, //alternate way
	        id: 'stock', //id required if you use accessorFn instead of accessorKey
	        header: 'Stock',
	        Header: () => <span>Stock</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => <span>${row.price}</span>, //alternate way
	        id: 'price', //id required if you use accessorFn instead of accessorKey
	        header: 'Price',
	        Header: () => <span>Price</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => <img src={row.images[0]?.url} width="110" height="110" alt="prod-img"/>, //alternate way
	        id: 'image', //id required if you use accessorFn instead of accessorKey
	        header: 'Image',
	        Header: () => <span>Image</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => <span>
	                            <Link to={`/admin/update-product/${row._id}`}>
	                              <EditIcon />
	                            </Link>
	                            <Button onClick={() => deleteProductHandler(row._id)}>
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
						<MetaData title={`ALL PRODUCTS - Admin`} />
						<div className="row">
							<Sidebar />	
							<div className="col-lg-9 col-md-8">
								<div className="dashboardContainer">
							        <h3>All Products</h3>
							        <div className="col-12">
		                    			<MaterialReactTable columns={columns} data={products} enableRowNumbers rowNumberMode="original"/>
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

export default ProductList
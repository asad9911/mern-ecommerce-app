import React,{useMemo,useEffect} from 'react';
import Sidebar from "./Sidebar";
import MaterialReactTable from 'material-react-table';
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams,useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { clearErrors, getAllOrders, deleteOrder } from "../../actions/orderAction";
import Loader from "../Loader";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import MetaData from '../../components/MetaData.js';
import { DELETE_ORDER_RESET  } from "../../constants/orderConstant";

const OrderList = () => {

	const dispatch = useDispatch();
	// const {id} = useParams();
	const alert = useAlert();
	const navigate = useNavigate();
	const { loading, error, orders } = useSelector((state) => state.allOrders);

	const { error: deleteError, isDeleted } = useSelector((state) => state.order);

	const deleteOrderHandler = (id) => {
		// console.log('ok');
	    dispatch(deleteOrder(id));
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
		  alert.success("Order Deleted Successfully");
		  // navigate("/admin/dashboard");
		  dispatch({ type: DELETE_ORDER_RESET  });
		}

		dispatch(getAllOrders());
	}, [dispatch, alert, error, deleteError, isDeleted, navigate]);

	const columns = useMemo(
	    () => [
	      {
	        accessorFn: (row) => row._id, //alternate way
	        id: 'id', //id required if you use accessorFn instead of accessorKey
	        header: 'Id',
	        Header: () => <span>Id</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => <span className={row.orderStatus === "Delivered" ? "text-success" : "text-danger"}>{row.orderStatus}</span>, //alternate way
	        id: 'status', //id required if you use accessorFn instead of accessorKey
	        header: 'Status',
	        Header: () => <span>Status</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => <span>{row.orderItems.length}</span>, //alternate way
	        id: 'itemsQty', //id required if you use accessorFn instead of accessorKey
	        header: 'Items Qty',
	        Header: () => <span>Items Qty</span>, //optional custom header render
	      },
	      {
	        accessorFn: (row) => <span>${row.totalPrice}</span>, //alternate way
	        id: 'amount', //id required if you use accessorFn instead of accessorKey
	        header: 'Amount',
	        Header: () => <span>Amount</span>, //optional custom header render
	      },	      
	      {
	        accessorFn: (row) => <span>
	                            <Link to={`/admin/order-process/${row._id}`}>
	                              <EditIcon />
	                            </Link>
	                            <Button onClick={() => deleteOrderHandler(row._id)}>
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
						<MetaData title={`ALL ORDERS - Admin`} />
						<div className="row">
							<Sidebar />	
							<div className="col-lg-9 col-md-8">
								<div className="dashboardContainer">
							        <h3>All Orders</h3>
							        <div className="col-12">
		                    			<MaterialReactTable columns={columns} data={orders} enableRowNumbers rowNumberMode="original"/>
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

export default OrderList
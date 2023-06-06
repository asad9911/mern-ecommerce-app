import React,{useMemo,useEffect} from 'react';
import MaterialReactTable from 'material-react-table';
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { clearErrors, myOrders } from "../actions/orderAction";
import Loader from "./Loader";
import MetaData from '../components/MetaData.js';
import LaunchIcon from "@material-ui/icons/Launch";

const MyOrders = () => {

	const dispatch = useDispatch();
	const alert = useAlert();
  const {id} = useParams();
	const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user } = useSelector((state) => state.user);

 const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row._id, //alternate way
        id: 'id', //id required if you use accessorFn instead of accessorKey
        header: 'Order Id',
        Header: () => <span>Order Id</span>, //optional custom header render
      },
      {
        accessorFn: (row) => <span className={row.orderStatus === "Delivered" ? "text-success" : "text-danger"}>{row.orderStatus}</span>, //alternate way
        id: 'status', //id required if you use accessorFn instead of accessorKey
        header: 'Status',
        Header: () => <span>Status</span>, //optional custom header render
      },
      {
        accessorFn: (row) => row.orderItems.length, //alternate way
        id: 'itemsQty', //id required if you use accessorFn instead of accessorKey
        header: 'Items Qty',
        Header: () => <span>Items Qty</span>, //optional custom header render
      },
      {
        accessorFn: (row) => row.totalPrice, //alternate way
        id: 'amount', //id required if you use accessorFn instead of accessorKey
        header: 'Amount',
        Header: () => <span>Amount</span>, //optional custom header render
      },
      
      {
        accessorFn: (row) => <span>
                            <Link to={`/order/${row._id}`}>
                              <LaunchIcon />
                            </Link>
                          </span>, //alternate way
        id: 'action', //id required if you use accessorFn instead of accessorKey
        header: 'Action',
        Header: () => <span>Action</span>, //optional custom header render
      },
    ],
    [],
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);

	return (
		<>
		{loading ? (
        <Loader />
      ) : (
      	<>
			<MetaData title={`${user.name} - Orders`} />
      		<div className="section section-padding update_password">
	        	<div className="container">
              <h3 id="myOrdersHeading" className="mb-3">{user.name} Orders</h3>
		            <div className="row justify-content-center">
  				        <div className="col-12">
                    <MaterialReactTable columns={columns} data={orders} enableRowNumbers rowNumberMode="original"/>
  						    </div>
					      </div>
				    </div>
			    </div>
		</>
		)}
		</>
	)
}

export default MyOrders
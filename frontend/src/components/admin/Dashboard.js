import React,{useEffect} from 'react';
import Sidebar from "./Sidebar.js";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProducts } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import Loader from "../Loader";
import MetaData from '../../components/MetaData.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Title,
  Legend
);
const Dashboard = () => {

	const dispatch = useDispatch();

	const { loading, products } = useSelector((state) => state.products);

	const { orders } = useSelector((state) => state.allOrders);

	const { users } = useSelector((state) => state.allUsers);

	let outOfStock = 0;

	products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

    useEffect(() => {
		dispatch(getAdminProducts());
		dispatch(getAllOrders());
		dispatch(getAllUsers());
	}, [dispatch]);

    let totalAmount = 0;
	orders &&
	    orders.forEach((item) => {
	    totalAmount += item.totalPrice;
	});

	const lineState = {
	    labels: ["Initial Amount", "Amount Earned"],
	    datasets: [
	      {
	        label: "TOTAL AMOUNT",
	        backgroundColor: ["tomato"],
	        hoverBackgroundColor: ["rgb(197, 72, 49)"],
	        data: [0, 4000],
	      },
	    ],
	};

  	const doughnutState = {
	    labels: ["Out of Stock", "InStock"],
	    datasets: [
	      {
	        backgroundColor: ["#00A6B4", "#6800B4"],
	        hoverBackgroundColor: ["#4B5000", "#35014F"],
	        data: [outOfStock, products.length - outOfStock],
	      },
	    ],
	};
	
	return (
		<>
		{loading ? (
        <Loader />
      ) : (
      	<>
			<div className="dashboard-panel">
			<div className="container">
				<MetaData title="Dashboard - Admin Panel" />
				<div className="row">
					<Sidebar />	
					<div className="col-lg-9 col-md-8">
						<div className="dashboardContainer">
					        <h3>Dashboard</h3>

					        <div className="dashboardSummary">
					          <div className="dashboardSummaryBox2">
					          	<Link to="/admin/dashboard">
					              <p><b>Total Amount</b></p>
					              <span>${totalAmount}</span>
					            </Link>
					            <Link to="/admin/products">
					              <p><b>Product</b></p>
					              <span>{products && products.length}</span>
					            </Link>
					            <Link to="/admin/orders">
					              <p><b>Orders</b></p>
					              <span>{orders && orders.length}</span>
					            </Link>
					            <Link to="/admin/users">
					              <p><b>Users</b></p>
					              <span>{users && users.length}</span>
					            </Link>
					          </div>
					        </div>

					        <div className="row pt-4">
					        	<div className="col-md-6 col-sm-12">
						        <div className="lineChart">
						          <Line data={lineState} />
						        </div>
						      </div>
						      <div className="col-md-6 col-sm-12">
						        <div className="doughnutChart">
						          <Doughnut data={doughnutState} />
						        </div>
						      </div>
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

export default Dashboard
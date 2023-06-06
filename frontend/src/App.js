import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopByCate from './pages/ShopByCate';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/auth/Profile';
import UpdateProfile from './pages/auth/UpdateProfile';
import UpdatePassword from './pages/auth/UpdatePassword';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Cart from "./components/Cart";
import Shipping from "./components/Shipping";
import ConfirmOrder from "./components/ConfirmOrder";
import Payment from "./components/Payment";
import OrderSuccess from "./components/OrderSuccess";
import MyOrders from "./components/MyOrders";
import OrderDetails from "./components/OrderDetails";
import Dashboard from "./components/admin/Dashboard";
import ProductList from "./components/admin/ProductList";
import NewProduct from "./components/admin/NewProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import OrderList from "./components/admin/OrderList";
import ProcessOrder from "./components/admin/ProcessOrder";
import UserList from "./components/admin/UserList";
import UpdateUser from "./components/admin/UpdateUser";
import ProductReviews from "./components/admin/ProductReviews";
import NewCategory from "./components/admin/NewCategory";
import CategoryList from "./components/admin/CategoryList";
import UpdateCategory from "./components/admin/UpdateCategory";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./components/UserOptions";
import { useSelector } from "react-redux";
import axios from "axios";
import cors from 'cors';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    // WebFont.load({
    //   google: {
    //     families: ["Roboto", "Droid Sans", "Chilanka"],
    //   },
    // });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <>
      <BrowserRouter>
      <Layout>
          {isAuthenticated && <UserOptions user={user} />}
          
          

        <Routes>

          <Route exact path="/login" element={
            <Login />
          }/>

          <Route exact path="/register" element={
            <Register />
          }/>

          <Route exact path="/" element={
            <Home />
          }/>

          <Route path="/shop" element={
            <Shop />
          }/>

          <Route path="/shop/category/:category" element={
            <ShopByCate />
          }/>

          <Route path="/shop/:keyword" element={
            <Shop />
          }/>

          <Route path="/product/:id" element={
            <ProductDetails />
          }/>

          <Route path="/about" element={
            <About />
          }/>

          <Route path="/contact" element={
            <Contact />
          }/>

          <Route path="/checkout" element={
            <Checkout />
          }/>

          <Route exact path="/account" element={
            isAuthenticated ?
              <Profile />
            : <Login />           
          }/>

          <Route exact path="/me/update" element={
            isAuthenticated ?
              <UpdateProfile />
            : <Login />           
          }/>

          <Route exact path="/password/update" element={
            isAuthenticated ?
              <UpdatePassword />
            : <Login />           
          }/>

          <Route exact path="/password/forgot" element={
            <ForgotPassword />
          }/>

          <Route exact path="/password/reset/:token" element={
            <ResetPassword />
          }/>

          <Route  path="/cart" element={
            <Cart />
          }/>

          <Route exact path="/shipping" element={
            isAuthenticated ?
              <Shipping />
            : <Login />           
          }/>

          <Route exact path="/order/confirm" element={
            isAuthenticated ?
              <ConfirmOrder />
            : <Login />           
          }/>

          {
            stripeApiKey && (
                <Route  path="/process/payment" element={
                  isAuthenticated ?
                    <Elements stripe={loadStripe(stripeApiKey)}>
                  <Payment />
                    </Elements>
                  : <Login />      
                }/>
            )
          }

          <Route exact path="/success" element={
            isAuthenticated ?
              <OrderSuccess />
            : <Login />           
          }/>

          <Route exact path="/orders" element={
            isAuthenticated === true ?
              <MyOrders />
            : <Login />           
          }/>

          <Route exact path="/order/:id" element={
            isAuthenticated === true ?
              <OrderDetails />
            : <Login />           
          }/>

          <Route exact path="/admin/dashboard" element={
            isAuthenticated === true && user.role === 'admin' ?
              <Dashboard />
            : <Login />           
          }/>

          <Route exact path="/admin/products" element={
            isAuthenticated === true && user.role === 'admin' ?
              <ProductList />
            : <Login />           
          }/>

          <Route exact path="/admin/create-product" element={
            isAuthenticated === true && user.role === 'admin' ?
              <NewProduct />
            : <Login />           
          }/>

          <Route exact path="/admin/update-product/:id" element={
            isAuthenticated === true && user.role === 'admin' ?
              <UpdateProduct />
            : <Login />           
          }/>

          <Route exact path="/admin/orders" element={
            isAuthenticated === true && user.role === 'admin' ?
              <OrderList />
            : <Login />           
          }/>

          <Route exact path="/admin/order-process/:id" element={
            isAuthenticated === true && user.role === 'admin' ?
              <ProcessOrder />
            : <Login />           
          }/>

          <Route exact path="/admin/users" element={
            isAuthenticated === true && user.role === 'admin' ?
              <UserList />
            : <Login />           
          }/>

          <Route exact path="/admin/user/:id" element={
            isAuthenticated === true && user.role === 'admin' ?
              <UpdateUser />
            : <Login />           
          }/>

          <Route exact path="/admin/reviews" element={
            isAuthenticated === true && user.role === 'admin' ?
              <ProductReviews />
            : <Login />           
          }/>

          <Route exact path="/admin/create-category" element={
            isAuthenticated === true && user.role === 'admin' ?
              <NewCategory />
            : <Login />           
          }/>

          <Route exact path="/admin/categories" element={
            isAuthenticated === true && user.role === 'admin' ?
              <CategoryList />
            : <Login />           
          }/>

          <Route exact path="/admin/update-category/:id" element={
            isAuthenticated === true && user.role === 'admin' ?
              <UpdateCategory />
            : <Login />           
          }/>

        </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

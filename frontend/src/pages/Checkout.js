import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';

const dataCountry = [
  { value: 'bangladesh', label: 'Bangladesh' },
  { value: 'canada', label: 'Canada' },
  { value: 'colombia', label: 'Colombia' },
  { value: 'indonesia', label: 'Indonesia' },
  { value: 'italy', label: 'Italy' },
  { value: 'pakistan', label: 'Pakistan' },
  { value: 'turkey', label: 'Turkey' },
]

const dataDistrict = [
  { value: 'dmeo1', label: 'Demo1' },
  { value: 'demo2', label: 'Demo2' },
  { value: 'Demo3', label: 'Demo3' },
]

const Checkout = () => {

	const [isClearable, setIsClearable] = useState(true);
  	const [isSearchable, setIsSearchable] = useState(true);

	return (
		<>
		
			
			{/*<!-- Page Banner Section Start -->*/}
    <div className="section page-banner-section" style={{backgroundImage: 'url(../assets/images/page-banner.jpg)'}}>
        <div className="container">
            {/*<!-- Page Banner Content End -->*/}
            <div className="page-banner-content">
                <h2 className="title">Checkout</h2>

                <ul className="breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li className="active">Checkout</li>
                </ul>
            </div>
            {/*<!-- Page Banner Content End -->*/}
        </div>
    </div>
    {/*<!-- Page Banner Section End -->*/}

    {/*<!-- Checkout Section Start -->*/}
    <div className="section section-padding">
        <div className="container">
           {/* <div className="checkout-info">
                <p className="info-header error">
                    <i className="fa fa-exclamation-circle"></i>
                    <strong>Error:</strong> Username is required.
                </p>
            </div>*/}

            {/*<div className="checkout-info">
                <p className="info-header">
                    <i className="fa fa-exclamation-circle"></i> Returning
                    customer?
                    <Link data-bs-toggle="collapse" to="/login">Click here to login</Link>
                </p>

                <div className="collapse" id="login">
                    <div className="card-body">
                        <p>
                            If you have shopped with us before, please enter
                            your details in the boxes below. If you are a
                            new customer, please proceed to the Billing &
                            Shipping section.
                        </p>
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-form">
                                        <input type="email" placeholder="Username or email *" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-form">
                                        <input type="password" placeholder="Password" />
                                    </div>
                                </div>
                            </div>

                            <div className="single-form d-flex align-items-center">
                                <button className="btn btn-primary btn-hover-dark">
                                    Login
                                </button>
                                <div className="form-checkbox">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember"><span></span> Remember Me</label>
                                </div>
                            </div>
                            <div className="forget">
                                <Link to="#">Lost Your Password</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>*/}

            {/*<div className="checkout-info">
                <p className="info-header">
                    <i className="fa fa-exclamation-circle"></i> Have a coupon?
                    <Link data-bs-toggle="collapse" to="#coupon">Click here to enter your code</Link>
                </p>

                <div className="collapse" id="coupon">
                    <div className="card-body">
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-form">
                                        <input type="email" placeholder="Coupon code" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-form">
                                        <button className="btn btn-primary btn-hover-dark">
                                            Coupon
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>*/}

            <form action="#">
                <div className="row">
                    <div className="col-lg-7">
                        {/*<!-- Checkout Form Start -->*/}
                        <div className="checkout-form">
                            <div className="checkout-title">
                                <h4 className="title">Billing details</h4>
                            </div>

                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="single-form">
                                        <input type="text" placeholder="First name *" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-form">
                                        <input type="text" placeholder="Last name *" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <input type="text" placeholder="Company name" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <Select
                                        	className="singleSelect"
									        isClearable={isClearable}
									        options={dataCountry}
									        isSearchable={isSearchable}
									        name="country"
									    />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <input type="text" placeholder="House number and street name" />
                                        <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <input type="text" placeholder="Town / City *" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <Select
                                        	className="singleSelect"
									        isClearable={isClearable}
									        options={dataDistrict}
									        isSearchable={isSearchable}
									        name="country"
									    />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="single-form">
                                        <input type="text" placeholder="Postcode / ZIP" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-form">
                                        <input type="text" placeholder="Phone *" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="single-form">
                                        <input type="text" placeholder="Email address *" />
                                    </div>
                                </div>
                            </div>

                            <div className="single-form checkbox-checkbox">
                                <input type="checkbox" id="account" />
                                <label htmlFor="account">
                                    <span></span> Create an account?</label>
                            </div>

                            <div className="checkout-account">
                                <div className="single-form">
                                    <input type="password" placeholder="Create account Password *" className="form-control" />
                                </div>
                            </div>

                            <div className="single-form checkbox-checkbox">
                                <input type="checkbox" id="shipping" />
                                <label htmlFor="shipping">
                                    <span></span> Ship to a different
                                    address?</label>
                            </div>

                            <div className="checkout-shipping">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="single-form">
                                            <input type="text" placeholder="First name *" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="single-form">
                                            <input type="text" placeholder="Last name *" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="single-form">
                                            <input type="text" placeholder="Company name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="single-select2">
                                            <div className="form-select2">
                                                <select className="select2">
                                                    <option value="0">
                                                        Select a Country *
                                                    </option>
                                                    <option value="1">
                                                        Bangladesh
                                                    </option>
                                                    <option value="2">
                                                        Canada
                                                    </option>
                                                    <option value="3">
                                                        Colombia
                                                    </option>
                                                    <option value="4">
                                                        Indonesia
                                                    </option>
                                                    <option value="5">
                                                        Italy
                                                    </option>
                                                    <option value="6">
                                                        Pakistan
                                                    </option>
                                                    <option value="7">
                                                        Turkey
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="single-form">
                                            <label className="form-label">Street address *</label>
                                            <input type="text" placeholder="House number and street name" />
                                            <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="single-form">
                                            <input type="text" placeholder="Town / City *" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="single-select2">
                                            <div className="form-select2">
                                                <select className="select2">
                                                    <option value="">
                                                        Select an District *
                                                    </option>
                                                    <option value="BAG">
                                                        Bagerhat
                                                    </option>
                                                    <option value="BAN">
                                                        Bandarban
                                                    </option>
                                                    <option value="BAR">
                                                        Barguna
                                                    </option>
                                                    <option value="BARI">
                                                        Barisal
                                                    </option>
                                                    <option value="BHO">
                                                        Bhola
                                                    </option>
                                                    <option value="BOG">
                                                        Bogra
                                                    </option>
                                                    <option value="BRA">
                                                        Brahmanbaria
                                                    </option>
                                                    <option value="CHA">
                                                        Chandpur
                                                    </option>
                                                    <option value="CHI">
                                                        Chittagong
                                                    </option>
                                                    <option value="CHU">
                                                        Chuadanga
                                                    </option>
                                                    <option value="COM">
                                                        Comilla
                                                    </option>
                                                    <option value="COX">
                                                        Cox's Bazar
                                                    </option>
                                                    <option value="DHA">
                                                        Dhaka
                                                    </option>
                                                    <option value="DIN">
                                                        Dinajpur
                                                    </option>
                                                    <option value="FAR">
                                                        Faridpur
                                                    </option>
                                                    <option value="FEN">
                                                        Feni
                                                    </option>
                                                    <option value="GAI">
                                                        Gaibandha
                                                    </option>
                                                    <option value="GAZI">
                                                        Gazipur
                                                    </option>
                                                    <option value="GOP">
                                                        Gopalganj
                                                    </option>
                                                    <option value="HAB">
                                                        Habiganj
                                                    </option>
                                                    <option value="JAM">
                                                        Jamalpur
                                                    </option>
                                                    <option value="JES">
                                                        Jessore
                                                    </option>
                                                    <option value="JHA">
                                                        Jhalokati
                                                    </option>
                                                    <option value="JHE">
                                                        Jhenaidah
                                                    </option>
                                                    <option value="JOY">
                                                        Joypurhat
                                                    </option>
                                                    <option value="KHA">
                                                        Khagrachhari
                                                    </option>
                                                    <option value="KHU">
                                                        Khulna
                                                    </option>
                                                    <option value="KIS">
                                                        Kishoreganj
                                                    </option>
                                                    <option value="KUR">
                                                        Kurigram
                                                    </option>
                                                    <option value="KUS">
                                                        Kushtia
                                                    </option>
                                                    <option value="LAK">
                                                        Lakshmipur
                                                    </option>
                                                    <option value="LAL">
                                                        Lalmonirhat
                                                    </option>
                                                    <option value="MAD">
                                                        Madaripur
                                                    </option>
                                                    <option value="MAG">
                                                        Magura
                                                    </option>
                                                    <option value="MAN">
                                                        Manikganj
                                                    </option>
                                                    <option value="MEH">
                                                        Meherpur
                                                    </option>
                                                    <option value="MOU">
                                                        Moulvibazar
                                                    </option>
                                                    <option value="MUN">
                                                        Munshiganj
                                                    </option>
                                                    <option value="MYM">
                                                        Mymensingh
                                                    </option>
                                                    <option value="NAO">
                                                        Naogaon
                                                    </option>
                                                    <option value="NAR">
                                                        Narail
                                                    </option>
                                                    <option value="NARG">
                                                        Narayanganj
                                                    </option>
                                                    <option value="NARD">
                                                        Narsingdi
                                                    </option>
                                                    <option value="NAT">
                                                        Natore
                                                    </option>
                                                    <option value="NAW">
                                                        Nawabganj
                                                    </option>
                                                    <option value="NET">
                                                        Netrakona
                                                    </option>
                                                    <option value="NIL">
                                                        Nilphamari
                                                    </option>
                                                    <option value="NOA">
                                                        Noakhali
                                                    </option>
                                                    <option value="PAB">
                                                        Pabna
                                                    </option>
                                                    <option value="PAN">
                                                        Panchagarh
                                                    </option>
                                                    <option value="PAT">
                                                        Patuakhali
                                                    </option>
                                                    <option value="PIR">
                                                        Pirojpur
                                                    </option>
                                                    <option value="RAJB">
                                                        Rajbari
                                                    </option>
                                                    <option value="RAJ">
                                                        Rajshahi
                                                    </option>
                                                    <option value="RAN">
                                                        Rangamati
                                                    </option>
                                                    <option value="RANP">
                                                        Rangpur
                                                    </option>
                                                    <option value="SAT">
                                                        Satkhira
                                                    </option>
                                                    <option value="SHA">
                                                        Shariatpur
                                                    </option>
                                                    <option value="SHE">
                                                        Sherpur
                                                    </option>
                                                    <option value="SIR">
                                                        Sirajganj
                                                    </option>
                                                    <option value="SUN">
                                                        Sunamganj
                                                    </option>
                                                    <option value="SYL">
                                                        Sylhet
                                                    </option>
                                                    <option value="TAN">
                                                        Tangail
                                                    </option>
                                                    <option value="THA">
                                                        Thakurgaon
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="single-form">
                                            <input type="text" placeholder="Postcode / ZIP" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="single-form">
                                            <input type="text" placeholder="Phone *" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="single-form">
                                            <input type="text" placeholder="Email address *" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="single-form checkout-note">
                                <label className="form-label">Order notes</label>
                                <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                            </div>
                        </div>
                        {/*<!-- Checkout Form End -->*/}
                    </div>
                    <div className="col-lg-5">
                        <div className="checkout-order">
                            <div className="checkout-title">
                                <h4 className="title">Your Order</h4>
                            </div>

                            <div className="checkout-order-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="Product-name">
                                                Product
                                            </th>
                                            <th className="Product-price">
                                                Total
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="Product-name">
                                                <p>
                                                    Bodysuit With Long
                                                    Sleeves × 1
                                                </p>
                                            </td>
                                            <td className="Product-price">
                                                <p>$150.00</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="Product-name">
                                                <p>
                                                    Classic Polo Shirt × 1
                                                </p>
                                            </td>
                                            <td className="Product-price">
                                                <p>$150.00</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="Product-name">
                                                <p>
                                                    Trousers With Side
                                                    Stripe × 1
                                                </p>
                                            </td>
                                            <td className="Product-price">
                                                <p>$150.00</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="Product-name">
                                                <p>Biker Jacket × 1</p>
                                            </td>
                                            <td className="Product-price">
                                                <p>$150.00</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td className="Product-name">
                                                <p>Subtotal</p>
                                            </td>
                                            <td className="Product-price">
                                                <p>$150.00</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="Product-name">
                                                <p>Shipping</p>
                                            </td>
                                            <td className="Product-price">
                                                <ul className="shipping-list">
                                                    <li className="radio">
                                                        <input type="radio" name="shipping" id="radio1" defaultChecked />
                                                        <label htmlFor="radio1"><span></span>
                                                            Flat Rate</label>
                                                    </li>
                                                    <li className="radio">
                                                        <input type="radio" name="shipping" id="radio2" />
                                                        <label htmlFor="radio2"><span></span>
                                                            Free
                                                            Shipping</label>
                                                    </li>
                                                    <li className="radio">
                                                        <input type="radio" name="shipping" id="radio3" />
                                                        <label htmlFor="radio3"><span></span>
                                                            Local
                                                            Pickup</label>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="Product-name">
                                                <p>Total</p>
                                            </td>
                                            <td className="total-price">
                                                <p>$600.00</p>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="checkout-payment">
                                <ul>
                                    <li>
                                        <div className="single-payment">
                                            <div className="payment-radio radio">
                                                <input type="radio" name="radio" id="bank" />
                                                <label htmlFor="bank"><span></span> Direct
                                                    bank transfer
                                                </label>

                                                <div className="payment-details">
                                                    <p>
                                                        Please send a Check
                                                        to Store name with
                                                        Store Street, Store
                                                        Town, Store State,
                                                        Store Postcode,
                                                        Store Country.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-payment">
                                            <div className="payment-radio radio">
                                                <input type="radio" name="radio" id="check" />
                                                <label htmlFor="check"><span></span> Check
                                                    payments
                                                </label>

                                                <div className="payment-details">
                                                    <p>
                                                        Please send a check
                                                        to Store Name, Store
                                                        Street, Store Town,
                                                        Store State /
                                                        County, Store
                                                        Postcode.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-payment">
                                            <div className="payment-radio radio">
                                                <input type="radio" name="radio" id="cash" defaultChecked="checked" />
                                                <label htmlFor="cash"><span></span> Cash on
                                                    Delivery</label>

                                                <div className="payment-details">
                                                    <p>
                                                        Pay with cash upon
                                                        delivery.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-payment">
                                            <div className="payment-radio radio">
                                                <input type="radio" name="radio" id="paypal" />
                                                <label htmlFor="paypal"><span></span> Paypal
                                                    <img className="payment" src="../assets/images/payment-2.html" alt="" />
                                                    <Link to="#">What is PayPal?</Link></label>

                                                <div className="payment-details">
                                                    <p>
                                                        Pay via PayPal; you
                                                        can pay with your
                                                        credit card if you
                                                        don’t have a PayPal
                                                        account.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                                <div className="single-form">
                                    <Link className="btn btn-primary btn-hover-dark d-block" to="#">Place Order</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    {/*<!-- Checkout Section End -->*/}

    

		</>
	)
}

export default Checkout
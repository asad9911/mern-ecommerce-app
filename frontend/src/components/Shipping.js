import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { saveShippingInfo } from "../actions/cartAction";
import MetaData from '../components/MetaData.js';
import PinDropIcon from "@material-ui/icons/PinDrop";
import HomeIcon from "@material-ui/icons/Home";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { Country, State } from "country-state-city";
import { useAlert } from "react-alert";
import CheckoutSteps from "./CheckoutSteps";

const Shipping = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
  	const alert = useAlert();
  	const { shippingInfo } = useSelector((state) => state.cart);

  	const [address, setAddress] = useState(shippingInfo.address);
	const [city, setCity] = useState(shippingInfo.city);
	const [state, setState] = useState(shippingInfo.state);
	const [country, setCountry] = useState(shippingInfo.country);
	const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
	const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

	const shippingSubmit = (e) => {
	    e.preventDefault();

	    if (phoneNo.length < 10) {
	      alert.error("Phone Number should be 10 digits Long");
	      return;
	    }
	    dispatch(
	      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
	    );
	    navigate("/order/confirm");
	};

	return (
		<>
			<MetaData title="Shipping Details" />

			<div className="section section-padding update_password">
        	<div className="container">
        	<div className="row">
        		<CheckoutSteps activeStep={0} />
        	</div>
            <div className="row justify-content-center">
	        <div className="col-lg-6 col-md-6 col-sm-12">
			<div className="shippingContainer">
		        <div className="shippingBox">
		          <h2 className="shippingHeading">Shipping Details</h2>

		          <form
		            className="shippingForm"
		            encType="multipart/form-data"
		            onSubmit={shippingSubmit}
		          >
		            <div className="single-form">
		              <HomeIcon />
		              <input
		                type="text"
		                placeholder="Address"
		                required
		                value={address}
		                onChange={(e) => setAddress(e.target.value)}
		              />
		            </div>

		            <div className="single-form">
		              <LocationCityIcon />
		              <input
		                type="text"
		                placeholder="City"
		                required
		                value={city}
		                onChange={(e) => setCity(e.target.value)}
		              />
		            </div>

		            <div className="single-form">
		              <PinDropIcon />
		              <input
		                type="number"
		                placeholder="Pin Code"
		                required
		                value={pinCode}
		                onChange={(e) => setPinCode(e.target.value)}
		              />
		            </div>

		            <div className="single-form">
		              <PhoneIcon />
		              <input
		                type="number"
		                placeholder="Phone Number"
		                required
		                value={phoneNo}
		                onChange={(e) => setPhoneNo(e.target.value)}
		                size="10"
		              />
		            </div>

		            <div className="single-form">
		              <PublicIcon />

		              <select
		                required
		                value={country}
		                onChange={(e) => setCountry(e.target.value)}
		              >
		                <option value="">Country</option>
		                {Country &&
		                  Country.getAllCountries().map((item) => (
		                    <option key={item.isoCode} value={item.isoCode}>
		                      {item.name}
		                    </option>
		                  ))}
		              </select>
		            </div>

		            {country && (
		              <div className="single-form">
		                <TransferWithinAStationIcon />

		                <select
		                  required
		                  value={state}
		                  onChange={(e) => setState(e.target.value)}
		                >
		                  <option value="">State</option>
		                  {State &&
		                    State.getStatesOfCountry(country).map((item) => (
		                      <option key={item.isoCode} value={item.isoCode}>
		                        {item.name}
		                      </option>
		                    ))}
		                </select>
		              </div>
		            )}

		            {/*<input
		              type="submit"
		              value="Continue"
		              className="shippingBtn"
		              disabled={state ? false : true}
		            />*/}
		            <div className="single-form">	                
		                <button type="submit" className="btn btn-primary btn-hover-dark" disabled={state ? false : true}>
	                        Continue
	                  	</button>
		            </div>
		          </form>
		        </div>
		    </div>
		    </div>
		    </div>
		    </div>
		    </div>
		</>
	)
}

export default Shipping
import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams,useNavigate } from "react-router-dom";
import { clearErrors, createProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { getAllCategories } from "../../actions/categoryAction";
import MetaData from '../../components/MetaData';
import Loader from "../Loader";
import Sidebar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstant";

const NewProduct = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const alert = useAlert();

	const { loading, error, success } = useSelector((state) => state.newProduct);
	const { categories } = useSelector((state) => state.categories);

	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [Stock, setStock] = useState(0);
	const [images, setImages] = useState([]);
	const [imagesPreview, setImagesPreview] = useState([]);

	// const categories = [
	//   "wall-tiles",
	//   "floor-tiles",
	//   "bathroom-tiles",
	//   "outdoor-tiles",
	//   "brick-&-metro tiles",
	//   "mosaic-tiles",
	// ];

	useEffect(() => {
	    if (error) {
	      alert.error(error);
	      dispatch(clearErrors());
	    }

	    if (success) {
	      alert.success("Product Created Successfully");
	      navigate("/admin/products");
	      dispatch({ type: NEW_PRODUCT_RESET });
	    }
	    dispatch(getAllCategories());
	}, [dispatch, alert, error, navigate, success]);

	const createProductSubmitHandler = (e) => {
	    e.preventDefault();

	    const myForm = new FormData();

	    myForm.set("name", name);
	    myForm.set("price", price);
	    myForm.set("description", description);
	    myForm.set("category", category);
	    myForm.set("Stock", Stock);

	    images.forEach((image) => {
	      myForm.append("images", image);
	    });
	    dispatch(createProduct(myForm));
	};

	const createProductImagesChange = (e) => {
	    const files = Array.from(e.target.files);

	    setImages([]);
	    setImagesPreview([]);

	    files.forEach((file) => {
	      const reader = new FileReader();

	      reader.onload = () => {
	        if (reader.readyState === 2) {
	          setImagesPreview((old) => [...old, reader.result]);
	          setImages((old) => [...old, reader.result]);
	        }
	      };

	      reader.readAsDataURL(file);
	    });
	};

	return (
		<>
			{loading ? (
        <Loader />
      ) : (
      	<>

		      		<div className="dashboard-panel">
					<div className="container">
						<MetaData title={`Create Product`} />
						<div className="row">
							<Sidebar />	
							<div className="col-lg-9 col-md-8">
								<div className="dashboardContainer">
							        <h3>Create Product</h3>
							        <div className="col-12">
		                    			<form
							            className="createProductForm"
							            encType="multipart/form-data"
							            onSubmit={createProductSubmitHandler}
							          >
							            <div className="single-form">
							              <SpellcheckIcon />
							              <input
							                type="text"
							                placeholder="Product Name"
							                required
							                value={name}
							                onChange={(e) => setName(e.target.value)}
							              />
							            </div>
							            <div className="single-form">
							              <AttachMoneyIcon />
							              <input
							                type="number"
							                placeholder="Price"
							                required
							                onChange={(e) => setPrice(e.target.value)}
							              />
							            </div>

							            <div className="single-form">
							              <AccountTreeIcon />
							              <select onChange={(e) => setCategory(e.target.value)}>
							                <option value="">Choose Category</option>
							                {categories && categories.map((item) => (
							                  <option key={item._id} defaultValue={item.name}>
							                    {item.name}
							                  </option>
							                ))}
							              </select>
							            </div>

							            <div className="single-form">
							              <StorageIcon />
							              <input
							                type="number"
							                placeholder="Stock"
							                required
							                onChange={(e) => setStock(e.target.value)}
							              />
							            </div>

							            <div className="single-form">
							              <DescriptionIcon />

							              <textarea
							                placeholder="Product Description"
							                value={description}
							                onChange={(e) => setDescription(e.target.value)}
							                cols="10"
							                rows="1"
							              ></textarea>
							            </div>

							            <div className="single-form" id="createProductFormFile">
							              <input
							                type="file"
							                accept="image/*"
							                onChange={createProductImagesChange}
							                multiple={true}
							              />
							            </div>

							            <div className="single-form" id="createProductFormImage">
							              {imagesPreview.map((image, index) => (
							                <img key={index} src={image} alt="Product Preview" />
							              ))}
							            </div>

							            <button
							            className="mt-2 btn btn-primary btn-hover-dark paymentFormBtn"
							              id="createProductBtn"
							              type="submit"
							              disabled={loading ? true : false}
							            >
							              Create
							            </button>
							          </form>
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

export default NewProduct
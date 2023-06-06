import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link,useParams,useNavigate } from "react-router-dom";
import { clearErrors, updateCategory, getCategoryDetails } from "../../actions/categoryAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MetaData from '../../components/MetaData';
import Loader from "../Loader";
import Sidebar from "./Sidebar";
import { UPDATE_CATEGORY_RESET } from "../../constants/categoryConstant";

const UpdateCategory = () => {

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {id} = useParams();
	const alert = useAlert();

	const { error, category } = useSelector((state) => state.categoryDetails);

	const { loading, error: updateError, isUpdated } = useSelector((state) => state.category);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [images, setImages] = useState([]);
	const [oldImages, setOldImages] = useState([]);
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

		if (category && category._id !== id) {
	      dispatch(getCategoryDetails(id));
	    } else {
	      setName(category.name);
	      setDescription(category.description);
	      setOldImages(category.images);
	    }

	    if (error) {
	      alert.error(error);
	      dispatch(clearErrors());
	    }

	    if (updateError) {
	      alert.error(updateError);
	      navigate("/admin/dashboard");
	      dispatch(clearErrors());
	    }

	    if (isUpdated) {
	      alert.success("Category Updated Successfully");
	      navigate("/admin/categories");
	      dispatch({ type: UPDATE_CATEGORY_RESET });
	    }
	}, [dispatch, alert, error, navigate, id, isUpdated, category, updateError]);

	const updateCategorySubmitHandler = (e) => {
	    e.preventDefault();

	    const myForm = new FormData();

	    myForm.set("name", name);
	    myForm.set("description", description);
	    images.forEach((image) => {
	      myForm.append("images", image);
	    });
	    dispatch(updateCategory(id, myForm));
	};

	const updateCateImagesChange = (e) => {
	    const files = Array.from(e.target.files);

	    setImages([]);
	    setImagesPreview([]);
	    setOldImages([]);

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
							        <h3>Update Category</h3>
							        <div className="col-12">
		                    			<form
							            className="createProductForm"
							            encType="multipart/form-data"
							            onSubmit={updateCategorySubmitHandler}
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
							              <DescriptionIcon />

							              <textarea
							                placeholder="Category Description"
							                value={description}
							                onChange={(e) => setDescription(e.target.value)}
							                cols="10"
							                rows="1"
							              ></textarea>
							            </div>

							            <div className="single-form" id="createCateFormFile">
							              <input
							                type="file"
							                accept="image/*"
							                onChange={updateCateImagesChange}
							                multiple
							              />
							            </div>

							            <div id="createCateFormImage">
							              {oldImages &&
							                oldImages.map((image, index) => (
							                  <img key={index} src={image.url} alt="Old Category Preview" />
							                ))}
							            </div>

							            <div className="single-form" id="createCateFormImage">
							              {imagesPreview.map((image, index) => (
							                <img key={index} src={image} alt="Category Preview" />
							              ))}
							            </div>
							            
							            <button
							            className="mt-2 btn btn-primary btn-hover-dark paymentFormBtn"
							              id="createCateBtn"
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

export default UpdateCategory
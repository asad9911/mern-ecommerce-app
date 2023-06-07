import Category from '../models/categoryModel.js';
import ErrorHandler from "../utils/errorhandler.js";
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';
import cloudinary from "cloudinary";

// Create Category --admin
export const createCategory  = catchAsyncErrors( async (req, res, next) =>{

	let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "category",
        chunk_size: 6000000,
        // width: 150,
        // crop: "scale",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
  }

  req.body.images = imagesLinks;
	req.body.user = req.user.id;

	const category = await Category.create(req.body);

	res.status(201).json({
		success:true,
		category,
	});
});

// Get All category (Admin)
export const getAdminCategories = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({
    success: true,
    categories,
  });
});

// Get All category (Admin)
export const getAllCategories = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find({ status: 'show' });

  res.status(200).json({
    success: true,
    categories,
  });
});

// Get category details
export const getCategoryDetails = catchAsyncErrors( async (req, res, next) =>{

	const category = await Category.findById(req.params.id);

	if (!category) {
		return next(new ErrorHandler('Category not found',404));
	}

	res.status(200).json({
		success:true,
		category,
	});
});

// Update category --admin
export const updateCategory = catchAsyncErrors( async (req, res) =>{

	let category = await Category.findById(req.params.id);

	if (!category) {
		return next(new ErrorHandler('Category not found',404));
	}

	// Images Start Here
  let images = [];

    if (typeof req.body.images === "string") {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }

    if (images !== undefined) {
      // Deleting Images From Cloudinary
      for (let i = 0; i < category.images.length; i++) {
        await cloudinary.v2.uploader.destroy(category.images[i].public_id);
      }

      const imagesLinks = [];

      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: "category",
        });

        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }

      req.body.images = imagesLinks;
    }

	category = await Category.findByIdAndUpdate(req.params.id,req.body,{
		new:true,
		runValidators:true,
		useFindAndModify:false
	});

	res.status(201).json({
		success:true,
		category,
	})
});

// delete category --admin
export const deleteCategory = catchAsyncErrors( async (req, res) =>{

	const category = await Category.findByIdAndDelete(req.params.id);

	if (!category) {
		return next(new ErrorHandler('Category not found',404));
	}

	// Deleting Images From Cloudinary
  for (let i = 0; i < category.images.length; i++) {
    await cloudinary.v2.uploader.destroy(category.images[i].public_id);
  }

	// await category.remove();

	res.status(200).json({
		success:true,
		message:"Category Delete Successfully",
	})
});
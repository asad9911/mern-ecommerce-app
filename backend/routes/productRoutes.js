import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductDetails,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  getProductByCate,
  deleteReview,
  getAdminProducts,
} from "../controllers/productController.js";
const router = express.Router();
import {isAuthenticatedUser,authorizeRoles} from '../middleware/auth.js';

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route("/admin/product").post(isAuthenticatedUser,authorizeRoles('admin'),createProduct);
router.route("/products").get(getAllProducts);
router.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRoles('admin'),updateProduct)
      .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteProduct);
router.route("/product/:id").get(getProductDetails);
router.route("/products/:category").get(getProductByCate);

router.route("/review").put(isAuthenticatedUser,createProductReview);
router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview);

export default router;
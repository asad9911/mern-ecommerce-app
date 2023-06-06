import express from "express";
import {
  createCategory,
  getAdminCategories,
  getCategoryDetails,
  getAllCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";
const router = express.Router();
import {isAuthenticatedUser,authorizeRoles} from '../middleware/auth.js';

router
  .route("/admin/categories")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminCategories);
  router.route("/categories").get(getAllCategories);
router.route("/admin/category").post(isAuthenticatedUser,authorizeRoles('admin'),createCategory);
router.route("/admin/category/:id").put(isAuthenticatedUser,authorizeRoles('admin'),updateCategory)
      .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteCategory);
router.route("/category/:id").get(getCategoryDetails);

export default router;
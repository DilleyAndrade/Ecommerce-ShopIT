import express from "express";
import {
  newProduct,
  getProducts,
  getProductDetails,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.route("/products").get(isAuthenticatedUser, getProducts);

router.route("/products/:id").get(getProductDetails);

router.route("/products/:id").put(updateProduct);

router.route("/products/:id").delete(deleteProduct);

router.route("/admin/products").post(newProduct);

export default router;

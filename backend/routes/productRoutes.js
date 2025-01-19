import express from "express";
import {
  newProduct,
  getProducts,
  getProductDetails,
  updateProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

router.route("/products").get(getProducts);

router.route("/products/:id").get(getProductDetails);

router.route("/products/:id").put(updateProduct);

router.route("/admin/products").post(newProduct);

export default router;

import express from "express";
import { newProduct, getProducts, getProduct } from "../controllers/productControllers.js";

const router = express.Router();

router.route("/products").get(getProducts);
router.route("/products/:id").get(getProduct)
router.route("/admin/products").post(newProduct);

export default router;

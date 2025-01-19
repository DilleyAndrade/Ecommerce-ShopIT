import express from "express";
import { newProduct, getProducts } from "../controllers/productControllers.js";

const router = express.Router();

router.route("/products").get(getProducts);
router.route("/admin/products").post(newProduct);

export default router;

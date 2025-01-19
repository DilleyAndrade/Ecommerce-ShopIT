import Product from "../models/productModel.js";
import ErrorHandler from "../util/errorHandler.js";

//Get product
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    message: "All products",
    products,
  });
};

//Get product detail
export const getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not Found', 404))
  }

  res.status(200).json({
    product,
  });
};

//Create product
export const newProduct = async (req, res) => {
  const productToAdd = await Product.create(req.body);

  res.status(201).json({
    message: "Product added",
    productToAdd,
  });
};

//Update Product
export const updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not Found', 404))
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    product,
  });
};

//Delete product
export const deleteProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler('Product not Found', 404))
  }

  await product.deleteOne(product)

  res.status(200).json({
    message: "Product deleted",
  });
};

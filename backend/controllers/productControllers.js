import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.status(200).json({
    message: "All products",
    products
  });
};

export const getProduct = async(req, res) => {
  const singleProduct = await Product.findById(req.params.id)
  res.status(201).json({
    singleProduct
  })
}

//Create product
export const newProduct = async (req, res) => {
  const productToAdd = await Product.create(req.body);

  res.status(201).json({
    message: "Product added",
    productToAdd,
  });
};

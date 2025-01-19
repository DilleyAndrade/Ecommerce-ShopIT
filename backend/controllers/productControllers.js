import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  res.status(200).json({
    message: "All products",
  });
};

export const newProduct =  async(req, res) =>{
  const productToAdd = await Product.create(req.body)
  
  res.status(201).json({
    message: 'Product added',
    productToAdd
  })
}

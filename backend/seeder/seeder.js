import mongoose from "mongoose";
import Product from "../models/productModel.js";
import productList from "./data.js";

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.DB_LOCAL_URI);
    console.log("Database connected");

    await Product.deleteMany();
    console.log("All products deleted");

    await Product.insertMany(productList);
    console.log("All products added");

    process.exit();
  } catch (error) {
    console.log("Failed to create seeder", error);
    process.exit();
  }
};

seedProducts()
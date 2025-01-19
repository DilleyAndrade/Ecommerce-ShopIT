import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    maxLength: [200, "product name cannot exceed 200 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [6, "product price cannot exceed 6 digits"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url:{
        type: String,
        required: true
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Food",
        "Books",
        "Sports",
        "Outdoor",
        "Home",
      ],
      message: "Please select correct category",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter product seller"],
    maxLength: [50, "Product description cannot exceed 50 characters"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      rating: {
        type: Number,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
},{timestamps: true}
);

export default mongoose.model("Product", productSchema);

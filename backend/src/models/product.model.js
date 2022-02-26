const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_img: { type: String, required: true },
    price: { type: Number, required: true },
    brandId: {
      type: String,
      ref: "brands",
      required: true,
    },
    categoryId: {
      type: String,
      ref: "categories",
      required: true,
    },
    description: { type: String, required: true },
    ratings: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);

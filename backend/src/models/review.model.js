const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      ref: "product",
      required: true,
    },
    userId: {
      type: String,
      ref: "user",
      required: true,
    },
    title: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("reviews", reviewsSchema);

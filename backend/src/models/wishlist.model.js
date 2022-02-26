const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("wishlist", wishlistSchema);

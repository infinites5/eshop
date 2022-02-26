const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
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

module.exports = mongoose.model("cart", cartSchema);

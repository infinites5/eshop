const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: String,
        ref: "product",
        required: true,
      },
    ],
    userId: {
      type: String,
      ref: "user",
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    pin: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", orderSchema);

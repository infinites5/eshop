const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("brands", brandSchema);

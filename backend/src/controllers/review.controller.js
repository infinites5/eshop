const express = require("express");
const router = express.Router();
const Review = require("../models/review.model");
const Product = require("../models/product.model");

//get reviews
router.get("/:productId", async (req, res) => {
  let review = await Review.find({
    productId: { $eq: req.params.productId },
  })
    .populate("userId", { first_name: 1, last_name: 1, email: 1 })
    .lean()
    .exec();

  res.status(200).json({ data: review });
});

//post reviews
router.post("/post", async (req, res) => {
  let { productId, rating } = req.body;
  rating = +rating;
  let review = await Review.create(req.body);

  let product = await Product.findById(productId);
  product.ratings = parseFloat((product.ratings + rating) / 2).toFixed(1);
  let newProduct = await Product.findByIdAndUpdate(productId, product, {
    new: true,
  });
  res.status(201).json({ data: review });
});

module.exports = router;

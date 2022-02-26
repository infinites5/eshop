const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishlist.model");

router.get("/:userId", async (req, res) => {
  let wishlist = await Wishlist.find({ userId: req.params.userId })
    .populate("productId")
    .lean()
    .exec();

  res.status(200).json({ data: wishlist });
});

router.post("/", async (req, res) => {
  let wishlist = await Wishlist.create(req.body);

  res.status(201).json({ data: wishlist });
});

router.delete("/:id", async (req, res) => {
  let wishlist = await Wishlist.findByIdAndDelete(req.params.id).lean().exec();
  res.status(204).json();
});

module.exports = router;

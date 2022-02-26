const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.model");

router.get("/:userId", async (req, res) => {
  let cart = await Cart.find({ userId: req.params.userId })
    .populate("productId")
    .lean()
    .exec();
  res.status(200).json({ data: cart });
});

router.post("/", async (req, res) => {
  let cart = await Cart.create(req.body);
  return res.status(201).json({ data: cart });
});

router.delete("/bulk/:userId", async (req, res) => {
  let cart = await Cart.deleteMany({ userId: req.params.userId }).exec();
  res.status(204).json();
});

router.delete("/:id", async (req, res) => {
  let cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
  res.status(204).json();
});

module.exports = router;

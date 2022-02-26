const express = require("express");
const router = express.Router();
const Orders = require("../models/orders.model");

router.post("/", async (req, res) => {
  let order = await Orders.create(req.body);
  res.status(201).json({ data: order });
});

router.get("/:id", async (req, res) => {
  let orders = await Orders.find({ userId: req.params.id })
    .populate("products")
    .lean()
    .exec();
  res.status(201).json({ data: orders });
});

module.exports = router;

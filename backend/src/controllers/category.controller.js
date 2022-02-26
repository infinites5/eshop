const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

router.get("/", async (req, res) => {
  let categories = await Category.find({}).lean().exec();
  return res.status(200).json({ data: categories });
});

module.exports = router;

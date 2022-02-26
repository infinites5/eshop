const express = require("express");
const router = express.Router();
const Brand = require("../models/brand.model");

router.get("/", async (req, res) => {
  let brands = await Brand.find({}).lean().exec();
  return res.status(200).json({ data: brands });
});

module.exports = router;

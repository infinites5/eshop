const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");
const Brand = require("../models/brand.model");
const Category = require("../models/category.model");
const { getAll } = require("../utils/collector");

router.post("/", async (req, res) => {
  let [inComingMin, inComingMax] = req.body.priceLimit;
  let page = +req.query.page || 1;
  let sortSelection = +req.query.sort;
  let size = 9;
  let offset = (page - 1) * size;
  let brandsArray = req.body.brandsArray;
  let categoriesArray = req.body.categoriesArray;

  if (brandsArray.length === 0) {
    let brands = await Brand.find({}).lean().exec();
    brandsArray = getAll(brands);
  }

  if (categoriesArray.length === 0) {
    let categories = await Category.find({}).lean().exec();
    categoriesArray = getAll(categories);
  }

  let products;

  products = await Product.find({
    price: { $gte: inComingMin, $lte: inComingMax },
    categoryId: { $in: categoriesArray },
    brandId: { $in: brandsArray },
  })
    .sort(sortSelection !== 0 ? { price: sortSelection } : {})
    .populate("categoryId")
    .populate("brandId")
    .skip(offset)
    .limit(size)
    .lean()
    .exec();

  //total products
  totalProducts = await Product.find({
    price: { $gte: inComingMin, $lte: inComingMax },
    categoryId: { $in: categoriesArray },
    brandId: { $in: brandsArray },
  })
    .countDocuments()
    .lean()
    .exec();

  //price range
  let min = await Product.findOne({}, { price: 1, _id: 0 }).sort({ price: 1 });
  let max = await Product.findOne({}, { price: 1, _id: 0 }).sort({ price: -1 });

  return res.status(200).json({
    totalProducts,
    min: min.price,
    max: max.price,
    products,
  });
});

router.get("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id)
    .populate("categoryId")
    .populate("brandId")
    .lean()
    .exec();
  return res.status(200).json({ data: product });
});

router.get("/home/products", async (req, res) => {
  let featured = await Product.find({})
    .sort({ price: 1 })
    .limit(4)
    .populate("categoryId")
    .populate("brandId")
    .lean()
    .exec();

  let popular = await Product.find({})
    .sort({ price: -1 })
    .limit(4)
    .populate("categoryId")
    .populate("brandId")
    .lean()
    .exec();

  return res.status(200).json({ featured, popular });
});

router.get("/category/:id", async (req, res) => {
  let product = await Product.find({ categoryId: req.params.id })
    .populate("categoryId")
    .populate("brandId")
    .limit(4)
    .lean()
    .exec();
  return res.status(200).json({ data: product });
});

router.get("/brand/:id", async (req, res) => {
  let product = await Product.find({ brandId: req.params.id })
    .populate("categoryId")
    .populate("brandId")
    .limit(4)
    .lean()
    .exec();
  return res.status(200).json({ data: product });
});

router.get("/search/:searchQuery", async (req, res) => {
  const product = await Product.find({
    product_name: {
      $regex: req.params.searchQuery,
      $options: "i",
    },
  })
    .limit(5)
    .lean()
    .exec();
  res.status(200).json({ data: product });
});

router.post("/create", async (req, res) => {
  let product = await Product.create(req.body);
  return res.status(201).json({ data: product });
});

router.patch("/update/:id", async (req, res) => {
  let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(202).send({ data: product });
});

router.delete("/delete/:id", async (req, res) => {
  let product = await Product.findByIdAndDelete(req.params.id);
  return res.status(204).send();
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/user.model");
const jtw = require("jsonwebtoken");
require("dotenv").config();

const newToken = (user) => {
  return jtw.sign({ id: user.id }, process.env.JWT_SECRET);
};

router.post(
  "/signup",
  body("first_name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First name cannot be empty"),
  body("last_name")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Last name cannot be empty"),
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password length should be 8 or more"),
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(401).json({ message: result.array()[0].param });
    }
    let user;
    try {
      user = await User.create(req.body);
      const token = newToken(user);
      return res
        .status(201)
        .send({ message: "success", userData: user, token });
    } catch (err) {
      return res.status(500).send({ message: "registered" });
    }
  }
);

router.post("/login", async (req, res) => {
  let user;
  try {
    user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      return res.status(401).json({ message: "email or password incorrect" });
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(401).json({ message: "email or password incorrect" });
    }
    const token = newToken(user);
    res.status(201).json({ status: "Success", token, userData: user });
  } catch (err) {
    return res.status(500).json({ error: "wrong" });
  }
});

module.exports = router;

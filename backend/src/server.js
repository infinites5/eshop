const express = require("express");
const app = express();
const connect = require("./config/db");
const cors = require("cors");

const productsRouter = require("./controllers/product.controller");
const categoryRouter = require("./controllers/category.controller");
const brandRouter = require("./controllers/brand.controller");
const reviewRouter = require("./controllers/review.controller");
const authRouter = require("./controllers/auth.controller");
const cartRouter = require("./controllers/cart.controller");
const wishlistRouter = require("./controllers/wishlist.controller");
const ordersRouter = require("./controllers/order.controller");

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/categories", categoryRouter);
app.use("/brands", brandRouter);
app.use("/reviews", reviewRouter);
app.use("/auth", authRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);
app.use("/orders", ordersRouter);

async function start() {
  await connect();
  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
}

module.exports = start;

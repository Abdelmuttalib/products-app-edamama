const express = require("express");
const { getCart, addItemToCart } = require("../controllers/cartController");
const router = express.Router();

router.get("/", getCart).post(addItemToCart);

module.exports = router;

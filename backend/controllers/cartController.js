const asyncHandler = require("express-async-handler");
const cartModel = require("../models/cartModel");
const Cart = require("../models/cartModel");

// @desc    Get Cart Items
// @route   Get /cart
// @access  Private
const getCart = asyncHandler(async (req, res) => {
  const cartItems = await Cart.find();
  res.status(200).json(cartItems);
});

// @desc    Set new Cart item
// @route   POST /cart
// @access  Private
const addItemToCart = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.price) {
    res.status(400);
    throw new Error("Please enter all required fields");
  }

  const newCartItem = await Cart.create({
    text: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });
  res.status(200).json(newCartItem);
});

module.exports = {
  getCart,
  addItemToCart,
};

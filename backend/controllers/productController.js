const asyncHandler = require("express-async-handler");
const productModel = require("../models/productModel");
const Product = require("../models/productModel");

// @desc    Get products
// @route   Get /products
// @access  Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// @desc    Set products
// @route   POST /products
// @access  Private
const setProducts = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  try {
    const newProduct = await Product.create({
      text: req.body.title,
      description: req.body.description,
      price: req.body.price,
    });
    res.status(200).json(newProduct);
  } catch (e) {}
});

// @desc    Delete product
// @route   DELETE /product/:id
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {
  const toDeleteProduct = await Product.findById(req.params.id);

  if (!toDeleteProduct) {
    res.status(400);
    throw new Error("Product not found");
  }

  await toDeleteGoal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProducts,
  setProducts,
  deleteProduct,
};

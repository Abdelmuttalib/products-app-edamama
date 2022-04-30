const express = require("express");
const router = express.Router();
const {
  getProducts,
  setProducts,
  deleteProduct,
} = require("../controllers/productController");

router.route("/").get(getProducts).post(setProducts);
router.route("/:id").delete(deleteProduct);

module.exports = router;

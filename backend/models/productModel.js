const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "kindly add a title"],
    },
    description: {
      type: String,
      required: [true, "kindly add a description"],
    },
    price: {
      type: String,
      required: [true, "kindly add a price"],
    },
    image: {
      type: String,
      required: [true, "kindly add an image link url"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);

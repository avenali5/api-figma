const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  main_image: {
    required: true,
    type: String,
  },
  pattern_image: {
    required: true,
    type: String,
  },
  product_image: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  product_name: {
    required: true,
    type: String,
  },
  tags: {
    required: true,
    type: Array,
  },
  units: {
    required: true,
    type: String,
  },
  new: {
    required: false,
    type: Boolean,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

const Product = require("../models/productModel.js");
const express = require("express");

const router = express.Router();

// get all products from db
router.get("/", async (request, response) => {
  try {
    const products = await Product.find({});
    return response.status(200).send({
      count: products.length,
      data: products,
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({ message: err.message });
  }
});

// get Product by id from db
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    // Use findById with the converted objectId
    const product = await Product.findById(id);

    return response.status(200).send(product);
  } catch (err) {
    console.log(err);
    response.status(500).send({ message: err.message });
  }
});

module.exports = router;

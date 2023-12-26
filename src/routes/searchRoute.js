const express = require("express");
const Product = require("../models/productModel.js");

const searchRoute = express.Router();

// get product by search
searchRoute.get("/", async (req, res) => {
  const { term } = req.query;

  try {
    const products = await Product.find({
      $or: [
        { product_name: { $regex: new RegExp(term, "i") } },
        { description: { $regex: new RegExp(term, "i") } },
      ],
    });
    return res.status(200).send({
      count: products.length,
      data: products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: err.message });
  }
});

module.exports = searchRoute;

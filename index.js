const Product = require("./src/models/productModel.js");
// const searchRoute = require("./src/routes/searchRoute.js");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const { mongoDBURL } = require("./config.js");
// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Initialize server
app.listen(process.env.PORT || 5555, () => {
  console.log("Running on port 5555.");
});

// get all products from db
app.get("/products", async (request, response) => {
  response.send("prodotto");
  // try {
  //   const products = await Product.find({});
  //   return response.status(200).send({
  //     count: products.length,
  //     data: products,
  //   });
  // } catch (err) {
  //   console.log(err);
  //   response.status(500).send({ message: err.message });
  // }
});

// get Product by id from db
// app.get("/:id", async (request, response) => {
//   try {
//     const { id } = request.params;

//     // Use findById with the converted objectId
//     const product = await Product.findById(id);

//     return response.status(200).send(product);
//   } catch (err) {
//     console.log(err);
//     response.status(500).send({ message: err.message });
//   }
// });

// app.use("/api/search", searchRoute);

mongoose
  .connect(mongoDBURL)
  .then(data => {
    console.log("connected");
  })
  .catch(rtt => {
    console.log(rtt);
  });

// module.exports = app;
module.exports.handler = serverless(app);

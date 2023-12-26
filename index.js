// const productsRoute = require("./src/routes/productsRoute.js");
// const searchRoute = require("./src/routes/searchRoute.js");
const serverless = require("serverless-http");
// const mongoose = require("mongoose");
// const { mongoDBURL } = require("./config.js");
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

// app.use("/api/products", productsRoute);
// app.use("/api/search", searchRoute);

// mongoose
//   .connect(mongoDBURL)
//   .then(data => {
//     console.log("connected");
//   })
//   .catch(rtt => {
//     console.log(rtt);
//   });

// module.exports = app;
module.exports.handler = serverless(app);

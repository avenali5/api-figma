// const searchRoute = require("./src/routes/searchRoute.js");
const mongoose = require("mongoose");
// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// Initialize server
app.listen(5555, () => {
  console.log("Running on port 5555.");
});

mongoose
  .connect(
    "mongodb+srv://alejinius:mikevallely@cluster0.nej8uwa.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(data => {
    console.log("connected");
  })
  .catch(rtt => {
    console.log(rtt);
  });

module.exports = app;
// module.exports.handler = serverless(app);

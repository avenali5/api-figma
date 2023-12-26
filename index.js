const route = require("./src/routes/productsRoute.js");
const searchRoute = require("./src/routes/searchRoute.js");
// Add Express
const express = require("express");
const connectDB = require("./connectMongo");
require("dotenv").config();
connectDB();

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.use("/api/products", route);
app.use("/api/search", searchRoute);

// Initialize server
app.listen(5555, () => {
  console.log("Running on port 5555.");
});

// module.exports.handler = serverless(app);

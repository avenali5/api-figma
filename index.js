// const searchRoute = require("./src/routes/searchRoute.js");
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

module.exports = app;
// module.exports.handler = serverless(app);

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

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alejinius:mikevallely@cluster0.nej8uwa.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDatabase();

// Initialize server
app.listen(5555, () => {
  console.log("Running on port 5555.");
});

module.exports = app;
// module.exports.handler = serverless(app);

// const searchRoute = require("./src/routes/searchRoute.js");
const { MongoClient } = require("mongodb");
// Add Express
const express = require("express");

// Initialize Express
const app = express();

const mongoURI =
  "mongodb+srv://alejinius:mikevallely@cluster0.nej8uwa.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to MongoDB
client.connect(err => {
  if (err) {
    console.error("Failed to connect to MongoDB:", err);
  } else {
    console.log("Connected to MongoDB");

    // You can add your Express routes and other logic here

    // Close the MongoDB connection when the app is closed
    process.on("SIGINT", () => {
      client.close(() => {
        console.log("MongoDB connection closed");
        process.exit(0);
      });
    });
  }
});

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

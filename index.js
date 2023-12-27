const productsRoute = require("./src/routes/productsRoute.js");
const searchRoute = require("./src/routes/searchRoute.js");
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectMongo");
require("dotenv").config();
connectDB();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Express working");
});

app.use("/api/products", productsRoute);
app.use("/api/search", searchRoute);

app.listen(5555, () => {
  console.log("Running on port 5555.");
});

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const mongoDBURL = process.env.MONGODB_URI;

module.exports = {
  mongoDBURL,
};

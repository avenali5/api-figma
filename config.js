const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const mongoDBURL = process.env.MONGO_URL;

module.exports = {
  mongoDBURL,
};

const express = require("express");
const app = express();

const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/livona";

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.listen(8080, () => {
  console.log("App is listening on PORT: 8080");
});

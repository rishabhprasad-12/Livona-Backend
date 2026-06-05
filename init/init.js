const mongoose = require("mongoose");
const initData = require("./data");
const Listings = require("../models/listing");

const MONGO_URL = "mongodb://127.0.0.1:27017/livona";

main()
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => console.log(error));

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listings.deleteMany({});
    const data = await Listings.insertMany(initData.data);
    console.log(data);
    console.log("Data was Initialized");
  } catch (error) {
    console.log(error);
  }
};

initDB();

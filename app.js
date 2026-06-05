require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const Listings = require("./models/listing");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

// Delete Route
app.delete("/api/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listings.findByIdAndDelete(id);
  console.log(listing);
  res.json({
    success: true,
    message: "Listing deleted",
  });
});

// New Route
app.post("/api/listings", async (req, res) => {
  const listing = req.body.listing;
  const newListing = new Listings(listing);

  await newListing.save();
  res.json(listing);
});

// Edit Route
app.put("/api/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listings.findByIdAndUpdate(id, { ...req.body.listing });
  console.log(listing);
  res.json(listing);
});

// Show one Listing Route
app.get("/api/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listings.findById(id);
  res.json(listing);
});

// All Listing Route
app.get("/api/listings", async (req, res) => {
  const allListing = await Listings.find({});
  res.json(allListing);
});

app.listen(8080, () => {
  console.log("App is listening on PORT: 8080");
});

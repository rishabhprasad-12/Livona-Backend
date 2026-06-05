require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const Listings = require("./models/listing");
const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");

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
app.delete(
  "/api/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listings.findByIdAndDelete(id);
    console.log(listing);
    res.json({
      success: true,
      message: "Listing deleted",
    });
  }),
);

// New Route
app.post(
  "/api/listings",
  wrapAsync(async (req, res) => {
    const listing = req.body.listing;
    const newListing = new Listings(listing);

    await newListing.save();
    res.json(listing);
  }),
);

// Edit Route
app.put(
  "/api/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listings.findByIdAndUpdate(id, {
      ...req.body.listing,
    });
    console.log(listing);
    res.json(listing);
  }),
);

// Show one Listing Route
app.get(
  "/api/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listings.findById(id);
    res.json(listing);
  }),
);

// All Listing Route
app.get(
  "/api/listings",
  wrapAsync(async (req, res) => {
    const allListing = await Listings.find({});  
    res.json(allListing);
  }),
);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

app.use((error, req, res, next) => {
  if (error.name === "CastError") {
    error.statusCode = 404;
    error.message = "The page or listing you're looking for doesn't exist.";
  }

  if (error.name === "ValidationError") {
    error.statusCode = 400;
    error.message = "Invalid form data";
  }

  const statusCode = error.statusCode || 500;

  const messages = {
    400: "Invalid request. Please check your input.",
    401: "Please sign in to continue.",
    403: "You don't have permission to perform this action.",
    404: "The page or listing you're looking for doesn't exist.",
    500: "Something went wrong on our side. Please try again later.",
  };

  res.status(statusCode).json({
    success: false,
    statusCode,
    message: error.message || messages[statusCode],
  });
});

app.listen(8080, () => {
  console.log("App is listening on PORT: 8080");
});

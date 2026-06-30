require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const Listings = require("./models/listing");
const Reviews = require("./models/review");

const wrapAsync = require("./utils/wrapAsync");
const ExpressError = require("./utils/ExpressError");
const { validateListing, validateReview } = require("./middleware/middleware");

const listingRoutes = require("./routes/listing");
const reviewRoutes = require("./routes/review");

const session = require("express-session");

const User = require('./models/user');
const userRoutes = require('./routes/auth');

const wishlistRoutes = require("./routes/wishlist");

const MONGO_URI = process.env.MONGO_URL; 

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

async function main() {
  await mongoose.connect(MONGO_URI);
}

app.use(
  cors({
    origin: [process.env.FRONTEND_PROD_URL],
    credentials: true,
  }),
);

console.log(process.env.FRONTEND_PROD_URL);

const sessionOption = {
  secret: process.env.JWT_SECRET,
  resave: "false",
  saveUninitialized: "true",
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionOption));

// Wishlist Route
app.use("/api/wishlist", wishlistRoutes)

// User Route
app.use("/api/auth", userRoutes);

// Review Route
app.use("/api/listings/:id/review", reviewRoutes);

// Listing Route
app.use("/api/listings", listingRoutes);

// Custom error handlers
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

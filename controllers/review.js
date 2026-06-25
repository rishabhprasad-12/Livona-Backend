const Listings = require("../models/listing");
const Review = require("../models/review");
const Reviews = require("../models/review");
const ExpressError = require("../utils/ExpressError");

module.exports.createReview = async (req, res) => {
  const listing = await Listings.findById(req.params.id);

  const newReview = new Reviews(req.body.review);
  console.log(req.user.id);
  newReview.author = req.user.id;

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  console.log("New Review Saved!");

  res.json({
    status: true,
    review: req.body,
  });
};

module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;

  const review = await Reviews.findById(reviewId);

  if (!review.author.equals(req.user.id)) {
    return res.status(403).json({
      message: "You are not authorized to delete this review",
    });
  }

  await Listings.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  await Reviews.findByIdAndDelete(reviewId);

  res.json({
    status: true,
    message: "Review deleted successfully",
    reviewData: review,
  });
};

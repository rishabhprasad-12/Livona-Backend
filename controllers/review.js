const Listings = require("../models/listing");
const Reviews = require("../models/review");

module.exports.createReview = async (req, res) => {
  const listing = await Listings.findById(req.params.id);
  const newReview = new Reviews(req.body.review);

  listing.reviews.push(newReview);

  await newReview.save();
  await listing.save();

  console.log(listing);
  console.log("New Review Saved!");

  res.json({
    status: true,
    review: req.body,
  });
};

module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;

  const listing = await Listings.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  const review = await Reviews.findByIdAndDelete(reviewId);

  console.log(listing);

  res.json({
    status: true,
    message: "success",
    reviewData: review,
  });
};

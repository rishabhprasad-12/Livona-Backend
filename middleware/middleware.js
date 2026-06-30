const { listingSchema, reviewSchema } = require("../schema");
const ExpressError = require("../utils/ExpressError");
const Listings = require("../models/listing");
const Review = require("../models/review");

module.exports.validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  }
  next();
};

module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, msg);
  }
  next();
};

module.exports.isListingOwner = async (req, res, next) => {
  const { id } = req.params;

  const listing = await Listings.findById(id);

  if (!listing.owner.equals(req.user.id)) {
    return next(new ExpressError(403, "Not authorized"));
  }

  next();
};

// module.exports.isReviewAuthor = async (req, res, next) => {
//   let { id, reviewId } = req.params;
//   let review = await Review.findById(reviewId);
//   if (!review.author.equals(res.locals.currUser._id)) {
//     req.flash("error", "You are not the author of this review");
//     return res.redirect(`/lists/${id}`);
//   }
//   next();
// };

const Listings = require("../models/listing");

async function updateListingRating(listingId) {
  const listing = await Listings.findById(listingId).populate("reviews");

  console.log("Listing:", listing.title);
  console.log("Reviews:", listing.reviews);

  if (!listing.reviews.length) {
    console.log("No reviews found");

    listing.averageRating = 0;
    listing.totalReviews = listing.reviews.length;

    await listing.save();
    return;
  }

  const total = listing.reviews.reduce((sum, review) => sum + review.rating, 0);

  console.log("Total Rating:", total);

  const avg = Number((total / listing.reviews.length).toFixed(1));

  console.log("Average:", avg);

  listing.averageRating = avg;
  listing.totalReviews = listing.reviews.length;

  await listing.save();

  console.log("Updated Successfully");
}

module.exports = updateListingRating;

const Listings = require("../models/listing");
const ExpressError = require("../utils/ExpressError");

module.exports.getAllListings = async (req, res) => {
  const allListing = await Listings.find({});
  res.json(allListing);
};

module.exports.createNewListing = async (req, res) => {
  const newListing = new Listings(req.body.listing);
  await newListing.save();
  res.json(newListing);
};

module.exports.showListing = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listings.findById(id).populate({
    path: "reviews", 
    options: { sort: { createdAt: -1 } },
  });

  if (!listing) {
    return next(new ExpressError(404, "Listing not found"));
  }

  res.json(listing);
};

module.exports.editListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listings.findByIdAndUpdate(id, {
    ...req.body.listing,
  });
  console.log(listing);
  res.json(listing);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listings.findByIdAndDelete(id);
  console.log(listing);
  res.json({
    success: true,
    message: "Listing deleted",
  });
};

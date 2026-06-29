const Listings = require("../models/listing");
const ExpressError = require("../utils/ExpressError");
const User = require("../models/user");

module.exports.getAllListings = async (req, res) => {
  const { search, category, price, rating, sort } = req.query;
  const query = {};

  if (search) {
    const users = await User.find({
      username: { $regex: search, $options: "i" },
    })

    const userIds = users.map((user) => user._id);

    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
      { country: { $regex: search, $options: "i" } },
      { owner: { $in: userIds } },
    ];
  }

  if (category && category !== "All") {
    query.category = category;
  }

  if (price) {
    switch (price) {
      case "5000":
        query.price = { $lte: 5000 };
        break;

      case "10000":
        query.price = {
          $gte: 5000,
          $lte: 10000,
        };
        break;

      case "10001":
        query.price = { $gte: 10000 };
        break;
    }
  }

  if (rating) {
    query.averageRating = {
      $gte: Number(rating),
    };
  }

  let sortObject = {
    createdAt: -1,
  };

  switch (sort) {
    case "price_low":
      sortObject = { price: 1 };
      break;

    case "price_high":
      sortObject = { price: -1 };
      break;

    case "newest":
      sortObject = { createdAt: -1 };
      break;

    case "highest_rating":
      sortObject = { averageRating: -1 };
      break;

    default:
      sortObject = { createdAt: -1 };
  }

  const allListing = await Listings.find(query)
    .sort(sortObject)
    .populate({ path: "reviews" })
    .lean();
    
  res.json(allListing);
};

module.exports.createNewListing = async (req, res) => {
  const newListing = new Listings(req.body.listing);
  newListing.owner = req.user.id;
  await newListing.save();
  res.status(201).json(newListing);
};

module.exports.showListing = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listings.findById(id)
    .populate("owner")
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
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

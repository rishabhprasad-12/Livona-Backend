const mongoose = require("mongoose");
const { Schema } = mongoose;

const Review = require("./review");
const User = require("./user");

const listingSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      url: {
        type: String,
        required: true,
      },
      filename: {
        type: String,
        required: true,
      },
    },
    price: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Beach",
        "Mountain",
        "Villa",
        "Cabin",
        "Hotel",
        "Apartment",
        "Farmhouse",
        "Treehouse",
        "Camping",
      ],
      default: "Apartment",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    averageRating: {
      type: Number,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

listingSchema.post("findOneAndDelete", async (deletedListing) => {
  if (deletedListing) {
    await Review.deleteMany({
      _id: { $in: deletedListing.reviews },
    });
  }
});

const Listings = mongoose.model("Listings", listingSchema);

module.exports = Listings;

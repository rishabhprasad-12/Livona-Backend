const mongoose = require('mongoose');

const Listings = require("./listing");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listings",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
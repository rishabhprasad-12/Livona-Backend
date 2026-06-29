const User = require("../models/user");

module.exports.toggleWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const { listingId } = req.params;

    // Check if listing already exists in wishlist
    const exists = user.wishlist.some((id) => id.toString() === listingId);

    if (exists) {
      // Remove from wishlist
      user.wishlist = user.wishlist.filter((id) => id.toString() !== listingId);

      await user.save();

      return res.json({
        success: true,
        wishlisted: false,
        message: "Removed from wishlist",
      });
    }

    // Add to wishlist
    user.wishlist.push(listingId);

    await user.save();

    res.json({
      success: true,
      wishlisted: true,
      message: "Added to wishlist",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports.getWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate({
      path: "wishlist",
      populate: {
        path: "reviews",
      }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      wishlists: user.wishlist,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const express = require("express");
const router = express.Router();

const wishlistController = require("../controllers/wishlist");
const auth = require("../middleware/auth");

router
  .route("/:listingId")
  .post(auth, wishlistController.toggleWishlist)

router.route("/").get(auth, wishlistController.getWishlist);

module.exports = router;

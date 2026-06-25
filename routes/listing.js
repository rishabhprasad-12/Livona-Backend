const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const { validateListing, isListingOwner } = require("../middleware/middleware");

const auth = require("../middleware/auth");

const controllerListing = require("../controllers/listing");

router
  .route("/")
  .get(wrapAsync(controllerListing.getAllListings))
  .post(auth, validateListing, wrapAsync(controllerListing.createNewListing));

router
  .route("/:id")
  .get(wrapAsync(controllerListing.showListing))
  .put(auth, isListingOwner, validateListing, wrapAsync(controllerListing.editListing))
  .delete(auth, isListingOwner, wrapAsync(controllerListing.deleteListing));

module.exports = router;

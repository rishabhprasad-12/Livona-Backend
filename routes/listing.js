const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const { validateListing } = require("../middleware/middleware");

const controllerListing = require("../controllers/listing");

router
  .route("/")
  .get(wrapAsync(controllerListing.getAllListings))
  .post(validateListing, wrapAsync(controllerListing.createNewListing));

router
  .route("/:id")
  .get(wrapAsync(controllerListing.showListing))
  .put(validateListing, wrapAsync(controllerListing.editListing))
  .delete(wrapAsync(controllerListing.deleteListing));

module.exports = router;

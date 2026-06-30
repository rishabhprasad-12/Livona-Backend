const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const { validateListing, isListingOwner } = require("../middleware/middleware");

const auth = require("../middleware/auth");

const controllerListing = require("../controllers/listing");
const upload = require("../middleware/upload");

router.route("/").get(wrapAsync(controllerListing.getAllListings)).post(
  auth,
  upload.single("image"),
  validateListing,
  wrapAsync(controllerListing.createNewListing),
);

router
  .route("/:id")
  .get(wrapAsync(controllerListing.showListing))
  .put(
    auth,
    isListingOwner,
    upload.single("image"),
    validateListing,
    wrapAsync(controllerListing.editListing),
  )
  .delete(auth, isListingOwner, wrapAsync(controllerListing.deleteListing));

module.exports = router;

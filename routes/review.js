const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync");
const { validateReview } = require("../middleware/middleware");

const controllerReview = require("../controllers/review");

router.post("/", validateReview, wrapAsync(controllerReview.createReview));

router.delete("/:reviewId", wrapAsync(controllerReview.deleteReview));

module.exports = router;

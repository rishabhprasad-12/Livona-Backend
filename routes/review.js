const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../utils/wrapAsync");
const { validateReview } = require("../middleware/middleware");

const auth = require("../middleware/auth");

const controllerReview = require("../controllers/review");

router.post("/", auth, validateReview, wrapAsync(controllerReview.createReview));

router.delete("/:reviewId", auth, wrapAsync(controllerReview.deleteReview));

module.exports = router;

const { listingSchema, reviewSchema } = require("../schema");
const ExpressError = require("../utils/ExpressError");

module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);

    if(error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, msg);
    }
    next();
}

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);

    if(error) {
        const msg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400, msg);
    } 
    next();
}
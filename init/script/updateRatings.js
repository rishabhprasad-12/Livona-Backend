const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

const mongoose = require("mongoose");
const Listings = require("../../models/listing");
const updateListingRating = require("../../utils/ratingUtils");

console.log(process.cwd());
console.log(process.env.MONGO_URL);

main()
  .then(() => console.log("DB Connected"))
  .catch(console.error);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

async function migrate() {
  const listings = await Listings.find();

  for (const listing of listings) {
    await updateListingRating(listing._id);
    console.log(`${listing.title} Updated`);
  }

  console.log("Done");
  process.exit();
}

main().then(migrate);

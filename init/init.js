const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Listing = require("../models/listing");
const Review = require("../models/review");
const User = require("../models/user");

const initData = require("./data");

const MONGO_URL = process.env.MONGO_URL;

const users = [
  { username: "rishabh_prasad", email: "rishabh@gmail.com" },
  { username: "rahul_kumar", email: "rahul@gmail.com" },
  { username: "aman_verma", email: "aman@gmail.com" },
  { username: "priya_sharma", email: "priya@gmail.com" },
  { username: "neha_singh", email: "neha@gmail.com" },
  { username: "ankit_gupta", email: "ankit@gmail.com" },
  { username: "aditya_yadav", email: "aditya@gmail.com" },
  { username: "pooja_kumari", email: "pooja@gmail.com" },
  { username: "vikash_sahu", email: "vikash@gmail.com" },
  { username: "sneha_mishra", email: "sneha@gmail.com" },
  { username: "rohit_singh", email: "rohit@gmail.com" },
  { username: "shivam_kumar", email: "shivam@gmail.com" },
  { username: "ayushi_jain", email: "ayushi@gmail.com" },
  { username: "nitesh_gupta", email: "nitesh@gmail.com" },
  { username: "sonal_verma", email: "sonal@gmail.com" },
  { username: "deepak_kumar", email: "deepak@gmail.com" },
  { username: "aarti_singh", email: "aarti@gmail.com" },
  { username: "manish_yadav", email: "manish@gmail.com" },
  { username: "kajal_kumari", email: "kajal@gmail.com" },
  { username: "abhishek_raj", email: "abhishek@gmail.com" },
];

const reviewComments = [
  "Had an amazing stay here. The property was exactly as shown in the pictures and the host was very responsive throughout our trip. Would definitely recommend this place.",
  "The location was excellent and very convenient for exploring nearby attractions. Rooms were clean, comfortable and well maintained.",
  "Stayed here with my family and everyone loved the property. The surroundings were peaceful and the amenities were more than sufficient.",
  "One of the best accommodations I have booked so far. Check-in was smooth and the host was friendly.",
  "The property offers beautiful views and a relaxing atmosphere. Looking forward to visiting again.",
  "Everything was well organized and the cleanliness was top notch. Highly recommended.",
  "A very pleasant experience overall. The rooms were spacious and comfortable.",
  "The place was beautifully designed and maintained. It felt like a home away from home.",
  "We had a fantastic weekend here. The location, cleanliness and hospitality were outstanding.",
  "Great value for money. The property was beautiful and conveniently located.",
];

const ratings = [5, 5, 5, 5, 5, 4, 4, 4, 3];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URL);

    console.log("✅ Connected to MongoDB");

    // Clear Collections
    await User.deleteMany({});
    await Listing.deleteMany({});
    await Review.deleteMany({});

    console.log("🗑️ Old data deleted");

    // Create Users
    const hashedPassword = await bcrypt.hash("123456", 10);

    const insertedUsers = await User.insertMany(
      users.map((user) => ({
        ...user,
        password: hashedPassword,
      })),
    );

    console.log(`✅ ${insertedUsers.length} users created`);

    // Create Listings with Random Owners
    const listingsWithOwner = initData.data.map((listing) => ({
      ...listing,
      owner: getRandom(insertedUsers)._id,
    }));

    const insertedListings = await Listing.insertMany(listingsWithOwner);

    console.log(`✅ ${insertedListings.length} listings created`);

    // Create Reviews
    for (const listing of insertedListings) {
      const reviewCount = Math.floor(Math.random() * 5) + 2;

      const reviewIds = [];

      for (let i = 0; i < reviewCount; i++) {
        let author;

        do {
          author = getRandom(insertedUsers);
        } while (author._id.toString() === listing.owner.toString());

        const review = await Review.create({
          comment: getRandom(reviewComments),
          rating: getRandom(ratings),
          author: author._id,
        });

        reviewIds.push(review._id);
      }

      listing.reviews = reviewIds;
      await listing.save();
    }

    console.log("✅ Reviews attached to listings");
    console.log("🚀 Database seeded successfully");

    mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seedDatabase();

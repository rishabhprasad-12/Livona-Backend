const sampleListings = [
  // --- ORIGINAL 20 LISTINGS (INDIAN DESTINATIONS) ---
  {
    title: "Cozy Mountain Cabin",
    description: "A peaceful cabin surrounded by mountains and greenery.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
    price: 2500,
    location: "Manali",
    country: "India",
  },
  {
    title: "Beachside Villa",
    description: "Luxury villa with an amazing sea view.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
    price: 7000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Modern City Apartment",
    description: "Stylish apartment in the heart of the city.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    price: 4000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Desert Camp Stay",
    description: "Experience traditional desert life and camel rides.",
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    price: 1800,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Lake View Cottage",
    description: "Beautiful cottage with stunning lake views.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    price: 3200,
    location: "Nainital",
    country: "India",
  },
  {
    title: "Forest Treehouse",
    description: "Unique treehouse stay inside a dense forest.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    price: 4500,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Luxury Palace Hotel",
    description: "Royal stay with heritage interiors and luxury service.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    price: 9500,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Snowy Hill Resort",
    description: "Perfect winter destination with snow-covered views.",
    image:
      "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1200&q=80",
    price: 5200,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Riverside Tent",
    description: "Adventure camping near a beautiful river.",
    image:
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
    price: 1500,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Heritage Haveli",
    description: "Traditional haveli with antique decor.",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
    price: 4800,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Tea Garden Homestay",
    description: "Relaxing stay surrounded by tea plantations.",
    image:
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1200&q=80",
    price: 2700,
    location: "Darjeeling",
    country: "India",
  },
  {
    title: "Island Beach Hut",
    description: "Affordable beach hut with tropical vibes.",
    image:
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
    price: 2100,
    location: "Andaman",
    country: "India",
  },
  {
    title: "Luxury Penthouse",
    description: "Premium penthouse with skyline views.",
    image:
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
    price: 12000,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "Backwater Houseboat",
    description: "Traditional houseboat experience on serene waters.",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
    price: 6500,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Countryside Farmhouse",
    description: "Peaceful farmhouse surrounded by farms.",
    image:
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
    price: 3000,
    location: "Pune",
    country: "India",
  },
  {
    title: "Jungle Safari Lodge",
    description: "Wildlife lodge near the national park.",
    image:
      "https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=1200&q=80",
    price: 5400,
    location: "Jim Corbett",
    country: "India",
  },
  {
    title: "Skyline Studio",
    description: "Compact and modern studio apartment.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    price: 3500,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Ancient Temple Stay",
    description: "Spiritual retreat near famous temples.",
    image:
      "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=1200&q=80",
    price: 1900,
    location: "Varanasi",
    country: "India",
  },
  {
    title: "Ocean Breeze Resort",
    description: "Resort with private beach access and pools.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    price: 8600,
    location: "Kovalam",
    country: "India",
  },
  {
    title: "Cliffside Cottage",
    description: "Romantic cottage overlooking the valley.",
    image:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1200&q=80",
    price: 4100,
    location: "Mussoorie",
    country: "India",
  },

  // --- SECOND 20 LISTINGS (GLOBAL DESTINATIONS) ---
  {
    title: "Eco-Glass Igloo",
    description:
      "Witness the Northern Lights from your bed in a remote arctic sanctuary.",
    image:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1200&q=80",
    price: 8500,
    location: "Ilulissat",
    country: "Greenland",
  },
  {
    title: "Silk Road Heritage Suite",
    description:
      "Stay in a restored 18th-century madrasa in the heart of the ancient city.",
    image:
      "https://images.unsplash.com/photo-1528154291023-a6525fabb5b0?auto=format&fit=crop&w=1200&q=80",
    price: 3200,
    location: "Khiva",
    country: "Uzbekistan",
  },
  {
    title: "Overwater Bamboo Villa",
    description:
      "Sustainable luxury with direct access to crystal clear coral reefs.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=80",
    price: 12500,
    location: "Bora Bora",
    country: "French Polynesia",
  },
  {
    title: "Renaissance Art Loft",
    description:
      "A high-ceiling studio featuring original frescoes and views of the Duomo.",
    image:
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80",
    price: 4500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Modern Ryokan Experience",
    description: "Minimalist design meeting traditional hot spring culture.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    price: 6200,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Savannah Safari Tent",
    description: "Glamping in the wild with guided sunrise game drives.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&w=1200&q=80",
    price: 7800,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Andean Sky Lodge",
    description:
      "Transparent capsules hanging off a cliff side in the Sacred Valley.",
    image:
      "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?auto=format&fit=crop&w=1200&q=80",
    price: 5500,
    location: "Cusco",
    country: "Peru",
  },
  {
    title: "Futuristic Desert Mirror Villa",
    description: "Reflective architecture hidden in the canyons of Al-Ula.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    price: 15000,
    location: "Al-Ula",
    country: "Saudi Arabia",
  },
  {
    title: "Bohemian Canal House",
    description: "Eclectic interiors in a historic 17th-century narrow house.",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1200&q=80",
    price: 3800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Patagonian Eco-Dome",
    description:
      "Geodesic domes with views of the Torres del Paine granite peaks.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    price: 4200,
    location: "Magallanes",
    country: "Chile",
  },
  {
    title: "Santorini Cliffside Cave",
    description:
      "Whitewashed walls and a private infinity pool overlooking the caldera.",
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028ace?auto=format&fit=crop&w=1200&q=80",
    price: 9800,
    location: "Oia",
    country: "Greece",
  },
  {
    title: "Vibrant Medina Riad",
    description:
      "Traditional courtyard home with intricate tilework and citrus trees.",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b7c22370?auto=format&fit=crop&w=1200&q=80",
    price: 2600,
    location: "Marrakech",
    country: "Morocco",
  },
  {
    title: "Alpine Chalet & Spa",
    description:
      "Ski-in/ski-out luxury with a heated outdoor pool and mountain views.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
    price: 11000,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Urban Jungle Studio",
    description:
      "Lush greenery meets industrial design in the heart of the city.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    price: 2900,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Rainforest Treehouse",
    description: "Sleep among the canopy with the sounds of exotic birds.",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80",
    price: 3400,
    location: "La Fortuna",
    country: "Costa Rica",
  },
  {
    title: "Skyline Glass Penthouse",
    description:
      "Floor-to-ceiling windows offering 360-degree views of the harbor.",
    image:
      "https://images.unsplash.com/photo-1514924013511-cbf75b144448?auto=format&fit=crop&w=1200&q=80",
    price: 14000,
    location: "Hong Kong",
    country: "China",
  },
  {
    title: "Nomadic Steppe Yurt",
    description:
      "Authentic nomadic living with modern comfort in the vast plains.",
    image:
      "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=1200&q=80",
    price: 1800,
    location: "Ulaanbaatar",
    country: "Mongolia",
  },
  {
    title: "Old Town Wine Cellar Loft",
    description:
      "Converted historic cellar with exposed stone and modern tech.",
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
    price: 2200,
    location: "Tbilisi",
    country: "Georgia",
  },
  {
    title: "Island Lighthouse Stay",
    description:
      "A private island experience inside a decommissioned lighthouse.",
    image:
      "https://images.unsplash.com/photo-1500049222539-6593a380017a?auto=format&fit=crop&w=1200&q=80",
    price: 5900,
    location: "Outer Hebrides",
    country: "Scotland",
  },
  {
    title: "Colonial Hacienda",
    description:
      "Spacious estate with cobblestone courtyards and bougainvillea.",
    image:
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    price: 4700,
    location: "Oaxaca",
    country: "Mexico",
  },
];

module.exports = { data: sampleListings };

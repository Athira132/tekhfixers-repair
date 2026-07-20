export interface CruisePackageInfo {
  slug: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  overview: string;
  image: string;
  bannerImage: string;
  tags: string[]; // Clean text tags (NO ICONS inside tags)
  duration: string;
  capacity: string;
  timing: string;
  highlights: string[];
  itinerary: { time: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  reviews: { author: string; rating: number; text: string; location: string; date: string }[];
  metaTitle: string;
  metaDesc: string;
}

export const cruisesData: Record<string, CruisePackageInfo> = {
  "day-cruise": {
    slug: "day-cruise",
    title: "Alappuzha Backwater Day Cruise",
    subtitle: "Palm-fringed lagoons, traditional Kerala lunch & scenic cruising",
    shortDesc: "Experience the tranquil backwaters of Alappuzha on a premium day cruise featuring traditional Kerala cuisine.",
    overview: "Our signature Day Cruise takes you through the world-famous canals, lakes, and palm-rimmed waterways of Alappuzha. Relax on the spacious open deck as our experienced captain navigates serene backwater villages, paddy fields, and historic churches. Enjoy freshly prepared authentic Kerala banana-leaf lunch prepared onboard by our private chef.",
    image: "https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    bannerImage: "https://i.ibb.co/v4FnnCRs/Whats-App-Image-2026-07-14-at-1-19-44-PM.jpg",
    tags: ["Day Cruise", "Kerala Lunch Included", "Alappuzha Canals", "Family & Groups"],
    duration: "6 Hours (11:30 AM – 5:30 PM)",
    capacity: "2 to 40 Guests",
    timing: "Daily Departures from Punnamada Lake",
    highlights: [
      "Cruising through Punnamada Lake and narrow village canals",
      "Freshly prepared Kerala banana-leaf lunch with Karimeen Pollichathu",
      "Complimentary evening tea, coffee, and traditional banana fritters",
      "Spacious sun deck with comfortable reclining loungers"
    ],
    itinerary: [
      { time: "11:30 AM", title: "Welcome Onboard", desc: "Boarding at Alappuzha jetty with tender coconut drink and safety briefing." },
      { time: "12:00 PM", title: "Canal Navigation", desc: "Cruise through Meenappally and Kainakary narrow backwater channels." },
      { time: "01:30 PM", title: "Traditional Kerala Feast", desc: "Anchor in quiet waters for authentic Kerala lunch with fresh fish fry and local delicacies." },
      { time: "03:30 PM", title: "Paddy Field Vista", desc: "Explore Kuttanad below-sea-level farming views and local village life." },
      { time: "05:00 PM", title: "Evening Snacks & Return", desc: "Served hot tea, snacks, and gradual return to main jetty during sunset." }
    ],
    faqs: [
      { q: "What meals are included in the Day Cruise?", a: "The Day Cruise includes a welcome drink, full Kerala traditional lunch (with veg and non-veg options like Karimeen fish fry), and evening tea/snacks." },
      { q: "Can we customize the cruise route for private events?", a: "Yes, private charter bookings allow customized boarding times, extended routes, and specific menu choices." }
    ],
    relatedSlugs: ["overnight-stay", "sunset-cruise"],
    reviews: [
      { author: "Anand & Family", rating: 5, text: "The day cruise with Phoenix Cruise was the highlight of our Kerala trip. The boat was immaculate, and the Karimeen lunch was out of this world!", location: "Kochi", date: "3 days ago" }
    ],
    metaTitle: "Alappuzha Backwater Day Cruise | Phoenix Cruise Kerala",
    metaDesc: "Book a luxury day cruise in Alappuzha with Phoenix Cruise. Scenic backwater navigation, traditional Kerala lunch, and spacious upper decks."
  },
  "overnight-stay": {
    slug: "overnight-stay",
    title: "Luxury Overnight Houseboat Stay",
    subtitle: "Air-conditioned bedrooms, candlelit dinner & starry lake nights",
    shortDesc: "Immerse yourself in total relaxation with an overnight houseboat cruise on Kerala's peaceful backwaters.",
    overview: "Escape into nature with an overnight luxury stay on Phoenix Cruise. Spend the day exploring scenic lagoons, watch the sunset over Lake Vembanad, and anchor in tranquil waters for a peaceful night under the stars. Features air-conditioned glass-wall bedrooms, private en-suite bathrooms, personalized dining, and breakfast on the water.",
    image: "https://i.ibb.co/XrBDdjpg/image.png",
    bannerImage: "https://i.ibb.co/XrBDdjpg/image.png",
    tags: ["Overnight Stay", "AC Luxury Suite", "Sunset & Sunrise", "Full Board Meals"],
    duration: "21 Hours (12:00 PM – 9:00 AM Next Day)",
    capacity: "2 to 12 Guests (Private Bedrooms)",
    timing: "Check-in 12:00 PM / Check-out 9:00 AM",
    highlights: [
      "Private air-conditioned suite with panoramic backwater windows",
      "Full board dining: Lunch, evening tea, candlelit dinner, and breakfast",
      "Sunset anchorage in quiet, pollution-free natural bay",
      "Onboard entertainment and fishing rod equipment provided"
    ],
    itinerary: [
      { time: "12:00 PM", title: "Check-in & Welcome", desc: "Boarding, room allocation, and departure into main backwater lakes." },
      { time: "01:30 PM", title: "Onboard Gourmet Lunch", desc: "Fresh sea food feast prepared by onboard chef while cruising." },
      { time: "05:30 PM", title: "Sunset Anchoring", desc: "Boat anchors safely for the evening according to Kerala port regulations." },
      { time: "08:00 PM", title: "Candlelit Dinner", desc: "Delightful dinner served under starry skies on the open deck." },
      { time: "08:00 AM", title: "Morning Cruise & Breakfast", desc: "Morning tea, sunrise cruise, and traditional Kerala breakfast before check-out." }
    ],
    faqs: [
      { q: "How long does air conditioning operate?", a: "Air conditioning in bedrooms operates continuously from 9:00 PM to 6:00 AM for overnight packages, or 24/7 on full premium charter models." },
      { q: "Is the houseboat safe for young children and elderly travelers?", a: "Yes, Phoenix Cruise houseboats are equipped with full safety railings, certified life jackets, first-aid equipment, and trained crew members." }
    ],
    relatedSlugs: ["day-cruise", "executive-suite"],
    reviews: [
      { author: "Deepak & Meera", rating: 5, text: "Sleeping on the calm waters of Alleppey was magical. The room was spotless, AC was cool, and waking up to sunrise over the lake was unbelievable.", location: "Bengaluru", date: "1 week ago" }
    ],
    metaTitle: "Luxury Overnight Houseboat Stay Alappuzha | Phoenix Cruise",
    metaDesc: "Book an overnight luxury houseboat stay in Alappuzha with Phoenix Cruise. Air-conditioned bedrooms, gourmet Kerala meals, and sunset anchorage."
  },
  "sunset-cruise": {
    slug: "sunset-cruise",
    title: "Golden Hour Sunset Special Cruise",
    subtitle: "Romantic evening views, lake breezes & twilight tranquility",
    shortDesc: "Witness Kerala's legendary golden sunsets over tranquil waters aboard our open-deck luxury cruise.",
    overview: "Designed for couples, photographers, and evening travelers, our Golden Hour Sunset Cruise captures the serene magic of dusk over Lake Vembanad. Enjoy refreshing tender coconut water, gourmet snacks, and soothing melodies as the sky turns shades of crimson and violet over the palm trees.",
    image: "https://i.ibb.co/krcscFQ/image.png",
    bannerImage: "https://i.ibb.co/krcscFQ/image.png",
    tags: ["Sunset Special", "Golden Hour Views", "Couples & Photography", "Snacks & Drinks"],
    duration: "3 Hours (3:30 PM – 6:30 PM)",
    capacity: "2 to 25 Guests",
    timing: "Daily Evening Departure",
    highlights: [
      "Prime positioning on Lake Vembanad for unobstructed sunset views",
      "Chilled welcome coolers, fresh fruit platters, and hot tea",
      "Open-air upper deck with 360-degree photography angles",
      "Peaceful ambient music and relaxing lounge seating"
    ],
    itinerary: [
      { time: "03:30 PM", title: "Afternoon Boarding", desc: "Welcome aboard with fresh tropical coolers as we cast off into the lake." },
      { time: "04:30 PM", title: "Lagoon Exploration", desc: "Navigate calm waters bordered by traditional wooden canoes and lush flora." },
      { time: "05:30 PM", title: "Golden Sunset Hour", desc: "Engine throttles down to drift gently during peak golden light." },
      { time: "06:30 PM", title: "Twilight Return", desc: "Return to jetty illuminated by warm deck lights." }
    ],
    faqs: [
      { q: "Is sunset guaranteed during the cruise?", a: "While weather conditions vary, our captains position the boat in prime open waters for optimum evening sky views every day." }
    ],
    relatedSlugs: ["day-cruise", "kerala-dining"],
    reviews: [
      { author: "Siddharth V.", rating: 5, text: "The sunset cruise was mesmerizing. The views from the upper deck were breathtaking and the tea and snacks were delicious.", location: "Trivandrum", date: "4 days ago" }
    ],
    metaTitle: "Sunset Houseboat Cruise in Alappuzha | Phoenix Cruise",
    metaDesc: "Experience the magic of Kerala's golden hour on a sunset cruise with Phoenix Cruise Alappuzha. Refreshments, open deck seating, and scenic views."
  },
  "executive-suite": {
    slug: "executive-suite",
    title: "Executive Luxury Suite Experience",
    subtitle: "Glass-wall bedroom suites, Jacuzzi options & private butler service",
    shortDesc: "Indulge in ultra-luxury backwater living with private glass-wall suites and personalized hospitality.",
    overview: "For travelers seeking uncompromised luxury, our Executive Suite package transforms the backwaters into your private 5-star floating villa. Features floor-to-ceiling glass walls, premium wooden paneling, private butler service, custom multi-course dining, and exclusive upper deck lounges.",
    image: "https://i.ibb.co/gbts7Rrj/image.png",
    bannerImage: "https://i.ibb.co/gbts7Rrj/image.png",
    tags: ["Executive Suite", "Private Butler", "Glass-Wall Bedrooms", "Ultra Luxury"],
    duration: "Full Day / Overnight Flexible",
    capacity: "2 to 6 VIP Guests",
    timing: "Custom Arrival & Departure Times",
    highlights: [
      "Floor-to-ceiling panoramic glass windows in air-conditioned suites",
      "Dedicated personal butler and private executive chef onboard",
      "Customized multi-course seafood menu tailored to guest preferences",
      "Premium linens, luxury toiletries, and private upper deck access"
    ],
    itinerary: [
      { time: "12:00 PM", title: "VIP Transfer & Welcome", desc: "Private escort to houseboat with signature mocktails and flower garland welcome." },
      { time: "01:30 PM", title: "Chef's Tasting Menu", desc: "Gourmet multi-course seafood or vegetarian lunch served by personal butler." },
      { time: "05:00 PM", title: "Private Lounge Sunset", desc: "Upper deck cocktail hour with high tea and artisanal snacks." },
      { time: "08:30 PM", title: "Starlight Fine Dining", desc: "Exquisite 5-course dinner in your glass-walled dining room." }
    ],
    faqs: [
      { q: "Can we request specific food items or dietary needs?", a: "Yes. Our executive chef curates your menu prior to sailing to accommodate any dietary preference or special culinary request." }
    ],
    relatedSlugs: ["overnight-stay", "kerala-dining"],
    reviews: [
      { author: "Vikram & Sunita", rating: 5, text: "Unbelievable luxury! Waking up inside a glass bedroom surrounded by backwater lily pads is something we will cherish forever.", location: "Mumbai", date: "2 weeks ago" }
    ],
    metaTitle: "Executive Houseboat Luxury Suite Alappuzha | Phoenix Cruise",
    metaDesc: "Experience ultra-luxury backwater cruises in Alappuzha with Phoenix Cruise Executive Suites. Glass-walled rooms, private butler, and custom dining."
  },
  "kerala-dining": {
    slug: "kerala-dining",
    title: "Kerala Backwater Culinary Experience",
    subtitle: "Karimeen Pollichathu, fresh tiger prawns & authentic toddy shop flavors",
    shortDesc: "Savor authentic Kerala delicacies prepared fresh on board using locally sourced catch and organic spices.",
    overview: "Food is an integral part of the Phoenix Cruise story. Our onboard culinary team prepares authentic Malabar and Travancore recipes right on the boat as you sail. Savor Pearl Spot (Karimeen) marinated in red spices and grilled in banana leaves, fresh tiger prawns, duck roast, aromatic Kuttanad rice, and traditional payasam.",
    image: "https://i.ibb.co/7Jg6tygh/image.png",
    bannerImage: "https://i.ibb.co/7Jg6tygh/image.png",
    tags: ["Kerala Cuisine", "Fresh Seafood", "Karimeen Pollichathu", "Onboard Chef"],
    duration: "Available with all Cruise Packages",
    capacity: "All Cruise Guests",
    timing: "Breakfast, Lunch & Dinner Options",
    highlights: [
      "Authentic Karimeen Pollichathu (Pearlspot fish in banana leaf wrap)",
      "Fresh Kuttanad duck curry and spicy backwater tiger prawns",
      "Vegetarian sadhya with over 12 traditional side dishes on banana leaf",
      "Live cooking demonstrations by experienced Kerala chefs"
    ],
    itinerary: [
      { time: "Onboard", title: "Fresh Market Catch", desc: "Chefs select live catch directly from local backwater fisherman nets daily." },
      { time: "Onboard", title: "Banana Leaf Service", desc: "Meals served on fresh banana leaves in traditional Kerala style." }
    ],
    faqs: [
      { q: "Are vegetarian and Jain meals available?", a: "Yes! We offer rich vegetarian SADHYA spreads cooked with pure coconut oil and fresh local vegetables." }
    ],
    relatedSlugs: ["day-cruise", "executive-suite"],
    reviews: [
      { author: "Chef Rahul K.", rating: 5, text: "As a chef myself, I was amazed by the authenticity of the Karimeen Pollichathu. Absolutely world-class food on the water!", location: "New Delhi", date: "1 week ago" }
    ],
    metaTitle: "Onboard Kerala Houseboat Dining | Phoenix Cruise Alappuzha",
    metaDesc: "Indulge in authentic Kerala seafood, Karimeen Pollichathu, and traditional SADHYA meals onboard Phoenix Cruise in Alappuzha."
  },
  "corporate-event": {
    slug: "corporate-event",
    title: "Corporate Outings & Event Charters",
    subtitle: "Group celebrations, wedding receptions & executive meetings",
    shortDesc: "Host unforgettable corporate meets, family reunions, and celebrations on our large-capacity cruise vessels.",
    overview: "Transform your corporate retreat or special occasion into an extraordinary event aboard Phoenix Cruise. Our multi-deck vessels accommodate up to 100 guests with sound systems, conference seating, open-air banquet spaces, custom catering, and dedicated event coordinators.",
    image: "https://i.ibb.co/krcscFQ/image.png",
    bannerImage: "https://i.ibb.co/krcscFQ/image.png",
    tags: ["Corporate Events", "Group Charters", "Weddings & Parties", "Custom Catering"],
    duration: "Half-day / Full-day Custom Charters",
    capacity: "Up to 100 Guests",
    timing: "Flexible Event Scheduling",
    highlights: [
      "Dual-deck venue space with air-conditioned indoor & open outdoor seating",
      "Professional audio-visual setup and PA microphone systems",
      "Custom buffet lines and live grill counters on the water",
      "Dedicated event coordinator to manage logistics and boarding"
    ],
    itinerary: [
      { time: "Custom", title: "Event Welcome", desc: "Red carpet boarding, welcome drinks, and background acoustic music." },
      { time: "Custom", title: "Cruise & Conference", desc: "Scenic navigation while conducting team meetings or social celebrations." },
      { time: "Custom", title: "Grand Banquet", desc: "Lavish multi-cuisine buffet served on the upper deck." }
    ],
    faqs: [
      { q: "How many guests can be accommodated for private events?", a: "Our fleet includes single-bedroom intimate boats up to multi-deck conference vessels capable of hosting up to 100 guests comfortably." }
    ],
    relatedSlugs: ["day-cruise", "kerala-dining"],
    reviews: [
      { author: "TechCorp India Team", rating: 5, text: "We hosted our annual leadership team retreat on Phoenix Cruise. The setup, sound system, food, and hospitality exceeded all expectations!", location: "Kochi", date: "3 weeks ago" }
    ],
    metaTitle: "Corporate Houseboat Event Charters Alappuzha | Phoenix Cruise",
    metaDesc: "Host corporate meets, group outings, and celebrations on Phoenix Cruise houseboats in Alappuzha. Spacious vessels, AV systems, and custom catering."
  }
};

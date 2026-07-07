// Pre-generated high-quality cultural travel guides for popular Indian destinations.
// This ensures that the application is fully operational and premium even when the Gemini API key daily quota is exceeded.

export interface FallbackGuide {
  destination: string;
  hiddenGems: Array<{
    name: string;
    description: string;
    estimatedCost: string;
    bestTime: string;
  }>;
  localFood: Array<{
    dishName: string;
    description: string;
    famousRestaurants: string[];
    approxPrice: string;
  }>;
  localCulture: {
    customs: string;
    dressCode: string;
    greetingStyle: string;
    thingsToAvoid: string[];
  };
  oneDayItinerary: {
    morning: { title: string; activity: string };
    afternoon: { title: string; activity: string };
    evening: { title: string; activity: string };
  };
  estimatedBudget: {
    breakdown: Array<{ item: string; cost: string }>;
    totalCost: string;
    summary: string;
  };
  storyCorner: {
    title: string;
    story: string;
  };
  travelTips: string[];
  weather: {
    temperature: string;
    bestSeason: string;
    airQuality: string;
  };
  emergencyNumbers: {
    police: string;
    ambulance: string;
    hospital: string;
    hospitalPhone: string;
    touristHelpline: string;
  };
  aiExplanation: string;
  matchScore: number;
}

const FALLBACKS_EN: Record<string, FallbackGuide> = {
  varanasi: {
    destination: "Varanasi, Uttar Pradesh",
    hiddenGems: [
      {
        name: "Lalita Ghat & Nepali Temple",
        description: "A gorgeous wooden temple showcasing intricate Nepalese wooden architecture and wood carvings, overlooking the sacred Ganga.",
        estimatedCost: "₹30 INR (Entry fee)",
        bestTime: "07:00 AM - 09:00 AM"
      },
      {
        name: "Sarnath Deer Park & Ruins",
        description: "The historical site where Lord Buddha delivered his first sermon. Extremely peaceful gardens, ancient stupas, and a rich museum.",
        estimatedCost: "₹50 INR (Indian national entry)",
        bestTime: "08:00 AM - 11:00 AM"
      },
      {
        name: "Lolark Kund",
        description: "An ancient, deep stepwell dedicated to the Sun God, hidden deep in the narrow alleys near Bhadaini. Very mystical atmosphere.",
        estimatedCost: "Free",
        bestTime: "12:00 PM - 02:00 PM"
      }
    ],
    localFood: [
      {
        dishName: "Kachori Sabzi & Jalebi",
        description: "Flaky kachoris stuffed with lentils, served with a spicy potato gravy and followed by hot, syrup-dripping fresh jalebis.",
        famousRestaurants: ["Ram Bhandar (Chowk)", "Chachi Ki Kachori (Lanka)"],
        approxPrice: "₹50 - ₹80 per plate"
      },
      {
        dishName: "Tamatar Chaat",
        description: "A legendary local street food specialty made of mashed potatoes and tomatoes, spiked with spices, coriander, ghee, and sweet sugar syrup.",
        famousRestaurants: ["Kashi Chat Bhandar", "Deena Chat Bhandar"],
        approxPrice: "₹60 - ₹90 per plate"
      },
      {
        dishName: "Banarasi Thandai & Lassi",
        description: "Thick, creamy yogurt lassi served in traditional clay pots (kulhad), topped with thick rabri, saffron, and nuts.",
        famousRestaurants: ["Blue Lassi Shop", "Pahalwan Lassi"],
        approxPrice: "₹80 - ₹120 per kulhad"
      }
    ],
    localCulture: {
      customs: "Locals start their day with a holy dip in the Ganges. Offering clay lamps (diyas) to the river in the evening is deeply respected.",
      dressCode: "Modest attire is required. Shoulders and knees must be covered inside temples. Remove footwear before entering any sacred place.",
      greetingStyle: "Say 'Har Har Mahadev' or 'Namaste' with folded hands to show respect to locals and sadhus.",
      thingsToAvoid: [
        "Do not photograph funerals or cremation rituals at Manikarnika Ghat out of respect for the deceased.",
        "Avoid hiring unverified boatmen or guides; always negotiate prices beforehand.",
        "Do not consume street food or tap water from unhygienic stalls."
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "Sunrise Boat Ride & Ghats Exploration",
        activity: "Begin at 5:30 AM with a peaceful rowboat ride along Dashashwamedh and Assi Ghats to watch the golden sunrise, followed by Subah-e-Banaras classical music and yoga."
      },
      afternoon: {
        title: "Mystical Alleys & Sarnath Excursion",
        activity: "Wander through the vibrant, narrow labyrinthine streets of the old city. Have hot Kachori Sabzi for lunch, then take an auto-rickshaw to Sarnath to explore ancient Buddhist ruins."
      },
      evening: {
        title: "Ganga Aarti Ritual Experience",
        activity: "Return to Dashashwamedh Ghat by 6:00 PM. Secure a spot on a boat or the ghat steps to witness the grand, hypnotic evening Ganga Aarti lamps ceremony."
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "Morning Shared Boat Ride", cost: "₹250" },
        { item: "All Meals & Street Food snacks", cost: "₹450" },
        { item: "Sarnath Auto Transport (Roundtrip)", cost: "₹400" },
        { item: "Ghats Walking Tour & Sarnath Entry", cost: "₹100" },
        { item: "Emergency Reserve & Banarasi Souvenirs", cost: "₹300" }
      ],
      totalCost: "₹1,500",
      summary: "This budget enables a culturally rich, authentic Varanasi experience relying on local shared transport, iconic street food joints, and free or low-cost monument entries."
    },
    storyCorner: {
      title: "The Legend of the Eternal City",
      story: "Varanasi, or Kashi, is widely considered the oldest living city in the world. According to legend, the city was founded by Lord Shiva himself over 5,000 years ago. It rests on the tip of Shiva's trident, making it structurally distinct from the rest of the mortal earth. When the holy river Ganga descended from heaven to Earth, its heavy torrent threatened to destroy humanity. Lord Shiva caught the mighty river in his matted hair (jata) to cushion her fall, releasing her in gentle, life-giving streams. Today, the northward flow of the river at Varanasi symbolizes the cycle of life moving towards liberation (Moksha)."
    },
    travelTips: [
      "Rise by 5:00 AM to experience Varanasi's most spiritual and serene hours before the crowds and heat set in.",
      "Always negotiate boat ride prices before stepping onto any boat; shared boat rates are much cheaper than private ones.",
      "Wear comfortable, slip-on walking shoes because you will cover several kilometers traversing the steep ghat stairs and alleyways.",
      "Drink only bottled, sealed water and avoid unpeeled fruits from street vendors to prevent stomach upsets.",
      "Ignore persistent priests or touts offering special VIP darsan packages at major temples; use public queues instead."
    ],
    weather: {
      temperature: "31°C",
      bestSeason: "October to March",
      airQuality: "Moderate"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "Sir Sunderlal Hospital (BHU)",
      hospitalPhone: "0542-2307500",
      touristHelpline: "1363"
    },
    aiExplanation: "Varanasi perfectly matches your spiritual and cultural interests. This curated itinerary optimizes local transport and historical street food places to strictly respect your daily budget target while delivering an unforgettable experience.",
    matchScore: 98
  },
  jaipur: {
    destination: "Jaipur, Rajasthan",
    hiddenGems: [
      {
        name: "Panna Meena Ka Kund",
        description: "An incredibly geometric 16th-century stepwell near Amer Fort, famous for its symmetrical criss-cross steps.",
        estimatedCost: "Free",
        bestTime: "07:30 AM - 09:30 AM"
      },
      {
        name: "Galta Ji (Monkey Temple)",
        description: "A unique, historic Hindu pilgrimage site built within a mountain pass, featuring natural freshwater springs and temples.",
        estimatedCost: "Free (Donations appreciated)",
        bestTime: "04:00 PM - 06:00 PM"
      },
      {
        name: "Anokhi Museum of Hand Printing",
        description: "Located in a beautifully restored haveli, dedicated to preserving the traditional Rajasthani art of block printing.",
        estimatedCost: "₹80 INR",
        bestTime: "10:30 AM - 01:00 PM"
      }
    ],
    localFood: [
      {
        dishName: "Dal Baati Churma",
        description: "The quintessential Rajasthani dish featuring hard wheat rolls (baati) dipped in pure ghee, served with mixed lentil curry (dal) and sweet crumbled wheat dessert (churma).",
        famousRestaurants: ["Laxmi Mishthan Bhandar (LMB)", "Chokhi Dhani"],
        approxPrice: "₹150 - ₹350 per thali"
      },
      {
        dishName: "Pyaaz Kachori & Mirchi Bada",
        description: "A spicy, crispy deep-fried onion pastry, served with sweet tamarind chutney and spicy mint chutney.",
        famousRestaurants: ["Rawat Mishthan Bhandar", "Sodhani Sweets"],
        approxPrice: "₹40 - ₹60 per piece"
      },
      {
        dishName: "Ghevar",
        description: "A disc-shaped honeycomb sweet cake made of flour and ghee, soaked in sugar syrup, and topped with rich rabri and sliced almonds.",
        famousRestaurants: ["LMB", "Rawat Sweets"],
        approxPrice: "₹80 - ₹150 per portion"
      }
    ],
    localCulture: {
      customs: "Jaipur is deeply rooted in Rajput royalty and hospitality ('Padharo Mhare Des'). Greetings are accompanied by folding hands and saying 'Khamma Ghani'.",
      dressCode: "Dress conservatively when visiting historical forts and temples. Loose-fitting cotton clothes are recommended due to the dry desert heat.",
      greetingStyle: "Say 'Khamma Ghani' or 'Namaste' with a warm smile to instantly connect with local artisans.",
      thingsToAvoid: [
        "Avoid buying precious gemstones from unauthorized street side vendors; Jaipur is famous for gems but scam artists are common.",
        "Do not engage with aggressive street performers or snake charmers without agreeing on a tip amount beforehand.",
        "Avoid visiting open monuments during peak afternoon hours (1:00 PM - 3:30 PM) when the desert sun is extremely harsh."
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "Amer Fort & Symmetrical Stepwell",
        activity: "Start at 8:00 AM to beat the crowd at the majestic Amer Fort, marveling at the Sheesh Mahal (Mirror Palace). Next, visit the nearby geometric stepwell Panna Meena Ka Kund."
      },
      afternoon: {
        title: "Pink City Palace & Hawa Mahal",
        activity: "Head to the walled Pink City. Marvel at the five-story honeycomb facade of Hawa Mahal (Palace of Winds), then enjoy a rich Rajasthani Thali for lunch. Explore City Palace afterward."
      },
      evening: {
        title: "Galta Ji Temple Sunset & Shopping",
        activity: "Visit the serene monkey temple Galta Ji as the sun goes down over the Aravali hills. Later, shop for vibrant block-print linens and blue pottery in Johri Bazaar."
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "Amer Fort & City Palace entry fees", cost: "₹350" },
        { item: "Dal Baati Churma lunch & Rawat sweets", cost: "₹500" },
        { item: "E-rickshaw / Auto-rickshaw transport", cost: "₹400" },
        { item: "Galta Ji local guide & tea snacks", cost: "₹150" },
        { item: "Souvenir shopping allowance", cost: "₹400" }
      ],
      totalCost: "₹1,800",
      summary: "This budget covers the main royal highlights of the Pink City, using economical rickshaws, eating at world-famous street-side sweetshops, and securing budget fort entries."
    },
    storyCorner: {
      title: "The Tale of the Royal Pink Welcome",
      story: "Jaipur was founded in 1727 by Maharaja Sawai Jai Singh II, a visionary king and astronomer who designed the city in accordance with Vastu Shastra (Vedic planning principles). However, it wasn't always pink! In 1876, the Prince of Wales (later King Edward VII) visited India. To impress the British royal family and showcase the supreme hospitality of Rajasthan, Maharaja Ram Singh ordered the entire city to be painted in a terracotta-pink hue, which traditionally symbolizes warmth and welcome. The Maharaja's favorite queen loved the color so much that she convinced him to pass a law making it mandatory for all buildings in the old city to remain pink. Over 150 years later, that royal pink law remains in effect."
    },
    travelTips: [
      "Purchase a 'Composite Ticket' from the government ticket booth to save up to 50% on entries to Amer Fort, Albert Hall, Hawa Mahal, and Jantar Mantar.",
      "Use government-approved prepaid auto-rickshaws or ride-sharing apps (like Uber/Ola) to prevent fare inflation by private drivers.",
      "When shopping in Bapu Bazaar or Johri Bazaar, always politely bargain; starting at 50% of the initially quoted price is standard.",
      "Hire only government-authorized guides wearing official ID cards at the Amer Fort entrance to get accurate historical facts.",
      "Keep a bottle of electrolyte-rich water with you at all times to stay hydrated under the warm Rajasthani sun."
    ],
    weather: {
      temperature: "33°C",
      bestSeason: "October to March",
      airQuality: "Moderate"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "SMS Hospital Jaipur",
      hospitalPhone: "0141-2560291",
      touristHelpline: "1363"
    },
    aiExplanation: "Jaipur is an architectural and cultural marvel. This itinerary brings you straight to the historical heart of the royal capital, keeping entry tickets and culinary highlights well within your specified budget.",
    matchScore: 96
  },
  munnar: {
    destination: "Munnar, Kerala",
    hiddenGems: [
      {
        name: "Lockhart Gap Viewpoint",
        description: "A breathtaking, less-crowded mountain pass offering panoramic views of winding roads, deep blue valleys, and silver mist.",
        estimatedCost: "Free",
        bestTime: "06:00 AM - 08:00 AM"
      },
      {
        name: "Attukad Waterfalls",
        description: "A gorgeous waterfall nestled amidst dense pine forests and rolling tea hills. Reached via a narrow, scenic wooden bridge.",
        estimatedCost: "Free",
        bestTime: "09:00 AM - 11:30 AM"
      },
      {
        name: "Kolukkumalai Tea Estate",
        description: "The highest tea plantation in the world, producing tea using traditional century-old orthodox methods. Stunning sunrise views.",
        estimatedCost: "₹250 INR (Jeep ride extra)",
        bestTime: "05:00 AM - 08:00 AM"
      }
    ],
    localFood: [
      {
        dishName: "Kerala Parotta with Veg/Egg Kurma",
        description: "Multi-layered, flaky flatbread made from refined flour, beaten into thin layers and griddled, served with a spiced coconut milk gravy.",
        famousRestaurants: ["Saravana Bhavan", "Rapsy Restaurant"],
        approxPrice: "₹70 - ₹120 per meal"
      },
      {
        dishName: "Puttu and Kadala Curry",
        description: "Steamed cylinders of ground rice and grated coconut, served with a spicy black chickpeas curry cooked in Keralite spices.",
        famousRestaurants: ["Hotel Gurubhavan", "Sree Mahaveer Ji"],
        approxPrice: "₹50 - ₹90 per plate"
      },
      {
        dishName: "Fresh Munnar Spiced Tea & Banana Fritters",
        description: "Freshly brewed tea with cardamom, ginger, and cloves, paired with sweet, crispy ripe banana fritters (Pazham Pori).",
        famousRestaurants: ["Tea Valley Cafe", "Local roadside tea stalls"],
        approxPrice: "₹30 - ₹50 per portion"
      }
    ],
    localCulture: {
      customs: "Deeply connected with nature and agriculture. Traditional Keralite greetings include folding hands and saying 'Namaskaram'. Respect the conservation of wildlife.",
      dressCode: "Light warm layers (cardigans, light jackets) are needed as temperatures drop in the evening. Wear sturdy hiking shoes for tea garden walks.",
      greetingStyle: "Say 'Namaskaram' to the warm tea estate workers to show appreciation for their manual craft.",
      thingsToAvoid: [
        "Do not pluck tea leaves or trespass deep into private estate lines without permission from the supervisors.",
        "Avoid littering in tea gardens or mountain streams; Munnar is an ecologically fragile zone with high biodiversity.",
        "Do not travel on remote forest roads after 7:00 PM due to active wild elephant crossings."
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "Kolukkumalai Golden Sunrise & Tea Gardens",
        activity: "Wake up early at 4:30 AM for a 4WD Jeep safari to the peak of Kolukkumalai to watch a surreal sunrise above the clouds. Walk through tea plantation lines afterward."
      },
      afternoon: {
        title: "Eravikulam National Park (Nilgiri Tahr)",
        activity: "Visit the lush Eravikulam National Park. Spot the endangered Nilgiri Tahr (mountain goat) grazing on green slopes. Have a traditional Keralite banana leaf lunch."
      },
      evening: {
        title: "Scenic Waterfalls & Local Spice Shopping",
        activity: "Stop by the dramatic Attukad Waterfalls for photographs. Head to Munnar Town to purchase premium green tea, pure cardamom, cinnamon, and fresh homemade chocolates."
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "Eravikulam Park Ticket & Forest Bus", cost: "₹200" },
        { item: "Traditional Keralite banana leaf lunch", cost: "₹180" },
        { item: "Shared local jeep transport & auto", cost: "₹500" },
        { item: "Fresh cardamom tea & local snacks", cost: "₹100" },
        { item: "Fresh mountain spices & chocolates", cost: "₹300" }
      ],
      totalCost: "₹1,280",
      summary: "This budget lets you witness Munnar's pristine natural beauty, spot rare mountain wildlife, and taste local spices without expensive private cabs."
    },
    storyCorner: {
      title: "The Whispering Tea Hills of Munnar",
      story: "The name 'Munnar' translates to 'three rivers' in Malayalam, indicating the scenic confluence of the Mudhirapuzha, Nallathanni, and Kundaly mountain streams. For centuries, Munnar was a wild, untouched forest inhabited by local tribal communities. In the late 19th century, a British resident named John Daniel Munro visited the hills and fell in love with their beauty. Realizing the soil and cool climate were perfect for tea cultivation, he leased the land from the royal family of Travancore. Thousands of workers migrated from Tamil Nadu and Kerala to transform the rugged slopes into the manicured, emerald-green carpet we see today. Munnar is also home to the legendary Neelakurinji flower, which blooms only once every twelve years, painting the entire mountain range in shades of dreamlike blue."
    },
    travelTips: [
      "Book your Eravikulam National Park tickets online in advance to avoid long queues at the forest entrance booth.",
      "Keep a small umbrella or light rain jacket in your bag, as mountain weather is highly unpredictable and can drizzle anytime.",
      "Purchase spices and tea only from government-authorized co-operative outlets (like Kanan Devan Hills outlets) to ensure top quality.",
      "Hire a local shared jeep for Kolukkumalai; normal sedans or hatchbacks cannot handle the steep, rugged, unpaved off-road terrain.",
      "Carry cash, as digital network signals can be weak in the deep valleys and high-altitude tea estates."
    ],
    weather: {
      temperature: "22°C",
      bestSeason: "September to May",
      airQuality: "Excellent"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "Tata General Hospital Munnar",
      hospitalPhone: "04865-230263",
      touristHelpline: "1363"
    },
    aiExplanation: "Munnar is the ultimate retreat for nature and tea lovers. This custom itinerary targets scenic views, organic spice plantations, and natural waterfalls that represent the best of Munnar within a relaxed budget.",
    matchScore: 97
  },
  goa: {
    destination: "Goa, India",
    hiddenGems: [
      {
        name: "Fontainhas Latin Quarter",
        description: "A beautiful, old neighborhood in Panaji characterized by narrow streets, bright yellow, blue, and red Portuguese-era colonial houses.",
        estimatedCost: "Free",
        bestTime: "08:00 AM - 10:30 AM"
      },
      {
        name: "Harvalem Waterfall & Caves",
        description: "A scenic waterfall cascading into a deep pool, located next to rock-cut Buddhist caves dating back to the 6th century.",
        estimatedCost: "Free",
        bestTime: "02:00 PM - 04:00 PM"
      },
      {
        name: "Netravali Bubbling Lake",
        description: "A mystical temple pond deep in South Goa where clean water continuously bubbles up from the ground due to natural underground methane gas.",
        estimatedCost: "₹20 INR",
        bestTime: "11:00 AM - 01:30 PM"
      }
    ],
    localFood: [
      {
        dishName: "Goan Fish Curry Rice",
        description: "Fresh fish marinated in local spices, cooked in a rich, tangy gravy made from coconut milk and local sour kokum, served with red rice.",
        famousRestaurants: ["Star Light (Arpora)", "Ritz Classic (Panaji)"],
        approxPrice: "₹180 - ₹280 per thali"
      },
      {
        dishName: "Pork / Chicken Vindaloo",
        description: "A fiery, heavily spiced local Goan Portuguese dish marinated in wine vinegar, garlic, ginger, and hot Kashmiri chilies.",
        famousRestaurants: ["Mum's Kitchen", "Viva Panjim"],
        approxPrice: "₹220 - ₹380 per plate"
      },
      {
        dishName: "Bebinca",
        description: "The traditional multi-layered Goan dessert made from coconut milk, ghee, sugar, flour, and egg yolk, baked slowly layer by layer.",
        famousRestaurants: ["Viva Panjim", "Confeitaria 31 de Janeiro"],
        approxPrice: "₹80 - ₹120 per portion"
      }
    ],
    localCulture: {
      customs: "A harmonious blend of Indian and Portuguese cultures. Locals practice 'Susegad'—a laid-back, relaxed, and content attitude towards life.",
      dressCode: "Beachwear is appropriate on beaches, but dress modestly (shoulders covered, no shorts) when visiting churches and temples.",
      greetingStyle: "Say 'Namaste' or a simple 'Hello' to connect with friendly Goan tavern owners.",
      thingsToAvoid: [
        "Do not wear bikinis or swimsuits outside of the immediate beach areas; walking on streets in beachwear is legally prohibited.",
        "Avoid taking photos inside active church sanctuaries or during religious services out of respect.",
        "Do not drink alcohol on public beaches; use licensed beach shacks and bars instead to avoid heavy legal fines."
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "Colonial Fontainhas Walk & Bakery Breakfast",
        activity: "At 8:30 AM, stroll through the vibrant Portuguese-style streets of Fontainhas. Stop at a century-old bakery for warm Poi bread and sweet Bebinca cake."
      },
      afternoon: {
        title: "Old Goa Historic Churches & Spice Plantation",
        activity: "Visit the Basilica of Bom Jesus, holding the remains of St. Francis Xavier. Have an authentic Goan Fish Curry lunch, then take a guided tour of a lush spice plantation."
      },
      evening: {
        title: "Tranquil Beach Sunset & Seafood Dinner",
        activity: "Head to a serene, less-crowded beach (like Utorda or Mandrem) to watch a beautiful sunset. Enjoy dinner with candlelights and acoustic music at a beach shack."
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "Two-wheeler Scooter Rental & Petrol", cost: "₹450" },
        { item: "Tangy Goan Fish Curry Thali lunch", cost: "₹250" },
        { item: "Old Goa Church entry & Fontainhas walk", cost: "₹50" },
        { item: "Spice Plantation entry & buffet lunch", cost: "₹500" },
        { item: "Beach shack sunset mocktail & dinner", cost: "₹350" }
      ],
      totalCost: "₹1,600",
      summary: "This budget focuses on the cultural, historic, and culinary soul of Goa, utilizing a local scooter rental and dining at authentic Goan taverns rather than expensive tourist resorts."
    },
    storyCorner: {
      title: "The Heritage of the Golden Goan Era",
      story: "For over 450 years, Goa was ruled by the Portuguese, making it culturally distinct from the rest of India, which was under British rule. Panaji was one of the first cities in Asia to have a modern municipal planning grid. When Portuguese explorers first arrived in the 16th century, they brought with them potatoes, tomatoes, cashew nuts, and the hot chili pepper, which completely revolutionized Goan and Indian cuisine. They also built grand churches using local red laterite stones plastered with pure white shell-lime to protect them from the heavy monsoon rains. This unique fusion of East and West created 'Susegad'—the quiet, artistic, and relaxed philosophy of living in harmony with the sea, the music, and the coconut palms."
    },
    travelTips: [
      "Rent a geared motorcycle or automatic scooter (active scooty) for ₹350-₹500 per day; it is the most flexible and cheapest way to travel around Goa.",
      "Always wear a helmet and carry your driving license; local traffic police actively check documents of tourists riding rented vehicles.",
      "Stay in South Goa for a peaceful, cultural, and scenic experience; choose North Goa for active nightlife, water sports, and markets.",
      "Visit spice farms in Ponda for an immersive educational tour about local spices, vanilla, cinnamon, and traditional lunch buffet.",
      "Bargain politely at flea markets like Anjuna Wednesday Market or Mapusa Market; vendors usually quote double the actual price."
    ],
    weather: {
      temperature: "30°C",
      bestSeason: "November to February",
      airQuality: "Good"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "Goa Medical College Hospital",
      hospitalPhone: "0832-2458727",
      touristHelpline: "1363"
    },
    aiExplanation: "Goa is much more than just crowded commercial beaches. This itinerary is specifically designed to highlight Portuguese architecture, historical churches, and traditional Goan food within your specified budget limit.",
    matchScore: 95
  },
  hampi: {
    destination: "Hampi, Karnataka",
    hiddenGems: [
      {
        name: "Anegundi Village & Monkey Temple",
        description: "An ancient, highly scenic settlement across the Tungabhadra River, believed to be the mythical kingdom of Kishkindha. Stunning rocky views.",
        estimatedCost: "Free (Coracle boat ferry ₹50)",
        bestTime: "06:30 AM - 09:00 AM"
      },
      {
        name: "Vittala Temple King's Balance",
        description: "An ornate, massive 5-meter tall stone frame where the ancient kings were weighed against precious gold and gems on festive occasions.",
        estimatedCost: "₹40 INR (Composite Hampi entry)",
        bestTime: "03:30 PM - 05:00 PM"
      },
      {
        name: "Lotus Mahal & Elephant Stables",
        description: "A beautiful, structurally intact two-story palace displaying a unique fusion of Indo-Islamic architecture with arches shaped like lotus petals.",
        estimatedCost: "₹40 INR (Composite ticket)",
        bestTime: "09:30 AM - 12:00 PM"
      }
    ],
    localFood: [
      {
        dishName: "North Karnataka Jolada Rotti Oota",
        description: "A traditional, healthy meal featuring soft sorghum flatbreads (Jolada rotti) served with spicy brinjal curry, pulses, and homemade churned butter.",
        famousRestaurants: ["Mango Tree Restaurant", "Hampi Paradise"],
        approxPrice: "₹100 - ₹180 per meal"
      },
      {
        dishName: "Bisi Bele Bath",
        description: "A delicious, tangy, and hot rice dish cooked with lentils, mixed vegetables, ghee, tamarind, and a unique house-ground spice blend.",
        famousRestaurants: ["New Shanthi Sagar", "Local temple stalls"],
        approxPrice: "₹50 - ₹85 per plate"
      },
      {
        dishName: "Maddur Vada & Filter Coffee",
        description: "A crispy, savory fried fritter made of rice flour, semolina, onions, curry leaves, and ginger, paired with frothy hot south Indian filter coffee.",
        famousRestaurants: ["Roadside tea stalls near Hampi Bazaar", "Mowgli Cafe"],
        approxPrice: "₹40 - ₹60 per portion"
      }
    ],
    localCulture: {
      customs: "Hampi is a sacred UNESCO world heritage site and an active place of worship. Respect ancient ruins, do not climb on protected historic stone pillars.",
      dressCode: "Modest, comfortable dress is necessary. Cover shoulders and knees when entering active temples like Virupaksha Temple. Remove shoes outside.",
      greetingStyle: "Say 'Namaste' or 'Namaskara' in Kannada to show respect to local guides and temple priests.",
      thingsToAvoid: [
        "Do not touch, lean on, or climb the delicate, carvings-covered stone pillars of the ancient ruins out of respect.",
        "Avoid swimming in the Tungabhadra River; underwater currents are extremely strong and rocky whirlpools are dangerous.",
        "Do not consume non-vegetarian food or alcohol in the immediate vicinity of the sacred Hampi Bazaar or Virupaksha temple."
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "Sunrise at Matanga Hill & Virupaksha Temple",
        activity: "Climb Matanga Hill by 5:30 AM to catch a breathtaking sunrise over the boulder-strewn ruins. Next, visit the active, historic 7th-century Virupaksha Temple."
      },
      afternoon: {
        title: "Royal Enclosure, Lotus Mahal & Lunch",
        activity: "Explore the Royal Enclosure, checking the massive Queen's Bath and Stepped Tank. Enjoy a North Karnataka Jolada Rotti lunch, then visit the beautiful Lotus Mahal."
      },
      evening: {
        title: "Vittala Temple Stone Chariot & Coracle Ride",
        activity: "Explore the grand Vittala Temple complex to see the iconic Stone Chariot and musical pillars. End your day with a peaceful coracle (circular bamboo boat) ride on the river."
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "ASI Composite Monument Entry ticket", cost: "₹40" },
        { item: "Bicycle rental for the day & locks", cost: "₹150" },
        { item: "North Karnataka Rotti Oota & fresh coconut", cost: "₹280" },
        { item: "Tungabhadra River Coracle boat ride", cost: "₹200" },
        { item: "Local guide fee (shared among group)", cost: "₹400" },
        { item: "Emergency reserve & bottled water", cost: "₹130" }
      ],
      totalCost: "₹1,200",
      summary: "This budget provides an immersive Hampi exploration utilizing a classic local bicycle rental, buying a cheap composite entry pass, and dining on pure-vegetarian local thalis."
    },
    storyCorner: {
      title: "The Mythical Golden City of Vijayanagara",
      story: "Hampi was the grand, wealthy capital of the historic Vijayanagara Empire in the 14th century. It was described by medieval European travelers as one of the largest and richest cities in the world, filled with palaces of gold and gem-encrusted markets. However, Hampi is also deeply sacred in mythology. It is identified as 'Kishkindha'—the monkey kingdom from the Ramayana epic. The unique, boulder-strewn landscape of Hampi is believed to have been formed when the monkey warriors, Sugriva and Hanuman, threw giant boulders at each other during a cosmic duel. The ancient Virupaksha Temple has stood tall for over a thousand years, surviving the tragic fall and destruction of the empire in 1565. Its main sanctum houses a mystical pinhole camera effect, projecting an upside-down shadow of the main temple tower on the wall, showcasing the incredible scientific genius of ancient Indian engineers."
    },
    travelTips: [
      "Rent a bicycle (₹150/day) or a moped scooter (₹450/day) at Hampi Bazaar; this is the best way to traverse the vast 26 sq km archaeological site.",
      "Buy the Hampi Composite Monument Ticket early; the single ticket covers Virupaksha, Lotus Mahal, Elephant Stables, and Vittala Temple.",
      "Wear a wide-brimmed hat, sunglasses, and carry high SPF sunscreen, as Hampi's rocky terrain has virtually no shade and gets extremely hot.",
      "Take a coracle boat ferry across the river to visit the 'Hippie Island' (Anegundi) for a relaxed rural lifestyle and bouldering.",
      "Hire government-authorized guides at the Vittala Temple entrance; they use wooden sticks to tap the famous musical stone pillars."
    ],
    weather: {
      temperature: "34°C",
      bestSeason: "October to February",
      airQuality: "Excellent"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "Government Hospital Hospet",
      hospitalPhone: "08394-220055",
      touristHelpline: "1363"
    },
    aiExplanation: "Hampi is a magnificent open-air museum. This customized itinerary lets you bicycle through history, visiting all royal and sacred ruins while staying highly cost-effective and authentic.",
    matchScore: 98
  },
  udaipur: {
    destination: "Udaipur, Rajasthan",
    hiddenGems: [
      {
        name: "Sajjangarh Monsoon Palace",
        description: "A majestic hilltop palatial residence overlooking the Fateh Sagar Lake, offering incredible sunset views over the Aravali hills.",
        estimatedCost: "₹150 INR (Transport extra)",
        bestTime: "04:30 PM - 06:30 PM"
      },
      {
        name: "Saheliyon-ki-Bari (Courtyard of Maidens)",
        description: "A historic, lush courtyard designed with lotus pools, marble pavilions, and natural water fountains operated entirely by gravity.",
        estimatedCost: "₹50 INR",
        bestTime: "09:00 AM - 11:30 AM"
      },
      {
        name: "Ahar Cenotaphs",
        description: "An impressive, highly architectural archaeological site containing over 250 beautifully carved marble dome cenotaphs of Mewar's royal kings.",
        estimatedCost: "Free",
        bestTime: "07:30 AM - 09:30 AM"
      }
    ],
    localFood: [
      {
        dishName: "Rajasthani Laas Maas / Veg Ker Sangri",
        description: "A spicy, rich mutton curry slow-cooked with hot mathania red chilies and local spices (or traditional desert berry and bean curry for vegetarians).",
        famousRestaurants: ["Ambrai Restaurant", "Upre by 1559 AD"],
        approxPrice: "₹250 - ₹450 per thali"
      },
      {
        dishName: "Kachori & Mirchi Bada",
        description: "Deep-fried, crispy pastries stuffed with spiced lentils and potatoes, served with tangy mint-coriander and sweet date chutney.",
        famousRestaurants: ["Jodhpur Mishthan Bhandar", "Lala Mishthan Bhandar"],
        approxPrice: "₹35 - ₹55 per piece"
      },
      {
        dishName: "Kulhad Coffee & Rabri",
        description: "Thick, hot cardamom-infused milk coffee or rich sweet condensed milk (rabri) served in traditional disposable clay cups.",
        famousRestaurants: ["Fateh Sagar Lake roadside stalls", "Sai Kulhad Coffee"],
        approxPrice: "₹40 - ₹80 per cup"
      }
    ],
    localCulture: {
      customs: "Udaipur is deeply proud of its rich Mewar royal heritage and heroic historical warriors like Maharana Pratap. Greetings are warm ('Namaste' or 'Khammaghani').",
      dressCode: "Respectful conservative attire is expected. Shoulders and knees must be covered inside the active Jagdish Temple and City Palace rooms.",
      greetingStyle: "Say 'Khammaghani' to show high cultural respect to the locals of Udaipur.",
      thingsToAvoid: [
        "Avoid throwing plastic or garbage into Lake Pichola or Fateh Sagar; Udaipur's lakes are its ecological lifeline.",
        "Do not hire non-prepaid taxi drivers at the airport or station; use prepaid booths to avoid price inflation scams.",
        "Avoid swimming in Pichola Lake due to crocodile presence and active deep lake weed currents."
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "City Palace Exploration & Jagdish Temple",
        activity: "Start at 9:00 AM at the grand City Palace, Rajasthan's largest palace complex, exploring the peacock courtyard. Walk next door to visit the 17th-century Jagdish Temple."
      },
      afternoon: {
        title: "Saheliyon-ki-Bari & Lake Pichola Boat Cruise",
        activity: "Explore the fountains of Saheliyon-ki-Bari. Enjoy a traditional Mewari thali for lunch. Later, take a peaceful afternoon boat cruise on the blue waters of Lake Pichola."
      },
      evening: {
        title: "Monsoon Palace Sunset & Bagore-ki-Haveli Dance",
        activity: "Head up to Sajjangarh Monsoon Palace for a breathtaking sunset over the lakes. Return to Bagore-ki-Haveli by 7:00 PM for the spectacular Dharohar Rajasthani folk dance show."
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "City Palace & Saheliyon-ki-Bari entries", cost: "₹300" },
        { item: "Lake Pichola boat ride (Government booth)", cost: "₹250" },
        { item: "Bagore-ki-Haveli Dharohar Folk Dance ticket", cost: "₹150" },
        { item: "Traditional Mewari Lunch & Kulhad coffee", cost: "₹450" },
        { item: "Local auto-rickshaw transport (Shared)", cost: "₹350" },
        { item: "Emergency reserve & drinking water", cost: "₹100" }
      ],
      totalCost: "₹1,600",
      summary: "This budget highlights the romance and royal heritage of Udaipur, prioritizing government boat tickets, public rickshaws, and checking local folk dances."
    },
    storyCorner: {
      title: "The Oasis of the Mewar Dynasty",
      story: "Udaipur, the 'City of Lakes', was founded in 1553 by Maharana Udai Singh II as the new capital of the Mewar Kingdom. According to royal legend, the king was hunting in the Aravali hills when he met a holy sage meditating on a ridge overlooking Lake Pichola. The sage blessed the king and advised him to build his new palace on that exact spot, assuring him that it would be safely surrounded by water and mountain passes, making it virtually impregnable to enemy invasions. The king followed the sage's advice, constructing the massive City Palace and expanding the lake systems. Udaipur became a legendary oasis in the dry desert of Rajasthan, earning the title of 'Venice of the East' for its beautiful floating palaces, romantic lake views, and lush gardens."
    },
    travelTips: [
      "Purchase your Lake Pichola boat ride tickets directly from the government-operated Municipal Corporation jetty near City Palace to save 50% over private hotels.",
      "Book your Sajjangarh Monsoon Palace jeep ride at the hill gate; personal cars are not allowed up the steep, winding ghat road.",
      "Arrive at Bagore-ki-Haveli by 6:15 PM to buy tickets for the Dharohar folk dance show; tickets sell out extremely fast every evening.",
      "Walk through the narrow streets of the old city rather than calling large cabs, as taxis often get stuck in the extremely narrow heritage lanes.",
      "Stay in a lake-facing heritage guesthouse (haveli) in the old city to enjoy stunning sunrise and sunset views directly from your window."
    ],
    weather: {
      temperature: "29°C",
      bestSeason: "September to March",
      airQuality: "Excellent"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "Geetanjali Hospital Udaipur",
      hospitalPhone: "0294-2500000",
      touristHelpline: "1363"
    },
    aiExplanation: "Udaipur is India's most romantic lake city. This itinerary takes you to the finest Mewar fortresses, lakeside sunsets, and cultural folk dances while maintaining a comfortable, budget-friendly outline.",
    matchScore: 96
  }
};

const FALLBACKS_HI: Record<string, FallbackGuide> = {
  varanasi: {
    destination: "वाराणसी, उत्तर प्रदेश",
    hiddenGems: [
      {
        name: "ललिता घाट और नेपाली मंदिर",
        description: "पवित्र गंगा के तट पर स्थित, जटिल नेपाली वास्तुकला और लकड़ी की नक्काशी को प्रदर्शित करने वाला एक भव्य लकड़ी का मंदिर।",
        estimatedCost: "₹30 INR (प्रवेश शुल्क)",
        bestTime: "07:00 AM - 09:00 AM"
      },
      {
        name: "सारनाथ मृगदाव (हिरण पार्क) और खंडहर",
        description: "वह ऐतिहासिक स्थल जहां भगवान बुद्ध ने अपना पहला उपदेश दिया था। यहाँ शांत उद्यान, प्राचीन स्तूप और एक समृद्ध संग्रहालय है।",
        estimatedCost: "₹50 INR (भारतीय नागरिकों के लिए)",
        bestTime: "08:00 AM - 11:00 AM"
      },
      {
        name: "लोलार्क कुंड",
        description: "भदैनी के पास तंग गलियों में छिपा हुआ सूर्य देव को समर्पित एक प्राचीन और गहरा बावड़ी। यहाँ का वातावरण बहुत ही रहस्यमयी है।",
        estimatedCost: "निःशुल्क",
        bestTime: "12:00 PM - 02:00 PM"
      }
    ],
    localFood: [
      {
        dishName: "कचौड़ी सब्जी और जलेबी",
        description: "दाल से भरी खस्ता कचौड़ी, जिसे तीखे आलू की सब्जी के साथ परोसा जाता है और उसके बाद गरमा-गरम, चाशनी से सराबोर ताजी जलेबी दी जाती है।",
        famousRestaurants: ["राम भंडार (चौक)", "चाची की कचौड़ी (लंका)"],
        approxPrice: "₹50 - ₹80 प्रति प्लेट"
      },
      {
        dishName: "टमाटर चाट",
        description: "उबले आलू और टमाटर से बनने वाली एक प्रसिद्ध स्थानीय विशेषता, जिसमें मसाले, धनिया, घी और मीठी चाशनी का छिड़काव होता है।",
        famousRestaurants: ["काशी चाट भंडार", "दीना चाट भंडार"],
        approxPrice: "₹60 - ₹90 प्रति प्लेट"
      },
      {
        dishName: "बनारसी ठंडाई और लस्सी",
        description: "पारंपरिक मिट्टी के कुल्हड़ में परोसी जाने वाली गाढ़ी और मलाईदार दही की लस्सी, जिसके ऊपर गाढ़ी रसमलाई, केसर और मेवे डाले जाते हैं।",
        famousRestaurants: ["ब्लू लस्सी शॉप", "पहलवान लस्सी"],
        approxPrice: "₹80 - ₹120 प्रति कुल्हड़"
      }
    ],
    localCulture: {
      customs: "स्थानीय लोग अपने दिन की शुरुआत गंगा में पवित्र स्नान के साथ करते हैं। शाम को नदी में मिट्टी के दीये अर्पित करना बहुत आदरणीय माना जाता है।",
      dressCode: "शालीन वस्त्र पहनना आवश्यक है। मंदिरों के भीतर कंधे और घुटने ढके होने चाहिए। किसी भी पवित्र स्थान में प्रवेश करने से पहले जूते-चप्पल उतार दें।",
      greetingStyle: "स्थानीय लोगों और साधुओं के प्रति सम्मान प्रकट करने के लिए हाथ जोड़कर 'हर हर महादेव' या 'नमस्ते' कहें।",
      thingsToAvoid: [
        "मृतकों के प्रति सम्मान प्रकट करने के लिए मणिकर्णिका घाट पर अंतिम संस्कार के दृश्यों की तस्वीरें न लें।",
        "अपुष्ट नाविकों या गाइडों को काम पर रखने से बचें; हमेशा पहले से ही कीमतों पर बातचीत कर लें।",
        "अस्वच्छ ठेलों से सड़क किनारे का खाना या नल का पानी पीने से बचें।"
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "सूर्योदय नौका विहार और घाटों का भ्रमण",
        activity: "सुबह 5:30 बजे दशाश्वमेध और अस्सी घाट के किनारे शांतिपूर्ण नौका विहार के साथ सुनहरे सूर्योदय का आनंद लें, जिसके बाद 'सुबह-ए-बनारस' शास्त्रीय संगीत और योग का अनुभव करें।"
      },
      afternoon: {
        title: "रहस्यमयी गलियां और सारनाथ की यात्रा",
        activity: "पुराने शहर की जीवंत, संकरी भूलभुलैया जैसी गलियों में घूमें। दोपहर के भोजन के लिए गरमा-गरम कचौड़ी सब्जी खाएं, फिर सारनाथ के लिए एक ऑटो लें और बौद्ध खंडहरों का पता लगाएं।"
      },
      evening: {
        title: "गंगा आरती का दिव्य अनुभव",
        activity: "शाम 6:00 बजे तक दशाश्वमेध घाट लौट आएं। नाव पर या घाट की सीढ़ियों पर जगह सुरक्षित करें और भव्य, मंत्रमुग्ध कर देने वाली शाम की गंगा आरती का साक्षी बनें।"
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "सुबह की साझा नाव सवारी", cost: "₹250" },
        { item: "भोजन और प्रसिद्ध टमाटर चाट", cost: "₹450" },
        { item: "सारनाथ ऑटो परिवहन (आना-जाना)", cost: "₹400" },
        { item: "सारनाथ प्रवेश और घाटों की पैदल यात्रा", cost: "₹100" },
        { item: "आपातकालीन आरक्षित राशि और बनारसी स्मृति चिन्ह", cost: "₹300" }
      ],
      totalCost: "₹1,500",
      summary: "यह बजट स्थानीय साझा परिवहन, प्रसिद्ध स्ट्रीट फूड जोड़ों और मुफ्त या कम लागत वाले स्मारकों का उपयोग करके एक समृद्ध और प्रामाणिक वाराणसी अनुभव प्रदान करता है।"
    },
    storyCorner: {
      title: "शाश्वत शिव नगरी की अमर कथा",
      story: "वाराणसी या काशी को दुनिया का सबसे पुराना जीवित शहर माना जाता है। किंवदंतियों के अनुसार, इस शहर की स्थापना स्वयं भगवान शिव ने 5,000 वर्ष पहले की थी। यह शहर भगवान शिव के त्रिशूल की नोक पर टिका हुआ है, जो इसे बाकी नश्वर पृथ्वी से अलग बनाता है। जब पवित्र नदी गंगा स्वर्ग से पृथ्वी पर अवतरित हो रही थीं, तो उनके तेज वेग से मानवता के विनाश का खतरा था। भगवान शिव ने गंगा के वेग को शांत करने के लिए उन्हें अपनी जटाओं में समेट लिया, और फिर उन्हें जीवनदायिनी धाराओं के रूप में धीरे-धीरे बहने दिया। आज भी वाराणसी में गंगा नदी का उत्तर की ओर बहना जीवन चक्र को मोक्ष की ओर ले जाने का प्रतीक है।"
    },
    travelTips: [
      "भीड़ और गर्मी से बचने के लिए सुबह 5:00 बजे उठकर वाराणसी के सबसे शांत और आध्यात्मिक समय का अनुभव करें।",
      "नाव पर चढ़ने से पहले हमेशा किराए पर मोल-भाव करें; साझा नावों का किराया निजी नावों की तुलना में बहुत कम होता है।",
      "घाट की सीढ़ियों और गलियों में चलने के लिए आरामदायक और आसानी से उतारे जाने वाले जूते पहनें।",
      "पेट खराब होने से बचने के लिए केवल सीलबंद बोतल का पानी पिएं और बाहर के कटे हुए फलों से बचें।",
      "मुख्य मंदिरों में वीआईपी दर्शन का झांसा देने वाले बिचौलियों से बचें और सरकारी कतारों का उपयोग करें।"
    ],
    weather: {
      temperature: "31°C",
      bestSeason: "अक्टूबर से मार्च",
      airQuality: "सामान्य"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "सर सुंदरलाल अस्पताल (BHU)",
      hospitalPhone: "0542-2307500",
      touristHelpline: "1363"
    },
    aiExplanation: "वाराणसी आपकी आध्यात्मिक और सांस्कृतिक रुचियों के लिए एकदम सही है। यह यात्रा कार्यक्रम आपके दैनिक बजट सीमाओं के भीतर ही स्थानीय व्यंजनों और पवित्र स्थानों को शामिल करता है।",
    matchScore: 98
  },
  jaipur: {
    destination: "जयपुर, राजस्थान",
    hiddenGems: [
      {
        name: "पन्ना मीना का कुंड",
        description: "आमेर किले के पास स्थित 16वीं शताब्दी का एक अत्यंत सुंदर और ज्यामितीय बावड़ी, जो अपनी सीढ़ियों की समरूपता के लिए प्रसिद्ध है।",
        estimatedCost: "निःशुल्क",
        bestTime: "07:30 AM - 09:30 AM"
      },
      {
        name: "गलता जी (बंदर मंदिर)",
        description: "अरावली पहाड़ियों के बीच बना एक अनूठा ऐतिहासिक हिंदू तीर्थस्थल, जिसमें प्राकृतिक मीठे पानी के झरने और कई मंदिर हैं।",
        estimatedCost: "निःशुल्क (दान स्वीकृत)",
        bestTime: "04:00 PM - 06:00 PM"
      },
      {
        name: "अनोखी हस्त मुद्रण संग्रहालय",
        description: "एक खूबसूरती से पुनर्निर्मित हवेली में स्थित, जो पारंपरिक राजस्थानी ब्लॉक प्रिंटिंग की कला को संरक्षित करने के लिए समर्पित है।",
        estimatedCost: "₹80 INR",
        bestTime: "10:30 AM - 01:00 PM"
      }
    ],
    localFood: [
      {
        dishName: "दाल बाती चूरमा",
        description: "शुद्ध घी में डूबी गेहूं की गोलियों (बाती), मिश्रित पंचमेल दाल और मीठे चूरमे के साथ परोसा जाने वाला पारंपरिक राजस्थानी भोजन।",
        famousRestaurants: ["लक्ष्मी मिष्ठान भंडार (LMB)", "चोखी ढाणी"],
        approxPrice: "₹150 - ₹350 प्रति थाली"
      },
      {
        dishName: "प्याज़ कचौड़ी और मिर्ची बड़ा",
        description: "मसालेदार और कुरकुरी तली हुई प्याज की कचौड़ी, जिसे खट्टी-मीठी इमली और पुदीने की चटनी के साथ परोसा जाता है।",
        famousRestaurants: ["रावत मिष्ठान भंडार", "सोढानी स्वीट्स"],
        approxPrice: "₹40 - ₹60 प्रति पीस"
      },
      {
        dishName: "घेवर",
        description: "मैदा और घी से बनी मधुमक्खी के छत्ते जैसी दिखने वाली प्रसिद्ध राजस्थानी मिठाई, जिसे चाशनी में डुबोकर गाढ़ी रबड़ी और सूखे मेवों से सजाया जाता है।",
        famousRestaurants: ["LMB", "रावत स्वीट्स"],
        approxPrice: "₹80 - ₹150 प्रति भाग"
      }
    ],
    localCulture: {
      customs: "जयपुर की संस्कृति राजपूत राजसी ठाठ-बाट और अतिथि सत्कार ('पधारो म्हारे देस') पर टिकी है। लोग हाथ जोड़कर 'खम्मा घणी' कहते हैं।",
      dressCode: "ऐतिहासिक किलों और मंदिरों में जाते समय शालीन कपड़े पहनें। रेगिस्तानी गर्मी के कारण ढीले सूती कपड़े सबसे अच्छे होते हैं।",
      greetingStyle: "स्थानीय कारीगरों और लोगों से जुड़ने के लिए मुस्कुराते हुए 'खम्मा घणी' या 'नमस्ते' कहें।",
      thingsToAvoid: [
        "सड़क किनारे के अनधिकृत विक्रेताओं से कीमती रत्न खरीदने से बचें; जयपुर में नकली पत्थरों के घोटाले आम हैं।",
        "सड़क पर करतब दिखाने वालों से पहले पैसे तय किए बिना उनकी तस्वीरें या वीडियो न लें।",
        "दोपहर की तेज धूप में (1:00 PM से 3:30 PM) खुले स्मारकों में घूमने से बचें।"
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "आमेर किला और ज्यामितीय बावड़ी",
        activity: "भीड़ से बचने के लिए सुबह 8:00 बजे राजसी आमेर किले से शुरुआत करें, और शीश महल का आनंद लें। इसके बाद पास के पन्ना मीना का कुंड बावड़ी को देखने जाएं।"
      },
      afternoon: {
        title: "गुलाबी नगर और हवा महल",
        activity: "परकोटे वाले पुराने शहर की ओर बढ़ें। हवा महल के मधुमक्खी के छत्ते जैसे झरोखों को देखें, फिर दोपहर में स्वादिष्ट राजस्थानी थाली का आनंद लें। इसके बाद सिटी पैलेस घूमें।"
      },
      evening: {
        title: "गलता जी मंदिर का सूर्यास्त और खरीदारी",
        activity: "अरावली पहाड़ियों पर सूर्यास्त के समय शांत बंदर मंदिर गलता जी जाएं। बाद में जोहरी बाजार से जयपुरी ब्लॉक-प्रिंट साड़ियां और नीली मिट्टी के बर्तन (ब्लू पॉटरी) खरीदें।"
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "आमेर किला और सिटी पैलेस प्रवेश टिकट", cost: "₹350" },
        { item: "दाल बाती चूरमा दोपहर का भोजन", cost: "₹500" },
        { item: "ई-रिक्शा / ऑटो-रिक्शा परिवहन", cost: "₹400" },
        { item: "गलता जी स्थानीय मार्गदर्शक और नाश्ता", cost: "₹150" },
        { item: "स्मृति चिन्ह और खरीदारी भत्ता", cost: "₹400" }
      ],
      totalCost: "₹1,800",
      summary: "यह बजट आपको पारंपरिक ऑटो-रिक्शा का उपयोग करके, प्रसिद्ध पारंपरिक हलवाइयों से भोजन करके और बजट दरों पर प्रवेश पाकर गुलाबी शहर का सर्वश्रेष्ठ अनुभव देता है।"
    },
    storyCorner: {
      title: "अतिथि सत्कार के गुलाबी रंग की शाही कहानी",
      story: "जयपुर की स्थापना 1727 में महाराजा सवाई जय सिंह द्वितीय ने की थी, जो एक खगोलशास्त्री राजा थे। उन्होंने वैदिक सिद्धांतों (वास्तु शास्त्र) के अनुसार इस शहर को बसाया था। हालांकि, यह शहर हमेशा से गुलाबी नहीं था! 1876 में, वेल्स के राजकुमार (बाद में किंग एडवर्ड सप्तम) भारत आ रहे थे। मेहमानों के स्वागत और राजस्थानी आतिथ्य सत्कार को प्रदर्शित करने के लिए महाराजा राम सिंह ने पूरे शहर को गेरूए-गुलाबी रंग में रंगने का आदेश दिया, जो पारंपरिक रूप से स्वागत का प्रतीक है। महाराजा की रानी को यह रंग इतना पसंद आया कि उन्होंने एक कानून पारित करवाया कि पुराने शहर की सभी इमारतें हमेशा गुलाबी ही रहेंगी। आज 150 साल बाद भी वह शाही गुलाबी कानून लागू है।"
    },
    travelTips: [
      "किले, अल्बर्ट हॉल, हवा महल और जंतर मंतर में प्रवेश के लिए अलग से टिकट लेने के बजाय सरकारी 'कंपोजिट टिकट' लें, जिससे 50% बचत होगी।",
      "किराए में ठगे जाने से बचने के लिए सरकारी प्रीपेड ऑटो-रिक्शा या उबर/ओला ऐप्स का उपयोग करें।",
      "बाजारों में खरीदारी करते समय विनम्रता से मोल-भाव करें; आमतौर पर आधी कीमत से शुरुआत करना यहाँ आम है।",
      "सटीक इतिहास जानने के लिए आमेर किले के प्रवेश द्वार पर केवल सरकारी आईडी कार्ड वाले अधिकृत गाइड ही रखें।",
      "जयपुर की रेगिस्तानी धूप से बचने के लिए अपने साथ हमेशा पानी की बोतल रखें और खुद को हाइड्रेटेड रखें।"
    ],
    weather: {
      temperature: "33°C",
      bestSeason: "अक्टूबर से मार्च",
      airQuality: "सामान्य"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "SMS अस्पताल जयपुर",
      hospitalPhone: "0141-2560291",
      touristHelpline: "1363"
    },
    aiExplanation: "जयपुर वास्तुकला और इतिहास का खजाना है। यह यात्रा कार्यक्रम आपके सीमित बजट का ध्यान रखते हुए गुलाबी शहर के मुख्य आकर्षणों और लजीज व्यंजनों को समेटता है।",
    matchScore: 96
  },
  munnar: {
    destination: "मुन्नार, केरल",
    hiddenGems: [
      {
        name: "लॉकहार्ट गैप व्यूप्वाइंट",
        description: "पहाड़ियों के बीच एक बेहद खूबसूरत और शांत दर्रा, जहां से घुमावदार सड़कों, गहरी घाटियों और उड़ते हुए बादलों का अद्भुत दृश्य दिखाई देता है।",
        estimatedCost: "निःशुल्क",
        bestTime: "06:00 AM - 08:00 AM"
      },
      {
        name: "अट्टुकड जलप्रपात",
        description: "देवदार के जंगलों और चाय के बागानों के बीच स्थित एक शानदार झरना, जिस तक एक संकरे लकड़ी के पुल के माध्यम से पहुंचा जाता है।",
        estimatedCost: "निःशुल्क",
        bestTime: "09:00 AM - 11:30 AM"
      },
      {
        name: "कोलुक्कुमलाई चाय बागान",
        description: "दुनिया का सबसे ऊंचा चाय बागान, जहां आज भी 100 साल पुरानी पारंपरिक विधियों से चाय पत्ती को तैयार किया जाता है। यहाँ का सूर्योदय अद्भुत होता है।",
        estimatedCost: "₹250 INR (जीप का किराया अलग)",
        bestTime: "05:00 AM - 08:00 AM"
      }
    ],
    localFood: [
      {
        dishName: "केरल परोटा और वेज/एग कूरमा",
        description: "मैदे से बनी परतदार और बेहद मुलायम चपटी ब्रेड, जिसे नारियल के दूध से बने तीखे और मसालेदार कूरमे के साथ परोसा जाता है।",
        famousRestaurants: ["सरवना भवन", "राप्सी रेस्तरां"],
        approxPrice: "₹70 - ₹120 प्रति भोजन"
      },
      {
        dishName: "पुट्टू और कडाला करी",
        description: "चावल के आटे और पिसे हुए नारियल से भाप में पकाया जाने वाला बेलनाकार भोजन, जिसे काले चने की मसालेदार नारियल करी के साथ खाया जाता है।",
        famousRestaurants: ["होटल गुरुभवन", "श्री महावीर जी"],
        approxPrice: "₹50 - ₹90 प्रति प्लेट"
      },
      {
        dishName: "ताजी चाय और केले के पकोड़े (पझम पोरी)",
        description: "इलायची, अदरक और लौंग के स्वाद वाली मुन्नार की ताजी चाय, जिसके साथ मीठे और कुरकुरे पके केले के पकोड़े परोसे जाते हैं।",
        famousRestaurants: ["टी वैली कैफे", "स्थानीय चाय के ठेले"],
        approxPrice: "₹30 - ₹50 प्रति भाग"
      }
    ],
    localCulture: {
      customs: "प्रकृति और खेती से गहरा लगाव। पारंपरिक केरल के लोग हाथ जोड़कर 'नमस्कारम' कहते हैं। वन्यजीवों और पर्यावरण के संरक्षण का बहुत सम्मान किया जाता है।",
      dressCode: "शाम को मौसम काफी ठंडा हो जाता है, इसलिए हल्के ऊनी कपड़े (जैसे शॉल या जैकेट) साथ रखें। चाय के बागानों में घूमने के लिए मजबूत जूते पहनें।",
      greetingStyle: "बागानों में काम करने वाले मेहनती मजदूरों के प्रति सम्मान जताने के लिए मुस्कुराकर 'नमस्कारम' कहें।",
      thingsToAvoid: [
        "प्रबंधकों की अनुमति के बिना चाय के बागानों के बहुत अंदर न जाएं और न ही चाय की पत्तियां तोड़ें।",
        "चाय के बागानों या झरनों के आसपास प्लास्टिक न फेंकें; यह एक संवेदनशील पारिस्थितिक क्षेत्र है।",
        "जंगली हाथियों के आवागमन के कारण रात 7:00 बजे के बाद घने पहाड़ी रास्तों पर यात्रा करने से बचें।"
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "कोलुक्कुमलाई का अद्भुत सूर्योदय और चाय के बागान",
        activity: "सुबह 4:30 बजे उठकर 4WD जीप से कोलुक्कुमलाई की चोटी पर जाएं और बादलों के ऊपर तैरते हुए सूर्योदय को देखें। इसके बाद चाय के बागानों के बीच टहलें।"
      },
      afternoon: {
        title: "इराविकुलम राष्ट्रीय उद्यान (नीलगिरि तहर)",
        activity: "इराविकुलम राष्ट्रीय उद्यान जाएं और हरी पहाड़ियों पर चरते हुए दुर्लभ नीलगिरि तहर (पहाड़ी बकरी) को देखें। दोपहर में केले के पत्ते पर पारंपरिक भोजन करें।"
      },
      evening: {
        title: "झरने की सैर और ताजे मसालों की खरीदारी",
        activity: "अट्टुकड झरने के पास रुककर तस्वीरें लें। बाद में मुन्नार शहर के स्थानीय बाजारों से ताजी हरी चाय, इलायची, दालचीनी और घर की बनी चॉकलेट खरीदें।"
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "इराविकुलम पार्क टिकट और वन विभाग बस", cost: "₹200" },
        { item: "केले के पत्ते पर पारंपरिक केरल भोजन", cost: "₹180" },
        { item: "स्थानीय साझा जीप और ऑटो किराया", cost: "₹500" },
        { item: "इलायची चाय और केले के भजिए", cost: "₹100" },
        { item: "ताजे मसाले और स्थानीय चॉकलेट", cost: "₹300" }
      ],
      totalCost: "₹1,280",
      summary: "यह मामूली बजट आपको महंगी प्राइवेट कैब के बिना मुन्नार की हरी-भरी पहाड़ियों, झरनों और वन्यजीवों को करीब से देखने और स्थानीय मसालों का स्वाद लेने की सुविधा देता है।"
    },
    storyCorner: {
      title: "मुन्नार की हरी-भरी वादियों की गूंज",
      story: "मलयालम में 'मुन्नार' शब्द का अर्थ है 'तीन नदियाँ', जो मुथिरपुझा, नल्लाथन्नी और कुंडल नदियों के खूबसूरत संगम को दर्शाता है। सदियों से मुन्नार एक अछूता जंगल था जहां केवल स्थानीय आदिवासी रहते थे। 19वीं सदी के अंत में, एक ब्रिटिश अधिकारी जॉन डैनियल मुनरो यहाँ आए और इसकी सुंदरता पर मोहित हो गए। मिट्टी और ठंडे मौसम को चाय की खेती के लिए अनुकूल पाकर उन्होंने त्रावणकोर के शाही परिवार से इस जमीन को पट्टे पर लिया। इसके बाद तमिलनाडु और केरल से हजारों मजदूर यहाँ आए और पहाड़ियों को काटकर इन खूबसूरत चाय के बागानों का निर्माण किया। मुन्नार 'नीलकुरिंजी' फूलों का भी घर है, जो 12 साल में केवल एक बार खिलते हैं और पूरी पहाड़ियों को नीले रंग में रंग देते हैं।"
    },
    travelTips: [
      "टिकट की लंबी कतारों से बचने के लिए इराविकुलम राष्ट्रीय उद्यान की टिकट पहले ही वन विभाग की वेबसाइट से ऑनलाइन बुक कर लें।",
      "पहाड़ी इलाकों में अचानक बारिश हो सकती है, इसलिए अपने बैग में हमेशा एक छोटा छाता या रेनकोट जरूर रखें।",
      "गुणवत्ता सुनिश्चित करने के लिए मसाले और चाय केवल सरकार द्वारा मान्यता प्राप्त सहकारी केंद्रों (जैसे कानन देवन हिल्स) से ही खरीदें।",
      "कोलुक्कुमलाई जाने के लिए स्थानीय 4WD जीप ही किराए पर लें; सामान्य कारें वहाँ के बेहद उबड़-खाबड़ और पथरीले रास्तों पर नहीं चल सकतीं।",
      "पहाड़ी घाटियों में मोबाइल नेटवर्क कमजोर हो सकता है, इसलिए हमेशा पर्याप्त नकद राशि साथ रखें।"
    ],
    weather: {
      temperature: "22°C",
      bestSeason: "सितंबर से मई",
      airQuality: "उत्कृष्ट"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "टाटा जनरल अस्पताल मुन्नार",
      hospitalPhone: "04865-230263",
      touristHelpline: "1363"
    },
    aiExplanation: "मुन्नार प्रकृति और चाय प्रेमियों के लिए स्वर्ग है। यह यात्रा कार्यक्रम आपके बजट में चाय के बागानों, झरनों और दुर्लभ वन्यजीवों को समेटने के लिए डिज़ाइन किया गया है।",
    matchScore: 97
  },
  goa: {
    destination: "गोवा, भारत",
    hiddenGems: [
      {
        name: "फॉन्टेनहास लैटिन क्वार्टर",
        description: "पणजी का एक सुंदर ऐतिहासिक मोहल्ला, जिसकी संकरी सड़कें और पीले, नीले और लाल रंग के पुर्तगाली शैली के पुराने औपनिवेशिक घर प्रसिद्ध हैं।",
        estimatedCost: "निःशुल्क",
        bestTime: "08:00 AM - 10:30 AM"
      },
      {
        name: "हरवलम जलप्रपात और गुफाएं",
        description: "एक खूबसूरत झरना जो पहाड़ियों से नीचे गिरता है। इसके ठीक बगल में छठी शताब्दी की बौद्ध गुफाएं हैं, जो चट्टानों को काटकर बनाई गई हैं।",
        estimatedCost: "निःशुल्क",
        bestTime: "02:00 PM - 04:00 PM"
      },
      {
        name: "नेत्रावली बुदबुदाती झील (बबलिंग लेक)",
        description: "दक्षिण गोवा में स्थित एक रहस्यमयी मंदिर का तालाब, जहां जमीन के नीचे प्राकृतिक गैस के रिसाव के कारण पानी में से लगातार बुलबुले उठते रहते हैं।",
        estimatedCost: "₹20 INR",
        bestTime: "11:00 AM - 01:30 PM"
      }
    ],
    localFood: [
      {
        dishName: "गोअन फिश करी राइस",
        description: "ताजी मछली को स्थानीय मसालों, नारियल के दूध और कोकम के साथ पकाकर बनाई गई स्वादिष्ट करी, जिसे लाल चावल के साथ परोसा जाता है।",
        famousRestaurants: ["स्टार लाइट (अर्पोरा)", "रिट्ज क्लासिक (पणजी)"],
        approxPrice: "₹180 - ₹280 प्रति थाली"
      },
      {
        dishName: "चिकन विंदालू",
        description: "एक तीखा और तीखे मसालों से भरपूर गोअन-पुर्तगाली व्यंजन, जिसमें सिरका, लहसुन, अदरक और कश्मीरी लाल मिर्च का भरपूर उपयोग होता है।",
        famousRestaurants: ["मम्स किचन", "विवा पणजी"],
        approxPrice: "₹220 - ₹380 प्रति प्लेट"
      },
      {
        dishName: "बेबिका",
        description: "नारियल के दूध, घी, चीनी और अंडों से बनी पारंपरिक गोअन मिठाई, जिसे एक-एक करके कई परतों में धीरे-धीरे बेक किया जाता है।",
        famousRestaurants: ["विवा पणजी", "कॉन्फ़िटेरिया 31 डी जनेरियो"],
        approxPrice: "₹80 - ₹120 प्रति टुकड़ा"
      }
    ],
    localCulture: {
      customs: "भारतीय और पुर्तगाली संस्कृतियों का एक सुंदर मिश्रण। यहाँ के लोग 'सुसेगाड' (एक तनावमुक्त और शांतिपूर्ण जीवन शैली) का पालन करते हैं।",
      dressCode: "समुद्र तटों पर तैरने वाले कपड़े ठीक हैं, लेकिन जब आप चर्च या मंदिरों में जाएं तो शालीन कपड़े पहनना जरूरी है।",
      greetingStyle: "स्थानीय लोगों और दुकानदारों से गर्मजोशी से जुड़ने के लिए मुस्कुराते हुए 'हेलो' या 'नमस्ते' कहें।",
      thingsToAvoid: [
        "समुद्र तटों (बीच) के बाहर सड़कों या बाजारों में बिकिनी या स्विमसूट पहनकर न घूमें; ऐसा करना कानूनी रूप से प्रतिबंधित है।",
        "चर्च के प्रार्थना गृहों के भीतर बिना अनुमति तस्वीरें न लें और धार्मिक अनुष्ठानों का सम्मान करें।",
        "सार्वजनिक बीच पर शराब पीने से बचें; कानूनी कार्रवाई से बचने के लिए अधिकृत बीच शैक या पब का उपयोग करें।"
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "लैटिन क्वार्टर की सैर और पारंपरिक नाश्ता",
        activity: "सुबह 8:30 बजे फॉन्टेनहास की पुर्तगाली गलियों में टहलें। एक सदी पुरानी बेकरी पर रुककर ताजी ब्रेड (पोई) और मीठी बेबिका मिठाई का स्वाद लें।"
      },
      afternoon: {
        title: "पुराने गोवा के चर्च और मसालों के बागान",
        activity: "बोम जीसस के ऐतिहासिक चर्च जाएं जहां सेंट फ्रांसिस जेवियर के अवशेष रखे हैं। स्वादिष्ट गोअन फिश थाली खाएं और दोपहर में मसालों के बागान की सैर करें।"
      },
      evening: {
        title: "शांत समुद्र तट पर सूर्यास्त और सी-फूड",
        activity: "दक्षिण गोवा के किसी शांत बीच (जैसे मडरेम या उतोरदा बीच) पर सूर्यास्त देखें। रात में बीच शैक पर धीमी रोशनी और संगीत के बीच डिनर करें।"
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "दोपहिया स्कूटर किराया और पेट्रोल", cost: "₹450" },
        { item: "पारंपरिक गोअन फिश थाली दोपहर का भोजन", cost: "₹250" },
        { item: "पुराने गोवा चर्च प्रवेश और पुरानी गलियों की सैर", cost: "₹50" },
        { item: "मसालों के बागान का टिकट और दोपहर का बुफे", cost: "₹500" },
        { item: "बीच शैक पर शाम का नाश्ता और डिनर", cost: "₹350" }
      ],
      totalCost: "₹1,600",
      summary: "यह बजट गोवा के इतिहास, स्थापत्य कला और पारंपरिक भोजन पर केंद्रित है, जिसमें स्थानीय स्कूटर किराए पर लेकर और स्थानीय होटलों में भोजन करके बजट का ध्यान रखा गया है।"
    },
    storyCorner: {
      title: "सुनहरे गोअन युग की ऐतिहासिक विरासत",
      story: "लगभग 450 वर्षों तक गोवा पुर्तगाली शासन के अधीन था, जिसके कारण इसकी संस्कृति बाकी भारत से काफी अलग है। पणजी एशिया के पहले नियोजित शहरों में से एक था। जब पुर्तगाली खोजकर्ता पहली बार 16वीं शताब्दी में यहाँ आए, तो वे आलू, टमाटर, काजू और तीखी लाल मिर्च अपने साथ लाए, जिसने पूरे गोअन और भारतीय भोजन का इतिहास बदल दिया। उन्होंने लाल स्थानीय पत्थरों से शानदार चर्च बनाए और मानसून की भारी बारिश से बचाने के लिए उन पर सीप के चूने का लेप लगाया। पूर्व और पश्चिम का यह अनोखा मेल 'सुसेगाड' को जन्म देता है—समुद्र, संगीत और नारियल के पेड़ों के बीच सुकून से जीने का एक सुंदर दर्शन।"
    },
    travelTips: [
      "गोवा में घूमने के लिए प्रतिदिन ₹350-₹500 में एक दोपहिया स्कूटर किराए पर लें; यह यात्रा करने का सबसे सस्ता और लचीला साधन है।",
      "स्कूटर चलाते समय हमेशा हेलमेट पहनें और ड्राइविंग लाइसेंस साथ रखें; पुलिस पर्यटकों के वाहनों और दस्तावेजों की सघन जांच करती है।",
      "शांत, सांस्कृतिक और प्राकृतिक दृश्यों के लिए दक्षिण गोवा में ठहरें; क्लब, नाइटलाइफ और भीड़भाड़ के लिए उत्तर गोवा चुनें।",
      "पोंडा के मसाला बागानों की सैर जरूर करें, जहाँ आपको जैविक इलायची, दालचीनी और पारंपरिक गोअन बुफे खाने को मिलेगा।",
      "अंजुना के पिस्सू बाजारों (फ्ली मार्केट) में खरीदारी करते समय आधी कीमत से मोल-भाव शुरू करें; दुकानदार पर्यटकों को ऊंची कीमतें बताते हैं।"
    ],
    weather: {
      temperature: "30°C",
      bestSeason: "नवंबर से फरवरी",
      airQuality: "अच्छा"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "गोवा मेडिकल कॉलेज अस्पताल",
      hospitalPhone: "0832-2458727",
      touristHelpline: "1363"
    },
    aiExplanation: "गोवा सिर्फ भीड़भाड़ वाले समुद्र तटों तक सीमित नहीं है। यह यात्रा कार्यक्रम आपके बजट में यहाँ की औपनिवेशिक वास्तुकला, पुराने गिरजाघरों और प्रामाणिक व्यंजनों को प्रदर्शित करने के लिए बनाया गया है।",
    matchScore: 95
  },
  hampi: {
    destination: "हम्पी, कर्नाटक",
    hiddenGems: [
      {
        name: "अनेगुंडी गांव और बंदर मंदिर",
        description: "तुंगभद्रा नदी के पार स्थित एक अत्यंत प्राचीन और सुंदर गांव, जिसे रामायण काल का किष्किंधा साम्राज्य माना जाता है।",
        estimatedCost: "निःशुल्क (नाव का फेरा ₹50)",
        bestTime: "06:30 AM - 09:00 AM"
      },
      {
        name: "विट्ठल मंदिर का राजा का तराजू (किंग्स बैलेंस)",
        description: "एक विशाल 5 मीटर ऊंचा पत्थर का ढांचा, जहां प्राचीन विजयनगर साम्राज्य के राजाओं को त्योहारों पर सोने और रत्नों से तौला जाता था।",
        estimatedCost: "₹40 INR (संयुक्त स्मारक प्रवेश टिकट)",
        bestTime: "03:30 PM - 05:00 PM"
      },
      {
        name: "लोटस महल और हाथी अस्तबल",
        description: "इंडो-इस्लामिक शैली में निर्मित एक बेहद खूबसूरत दो मंजिला महल, जिसकी मेहराबें कमल की पंखुड़ियों के आकार में बनाई गई हैं।",
        estimatedCost: "₹40 INR (संयुक्त टिकट में शामिल)",
        bestTime: "09:30 AM - 12:00 PM"
      }
    ],
    localFood: [
      {
        dishName: "ज्वार की रोटी और उत्तर कर्नाटक भोजन (ऊटा)",
        description: "उत्तर कर्नाटक का पारंपरिक और स्वास्थ्यवर्धक भोजन, जिसमें ज्वार की सोंधी रोटियों को तीखी बैंगन की सब्जी, दाल और मक्खन के साथ परोसा जाता है।",
        famousRestaurants: ["मैंगो ट्री रेस्तरां", "हम्पी पैराडाइज"],
        approxPrice: "₹100 - ₹180 प्रति थाली"
      },
      {
        dishName: "बिसी बेले बाथ",
        description: "दाल, चावल और ताजी सब्जियों को इमली, घी और विशेष मसालों के साथ धीमी आंच पर पकाकर बनाया जाने वाला एक स्वादिष्ट व्यंजन।",
        famousRestaurants: ["न्यू शांति सागर", "मंदिर के पास के स्थानीय स्टाल"],
        approxPrice: "₹50 - ₹85 प्रति प्लेट"
      },
      {
        dishName: "मद्दुर वड़ा और फिल्टर कॉफी",
        description: "सूजी, प्याज, कढ़ी पत्ता और अदरक से बना एक बेहद कुरकुरा और चटपटा तला हुआ वड़ा, जिसे झागदार दक्षिण भारतीय फिल्टर कॉफी के साथ परोसा जाता है।",
        famousRestaurants: ["हम्पी बाजार के पास की चाय की दुकानें", "मोगली कैफे"],
        approxPrice: "₹40 - ₹60 प्रति भाग"
      }
    ],
    localCulture: {
      customs: "हम्पी एक सक्रिय धार्मिक स्थल और यूनेस्को की विश्व धरोहर है। प्राचीन खंडहरों का सम्मान करें और ऐतिहासिक नक्काशीदार खंभों पर न चढ़ें।",
      dressCode: "शालीन और आरामदायक कपड़े पहनना जरूरी है। ऐतिहासिक विरुपक्ष मंदिर के भीतर जाते समय कंधे और घुटने ढके होने चाहिए।",
      greetingStyle: "स्थानीय लोगों और पुजारियों के प्रति सम्मान व्यक्त करने के लिए कन्नड़ में 'नमस्कार' या 'नमस्ते' कहें।",
      thingsToAvoid: [
        "प्राचीन नक्काशीदार खंभों को नुकसान पहुंचाने या उन पर चढ़ने की कोशिश न करें; ये अत्यंत नाजुक ऐतिहासिक धरोहरें हैं।",
        "तुंगभद्रा नदी में नहाने या तैरने से बचें; यहाँ का जलस्तर और चट्टानी भंवर अत्यंत खतरनाक होते हैं।",
        "पवित्र हम्पी बाजार और विरुपक्ष मंदिर के आसपास मांसाहारी भोजन या नशीले पदार्थों का सेवन सख्त वर्जित है।"
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "मातंगा पहाड़ी पर सूर्योदय और विरुपक्ष मंदिर",
        activity: "सुबह 5:30 बजे मातंगा पहाड़ी पर चढ़कर पत्थरों से घिरे खंडहरों के ऊपर से सूर्योदय का शानदार नजारा देखें। इसके बाद सातवीं शताब्दी के विरुपक्ष मंदिर के दर्शन करें।"
      },
      afternoon: {
        title: "लोटस महल और शाही परिसर की सैर",
        activity: "शाही परिसर में जाकर 'क्वींस बाथ' और 'स्टेप्ड टैंक' (सीढ़ीदार कुंड) देखें। दोपहर में उत्तर कर्नाटक की ज्वार थाली का स्वाद लें, फिर कमल महल घूमने जाएं।"
      },
      evening: {
        title: "विट्ठल मंदिर का पत्थर का रथ और नाव सवारी",
        activity: "विट्ठल मंदिर परिसर में जाकर प्रसिद्ध पत्थर का रथ और संगीत उत्पन्न करने वाले खंभे देखें। शाम को नदी में गोल बांस की टोकरी जैसी नाव (कोराकल) की सवारी करें।"
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "सरकारी संयुक्त स्मारक प्रवेश टिकट", cost: "₹40" },
        { item: "पूरे दिन के लिए साइकिल का किराया", cost: "₹150" },
        { item: "उत्तर कर्नाटक की पारंपरिक भोजन थाली", cost: "₹280" },
        { item: "तुंगभद्रा नदी में कोराकल नाव की सवारी", cost: "₹200" },
        { item: "स्थानीय गाइड की फीस (समूह में साझा)", cost: "₹400" },
        { item: "बोतलबंद पानी और आपातकालीन आरक्षित राशि", cost: "₹130" }
      ],
      totalCost: "₹1,200",
      summary: "यह बजट आपको स्थानीय साइकिल किराए पर लेकर, एक ही संयुक्त प्रवेश टिकट का उपयोग करके और पारंपरिक शाकाहारी भोजन खाकर इतिहास के पन्नों में ले जाता है।"
    },
    storyCorner: {
      title: "किष्किंधा और विजयनगर साम्राज्य का गौरवशाली इतिहास",
      story: "हम्पी 14वीं शताब्दी में विजयनगर साम्राज्य की अत्यंत समृद्ध और भव्य राजधानी थी। विदेशी यात्रियों ने इसे रोम से भी बड़ा और हीरों-जवाहरात से भरा शहर बताया था। लेकिन पौराणिक रूप से भी हम्पी का गहरा महत्व है। इसे रामायण का 'किष्किंधा' (वानर साम्राज्य) माना जाता है। ऐसा माना जाता है कि सुग्रीव और हनुमान के बीच हुए भीषण युद्ध के दौरान फेंके गए पत्थरों से ही हम्पी का यह पथरीला और अनोखा परिदृश्य बना है। यहाँ का प्रसिद्ध विरुपक्ष मंदिर 1,000 वर्षों से अधिक समय से खड़ा है। इसके गर्भगृह में एक अद्भुत वैज्ञानिक चमत्कार है, जहां मंदिर के मुख्य शिखर की उल्टी परछाई दीवार पर दिखाई देती है, जो प्राचीन भारतीय वास्तुकला की वैज्ञानिक प्रगति का प्रमाण है।"
    },
    travelTips: [
      "हम्पी बाजार से प्रतिदिन ₹150 में साइकिल या ₹450 में मोपेड स्कूटर किराए पर लें; यह 26 वर्ग किमी में फैले खंडहरों को देखने का सबसे अच्छा साधन है।",
      "स्मारकों का एक ही संयुक्त टिकट लें; यही टिकट विरुपक्ष, लोटस महल, हाथी अस्तबल और विट्ठल मंदिर में प्रवेश के लिए काम आता है।",
      "पथरीले रास्तों पर छाया नहीं होती और गर्मी बहुत तेज होती है, इसलिए धूप का चश्मा, टोपी और सनस्क्रीन अपने साथ जरूर रखें।",
      "नदी के पार 'हिप्पी द्वीप' (अनेगुंडी गांव) जाने के लिए गोल कोराकल नाव का अनुभव लें, जहाँ ग्रामीण जीवन और बोल्डर क्लाइंबिंग का आनंद मिलेगा।",
      "विट्ठल मंदिर में केवल सरकारी अधिकृत गाइड रखें; वे आपको वहाँ के पत्थरों से संगीत की ध्वनियां बजाकर दिखाते हैं।"
    ],
    weather: {
      temperature: "34°C",
      bestSeason: "अक्टूबर से फरवरी",
      airQuality: "उत्कृष्ट"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "सरकारी अस्पताल हॉस्पेट",
      hospitalPhone: "08394-220055",
      touristHelpline: "1363"
    },
    aiExplanation: "हम्पी इतिहास का एक खुला अजायबघर है। यह यात्रा कार्यक्रम आपको प्राचीन वैभव और किलों की गलियों में साइकिल से सैर कराने के लिए बजट के भीतर बनाया गया है।",
    matchScore: 98
  },
  udaipur: {
    destination: "उदयपुर, राजस्थान",
    hiddenGems: [
      {
        name: "सज्जनगढ़ मानसून पैलेस",
        description: "अरावली पहाड़ियों की चोटी पर स्थित एक शानदार महल, जो फतेहसागर झील और पहाड़ियों के पीछे सूर्यास्त का अद्भुत दृश्य प्रस्तुत करता है।",
        estimatedCost: "₹150 INR (वाहन किराया अलग)",
        bestTime: "04:30 PM - 06:30 PM"
      },
      {
        name: "सहेलियों की बाड़ी (सहेलियों का बगीचा)",
        description: "कमल के तालाबों, संगमरमर के मंडपों और गुरुत्वाकर्षण के सिद्धांत पर बिना बिजली के चलने वाले फव्वारों से सुसज्जित एक ऐतिहासिक शाही उद्यान।",
        estimatedCost: "₹50 INR",
        bestTime: "09:00 AM - 11:30 AM"
      },
      {
        name: "आहड़ की छतरियां",
        description: "वास्तुकला का एक अद्भुत नमूना, जहाँ मेवाड़ के शाही राजाओं की याद में नक्काशीदार संगमरमर से बने 250 से अधिक सुंदर गुंबद स्थित हैं।",
        estimatedCost: "निःशुल्क",
        bestTime: "07:30 AM - 09:30 AM"
      }
    ],
    localFood: [
      {
        dishName: "राजस्थानी लाल मास / केर सांगरी",
        description: "मथानिया लाल मिर्च की तीखी ग्रेवी में धीमी आंच पर पकाई गई राजस्थानी भेड़ की सब्जी (या शाकाहारियों के लिए रेगिस्तानी फल और फलियों से बनी केर सांगरी सब्जी)।",
        famousRestaurants: ["अम्ब्राई रेस्तरां", "उप्रे बाई 1559 AD"],
        approxPrice: "₹250 - ₹450 प्रति थाली"
      },
      {
        dishName: "कचौड़ी और मिर्ची बड़ा",
        description: "मसालेदार दाल और उबले आलू से भरी बेहद कुरकुरी कचौड़ी, जिसे खट्टी-मीठी और तीखी चटनियों के साथ परोसा जाता है।",
        famousRestaurants: ["जोधपुर मिष्ठान भंडार", "लाला मिष्ठान भंडार"],
        approxPrice: "₹35 - ₹55 प्रति पीस"
      },
      {
        dishName: "कुल्हड़ कॉफी और रसमलाई",
        description: "मिट्टी के कुल्हड़ में परोसी जाने वाली इलायची के स्वाद वाली गरमा-गरम झागदार कॉफी या गाढ़ी रसमलाई मिठाई।",
        famousRestaurants: ["फतेहसागर झील के किनारे के स्टाल", "साई कुल्हड़ कॉफी"],
        approxPrice: "₹40 - ₹80 प्रति कुल्हड़"
      }
    ],
    localCulture: {
      customs: "उदयपुर को अपने मेवाड़ इतिहास और महाराणा प्रताप जैसे महान योद्धाओं पर बहुत गर्व है। यहाँ 'नमस्ते' या 'खम्माघणी' से स्वागत किया जाता है।",
      dressCode: "ऐतिहासिक सिटी पैलेस और प्राचीन जगदीश मंदिर के भीतर जाते समय शालीन कपड़े पहनें और अपने कंधे ढके रखें।",
      greetingStyle: "स्थानीय लोगों के प्रति सम्मान व्यक्त करने के लिए हाथ जोड़कर 'खम्माघणी' कहें।",
      thingsToAvoid: [
        "पिछोला झील या फतेहसागर झील में कचरा या प्लास्टिक की बोतलें न फेंकें; झीलें इस शहर की जीवन रेखा हैं।",
        "हवाई अड्डे या स्टेशन पर बिना प्रीपेड टैक्सियों के यात्रा करने से बचें, क्योंकि वे मनमाना किराया वसूलते हैं।",
        "जंगली मगरमच्छों और गहरी घास की धाराओं के कारण पिछोला झील में नहाने या तैरने की कोशिश न करें।"
      ]
    },
    oneDayItinerary: {
      morning: {
        title: "सिटी पैलेस और जगदीश मंदिर का भ्रमण",
        activity: "सुबह 9:00 बजे राजस्थान के सबसे बड़े महल परिसर 'सिटी पैलेस' से शुरुआत करें और मयूर चौक देखें। इसके ठीक बगल में स्थित जगदीश मंदिर के दर्शन करें।"
      },
      afternoon: {
        title: "सहेलियों की बाड़ी और पिछोला झील में नौका विहार",
        activity: "सहेलियों की बाड़ी के फव्वारों के बीच टहलें। दोपहर में मेवाड़ी थाली का स्वाद लें, फिर पिछोला झील के नीले पानी में नाव की सवारी का आनंद लें।"
      },
      evening: {
        title: "मानसून पैलेस का सूर्यास्त और राजस्थानी लोक नृत्य",
        activity: "सज्जनगढ़ मानसून पैलेस की चोटी से पहाड़ियों के पीछे अद्भुत सूर्यास्त देखें। शाम 7:00 बजे बागोर की हवेली में प्रसिद्ध 'धरोहर' लोक नृत्य शो का आनंद लें।"
      }
    },
    estimatedBudget: {
      breakdown: [
        { item: "सिटी पैलेस और सहेलियों की बाड़ी प्रवेश टिकट", cost: "₹300" },
        { item: "पिछोला झील में नौका विहार (सरकारी जेटी)", cost: "₹250" },
        { item: "बागोर की हवेली लोक नृत्य शो टिकट", cost: "₹150" },
        { item: "मेवाड़ी थाली दोपहर का भोजन और कुल्हड़ कॉफी", cost: "₹450" },
        { item: "स्थानीय ऑटो-रिक्शा परिवहन (साझा)", cost: "₹350" },
        { item: "बोतलबंद पानी और आपातकालीन आरक्षित राशि", cost: "₹100" }
      ],
      totalCost: "₹1,600",
      summary: "यह बजट आपको सरकारी जेटी से नौका विहार का टिकट लेकर, साझा ऑटो का उपयोग करके और उदयपुर के समृद्ध इतिहास एवं संस्कृति को करीब से जानने का अवसर देता है।"
    },
    storyCorner: {
      title: "झीलों की नगरी और मेवाड़ का स्वर्णिम इतिहास",
      story: "उदयपुर या झीलों की नगरी की स्थापना 1553 में महाराणा उदय सिंह द्वितीय ने मेवाड़ साम्राज्य की नई राजधानी के रूप में की थी। एक शाही किंवदंती के अनुसार, राजा अरावली पहाड़ियों में शिकार कर रहे थे जब उनकी मुलाकात पिछोला झील के किनारे ध्यान मग्न एक साधु से हुई। साधु ने राजा को आशीर्वाद दिया और सलाह दी कि वे इसी स्थान पर अपना नया महल बनाएं, क्योंकि यह चारों तरफ से पानी और पहाड़ियों से घिरा होने के कारण दुश्मनों के आक्रमण से हमेशा सुरक्षित रहेगा। राजा ने साधु की बात मानी और भव्य सिटी पैलेस का निर्माण करवाया। इस तरह उदयपुर सूखे राजस्थान के बीच एक खूबसूरत नखलिस्तान बन गया, जिसे आज दुनिया भर में 'पूर्व का वेनिस' भी कहा जाता है।"
    },
    travelTips: [
      "पिछोला झील में नौका विहार के लिए निजी होटलों के बजाय सीधे सिटी पैलेस के पास स्थित सरकारी निगम की जेटी से टिकट खरीदें, जिससे आधा पैसा बचेगा।",
      "मानसून पैलेस के प्रवेश द्वार पर ही सरकारी जीप बुक करें; वहाँ की घुमावदार पहाड़ी सड़कों पर निजी गाड़ियां ले जाने की अनुमति नहीं है।",
      "बागोर की हवेली में शाम 7:00 बजे होने वाले लोक नृत्य शो की टिकट शाम 6:15 बजे तक खरीद लें; ये टिकट बहुत जल्दी बिक जाते हैं।",
      "पुराने शहर की संकरी ऐतिहासिक गलियों में बड़ी टैक्सियों के बजाय पैदल या ऑटो-रिक्शा का उपयोग करें क्योंकि बड़ी गाड़ियां अक्सर जाम में फंस जाती हैं।",
      "झील के किनारे बने किसी हेरिटेज हवेली में ठहरें ताकि आप सीधे खिड़की से सुबह और शाम के सुंदर दृश्यों का आनंद ले सकें।"
    ],
    weather: {
      temperature: "29°C",
      bestSeason: "सितंबर से मार्च",
      airQuality: "उत्कृष्ट"
    },
    emergencyNumbers: {
      police: "112",
      ambulance: "102",
      hospital: "गीतांजलि अस्पताल उदयपुर",
      hospitalPhone: "0294-2500000",
      touristHelpline: "1363"
    },
    aiExplanation: "उदयपुर भारत का सबसे रोमांटिक और झीलों से घिरा शहर है। यह यात्रा कार्यक्रम आपके बजट में ऐतिहासिक किलों, लोक नृत्यों और नाव की सवारी का सर्वश्रेष्ठ आनंद देता है।",
    matchScore: 96
  }
};

export function getFallbackGuide(destination: string, isHindi: boolean): FallbackGuide | null {
  const norm = destination.toLowerCase().trim();
  let key = "";
  if (norm.includes("varanasi") || norm.includes("banaras") || norm.includes("kashi") || norm.includes("amritsar") || norm.includes("rishikesh")) {
    key = "varanasi";
  } else if (norm.includes("jaipur") || norm.includes("pink city") || norm.includes("agra") || norm.includes("taj mahal") || norm.includes("delhi") || norm.includes("jaisalmer") || norm.includes("leh")) {
    key = "jaipur";
  } else if (norm.includes("munnar") || norm.includes("kochi") || norm.includes("kochhi") || norm.includes("cochin") || norm.includes("kerala") || norm.includes("alleppey") || norm.includes("trivandrum") || norm.includes("manali") || norm.includes("shimla") || norm.includes("srinagar") || norm.includes("darjeeling") || norm.includes("ooty")) {
    key = "munnar";
  } else if (norm.includes("goa") || norm.includes("mumbai") || norm.includes("bombay") || norm.includes("pune") || norm.includes("konkan") || norm.includes("pondicherry")) {
    key = "goa";
  } else if (norm.includes("hampi") || norm.includes("vijayanagara") || norm.includes("bangalore") || norm.includes("bengaluru") || norm.includes("mysore") || norm.includes("mysuru")) {
    key = "hampi";
  } else if (norm.includes("udaipur")) {
    key = "udaipur";
  }

  if (!key) return null;

  return isHindi ? FALLBACKS_HI[key] : FALLBACKS_EN[key];
}

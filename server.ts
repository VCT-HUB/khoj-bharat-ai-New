import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import { GoogleGenAI, Type, ThinkingLevel } from "@google/genai";
import { createServer as createViteServer } from "vite";
import { getFallbackGuide } from "./server-fallbacks";

// Load environment variables in development
dotenv.config();

// Server-side in-memory cache for ultra-fast response times on repeated searches
const guideCache = new Map<string, any>();
const translationCache = new Map<string, any>();
const MAX_CACHE_SIZE = 150;

function getCachedGuide(key: string): any {
  return guideCache.get(key) || null;
}

function setCachedGuide(key: string, value: any) {
  if (guideCache.size >= MAX_CACHE_SIZE) {
    const oldestKey = guideCache.keys().next().value;
    if (oldestKey) guideCache.delete(oldestKey);
  }
  guideCache.set(key, value);
}

function getCachedTranslation(key: string): any {
  return translationCache.get(key) || null;
}

function setCachedTranslation(key: string, value: any) {
  if (translationCache.size >= MAX_CACHE_SIZE) {
    const oldestKey = translationCache.keys().next().value;
    if (oldestKey) translationCache.delete(oldestKey);
  }
  translationCache.set(key, value);
}

const app = express();
const PORT = 3000;

// Log file path
const logFilePath = path.join(process.cwd(), "api-request.log");

// Middleware to parse JSON request body
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  const logMsg = `[${new Date().toISOString()}] ${req.method} ${req.url}\nHeaders: ${JSON.stringify(req.headers)}\nBody: ${JSON.stringify(req.body)}\n--------------------\n`;
  try {
    fs.appendFileSync(logFilePath, logMsg, "utf8");
  } catch (err) {
    console.error("Failed to write to log file:", err);
  }
  next();
});

// Helper to get Gemini client dynamically with validation
const getGeminiClient = (res: any) => {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key.trim() === "") {
    res.status(500).json({
      error: "Missing GEMINI_API_KEY. Please ensure you have configured the GEMINI_API_KEY environment variable in your hosting provider's settings."
    });
    return null;
  }
  return new GoogleGenAI({
    apiKey: key,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// Standard error handling helper for Gemini API calls
function handleGeminiError(error: any, res: any) {
  console.error("Gemini API Error:", error);
  const errMsg = error?.message || String(error);
  const errStack = error?.stack || "";
  
  try {
    fs.appendFileSync(logFilePath, `[ERROR ${new Date().toISOString()}] ${errMsg}\nStack: ${errStack}\n--------------------\n`, "utf8");
  } catch (err) {
    console.error("Failed to write error to log file:", err);
  }
  
  if (
    errMsg.includes("429") || 
    errMsg.includes("ResourceExhausted") || 
    errMsg.includes("rate limit") || 
    errMsg.includes("Quota exceeded")
  ) {
    return res.status(429).json({
      error: "Gemini API rate limit exceeded. Please wait a moment before trying again."
    });
  }
  
  if (
    errMsg.includes("API key not valid") || 
    errMsg.includes("API_KEY_INVALID") || 
    errMsg.includes("invalid key") || 
    errMsg.includes("403") || 
    errMsg.includes("Unauthorized") ||
    errMsg.includes("401")
  ) {
    return res.status(401).json({
      error: "The configured GEMINI_API_KEY is invalid or unauthorized. Please verify your API key in your hosting environment variables."
    });
  }
  
  return res.status(502).json({
    error: `Gemini API returned an error: ${errMsg}`
  });
}

// Define the response schema for the personalized travel guide JSON output
const travelGuideSchema = {
  type: Type.OBJECT,
  properties: {
    destination: { type: Type.STRING },
    hiddenGems: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING },
          estimatedCost: { type: Type.STRING },
          bestTime: { type: Type.STRING },
        },
        required: ["name", "description", "estimatedCost", "bestTime"],
      },
    },
    localFood: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          dishName: { type: Type.STRING },
          description: { type: Type.STRING },
          famousRestaurants: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          approxPrice: { type: Type.STRING },
        },
        required: ["dishName", "description", "famousRestaurants", "approxPrice"],
      },
    },
    localCulture: {
      type: Type.OBJECT,
      properties: {
        customs: { type: Type.STRING },
        dressCode: { type: Type.STRING },
        greetingStyle: { type: Type.STRING },
        thingsToAvoid: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
        },
      },
      required: ["customs", "dressCode", "greetingStyle", "thingsToAvoid"],
    },
    oneDayItinerary: {
      type: Type.OBJECT,
      properties: {
        morning: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            activity: { type: Type.STRING },
          },
          required: ["title", "activity"],
        },
        afternoon: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            activity: { type: Type.STRING },
          },
          required: ["title", "activity"],
        },
        evening: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            activity: { type: Type.STRING },
          },
          required: ["title", "activity"],
        },
      },
      required: ["morning", "afternoon", "evening"],
    },
    estimatedBudget: {
      type: Type.OBJECT,
      properties: {
        breakdown: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              item: { type: Type.STRING },
              cost: { type: Type.STRING },
            },
            required: ["item", "cost"],
          },
        },
        totalCost: { type: Type.STRING },
        summary: { type: Type.STRING },
      },
      required: ["breakdown", "totalCost", "summary"],
    },
    weather: {
      type: Type.OBJECT,
      properties: {
        temperature: { type: Type.STRING },
        bestSeason: { type: Type.STRING },
        airQuality: { type: Type.STRING },
      },
      required: ["temperature", "bestSeason", "airQuality"],
    },
    emergencyNumbers: {
      type: Type.OBJECT,
      properties: {
        police: { type: Type.STRING },
        ambulance: { type: Type.STRING },
        hospital: { type: Type.STRING },
        hospitalPhone: { type: Type.STRING },
        touristHelpline: { type: Type.STRING },
      },
      required: ["police", "ambulance", "hospital", "hospitalPhone", "touristHelpline"],
    },
    storyCorner: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        story: { type: Type.STRING },
      },
      required: ["title", "story"],
    },
    travelTips: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
    },
    aiExplanation: { type: Type.STRING },
    matchScore: { type: Type.INTEGER },
  },
  required: [
    "destination",
    "hiddenGems",
    "localFood",
    "localCulture",
    "oneDayItinerary",
    "estimatedBudget",
    "storyCorner",
    "travelTips",
    "weather",
    "emergencyNumbers",
    "aiExplanation",
    "matchScore",
  ],
};

function isNonIndianDestination(dest: string): boolean {
  const normalized = dest.toLowerCase().trim();
  
  // List of common non-Indian countries, regions, continents, and major tourist cities
  const nonIndianKeywords = [
    "france", "paris", "italy", "rome", "japan", "tokyo", "kyoto", "osaka", "usa", "united states", "america", "new york", "nyc", "london", "uk", "united kingdom", "england", "spain", "madrid", "barcelona", "germany", "berlin", "munich", "switzerland", "zurich", "geneva", "singapore", "thailand", "bangkok", "phuket", "malaysia", "kuala lumpur", "indonesia", "bali", "vietnam", "hanoi", "saigon", "dubai", "uae", "egypt", "cairo", "greece", "athens", "turkey", "istanbul", "maldives", "canada", "toronto", "vancouver", "australia", "sydney", "melbourne", "new zealand", "russia", "moscow", "china", "beijing", "shanghai", "brazil", "rio", "argentina", "buenos aires", "mexico", "south africa", "cape town", "johannesburg", "iceland", "reykjavik", "peru", "cusco", "lima", "czech", "prague", "austria", "vienna", "belgium", "brussels", "netherlands", "amsterdam", "portugal", "lisbon", "nepal", "kathmandu", "bhutan", "sri lanka", "colombo", "bangladesh", "dhaka", "pakistan", "europe", "asia", "africa", "america", "antarctica"
  ];

  return nonIndianKeywords.some(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    return regex.test(normalized);
  });
}

// API Endpoint to generate the personalized travel guide
app.post("/api/explore", async (req, res) => {
  const { destination, travelStyle, budget, interests, language } = req.body;

  if (!destination) {
    return res.status(400).json({ error: "Destination is required." });
  }

  const isHindi = language === "Hindi";

  if (isNonIndianDestination(destination)) {
    const errorMsg = isHindi
      ? "खोज भारत एआई विशेष रूप से भारत के भीतर सुंदर और गहरे अनुभव प्रदान करने के लिए डिज़ाइन किया गया है। इसके अलावा, फ्रांस या पेरिस जैसे अंतर्राष्ट्रीय गंतव्यों की यात्रा ₹22,500 जैसी सामान्य बजट सीमाओं के भीतर संभव नहीं है! कृपया कोई भारतीय गंतव्य दर्ज करें (जैसे, वाराणसी, मुन्नार, हम्पी, जयपुर, गोवा, उदयपुर)।"
      : "Khoj Bharat Ai is exclusively designed to curate beautiful and immersive experiences within India. Additionally, international destinations like France, Paris, or other overseas places cannot be accomplished within standard budget limits like ₹22,500 INR! Please enter an Indian destination (e.g., Varanasi, Munnar, Hampi, Jaipur, Goa, Udaipur).";
    return res.status(400).json({ error: errorMsg });
  }

  // Pre-fetch fallback if it exists
  const fallback = getFallbackGuide(destination, isHindi);

  // Check server-side cache first for ultra-fast response times on duplicate requests
  const cacheKey = `${destination.toLowerCase().trim()}_${travelStyle || "Solo"}_${budget || "Not specified"}_${Array.isArray(interests) ? interests.sort().join(",") : interests || "General"}_${language || "English"}`;
  const cached = getCachedGuide(cacheKey);
  if (cached) {
    console.log(`[INFO] Serving cached guide for ${destination} in ${language || "English"}`);
    return res.json(cached);
  }

  const ai = getGeminiClient(res);
  if (!ai) {
    if (fallback) {
      console.log(`[INFO] Gemini client missing. Serving fallback for ${destination}`);
      return res.json(fallback);
    }
    return;
  }

  try {
    const promptText = `
You are Khoj Bharat Ai, an expert local travel guide and cultural storyteller.

CRITICAL DISCOVERY REQUIREMENT:
Khoj Bharat Ai is strictly optimized for discovering and exploring beautiful, culturally rich destinations in INDIA ONLY. 
If the requested destination "${destination}" is NOT in India (for example: France, Paris, Europe, Tokyo, Kyoto, USA, any international city or country outside India), you MUST detect this.
If the requested destination is outside of India:
1. Set the JSON field "destination" to "OUTSIDE_INDIA".
2. Set the JSON field "aiExplanation" to a polite and informative message in English (or Hindi if requested) explaining that:
   - Khoj Bharat Ai is exclusively optimized for Indian travel discovery.
   - International travel (like to France, Paris, etc.) is absolutely not possible within standard domestic budgets like ₹22,500 INR (or their requested budget ₹${budget} INR).
   - Invite them to explore beautiful Indian destinations instead (e.g. Varanasi, Hampi, Munnar, Udaipur, Goa).
3. Set all other fields in the JSON to empty arrays or default placeholder strings to satisfy the schema constraints.

If the destination "${destination}" IS inside India, then proceed with the standard rich, personalized travel guide generation as requested below.

The traveler provides:
Destination: ${destination}
Travel Style: ${travelStyle || "Solo"}
Budget Limit: ₹${budget || "Not specified"} INR
Interests: ${Array.isArray(interests) ? interests.join(", ") : interests || "General interest"}

Generate a personalized travel guide for this destination that strictly aligns with the traveler's style, budget limit, and interests.

CRITICAL BUDGET INSTRUCTION:
You MUST update all itinerary recommendations, hidden gems, restaurants, food, transport, attractions, and estimated expenses according to the selected budget of ₹${budget} INR.
- For LOWER budgets (relative to the travel style range), prioritize free or extremely cheap attractions, delicious local street food joints, and safe public transit (buses, metros, trains, local autos).
- For HIGHER budgets (relative to the travel style range), recommend premium or luxury dine-in restaurants, private cabs/transports, customized guides, and exclusive, premium cultural experiences.

You must populate all response schema fields:
- "hiddenGems": Recommend exactly 3 lesser-known, authentic, or unique attractions. Explain why each is special, the estimated cost, and the best visiting time. Ensure these costs align strictly with the ₹${budget} budget limit!
- "localFood": Recommend exactly 3 authentic dishes of the region. Mention some famous local restaurants/eats where these can be found, and approximate prices. Ensure the restaurant choices and price levels match a ₹${budget} budget constraint!
- "localCulture": Explain local customs, dress codes, greeting styles, and things visitors should avoid.
- "oneDayItinerary": Provide a cohesive 1-day sample itinerary structured into Morning, Afternoon, and Evening activities. Ensure transit options and activity pricing match a ₹${budget} budget constraint (public transport & free/low-cost entries vs private tours & high-end activities)!
- "estimatedBudget": Present a realistic, detailed estimated budget breakdown (with breakdown items adding up approximately to fit their style and budget limit of ₹${budget}), along with a helpful, summarizing text.
- "storyCorner": Write a beautiful, descriptive, and highly engaging cultural story of around 150 words that captures the soul, history, or myth of this destination. Give it an appealing "title".
- "travelTips": Provide exactly 5 highly useful travel tips (safety, navigation, saving money or luxury experiences, etc.) tailored for this traveler.
- "weather": Provide realistic weather conditions for the current time of the year at this destination (e.g. temperature like "32°C", best season like "October-February", and Air Quality like "Good").
- "emergencyNumbers": Suggest highly realistic emergency local contacts tailored to the chosen destination of ${destination} (e.g. realistic local Police numbers, local Ambulance numbers, a real/realistic named main public/government Hospital nearby in "hospital", the direct phone number for that hospital inside "hospitalPhone" which can allow users to click and call, and realistic Local/National Tourist Helpline).
- "aiExplanation": Provide a beautifully crafted, personalized, 3-4 sentence explanation of why Gemini chose this itinerary. It should explicitly explain how your recommendations match the destination, their travel style (${travelStyle}), their budget of ₹${budget}, and their selected interests.
- "matchScore": Provide an integer between 90 and 99 reflecting how perfectly this itinerary satisfies the traveler's combination of preferences.
`;

    let languageInstruction = "";
    if (isHindi) {
      languageInstruction = `
CRITICAL LANGUAGE INSTRUCTION:
You MUST generate ALL string values in the JSON output in beautiful, warm, and highly natural Hindi (हिन्दी) only. Do NOT use English text for names, descriptions, tips, itineraries, budget summaries, stories, or explanations. Ensure all text matches what a native storyteller from India would say.
Keep the structural keys of the JSON exactly in English as defined by the responseSchema, but all actual string values must be in Hindi.
`;
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText + languageInstruction,
      config: {
        systemInstruction: "You are Khoj Bharat Ai, an expert local travel guide and cultural storyteller. Always speak with passion, cultural accuracy, and hospitality.",
        responseMimeType: "application/json",
        responseSchema: travelGuideSchema,
        temperature: 1.0,
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.LOW, // Minimizes latency by reducing deep analytical thinking overhead
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response received from Gemini.");
    }

    const data = JSON.parse(text);

    if (data.destination === "OUTSIDE_INDIA") {
      const errorMsg = isHindi
        ? "खोज भारत एआई विशेष रूप से भारत के भीतर सुंदर और गहरे अनुभव प्रदान करने के लिए डिज़ाइन किया गया है। इसके अलावा, फ्रांस या पेरिस जैसे अंतर्राष्ट्रीय गंतव्यों की यात्रा ₹22,500 जैसी सामान्य बजट सीमाओं के भीतर संभव नहीं है! कृपया कोई भारतीय गंतव्य दर्ज करें (जैसे, वाराणसी, मुन्नार, हम्पी, जयपुर, गोवा, उदयपुर)।"
        : "Khoj Bharat Ai is exclusively designed to curate beautiful and immersive experiences within India. Additionally, international destinations like France, Paris, or other overseas places cannot be accomplished within standard budget limits like ₹22,500 INR! Please enter an Indian destination (e.g., Varanasi, Munnar, Hampi, Jaipur, Goa, Udaipur).";
      return res.status(400).json({ error: errorMsg });
    }

    // Cache the successfully generated guide
    setCachedGuide(cacheKey, data);

    return res.json(data);�के अलावा, फ्रांस या पेरिस जैसे अंतर्राष्ट्रीय गंतव्यों की यात्रा ₹22,500 जैसी सामान्य बजट सीमाओं के भीतर संभव नहीं है! कृपया कोई भारतीय गंतव्य दर्ज करें (जैसे, वाराणसी, मुन्नार, हम्पी, जयपुर, गोवा, उदयपुर)।"
        : "Khoj Bharat Ai is exclusively designed to curate beautiful and immersive experiences within India. Additionally, international destinations like France, Paris, or other overseas places cannot be accomplished within standard budget limits like ₹22,500 INR! Please enter an Indian destination (e.g., Varanasi, Munnar, Hampi, Jaipur, Goa, Udaipur).";
      return res.status(400).json({ error: errorMsg });
    }

    return res.json(data);
  } catch (error: any) {
    console.error("Gemini call failed. Checking for fallback...", error);
    
    if (fallback) {
      console.log(`[INFO] Serving high-quality offline fallback guide for ${destination}`);
      return res.json(fallback);
    }

    const errMsg = error?.message || String(error);
    if (
      errMsg.includes("429") || 
      errMsg.includes("ResourceExhausted") || 
      errMsg.includes("rate limit") || 
      errMsg.includes("Quota exceeded")
    ) {
      const userFriendlyQuotaError = isHindi
        ? "खोज भारत एआई के पास इस समय अत्यधिक ट्रैफ़िक है और दैनिक एआई कोटा समाप्त हो गया है। हालांकि, हमारा उच्च-गुणवत्ता वाला ऑफ़लाइन मोड दर्जनों लोकप्रिय गंतव्यों का समर्थन करता है! तुरंत यात्रा गाइड के लिए वाराणसी, जयपुर, मुन्नार, गोवा, हम्पी, उदयपुर, कोच्चि, दिल्ली, आगरा, मुंबई, बैंगलोर, या ऋषिकेश खोजें!"
        : "Khoj Bharat Ai is currently experiencing high demand and our daily AI consultation quota has been reached. However, our high-quality offline mode supports dozens of popular destinations! Try searching for Varanasi, Jaipur, Munnar, Goa, Hampi, Udaipur, Kochi, Delhi, Agra, Mumbai, Bangalore, or Rishikesh for a fully-featured travel guide instantly!";
      return res.status(429).json({ error: userFriendlyQuotaError });
    }

    return handleGeminiError(error, res);
  }
});

// API Endpoint to translate the entire JSON guide into Hindi
app.post("/api/translate", async (req, res) => {
  const { guide, targetLanguage } = req.body;

  if (!guide || !targetLanguage) {
    return res.status(400).json({ error: "Guide data and targetLanguage are required." });
  }

  const destination = guide?.destination || "";
  const isTargetHindi = targetLanguage === "Hindi";
  const fallbackTranslation = getFallbackGuide(destination, isTargetHindi);

  if (fallbackTranslation) {
    console.log(`[INFO] Serving high-quality pre-translated guide for ${destination} (${targetLanguage})`);
    return res.json(fallbackTranslation);
  }

  const ai = getGeminiClient(res);
  if (!ai) return;

  try {
    const promptText = `
You are a professional native translator. Translate the following travel guide JSON object into ${targetLanguage}.
You MUST keep all structural keys exactly the same. Only translate the string values (e.g. names, descriptions, customs, story, breakdown items, tips, etc.).
Ensure the translations are culturally appropriate, beautiful, and read naturally in ${targetLanguage}.

JSON Object to Translate:
${JSON.stringify(guide)}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        responseMimeType: "application/json",
        responseSchema: travelGuideSchema,
        temperature: 0.3, // Lower temperature for faithful translation
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No translation response received from Gemini.");
    }

    const translatedData = JSON.parse(text);
    return res.json(translatedData);
  } catch (error: any) {
    return handleGeminiError(error, res);
  }
});

// API Endpoint for the follow-up chat "Ask Local AI"
app.post("/api/ask-local-ai", async (req, res) => {
  const { history, question, context, language } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required." });
  }

  const ai = getGeminiClient(res);
  if (!ai) return;

  try {
    let systemPrompt = `You are Khoj Bharat Ai, an expert local travel guide and cultural storyteller. 
The user previously generated a travel guide for the destination: "${context?.destination || "their destination"}".
They had the following preferences: Style: ${context?.travelStyle || "any"}, Budget: ₹${context?.budget || "any"}, Interests: ${context?.interests?.join(", ") || "any"}.

Always be warm, highly informative, culturally respectful, and passionate. Provide tips and recommendations specific to their query. Try to keep responses concise and engaging. Use markdown formatting.`;

    if (language === "Hindi") {
      systemPrompt += `\n\nCRITICAL LANGUAGE INSTRUCTION: You MUST respond in highly natural, warm, and beautiful Hindi (हिन्दी) only. Do not use English for your explanations unless referring to specific English names or terms. Generate all details, recommendations, and cultural storytelling in natural Hindi so the user feels they are talking to a native storyteller.`;
    }

    // Map client conversation history to Gemini structure
    const contents: any[] = [];
    if (Array.isArray(history)) {
      history.forEach((msg: any) => {
        contents.push({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.text }],
        });
      });
    }

    // Append current user question
    contents.push({
      role: "user",
      parts: [{ text: question }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.9,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response received from Gemini.");
    }

    return res.json({ response: text });
  } catch (error: any) {
    const errMsg = error?.message || String(error);
    if (
      errMsg.includes("429") || 
      errMsg.includes("ResourceExhausted") || 
      errMsg.includes("rate limit") || 
      errMsg.includes("Quota exceeded")
    ) {
      const userFriendlyChatError = language === "Hindi"
        ? `खोज भारत एआई के पास इस समय अत्यधिक ट्रैफ़िक है और हमारी वास्तविक समय बातचीत प्रणाली दैनिक सीमा पर पहुंच गई है। हम ${context?.destination || "भारत"} के बारे में आपकी जिज्ञासा की सराहना करते हैं! कृपया कुछ समय प्रतीक्षा करें या हमारे मुख्य क्यूरेटेड गाइड्स जैसे वाराणसी, जयपुर, मुन्नार, गोवा, हम्पी या उदयपुर को देखें।`
        : `Khoj Bharat Ai is currently experiencing high demand and our real-time AI conversation system has reached its daily limit. We appreciate your curiosity about ${context?.destination || "India"}! Please wait a moment or try exploring one of our main curated guides for Varanasi, Jaipur, Munnar, Goa, Hampi, or Udaipur.`;
      return res.status(429).json({ error: userFriendlyChatError });
    }
    return handleGeminiError(error, res);
  }
});

// Setup Vite Dev server or static files depending on environment
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Culture Compass AI backend server is running on port ${PORT}`);
  });
}

startServer();

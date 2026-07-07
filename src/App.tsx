import React, { useState } from "react";
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  ArrowLeft, 
  AlertCircle, 
  Map, 
  Info,
  CalendarDays,
  RefreshCw,
  Heart,
  Globe
} from "lucide-react";
import { TravelGuide, ChatMessage } from "./types";
import InputForm from "./components/InputForm";
import GuideCards from "./components/GuideCards";
import ChatSection from "./components/ChatSection";
import WelcomePanel from "./components/WelcomePanel";
import LoadingPanel from "./components/LoadingPanel";
import MapPreview from "./components/MapPreview";
import BrandLogo from "./components/BrandLogo";
import { LOCALIZATION } from "./localization";

const LOCALIZED_APP: Record<string, Record<string, string>> = {
  English: {
    travelStyleExplorer: "Explorer",
    aiMatch: "AI Match",
    bestSeason: "Best Season:",
    aqi: "AQI:",
    compiledOn: "Tailored cultural guide compiled on",
    budgetContext: "Budget Context",
    whyGemini: "Why Gemini Chose This Itinerary",
    translateGuide: "Translate Guide:",
    downloadPdf: "Download Travel Guide PDF",
    translating: "Translating entire guide...",
    personalizationTitle: "Personalization Engine Summary",
    personalizationDesc: "This travel guide was custom synthesized by Gemini 3.5 Flash based on your unique combination of preferences. The model analyzed the following constraints to refine every recommendation:",
    travelStyle: "Travel Style",
    budgetTarget: "Budget Target",
    keyInterests: "Key Interests",
    constraintsApplied: "Real-time constraints applied:",
    constraintsDesc: "All recommended places, local street food eateries, specific transport modes, and overall estimated budget breakdowns have been locked to fit within your maximum cap of"
  },
  Hindi: {
    travelStyleExplorer: "यात्री",
    aiMatch: "एआई मिलान",
    bestSeason: "सबसे अच्छा मौसम:",
    aqi: "वायु गुणवत्ता (AQI):",
    compiledOn: "विशेष सांस्कृतिक मार्गदर्शिका तैयार की गई",
    budgetContext: "बजट संदर्भ",
    whyGemini: "जैमिनी ने इस यात्रा कार्यक्रम को क्यों चुना",
    translateGuide: "मार्गदर्शिका का अनुवाद करें:",
    downloadPdf: "यात्रा मार्गदर्शिका PDF डाउनलोड करें",
    translating: "पूरी मार्गदर्शिका का अनुवाद किया जा रहा है...",
    personalizationTitle: "व्यक्तिगत प्राथमिकता इंजन सारांश",
    personalizationDesc: "यह यात्रा मार्गदर्शिका आपके द्वारा चुनी गई विशिष्ट प्राथमिकताओं के आधार पर जैमिनी 3.5 फ्लैश द्वारा तैयार की गई है। मॉडल ने प्रत्येक सिफारिश को परिष्कृत करने के लिए निम्नलिखित मापदंडों का विश्लेषण किया:",
    travelStyle: "यात्रा शैली",
    budgetTarget: "बजट लक्ष्य",
    keyInterests: "मुख्य रुचियां",
    constraintsApplied: "वास्तविक समय की सीमाएं लागू की गईं:",
    constraintsDesc: "सभी अनुशंसित स्थान, स्थानीय स्ट्रीट फूड भोजनालय, विशिष्ट परिवहन मोड और समग्र अनुमानित बजट आपके अधिकतम बजट सीमा के भीतर ही रखे गए हैं, जो कि है"
  }
};

const parseApiResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type") || "";
  
  if (!response.ok) {
    if (!contentType.includes("application/json")) {
      if (response.status === 502 || response.status === 503 || response.status === 504) {
        throw new Error(`Server is temporarily busy or starting up (Status ${response.status}). Please wait a few seconds and click 'Retry Consultation'.`);
      }
      throw new Error(`Server returned an error (Status ${response.status}). Please try again in a moment.`);
    }
  }

  if (!contentType.includes("application/json")) {
    throw new Error(
      `Invalid response format from server (Status ${response.status}). Please verify that your internet connection is stable and try again.`
    );
  }

  try {
    const data = await response.json();
    return data;
  } catch (parseErr) {
    throw new Error(
      "Failed to parse server response. Please try again."
    );
  }
};

export default function App() {
  // Application State
  const [guide, setGuide] = useState<TravelGuide | null>(null);
  const [originalGuide, setOriginalGuide] = useState<TravelGuide | null>(null); // English version cache
  const [hindiGuide, setHindiGuide] = useState<TravelGuide | null>(null);       // Hindi version cache
  const [currentLanguage, setCurrentLanguage] = useState<string>("English");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [highlightedGemIndex, setHighlightedGemIndex] = useState<number | null>(null);
  const [generationTimeMs, setGenerationTimeMs] = useState<number | null>(null);

  const tApp = LOCALIZED_APP[currentLanguage] || LOCALIZED_APP.English;

  const getTranslatedStyle = (style: string | undefined, overrideLang?: string) => {
    if (!style) return "";
    const lang = overrideLang || currentLanguage;
    if (lang === "Hindi") {
      const map: Record<string, string> = {
        Solo: "एकल",
        Couple: "युगल",
        Family: "पारिवारिक",
        Friends: "मित्रों"
      };
      return map[style] || style;
    }
    return style;
  };

  const getTranslatedInterest = (interest: string, overrideLang?: string) => {
    const lang = overrideLang || currentLanguage;
    if (lang === "Hindi") {
      const map: Record<string, string> = {
        Food: "भोजन",
        Heritage: "धरोहर",
        Nature: "प्रकृति",
        Photography: "फोटोग्राफी",
        Shopping: "खरीदारी",
        Festivals: "त्यौहार"
      };
      return map[interest] || interest;
    }
    return interest;
  };

  const getGreetingText = (dest: string, style: string, budgetVal: string, interestsList: string[], lang: string) => {
    if (lang === "Hindi") {
      return `${dest} में आपका स्वागत है! 🧭\n\nमैं आपका निजी स्थानीय सांस्कृतिक गाइड हूँ। मैं देख रहा हूँ कि आप ₹${parseInt(budgetVal).toLocaleString("en-IN")} के बजट के साथ ${getTranslatedStyle(style, "Hindi")} के रूप में यात्रा कर रहे हैं और आपकी मुख्य रुचियाँ ${interestsList.map(i => getTranslatedInterest(i, "Hindi")).join(", ")} में हैं।\n\nमुझसे कुछ भी पूछें! मैं आपको दिशा-निर्देश दे सकता हूँ, स्थानीय शब्द सिखा सकता हूँ, समय के बारे में सुझाव दे सकता हूँ, या आपकी आवश्यकताओं के अनुसार योजना बदल सकता हूँ!`;
    } else {
      return `Welcome to ${dest}! 🧭\n\nI'm your personal local cultural storyteller. I see you are exploring as a ${style} with a budget of ₹${parseInt(budgetVal).toLocaleString("en-IN")} and key interests in ${interestsList.join(", ")}.\n\nAsk me anything! I can give you directions, teach you local words, suggest customized timings, or adapt the itinerary to your needs!`;
    }
  };

  // Active form values for context
  const [activeParams, setActiveParams] = useState<{
    destination: string;
    travelStyle: string;
    budget: string;
    interests: string[];
  } | null>(null);

  // Follow-up Chat State
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isChatGenerating, setIsChatGenerating] = useState(false);

  // Trigger search execution
  const handleExplore = async (params: {
    destination: string;
    travelStyle: string;
    budget: string;
    interests: string[];
  }) => {
    setIsLoading(true);
    setError(null);
    setGuide(null);
    setOriginalGuide(null);
    setHindiGuide(null);
    const savedLang = currentLanguage; // Preserve language state
    setChatHistory([]);
    setHighlightedGemIndex(null);
    setActiveParams(params);
    setGenerationTimeMs(null);

    const startTime = performance.now();

    try {
      const response = await fetch("/api/explore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...params, language: savedLang }),
      });

      const data = await parseApiResponse(response);

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate travel guide.");
      }

      const endTime = performance.now();
      setGenerationTimeMs(Math.round(endTime - startTime));

      if (savedLang === "Hindi") {
        setHindiGuide(data);
      } else {
        setOriginalGuide(data);
      }

      setGuide(data);

      // Initialize the Local Companion Chat with a personalized greeting in correct language
      const greetingText = getGreetingText(
        data.destination,
        params.travelStyle,
        params.budget,
        params.interests,
        savedLang
      );

      const greeting: ChatMessage = {
        id: "greeting-" + Date.now(),
        role: "assistant",
        text: greetingText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatHistory([greeting]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred while consulting Gemini AI. Please check your credentials or try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger follow-up chat execution
  const handleSendChatMessage = async (text: string) => {
    if (!guide || !activeParams || isChatGenerating) return;

    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      role: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatHistory((prev) => [...prev, userMsg]);
    setIsChatGenerating(true);

    try {
      const chatHistoryForBackend = chatHistory.map((msg) => ({
        role: msg.role,
        text: msg.text,
      }));

      const response = await fetch("/api/ask-local-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          history: chatHistoryForBackend,
          question: text,
          context: activeParams,
          language: currentLanguage,
        }),
      });

      const data = await parseApiResponse(response);

      if (!response.ok) {
        throw new Error(data.error || "Local AI failed to generate response.");
      }

      const assistantMsg: ChatMessage = {
        id: "assistant-" + Date.now(),
        role: "assistant",
        text: data.response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setChatHistory((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: "error-" + Date.now(),
        role: "assistant",
        text: "I am experiencing some connectivity issues communicating with the local spirits. Let's try sending that question again in a second!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatHistory((prev) => [...prev, errorMsg]);
    } finally {
      setIsChatGenerating(false);
    }
  };

  // Translate full guide dynamically via Gemini backend
  const handleTranslate = async (lang: string) => {
    if (lang === currentLanguage || isTranslating) return;

    if (!guide) {
      setCurrentLanguage(lang);
      return;
    }

    // Check caches first
    if (lang === "English" && originalGuide) {
      setGuide(originalGuide);
      setCurrentLanguage("English");
      setChatHistory((prev) => {
        return prev.map((msg) => {
          if (msg.id.startsWith("greeting-")) {
            return {
              ...msg,
              text: getGreetingText(
                originalGuide.destination,
                activeParams?.travelStyle || "Solo",
                activeParams?.budget || "5000",
                activeParams?.interests || [],
                "English"
              ),
            };
          }
          return msg;
        });
      });
      return;
    }

    if (lang === "Hindi" && hindiGuide) {
      setGuide(hindiGuide);
      setCurrentLanguage("Hindi");
      setChatHistory((prev) => {
        return prev.map((msg) => {
          if (msg.id.startsWith("greeting-")) {
            return {
              ...msg,
              text: getGreetingText(
                hindiGuide.destination,
                activeParams?.travelStyle || "Solo",
                activeParams?.budget || "5000",
                activeParams?.interests || [],
                "Hindi"
              ),
            };
          }
          return msg;
        });
      });
      return;
    }

    // Cache miss: dynamically perform translation
    setIsTranslating(true);
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          guide: guide,
          targetLanguage: lang,
        }),
      });

      const translatedData = await parseApiResponse(response);

      if (!response.ok) {
        throw new Error(translatedData.error || "Failed to translate guide.");
      }

      // Save into cache
      if (lang === "Hindi") {
        setHindiGuide(translatedData);
      } else if (lang === "English") {
        setOriginalGuide(translatedData);
      }

      setGuide(translatedData);
      setCurrentLanguage(lang);
      setChatHistory((prev) => {
        return prev.map((msg) => {
          if (msg.id.startsWith("greeting-")) {
            return {
              ...msg,
              text: getGreetingText(
                translatedData.destination,
                activeParams?.travelStyle || "Solo",
                activeParams?.budget || "5000",
                activeParams?.interests || [],
                lang
              ),
            };
          }
          return msg;
        });
      });
    } catch (err: any) {
      console.error(err);
      alert("We encountered an issue translating your guide. Please try again in a few seconds.");
    } finally {
      setIsTranslating(false);
    }
  };

  // Download printable guide booklet HTML
  const downloadGuideAsPDF = () => {
    if (!guide) return;

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Culture Compass Travel Guide - \${guide.destination}</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Playfair+Display:ital,wght@0,700;1,400&family=JetBrains+Mono:wght@700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      color: #1e293b;
      line-height: 1.6;
      margin: 0;
      padding: 40px;
      background-color: #ffffff;
    }
    .print-btn {
      position: fixed;
      top: 20px;
      right: 20px;
      background: #059669;
      color: white;
      border: none;
      padding: 12px 24px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
      transition: all 0.2s;
    }
    .print-btn:hover {
      background: #047857;
      transform: translateY(-1px);
    }
    @media print {
      .print-btn { display: none; }
      body { padding: 0; }
    }
    .header {
      border-bottom: 3px solid #10b981;
      padding-bottom: 24px;
      margin-bottom: 40px;
    }
    .title {
      font-family: 'Playfair Display', serif;
      font-size: 36px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 8px 0;
    }
    .meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 16px;
    }
    .badge {
      font-size: 11px;
      font-weight: bold;
      padding: 4px 12px;
      border-radius: 9999px;
      background-color: #f1f5f9;
      color: #475569;
    }
    .badge-brand {
      background-color: #ecfdf5;
      color: #047857;
    }
    .badge-accent {
      background-color: #fffbeb;
      color: #b45309;
    }
    .section-title {
      font-size: 20px;
      font-weight: 800;
      color: #0f172a;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 8px;
      margin-top: 32px;
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }
    @media (max-width: 768px) {
      .grid { grid-template-columns: 1fr; }
    }
    .card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      padding: 20px;
    }
    .card-title {
      font-size: 16px;
      font-weight: bold;
      margin: 0 0 10px 0;
      color: #1e293b;
    }
    .card-desc {
      font-size: 13px;
      color: #475569;
      margin-bottom: 16px;
    }
    .card-meta {
      font-size: 11px;
      font-weight: bold;
      color: #64748b;
      border-top: 1px dashed #cbd5e1;
      padding-top: 10px;
    }
    .itinerary-slot {
      margin-bottom: 20px;
      padding-left: 20px;
      border-left: 3px solid #10b981;
    }
    .slot-title {
      font-weight: bold;
      font-size: 15px;
      color: #0f172a;
    }
    .slot-desc {
      font-size: 13px;
      color: #475569;
      margin-top: 4px;
    }
    .story-section {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      text-align: center;
      background-color: #fffbeb;
      border: 1px solid #fef3c7;
      border-radius: 20px;
      padding: 30px;
      margin: 40px 0;
    }
    .story-title {
      font-size: 20px;
      font-weight: bold;
      color: #78350f;
      margin-bottom: 12px;
    }
    .story-text {
      font-size: 15px;
      color: #451a03;
      max-width: 650px;
      margin: 0 auto;
    }
    .emergency-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
    @media (max-width: 600px) {
      .emergency-grid { grid-template-columns: 1fr; }
    }
    .emergency-card {
      background: #fff5f5;
      border: 1px solid #fee2e2;
      border-radius: 12px;
      padding: 16px;
      text-align: center;
    }
    .emergency-val {
      font-family: 'JetBrains Mono', monospace;
      font-size: 16px;
      font-weight: bold;
      color: #dc2626;
      margin-top: 8px;
    }
  </style>
</head>
<body>
  <button class="print-btn" onclick="window.print()">Print to PDF / Save</button>

  <div class="header">
    <h1 class="title">Culture Compass Guide: \${guide.destination}</h1>
    <div class="meta-row">
      <span class="badge">Travel Style: \${activeParams?.travelStyle || "Solo"}</span>
      <span class="badge">Budget: ₹\${parseInt(activeParams?.budget || "0").toLocaleString("en-IN")}</span>
      <span class="badge">☀️ Temperature: \${guide.weather?.temperature || "32°C"}</span>
      <span class="badge">🍂 Best Season: \${guide.weather?.bestSeason || "October-February"}</span>
      <span class="badge">🍃 AQI: \${guide.weather?.airQuality || "Good"}</span>
    </div>
  </div>

  <div class="section-title">💎 Hidden Gems</div>
  <div class="grid">
    \${guide.hiddenGems.map((gem, index) => \`
      <div class="card">
        <h3 class="card-title">\${index + 1}. \${gem.name}</h3>
        <p class="card-desc">\${gem.description}</p>
        <div class="card-meta">
          Estimated Cost: \${gem.estimatedCost} <br/>
          Best Time: \${gem.bestTime}
        </div>
      </div>
    \`).join('')}
  </div>

  <div class="section-title">🍲 Local Food & Eateries</div>
  <div class="grid">
    \${guide.localFood.map((food, index) => \`
      <div class="card">
        <h3 class="card-title">\${index + 1}. \${food.dishName}</h3>
        <p class="card-desc">\${food.description}</p>
        <div class="card-meta">
          Eateries: \${food.famousRestaurants.join(', ')} <br/>
          Approx Cost: \${food.approxPrice}
        </div>
      </div>
    \`).join('')}
  </div>

  <div class="section-title">📅 Curated One-Day Itinerary</div>
  <div class="itinerary-slot">
    <div class="slot-title">🌅 Morning - \${guide.oneDayItinerary.morning.title}</div>
    <div class="slot-desc">\${guide.oneDayItinerary.morning.activity}</div>
  </div>
  <div class="itinerary-slot">
    <div class="slot-title">☀️ Afternoon - \${guide.oneDayItinerary.afternoon.title}</div>
    <div class="slot-desc">\${guide.oneDayItinerary.afternoon.activity}</div>
  </div>
  <div class="itinerary-slot">
    <div class="slot-title">🌆 Evening - \${guide.oneDayItinerary.evening.title}</div>
    <div class="slot-desc">\${guide.oneDayItinerary.evening.activity}</div>
  </div>

  <div class="story-section">
    <h3 class="story-title">📜 \${guide.storyCorner.title}</h3>
    <p class="story-text">\${guide.storyCorner.story}</p>
  </div>

  <div class="section-title">💡 Travel Tips</div>
  <ul style="padding-left: 20px; font-size: 14px; color: #475569; margin-bottom: 40px;">
    \${guide.travelTips.map(tip => \`<li style="margin-bottom: 8px;">\${tip}</li>\`).join('')}
  </ul>

  <div class="section-title">🚨 Emergency Contacts</div>
  <div class="emergency-grid">
    <div class="emergency-card">
      <div style="font-size: 11px; font-weight: bold; color: #7f1d1d;">🚓 POLICE</div>
      <div class="emergency-val">\${guide.emergencyNumbers?.police || "100"}</div>
    </div>
    <div class="emergency-card">
      <div style="font-size: 11px; font-weight: bold; color: #7f1d1d;">🚑 AMBULANCE</div>
      <div class="emergency-val">\${guide.emergencyNumbers?.ambulance || "102"}</div>
    </div>
    <div class="emergency-card">
      <div style="font-size: 11px; font-weight: bold; color: #7f1d1d;">🏥 MAIN HOSPITAL</div>
      <div style="font-size: 12px; font-weight: bold; margin-top: 6px; color: #1e293b;">
        \${guide.emergencyNumbers?.hospital || "Local Main Hospital"}
      </div>
    </div>
    <div class="emergency-card">
      <div style="font-size: 11px; font-weight: bold; color: #7f1d1d;">☎ TOURIST HELP</div>
      <div class="emergency-val">\${guide.emergencyNumbers?.touristHelpline || "1363"}</div>
    </div>
  </div>

  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        window.print();
      }, 500);
    });
  </script>
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = `Khoj_Bharat_Ai_Guide_${guide.destination.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Reset search and go back to welcome
  const handleReset = () => {
    setGuide(null);
    setError(null);
    setActiveParams(null);
    setChatHistory([]);
    setHighlightedGemIndex(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between" id="app-root">
      
      {/* 🧭 NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-emerald-100/60 shadow-sm transition-all" id="app-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <button 
            type="button" 
            onClick={handleReset}
            className="flex items-center gap-3 cursor-pointer text-left focus:outline-none group"
            id="brand-header-logo"
          >
            <div className="flex-shrink-0 group-hover:scale-105 transition-transform">
              <BrandLogo className="w-13 h-13" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-800 tracking-tight flex items-center gap-1">
                {LOCALIZATION[currentLanguage]?.appName || "Khoj Bharat Ai"} <span className="text-brand-600 text-xs font-black bg-brand-50 border border-brand-100 px-1.5 py-0.5 rounded-md">AI</span>
              </h1>
              <p className="text-[10px] text-slate-400 font-bold hidden sm:block tracking-wide">
                {LOCALIZATION[currentLanguage]?.appTagline || "Unveiling fables, flavor, and hidden tracks"}
              </p>
            </div>
          </button>

          {/* Quick Stats or Interactive reset */}
          <div className="flex items-center gap-3">
            {/* Header Language Selector */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/60 shadow-inner">
              <button
                type="button"
                onClick={() => handleTranslate("English")}
                className={`px-2.5 py-1 text-[10px] font-black rounded-lg transition-all cursor-pointer ${
                  currentLanguage === "English"
                    ? "bg-white text-brand-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-850"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleTranslate("Hindi")}
                className={`px-2.5 py-1 text-[10px] font-black rounded-lg transition-all cursor-pointer ${
                  currentLanguage === "Hindi"
                    ? "bg-white text-brand-700 shadow-sm"
                    : "text-slate-500 hover:text-slate-855"
                }`}
              >
                हिन्दी
              </button>
            </div>

            {guide && (
              <button
                type="button"
                id="reset-search-btn"
                onClick={handleReset}
                className="flex items-center gap-1.5 bg-slate-50 hover:bg-emerald-50 text-slate-600 hover:text-brand-800 px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-200 hover:border-brand-200 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Search Another</span>
              </button>
            )}

            <a 
              href="https://ai.studio/build" 
              target="_blank" 
              rel="noreferrer"
              className="text-[10px] font-extrabold text-brand-700 bg-brand-50 border border-brand-100 px-3 py-2 rounded-xl flex items-center gap-1.5 hover:bg-brand-100 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>AI STUDIO</span>
            </a>
          </div>

        </div>
      </header>

      {/* 🗺 MAIN INTERACTION PANEL */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full" id="main-content">
        
        {/* If an error occurred */}
        {error && (
          <div className="mb-8 max-w-2xl mx-auto bg-rose-50 border border-rose-200 rounded-3xl p-6 flex gap-4 items-start" id="error-banner">
            <div className="p-3 bg-rose-100 text-rose-700 rounded-2xl shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h3 className="font-extrabold text-rose-900 text-sm">Consultation Failed</h3>
              <p className="text-xs text-rose-700 leading-relaxed font-medium">
                {error}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  id="error-retry-btn"
                  onClick={() => activeParams && handleExplore(activeParams)}
                  className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md shadow-rose-600/10 transition-transform"
                >
                  <RefreshCw className="w-3 h-3" /> Retry Consultation
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-white hover:bg-slate-50 text-slate-600 font-bold text-xs px-4 py-2 rounded-xl border border-slate-200 cursor-pointer"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="app-grid-layout">
          
          {/* LEFT COLUMN: Fixed or Sticky Search Input (Lg: 4/12 columns) */}
          <div className={`lg:col-span-4 ${guide ? "lg:sticky lg:top-24" : ""}`} id="form-column">
            <div className="space-y-6">
              
              {/* Form Title for visual clarity */}
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold text-brand-700 tracking-wider uppercase bg-brand-50 border border-brand-100 px-2.5 py-1 rounded-full">
                  Personal Travel Companion
                </span>
                <h2 className="text-xl font-black text-slate-800 tracking-tight">
                  Design Your Culture Trail
                </h2>
              </div>

              {/* Preferences Selector InputForm */}
              <InputForm 
                onExplore={handleExplore} 
                isLoading={isLoading} 
                currentLanguage={currentLanguage}
              />

              {/* Visual Help Desk widget */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-sm flex gap-3.5 items-start">
                <div className="p-2 bg-slate-100 text-slate-500 rounded-xl mt-0.5">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-700">{currentLanguage === "Hindi" ? "यह कैसे काम करता है?" : "How does it work?"}</h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-medium mt-1">
                    {currentLanguage === "Hindi" 
                      ? "कल्चर कम्पास क्षेत्रीय कहानियों, रीति-रिवाजों, स्थानीय भोजन और क्यूरेटेड यात्रा कार्यक्रमों के माध्यम से गंतव्य मानचित्रों को फ़िल्टर करता है ताकि आपको एक गहरा और सम्मानजनक अनुभव मिल सके।"
                      : "Culture Compass filters destination maps through regional stories, customs, local meals, and curated itineraries to guarantee you enjoy an immersive and respectful experience."}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Guide results or Welcome panel (Lg: 8/12 columns) */}
          <div className="lg:col-span-8 space-y-8" id="results-column">
            
            {/* 1. Loading State */}
            {isLoading && activeParams && (
              <LoadingPanel destination={activeParams.destination} currentLanguage={currentLanguage} />
            )}

            {/* 2. Welcome State (When no guide is generated and not loading) */}
            {!guide && !isLoading && (
              <WelcomePanel onSelectFeatured={handleExplore} currentLanguage={currentLanguage} />
            )}

            {/* 3. Loaded Result State */}
            {guide && !isLoading && (
              <div className="space-y-10" id="rendered-guide-trail">
                
                {/* Visual Header card for the current destination */}
                <div className="bg-white border border-emerald-100 rounded-3xl p-6 md:p-8 shadow-md relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  {/* Backdrop glowing graphics */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-brand-100/30 rounded-full blur-3xl pointer-events-none" />

                  <div className="space-y-2.5 relative z-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[9px] font-extrabold bg-brand-100 text-brand-800 border border-brand-200 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                        {getTranslatedStyle(activeParams?.travelStyle)} {tApp.travelStyleExplorer}
                      </span>
                      {activeParams?.interests.map((interest) => (
                        <span 
                          key={interest} 
                          className="text-[9px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full"
                        >
                          #{getTranslatedInterest(interest)}
                        </span>
                      ))}
                      <span className="text-[9px] font-black bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm shrink-0">
                        <Sparkles className="w-2.5 h-2.5" />
                        Gemini 3.5 Flash {generationTimeMs ? `• ${((generationTimeMs / 1000).toFixed(1))}s` : ""}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight flex flex-wrap items-center gap-2">
                      <span className="flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-brand-600 shrink-0" />
                        {guide.destination}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-black bg-rose-50 border border-rose-100/80 text-rose-600 px-2.5 py-1 rounded-full shrink-0 animate-pulse">
                        <Sparkles className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                        {guide.matchScore || 98}% {tApp.aiMatch}
                      </span>
                    </h2>

                    {/* Dynamic Weather, Best Season & Air Quality indicators */}
                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      <span className="bg-amber-50 text-amber-800 border border-amber-100 text-[10px] font-extrabold px-3 py-1 rounded-xl flex items-center gap-1 shrink-0">
                        {guide.weather?.temperature || "☀️ 32°C"}
                      </span>
                      <span className="bg-sky-50 text-sky-800 border border-sky-100 text-[10px] font-extrabold px-3 py-1 rounded-xl flex items-center gap-1 shrink-0">
                        🍂 {tApp.bestSeason} {guide.weather?.bestSeason || "October–February"}
                      </span>
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-100 text-[10px] font-extrabold px-3 py-1 rounded-xl flex items-center gap-1 shrink-0">
                        🍃 {tApp.aqi} {guide.weather?.airQuality || "Good"}
                      </span>
                    </div>
                    
                    <p className="text-xs text-slate-400 font-medium pt-1">
                      {tApp.compiledOn} {new Date().toLocaleDateString(currentLanguage === "Hindi" ? "hi-IN" : "en-IN", { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>

                  {/* Quick Budget Badge */}
                  <div className="bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 shrink-0 text-right md:text-left relative z-10">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      {tApp.budgetContext}
                    </span>
                    <span className="text-sm font-black text-brand-700">
                      ₹{parseInt(activeParams?.budget || "0").toLocaleString("en-IN")}
                    </span>
                  </div>

                </div>

                {/* Why Gemini Chose This Itinerary AI explanation card */}
                <div className="bg-gradient-to-br from-brand-50/40 via-emerald-50/10 to-transparent border border-brand-100/60 rounded-3xl p-6 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-100/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="flex items-start gap-3.5 relative z-10">
                    <div className="p-2.5 bg-brand-600 text-white rounded-2xl shadow-md shrink-0 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-black text-brand-800 uppercase tracking-wider">
                        {tApp.whyGemini}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed">
                        {guide.aiExplanation || `We custom synthesized this itinerary matching your ${activeParams?.travelStyle} style and a budget limit of ₹${parseInt(activeParams?.budget || "0").toLocaleString("en-IN")}, incorporating your key interests in ${activeParams?.interests.join(", ")} to deliver the most culturally rich and budget-optimal experience.`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 🛠 TOOLBOX: Translation & PDF Export Actions */}
                <div className="bg-white border border-slate-200/60 rounded-3xl p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Globe className="w-4 h-4 text-brand-600 animate-spin-slow" />
                      <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">{tApp.translateGuide}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {["English", "Hindi"].map((lang) => {
                        const isSelected = currentLanguage === lang;
                        return (
                          <button
                            key={lang}
                            disabled={isTranslating}
                            onClick={() => handleTranslate(lang)}
                            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all border ${
                              isSelected 
                                ? "bg-brand-600 text-white border-brand-600 shadow-sm" 
                                : "bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/80 hover:text-slate-950 disabled:opacity-50"
                            }`}
                          >
                            {lang === "English" ? "English" : "हिन्दी (Hindi)"}
                          </button>
                        );
                      })}
                    </div>
                    {isTranslating && (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-brand-700 animate-pulse pl-1">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>{tApp.translating}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={downloadGuideAsPDF}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-5 py-3 rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-emerald-600/10 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>{tApp.downloadPdf}</span>
                  </button>
                </div>

                {/* Interactive Map Preview with Hidden Gem Pins */}
                <MapPreview 
                  guide={guide} 
                  highlightedGemIndex={highlightedGemIndex} 
                  onSelectGem={setHighlightedGemIndex} 
                  currentLanguage={currentLanguage}
                />

                {/* Display every structured rounded card category */}
                <GuideCards 
                  guide={guide} 
                  highlightedGemIndex={highlightedGemIndex} 
                  onSelectGem={setHighlightedGemIndex}
                  currentLanguage={currentLanguage}
                />

                {/* Personalization Summary Card */}
                <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 shadow-sm space-y-3" id="personalization-summary-card">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-600" />
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      {tApp.personalizationTitle}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tApp.personalizationDesc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="bg-white border border-slate-100 p-3 rounded-2xl flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{tApp.travelStyle}</span>
                      <span className="text-xs font-extrabold text-slate-800 pt-0.5">{getTranslatedStyle(activeParams?.travelStyle)} {tApp.travelStyleExplorer}</span>
                    </div>
                    <div className="bg-white border border-slate-100 p-3 rounded-2xl flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{tApp.budgetTarget}</span>
                      <span className="text-xs font-extrabold text-brand-700 pt-0.5">₹{parseInt(activeParams?.budget || "0").toLocaleString("en-IN")} INR</span>
                    </div>
                    <div className="bg-white border border-slate-100 p-3 rounded-2xl flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{tApp.keyInterests}</span>
                      <span className="text-xs font-extrabold text-slate-800 pt-0.5">
                        {activeParams?.interests.map(interest => getTranslatedInterest(interest)).join(", ")}
                      </span>
                    </div>
                  </div>
                  <div className="bg-brand-50/50 rounded-2xl p-3 border border-brand-100/50 text-[11px] text-brand-800 font-medium">
                    🔍 <strong>{tApp.constraintsApplied}</strong> {tApp.constraintsDesc} ₹{parseInt(activeParams?.budget || "0").toLocaleString("en-IN")} INR.
                  </div>
                </div>

                {/* Interactive Ask Local AI chat interface */}
                <ChatSection 
                  guide={guide}
                  history={chatHistory}
                  onSendMessage={handleSendChatMessage}
                  isGenerating={isChatGenerating}
                  travelStyle={activeParams?.travelStyle || "Solo"}
                  budget={activeParams?.budget || "5000"}
                  interests={activeParams?.interests || []}
                  currentLanguage={currentLanguage}
                />

              </div>
            )}

          </div>

        </div>
      </main>

      {/* 💚 FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-8 text-center text-slate-400 text-[11px] font-semibold tracking-wide" id="app-footer">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="flex items-center justify-center gap-1.5 text-slate-500 font-extrabold">
            <span>Culture Compass AI</span>
            <span className="text-[9px] bg-brand-50 border border-brand-200 text-brand-800 px-1.5 py-0.5 rounded">v1.2</span>
          </p>
          <p>
            Powered by modern Gemini LLM architecture &bull; Built with React, Vite & Tailwind CSS &bull; 100% Mobile Friendly
          </p>
          <p className="text-[10px] text-slate-300">
            &copy; {new Date().getFullYear()} Culture Compass AI. Empowering authentic and respectful global travels.
          </p>
        </div>
      </footer>

    </div>
  );
}

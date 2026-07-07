import React, { useState } from "react";
import { 
  MapPin, 
  Compass, 
  IndianRupee, 
  Sparkles, 
  User, 
  Users, 
  Heart, 
  Home,
  Utensils,
  BookOpen,
  Trees,
  Camera,
  ShoppingBag,
  PartyPopper
} from "lucide-react";
import { LOCALIZATION } from "../localization";

interface InputFormProps {
  onExplore: (data: {
    destination: string;
    travelStyle: string;
    budget: string;
    interests: string[];
  }) => void;
  isLoading: boolean;
  currentLanguage?: string;
}

const INTERESTS_OPTIONS = [
  { id: "Food", label: "Food 🍜", icon: Utensils },
  { id: "Heritage", label: "Heritage 🏛", icon: BookOpen },
  { id: "Nature", label: "Nature 🌲", icon: Trees },
  { id: "Photography", label: "Photography 📷", icon: Camera },
  { id: "Shopping", label: "Shopping 🛍", icon: ShoppingBag },
  { id: "Festivals", label: "Festivals 🎉", icon: PartyPopper },
];

const STYLE_OPTIONS = [
  { id: "Solo", label: "Solo", icon: User },
  { id: "Couple", label: "Couple", icon: Heart },
  { id: "Friends", label: "Friends", icon: Users },
  { id: "Family", label: "Family", icon: Home },
];

export const BUDGET_RANGES: Record<string, { min: number; max: number; default: number; step: number }> = {
  Solo: { min: 500, max: 20000, default: 1500, step: 200 },
  Couple: { min: 1500, max: 50000, default: 3500, step: 500 },
  Family: { min: 2500, max: 100000, default: 7000, step: 1000 },
  Friends: { min: 1500, max: 25000, default: 5000, step: 500 },
};

export default function InputForm({ onExplore, isLoading, currentLanguage = "English" }: InputFormProps) {
  const t = LOCALIZATION[currentLanguage] || LOCALIZATION.English;
  
  const [destination, setDestination] = useState("");
  const [travelStyle, setTravelStyle] = useState("Solo");
  const [budget, setBudget] = useState("1500");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["Heritage", "Food"]);

  const handleStyleChange = (styleId: string) => {
    setTravelStyle(styleId);
    const range = BUDGET_RANGES[styleId];
    if (range) {
      setBudget(range.default.toString());
    }
  };

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((i) => i !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSurpriseMe = () => {
    const popularDestinations = [
      "Jaipur, Rajasthan",
      "Udaipur, Rajasthan",
      "Varanasi, Uttar Pradesh",
      "Kochi, Kerala",
      "Munnar, Kerala",
      "Goa, India",
      "Hampi, Karnataka",
      "Agra, Uttar Pradesh",
      "Jaisalmer, Rajasthan",
      "Manali, Himachal Pradesh",
      "Srinagar, Jammu & Kashmir",
      "Amritsar, Punjab",
      "Mysore, Karnataka",
      "Rishikesh, Uttarakhand",
      "Darjeeling, West Bengal",
      "Ooty, Tamil Nadu",
      "Leh, Ladakh",
      "Pondicherry, India",
      "Alleppey, Kerala",
      "Shimla, Himachal Pradesh"
    ];
    
    const randDest = popularDestinations[Math.floor(Math.random() * popularDestinations.length)];
    
    const styles = ["Solo", "Couple", "Friends", "Family"];
    const randStyle = styles[Math.floor(Math.random() * styles.length)];
    
    const shuffledInterests = [...INTERESTS_OPTIONS].sort(() => 0.5 - Math.random());
    const randInterestsCount = Math.floor(Math.random() * 3) + 1; // 1 to 3
    const randInterests = shuffledInterests.slice(0, randInterestsCount).map(i => i.id);
    
    const range = BUDGET_RANGES[randStyle];
    const stepsCount = (range.max - range.min) / range.step;
    const randomStep = Math.floor(Math.random() * (stepsCount + 1));
    const randBudget = (range.min + randomStep * range.step).toString();

    setDestination(randDest);
    setTravelStyle(randStyle);
    setBudget(randBudget);
    setSelectedInterests(randInterests);

    onExplore({
      destination: randDest,
      travelStyle: randStyle,
      budget: randBudget,
      interests: randInterests,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination.trim()) return;
    onExplore({
      destination: destination.trim(),
      travelStyle,
      budget,
      interests: selectedInterests,
    });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-xl shadow-emerald-50/50 space-y-6 relative overflow-hidden"
      id="exploration-form"
    >
      {/* Decorative top green bar representing Material Design layout grids */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-500 to-emerald-600" />

      {/* Destination Field */}
      <div className="space-y-2">
        <label htmlFor="destination-input" className="block text-sm font-semibold text-slate-700 tracking-wide flex items-center gap-1.5 animate-pulse-slow">
          <MapPin className="w-4 h-4 text-brand-600 animate-bounce" />
          {t.whereExplore}
        </label>
        <div className="relative">
          <input
            id="destination-input"
            type="text"
            required
            placeholder={t.inputPlaceholder}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 focus:border-brand-500 focus:bg-white text-slate-800 placeholder-slate-400 font-medium px-4 py-3.5 pl-11 rounded-2xl outline-none transition-all text-sm shadow-inner"
          />
          <Compass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 animate-spin-hover" />
        </div>
      </div>

      {/* Travel Style Selectors */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-700 tracking-wide">
          {t.travelStyleLabel}
        </label>
        <div className="grid grid-cols-2 gap-3" id="style-grid">
          {STYLE_OPTIONS.map((style) => {
            const IconComponent = style.icon;
            const isSelected = travelStyle === style.id;
            const locStyle = t.travelStyles[style.id] || { label: style.label, desc: "" };
            return (
              <button
                key={style.id}
                type="button"
                id={`style-btn-${style.id.toLowerCase()}`}
                onClick={() => handleStyleChange(style.id)}
                className={`flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? "border-brand-500 bg-brand-50/75 text-brand-900 ring-2 ring-brand-500/20"
                    : "border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
                }`}
              >
                <div className={`p-2 rounded-xl transition-colors shrink-0 ${
                  isSelected ? "bg-brand-500 text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold truncate">{locStyle.label}</p>
                  <p className="text-[10px] text-slate-400 line-clamp-1">{locStyle.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Selector */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label htmlFor="budget-input" className="text-sm font-semibold text-slate-700 tracking-wide flex items-center gap-1.5">
            <IndianRupee className="w-4 h-4 text-brand-600" />
            {currentLanguage === "Hindi" ? "बजट (INR)" : "Budget (INR)"}
          </label>
          <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-100">
            ₹{Number(budget).toLocaleString("en-IN")}
          </span>
        </div>
        <div className="space-y-3">
          <input
            id="budget-input"
            type="range"
            min={BUDGET_RANGES[travelStyle]?.min || 500}
            max={BUDGET_RANGES[travelStyle]?.max || 5000}
            step={BUDGET_RANGES[travelStyle]?.step || 100}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full accent-brand-600 cursor-pointer h-2 bg-slate-100 rounded-lg appearance-none"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-bold px-1">
            <span>{currentLanguage === "Hindi" ? "न्यूनतम" : "Min"}: ₹{(BUDGET_RANGES[travelStyle]?.min || 500).toLocaleString("en-IN")}</span>
            <span className="text-brand-600 font-black">{currentLanguage === "Hindi" ? "डिफ़ॉल्ट" : "Default"}: ₹{(BUDGET_RANGES[travelStyle]?.default || 1500).toLocaleString("en-IN")}</span>
            <span>{currentLanguage === "Hindi" ? "अधिकतम" : "Max"}: ₹{(BUDGET_RANGES[travelStyle]?.max || 5000).toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>

      {/* Interests Chips */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-700 tracking-wide">
          {t.interestsLabel}
        </label>
        <div className="flex flex-wrap gap-2" id="interests-chips">
          {INTERESTS_OPTIONS.map((interest) => {
            const IconComponent = interest.icon;
            const isSelected = selectedInterests.includes(interest.id);
            const interestLabel = t.interests[interest.id] || interest.label;
            return (
              <button
                key={interest.id}
                type="button"
                id={`interest-chip-${interest.id.toLowerCase()}`}
                onClick={() => handleInterestToggle(interest.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-semibold transition-all ${
                  isSelected
                    ? "bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-500/20"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <IconComponent className="w-3.5 h-3.5" />
                <span>{interestLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={handleSurpriseMe}
          disabled={isLoading}
          className="flex-1 py-4 px-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-slate-300 text-slate-700 font-bold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
        >
          <Compass className="w-5 h-5 text-brand-600" />
          <span className="text-sm tracking-wide">{t.surpriseBtn}</span>
        </button>
        <button
          type="submit"
          id="explore-ai-btn"
          disabled={isLoading || !destination.trim()}
          className={`flex-1 py-4 px-6 rounded-2xl text-white font-bold flex items-center justify-center gap-2 transition-all ${
            isLoading || !destination.trim()
              ? "bg-slate-300 cursor-not-allowed text-slate-500"
              : "bg-gradient-to-r from-brand-600 to-emerald-700 hover:from-brand-700 hover:to-emerald-800 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-brand-600/20 cursor-pointer"
          }`}
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="text-sm tracking-wide">{t.consultBtn}</span>
        </button>
      </div>
    </form>
  );
}


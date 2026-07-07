import React from "react";
import { Compass, Sparkles, MapPin, Search } from "lucide-react";
import { LOCALIZATION, getTranslatedStyle, getTranslatedInterest } from "../localization";

interface FeaturedDestConfig {
  style: string;
  budget: string;
  interests: string[];
  imgEmoji: string;
}

interface WelcomePanelProps {
  onSelectFeatured: (dest: {
    destination: string;
    travelStyle: string;
    budget: string;
    interests: string[];
  }) => void;
  currentLanguage?: string;
}

const FEATURED_DEST_CONFIGS: FeaturedDestConfig[] = [
  {
    style: "Solo",
    budget: "15000",
    interests: ["Heritage", "Food", "Shopping"],
    imgEmoji: "🏰",
  },
  {
    style: "Couple",
    budget: "25000",
    interests: ["Nature", "Photography"],
    imgEmoji: "⛰️",
  },
  {
    style: "Friends",
    budget: "8000",
    interests: ["Heritage", "Festivals"],
    imgEmoji: "🛕",
  },
  {
    style: "Family",
    budget: "40000",
    interests: ["Food", "Nature", "Festivals"],
    imgEmoji: "🌴",
  },
];

export default function WelcomePanel({ onSelectFeatured, currentLanguage = "English" }: WelcomePanelProps) {
  const t = LOCALIZATION[currentLanguage] || LOCALIZATION.English;
  
  return (
    <div className="space-y-8" id="welcome-panel">
      {/* Introduction Hero banner */}
      <div className="bg-gradient-to-br from-emerald-600 to-brand-700 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden shadow-lg shadow-emerald-700/10">
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none">
          <Compass className="w-64 h-64" />
        </div>
        <div className="relative space-y-4 max-w-2xl">
          <span className="text-[10px] uppercase tracking-widest bg-white/10 px-3 py-1.5 rounded-full font-extrabold border border-white/10 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> {currentLanguage === "Hindi" ? "जैमिनी 3.5 द्वारा संचालित" : "Powered by Gemini 3.5"}
          </span>
          <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
            {t.welcomeTitle}
          </h2>
          <p className="text-xs md:text-sm text-emerald-50 leading-relaxed font-medium">
            {t.welcomeDesc}
          </p>
        </div>
      </div>

      {/* Featured Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-brand-700" />
          <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
            {t.popularCuratedTitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="featured-destinations-grid">
          {FEATURED_DEST_CONFIGS.map((config, index) => {
            const locDest = t.featuredDestinations[index] || LOCALIZATION.English.featuredDestinations[index];
            const nameInEnglish = LOCALIZATION.English.featuredDestinations[index]?.name || "Jaipur, India";
            return (
              <button
                key={index}
                type="button"
                onClick={() => onSelectFeatured({
                  destination: nameInEnglish, // Keep english search name for the API trigger
                  travelStyle: config.style,
                  budget: config.budget,
                  interests: config.interests,
                })}
                className="bg-white hover:bg-emerald-50/10 border border-slate-200/80 hover:border-brand-300 rounded-2xl p-5 text-left transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex gap-4 group w-full"
              >
                <div className="text-4xl bg-slate-50 group-hover:bg-brand-50 p-3 rounded-2xl h-16 w-16 flex items-center justify-center shrink-0 border border-slate-100 transition-colors">
                  {config.imgEmoji}
                </div>

                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h4 className="font-extrabold text-slate-800 text-sm truncate">{locDest.name}</h4>
                    <span className="text-[9px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full uppercase">
                      {getTranslatedStyle(config.style, currentLanguage)}
                    </span>
                  </div>
                  <p className="text-[10px] text-brand-700 font-extrabold tracking-wide uppercase">
                    {locDest.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {locDest.desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {config.interests.map((interest) => (
                      <span 
                        key={interest} 
                        className="bg-emerald-50 text-brand-800 text-[9px] font-semibold px-2 py-0.5 rounded"
                      >
                        {getTranslatedInterest(interest, currentLanguage)}
                      </span>
                    ))}
                    <span className="bg-slate-50 text-slate-600 text-[9px] font-semibold px-2 py-0.5 rounded border border-slate-100 ml-auto shrink-0">
                      ₹{parseInt(config.budget).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}


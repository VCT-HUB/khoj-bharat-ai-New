import React, { useState, useMemo } from "react";
import { MapPin, Navigation, ZoomIn, ZoomOut, ExternalLink, Compass, Shield, Sparkles, AlertCircle } from "lucide-react";
import { TravelGuide } from "../types";

interface MapPreviewProps {
  guide: TravelGuide;
  highlightedGemIndex: number | null;
  onSelectGem: (index: number) => void;
  currentLanguage?: string;
}

const LOCALIZED_MAP: Record<string, Record<string, string>> = {
  English: {
    title: "Interactive Cultural Map Preview",
    openMap: "Open Real Google Maps",
    scale: "1.5 km scale",
    north: "North",
    legend: "Click on any marker to pin-point and highlight its travel facts card!",
    offline: "Simulated Offline Map",
    cost: "Cost:",
    time: "Time:",
  },
  Hindi: {
    title: "इंटरैक्टिव सांस्कृतिक मानचित्र पूर्वावलोकन",
    openMap: "वास्तविक गूगल मैप्स खोलें",
    scale: "1.5 किमी पैमाना",
    north: "उत्तर",
    legend: "किसी भी मार्कर पर क्लिक करके उसके यात्रा तथ्य कार्ड को हाईलाइट करें!",
    offline: "सिम्युलेटेड ऑफलाइन मैप",
    cost: "लागत:",
    time: "समय:",
  }
};

export default function MapPreview({ guide, highlightedGemIndex, onSelectGem, currentLanguage = "English" }: MapPreviewProps) {
  const [activePin, setActivePin] = useState<number | null>(null);
  const t = LOCALIZED_MAP[currentLanguage] || LOCALIZED_MAP.English;

  // Generate deterministic coordinates on a 100x100 grid for the 3 gems based on their names
  const gemsWithCoords = useMemo(() => {
    return guide.hiddenGems.map((gem, index) => {
      // Simple hash to get stable x/y coordinates between 15% and 85%
      let hashX = 0;
      let hashY = 0;
      const combinedStr = gem.name + guide.destination;
      
      for (let i = 0; i < combinedStr.length; i++) {
        hashX = (hashX * 31 + combinedStr.charCodeAt(i)) % 100;
        hashY = (hashY * 17 + combinedStr.charCodeAt(i)) % 100;
      }
      
      // Map to safe screen space percentages
      const x = 20 + (Math.abs(hashX) % 60); // 20% to 80%
      const y = 20 + (Math.abs(hashY + index * 15) % 60); // 20% to 80%
      
      return {
        ...gem,
        x,
        y,
        index
      };
    });
  }, [guide]);

  // Handle marker click: updates highlight and scrolls to destination card
  const handleMarkerClick = (index: number) => {
    setActivePin(index);
    onSelectGem(index);
    
    // Smooth scroll to the gem card
    const element = document.getElementById(`hidden-gem-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Construct a Google Maps search URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${guide.destination} points of interest`
  )}`;

  return (
    <div 
      className="bg-white rounded-3xl border border-emerald-100 shadow-xl overflow-hidden mt-6"
      id="map-style-preview-card"
    >
      {/* Map Header bar */}
      <div className="bg-slate-50 border-b border-slate-100 p-4 px-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-emerald-50 rounded-xl text-brand-700">
            <Navigation className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-slate-800 tracking-tight">
              {t.title}
            </h3>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
              {currentLanguage === "Hindi" 
                ? `${guide.destination} के छिपे हुए रास्तों का अन्वेषण करें` 
                : `Explore ${guide.destination} Hidden Tracks`}
            </p>
          </div>
        </div>

        {/* Action badge to view real Google Maps query */}
        <a 
          href={googleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 font-extrabold text-[10px] px-3 py-1.5 rounded-xl flex items-center gap-1 transition-all"
        >
          <span>{t.openMap}</span>
          <ExternalLink className="w-3 h-3 text-brand-600" />
        </a>
      </div>

      {/* Main Map Stage Container */}
      <div className="relative bg-[#e5f5e0]/30 h-[280px] sm:h-[350px] w-full overflow-hidden select-none" id="map-preview-canvas">
        
        {/* Dynamic Illustrated Cartographic Background (using SVG grids and contours) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle grid lines mimicking Google Maps viewport grids */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16, 185, 129, 0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Dynamic "Water River body" representing simulated natural elements */}
          <path 
            d="M -50 180 Q 150 50, 350 220 T 800 120" 
            fill="none" 
            stroke="rgba(14, 165, 233, 0.15)" 
            strokeWidth="28" 
            strokeLinecap="round"
          />
          <path 
            d="M -50 180 Q 150 50, 350 220 T 800 120" 
            fill="none" 
            stroke="rgba(14, 165, 233, 0.08)" 
            strokeWidth="40" 
            strokeLinecap="round"
          />

          {/* Simulated highway roads/cultural corridors */}
          <path 
            d="M 120 -50 L 220 400" 
            fill="none" 
            stroke="rgba(245, 158, 11, 0.08)" 
            strokeWidth="8" 
          />
          <path 
            d="M -20 120 L 900 310" 
            fill="none" 
            stroke="rgba(245, 158, 11, 0.08)" 
            strokeWidth="6" 
          />

          {/* Dynamic land contour layers */}
          <path 
            d="M 400,100 C 450,50 600,120 580,200 C 560,280 440,300 380,240 C 320,180 350,150 400,100 Z" 
            fill="rgba(16, 185, 129, 0.03)" 
            stroke="rgba(16, 185, 129, 0.06)" 
            strokeWidth="2"
          />
        </svg>

        {/* Scale indicator and Lat-Lng Labels */}
        <div className="absolute bottom-3 left-4 bg-white/80 backdrop-blur-sm border border-slate-200/50 px-2.5 py-1 rounded-lg text-[9px] font-mono text-slate-500 font-bold flex items-center gap-1.5 shadow-sm">
          <span>{t.scale}</span>
          <div className="w-8 h-0.5 bg-slate-400" />
          <span>26.91° N, 75.78° E</span>
        </div>

        {/* Vintage Styled Compass Rose widget */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-slate-200/50 p-2 rounded-xl shadow-sm hidden sm:flex flex-col items-center gap-1 text-slate-400">
          <Compass className="w-5 h-5 text-brand-600 animate-pulse-slow" />
          <span className="text-[8px] font-extrabold uppercase">{t.north}</span>
        </div>

        {/* Mapping Pins */}
        {gemsWithCoords.map((gem) => {
          const isHighlighted = highlightedGemIndex === gem.index;
          return (
            <button
              key={gem.index}
              id={`map-pin-${gem.index}`}
              onClick={() => handleMarkerClick(gem.index)}
              style={{ left: `${gem.x}%`, top: `${gem.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none transition-transform duration-300"
            >
              {/* Outer pulsing ring for highlighted markers */}
              {isHighlighted && (
                <div className="absolute -inset-4 bg-brand-500/35 rounded-full animate-ping pointer-events-none" />
              )}

              {/* Advanced Marker style Pin */}
              <div className={`relative flex flex-col items-center transition-all ${
                isHighlighted ? "scale-125 z-30" : "scale-100 hover:scale-110 z-20"
              }`}>
                {/* Visual Speech Bubble pointing to the location */}
                <div className={`shadow-lg font-bold text-[11px] h-7 w-7 rounded-full flex items-center justify-center border-2 transition-colors ${
                  isHighlighted 
                    ? "bg-brand-600 border-white text-white" 
                    : "bg-white border-brand-500 text-brand-900 group-hover:bg-brand-50"
                }`}>
                  {gem.index + 1}
                </div>
                {/* Tiny pin needle */}
                <div className={`w-1 h-2 -mt-0.5 transition-colors ${
                  isHighlighted ? "bg-brand-600" : "bg-brand-500"
                }`} />
              </div>

              {/* Mini Label Badge below pin */}
              <span className={`absolute top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-md text-[9px] font-bold shadow-sm whitespace-nowrap transition-all opacity-80 group-hover:opacity-100 ${
                isHighlighted 
                  ? "bg-brand-900 text-white" 
                  : "bg-white border border-slate-200 text-slate-600"
              }`}>
                {gem.name.slice(0, 18)}{gem.name.length > 18 ? "..." : ""}
              </span>
            </button>
          );
        })}

        {/* Dynamic Tooltip overlay (shows details of highlighted/clicked pins) */}
        {highlightedGemIndex !== null && (
          <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:w-80 bg-white/95 backdrop-blur-md border border-brand-100 p-4 rounded-2xl shadow-xl shadow-slate-900/10 flex gap-3 items-start animate-slide-up z-40">
            <div className="p-2 bg-brand-100 text-brand-800 rounded-xl font-black text-xs h-7 w-7 flex items-center justify-center shrink-0">
              {highlightedGemIndex + 1}
            </div>
            <div className="space-y-1 text-left flex-1 min-w-0">
              <h4 className="font-extrabold text-xs text-slate-800 truncate">
                {guide.hiddenGems[highlightedGemIndex].name}
              </h4>
              <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed">
                {guide.hiddenGems[highlightedGemIndex].description}
              </p>
              <div className="flex gap-2.5 pt-1.5 text-[9px] font-bold text-slate-400">
                <span className="text-brand-700">{t.cost} {guide.hiddenGems[highlightedGemIndex].estimatedCost}</span>
                <span className="text-amber-700">{t.time} {guide.hiddenGems[highlightedGemIndex].bestTime}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Helper Legend Footer */}
      <div className="bg-slate-50/70 p-3.5 px-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-bold">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
          <span>{t.legend}</span>
        </div>
        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 uppercase text-[9px]">
          {t.offline}
        </span>
      </div>

      <style>{`
        @keyframes slide-up {
          from { transform: translateY(15px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}

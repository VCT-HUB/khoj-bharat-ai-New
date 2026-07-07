import React, { useState, useEffect } from "react";
import { Compass } from "lucide-react";
import { LOCALIZATION } from "../localization";

export default function LoadingPanel({ destination, currentLanguage = "English" }: { destination: string; currentLanguage?: string }) {
  const t = LOCALIZATION[currentLanguage] || LOCALIZATION.English;
  const steps = t.loadingSteps;
  const quotes = t.culturalQuotes;

  const [stepIndex, setStepIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % steps.length);
    }, 2200);

    const quoteInterval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4500);

    return () => {
      clearInterval(stepInterval);
      clearInterval(quoteInterval);
    };
  }, [steps.length, quotes.length]);

  return (
    <div 
      className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-xl shadow-emerald-50/50 flex flex-col items-center justify-center text-center space-y-6 py-12 md:py-16 overflow-hidden relative"
      id="loading-panel"
    >
      {/* Absolute decorative blurred circle backgrounds */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand-200/20 rounded-full blur-2xl" />
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl" />

      {/* Pulsing Spinning Compass Icon */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-20 h-20 bg-brand-100 rounded-full animate-ping opacity-45" />
        <div className="bg-brand-50 border-2 border-brand-200 p-5 rounded-full shadow-lg text-brand-600 relative z-10 animate-pulse-slow">
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: "3s" }} />
        </div>
      </div>

      <div className="space-y-2 max-w-md relative z-10">
        <h3 className="text-lg font-black text-slate-800 tracking-tight">
          {t.stitchingCompass} {destination}
        </h3>
        
        {/* Step Indicator */}
        <div className="h-6 flex items-center justify-center">
          <p className="text-xs font-bold text-brand-700 animate-pulse uppercase tracking-wide">
            {steps[stepIndex]}
          </p>
        </div>
      </div>

      {/* Graphic loading bar */}
      <div className="w-56 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 bottom-0 bg-brand-600 rounded-full animate-infinite-loading w-1/3" />
      </div>

      {/* Fact Quote Card */}
      <div className="max-w-lg bg-slate-50 border border-slate-100 p-5 rounded-2xl relative">
        <p className="text-xs font-serif text-slate-500 italic leading-relaxed">
          {quotes[quoteIndex]}
        </p>
      </div>

      <style>{`
        @keyframes infinite-loading {
          0% { left: -35%; width: 35%; }
          50% { left: 40%; width: 45%; }
          100% { left: 100%; width: 35%; }
        }
        .animate-infinite-loading {
          animation: infinite-loading 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}


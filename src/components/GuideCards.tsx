import React from "react";
import { motion } from "motion/react";
import { 
  Gem, 
  MapPin, 
  Calendar, 
  Coins, 
  Utensils, 
  Store, 
  Tag, 
  Theater, 
  Shirt, 
  Smile, 
  AlertTriangle, 
  Clock, 
  Sun, 
  Sunset, 
  Moon, 
  IndianRupee, 
  BookOpenText, 
  ShieldAlert, 
  Lightbulb,
  Sparkles,
  Percent,
  Phone,
  HeartPulse,
  Building2
} from "lucide-react";
import { TravelGuide } from "../types";

interface GuideCardsProps {
  guide: TravelGuide;
  highlightedGemIndex: number | null;
  onSelectGem: (index: number) => void;
  currentLanguage?: string;
}

const LOCALIZED_CARDS: Record<string, Record<string, string>> = {
  English: {
    hiddenGemsTitle: "Hidden Gems",
    hiddenGemsSub: "Lesser-known authentic experiences (Linked with Map above)",
    costLabel: "Cost:",
    bestTimeLabel: "Best Time:",
    localFoodTitle: "Local Food & Cuisine",
    localFoodSub: "Authentic regional dishes & eateries",
    famousSpots: "Famous Spots",
    cultureTitle: "Local Culture & Customs",
    cultureSub: "Etiquette guide to blend in seamlessly",
    customsTitle: "Customs & Etiquette",
    dressCodeTitle: "Dress Code guidelines",
    howToGreet: "How to Greet",
    whatToAvoid: "What to Avoid 🚫",
    itineraryTitle: "Curated One-Day Itinerary",
    itinerarySub: "A perfect sunset-to-sunrise local day",
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    budgetTitle: "Estimated Budget & Expenses",
    budgetSub: "Cost estimates & resource breakdown",
    costItem: "Cost Item",
    approxCost: "Approx Cost",
    totalRecommendedBudget: "Total Recommended Budget",
    storyCornerTitle: "Story Corner",
    storyCornerSub: "A historical lore or cultural fable of the town",
    travelerTipsTitle: "Traveler Tips",
    travelerTipsSub: "Core tips & cultural survival advice",
    emergencyTitle: "Emergency & Help Contacts",
    emergencySub: "Local Safety & Support lines for",
    police: "Police",
    lawEnforcement: "Law Enforcement",
    ambulance: "Ambulance",
    medicalDistress: "Medical Distress",
    hospital: "Hospital",
    generalHospital: "General Hospital",
    touristCare: "Tourist Care",
    touristHelpline: "Tourist Helpline"
  },
  Hindi: {
    hiddenGemsTitle: "छिपे हुए खजाने",
    hiddenGemsSub: "कम प्रसिद्ध प्रामाणिक अनुभव (ऊपर दिए गए मानचित्र से जुड़े हुए)",
    costLabel: "लागत:",
    bestTimeLabel: "सबसे अच्छा समय:",
    localFoodTitle: "स्थानीय भोजन और व्यंजन",
    localFoodSub: "प्रामाणिक क्षेत्रीय व्यंजन और भोजनालय",
    famousSpots: "प्रसिद्ध स्थान",
    cultureTitle: "स्थानीय संस्कृति और रीति-रिवाज",
    cultureSub: "सहजता से घुलने-मिलने के लिए शिष्टाचार मार्गदर्शिका",
    customsTitle: "रीति-रिवाज और शिष्टाचार",
    dressCodeTitle: "पोशाक संहिता दिशानिर्देश",
    howToGreet: "अभिवादन कैसे करें",
    whatToAvoid: "किन चीजों से बचें 🚫",
    itineraryTitle: "चयनित एक दिवसीय यात्रा कार्यक्रम",
    itinerarySub: "एक आदर्श सूर्यास्त-से-सूर्योदय स्थानीय दिन",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    budgetTitle: "अनुमानित बजट और खर्च",
    budgetSub: "लागत अनुमान और संसाधन विवरण",
    costItem: "लागत आइटम",
    approxCost: "अनुमानित लागत",
    totalRecommendedBudget: "कुल अनुशंसित बजट",
    storyCornerTitle: "कहानी कोना",
    storyCornerSub: "शहर की ऐतिहासिक लोककथा या सांस्कृतिक कहानी",
    travelerTipsTitle: "यात्री युक्तियाँ",
    travelerTipsSub: "मुख्य सुझाव और सांस्कृतिक सहायता सलाह",
    emergencyTitle: "आपातकालीन और सहायता संपर्क",
    emergencySub: "स्थानीय सुरक्षा और सहायता लाइनें",
    police: "पुलिस",
    lawEnforcement: "कानून प्रवर्तन",
    ambulance: "एम्बुलेंस",
    medicalDistress: "चिकित्सा संकट",
    hospital: "अस्पताल",
    generalHospital: "सामान्य अस्पताल",
    touristCare: "पर्यटक सहायता",
    touristHelpline: "पर्यटक हेल्पलाइन"
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export default function GuideCards({ guide, highlightedGemIndex, onSelectGem, currentLanguage = "English" }: GuideCardsProps) {
  const t = LOCALIZED_CARDS[currentLanguage] || LOCALIZED_CARDS.English;
  return (
    <motion.div 
      variants={listVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
      id="guide-cards-container"
    >
      {/* 🏛 Hidden Gems Card */}
      <motion.section 
        variants={cardVariants}
        className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-lg shadow-emerald-50/30"
        id="section-hidden-gems"
      >
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <div className="p-3 bg-amber-50 rounded-2xl text-amber-600">
            <Gem className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 tracking-tight flex items-center gap-1.5">
              {t.hiddenGemsTitle}
            </h2>
            <p className="text-xs text-slate-400 font-medium">{t.hiddenGemsSub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guide.hiddenGems.map((gem, index) => {
            const isHighlighted = highlightedGemIndex === index;
            return (
              <div 
                key={index} 
                id={`hidden-gem-${index}`}
                onClick={() => onSelectGem(index)}
                className={`border rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHighlighted 
                    ? "bg-brand-50/80 border-brand-500 shadow-lg shadow-brand-500/10 scale-[1.02] ring-2 ring-brand-500/20"
                    : "bg-slate-50 hover:bg-emerald-50/35 border-slate-100 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                <div>
                  <h3 className="font-bold text-slate-800 text-base mb-2.5 flex items-start gap-1.5">
                    <span className={`flex items-center justify-center rounded-lg w-5 h-5 text-xs font-bold mt-0.5 shrink-0 ${
                      isHighlighted ? "bg-brand-600 text-white" : "bg-brand-100 text-brand-800"
                    }`}>
                      {index + 1}
                    </span>
                    {gem.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{gem.description}</p>
                </div>

                <div className="border-t border-dashed border-slate-200 pt-3 mt-auto space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                    <Coins className="w-3.5 h-3.5 text-brand-600" />
                    <span>{t.costLabel} <span className="text-slate-800">{gem.estimatedCost}</span></span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-brand-600" />
                    <span>{t.bestTimeLabel} <span className="text-slate-800">{gem.bestTime}</span></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 🍜 Local Food Card */}
      <motion.section 
        variants={cardVariants}
        className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-lg shadow-emerald-50/30"
        id="section-local-food"
      >
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <div className="p-3 bg-rose-50 rounded-2xl text-rose-600">
            <Utensils className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">{t.localFoodTitle}</h2>
            <p className="text-xs text-slate-400 font-medium">{t.localFoodSub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guide.localFood.map((food, index) => (
            <div 
              key={index}
              className="bg-slate-50 hover:bg-rose-50/15 border border-slate-100 rounded-2xl p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-2.5">
                  <h3 className="font-bold text-slate-800 text-base">{food.dishName}</h3>
                  <span className="shrink-0 bg-rose-100/60 text-rose-800 font-extrabold text-[10px] px-2 py-0.5 rounded-full border border-rose-200">
                    {food.approxPrice}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{food.description}</p>
              </div>

              <div className="border-t border-dashed border-slate-200 pt-3 mt-auto">
                <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 mb-1.5 flex items-center gap-1">
                  <Store className="w-3 h-3 text-rose-500" /> {t.famousSpots}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {food.famousRestaurants.map((restaurant, rIdx) => (
                    <span 
                      key={rIdx} 
                      className="bg-white border border-slate-200 text-[10px] font-semibold text-slate-600 px-2 py-1 rounded-lg"
                    >
                      {restaurant}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 🎭 Local Culture Card */}
      <motion.section 
        variants={cardVariants}
        className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-lg shadow-emerald-50/30"
        id="section-local-culture"
      >
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <div className="p-3 bg-violet-50 rounded-2xl text-violet-600">
            <Theater className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">{t.cultureTitle}</h2>
            <p className="text-xs text-slate-400 font-medium">{t.cultureSub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {/* Custom / Manners */}
            <div className="flex gap-3 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="p-2 bg-violet-100 text-violet-700 rounded-xl mt-0.5 shrink-0">
                <Smile className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{t.customsTitle}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{guide.localCulture.customs}</p>
              </div>
            </div>

            {/* Dress Code */}
            <div className="flex gap-3 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl mt-0.5 shrink-0">
                <Shirt className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{t.dressCodeTitle}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{guide.localCulture.dressCode}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Greeting Style */}
            <div className="flex gap-3 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="p-2 bg-blue-100 text-blue-700 rounded-xl mt-0.5 shrink-0">
                <Smile className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{t.howToGreet}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{guide.localCulture.greetingStyle}</p>
              </div>
            </div>

            {/* Things to Avoid */}
            <div className="flex gap-3 items-start bg-rose-50/50 p-4 rounded-2xl border border-rose-100">
              <div className="p-2 bg-rose-100 text-rose-700 rounded-xl mt-0.5 shrink-0">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{t.whatToAvoid}</h3>
                <ul className="list-disc pl-4 space-y-1">
                  {guide.localCulture.thingsToAvoid.map((thing, idx) => (
                    <li key={idx} className="text-xs text-slate-600 leading-relaxed">{thing}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 📅 One-Day Itinerary Card */}
      <motion.section 
        variants={cardVariants}
        className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-lg shadow-emerald-50/30"
        id="section-itinerary"
      >
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">{t.itineraryTitle}</h2>
            <p className="text-xs text-slate-400 font-medium">{t.itinerarySub}</p>
          </div>
        </div>

        {/* Timeline representation */}
        <div className="relative border-l border-emerald-100 ml-4 md:ml-6 pl-6 space-y-8 py-2">
          {/* Morning */}
          <div className="relative">
            <div className="absolute -left-[35px] top-1 bg-amber-100 text-amber-700 rounded-full p-1.5 border border-white shadow-sm shrink-0">
              <Sun className="w-4 h-4" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mb-2">
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {t.morning}
                </span>
                <h3 className="font-bold text-slate-800 text-base">{guide.oneDayItinerary.morning.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                {guide.oneDayItinerary.morning.activity}
              </p>
            </div>
          </div>

          {/* Afternoon */}
          <div className="relative">
            <div className="absolute -left-[35px] top-1 bg-sky-100 text-sky-700 rounded-full p-1.5 border border-white shadow-sm shrink-0">
              <Sunset className="w-4 h-4" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mb-2">
                <span className="text-xs font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {t.afternoon}
                </span>
                <h3 className="font-bold text-slate-800 text-base">{guide.oneDayItinerary.afternoon.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                {guide.oneDayItinerary.afternoon.activity}
              </p>
            </div>
          </div>

          {/* Evening */}
          <div className="relative">
            <div className="absolute -left-[35px] top-1 bg-indigo-100 text-indigo-700 rounded-full p-1.5 border border-white shadow-sm shrink-0">
              <Moon className="w-4 h-4" />
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mb-2">
                <span className="text-xs font-bold text-indigo-800 bg-indigo-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {t.evening}
                </span>
                <h3 className="font-bold text-slate-800 text-base">{guide.oneDayItinerary.evening.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                {guide.oneDayItinerary.evening.activity}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 💰 Estimated Budget Card */}
      <motion.section 
        variants={cardVariants}
        className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-lg shadow-emerald-50/30"
        id="section-budget"
      >
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <div className="p-3 bg-emerald-50 rounded-2xl text-brand-600">
            <IndianRupee className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">{t.budgetTitle}</h2>
            <p className="text-xs text-slate-400 font-medium">{t.budgetSub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 space-y-3.5">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-inner">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/70 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    <th className="px-5 py-3 border-b border-slate-100">{t.costItem}</th>
                    <th className="px-5 py-3 text-right border-b border-slate-100">{t.approxCost}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {guide.estimatedBudget.breakdown.map((item, index) => (
                    <tr key={index} className="hover:bg-slate-100/30 transition-colors">
                      <td className="px-5 py-3 text-xs font-semibold text-slate-700">{item.item}</td>
                      <td className="px-5 py-3 text-xs font-bold text-slate-800 text-right">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-brand-700 text-white rounded-2xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between h-full min-h-[180px]">
            {/* Background design elements */}
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-10">
              <Coins className="w-40 h-40" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider font-extrabold opacity-80 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                {t.totalRecommendedBudget}
              </span>
              <p className="text-2xl font-black pt-2 flex items-center gap-1">
                {guide.estimatedBudget.totalCost}
              </p>
            </div>

            <p className="text-[11px] leading-relaxed opacity-90 pt-4 border-t border-white/25 mt-4">
              {guide.estimatedBudget.summary}
            </p>
          </div>
        </div>
      </motion.section>

      {/* 📖 Story Corner Card */}
      <motion.section 
        variants={cardVariants}
        className="story-card-paper rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-lg shadow-emerald-50/30 overflow-hidden relative"
        id="section-story-corner"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
          <BookOpenText className="w-60 h-60" />
        </div>

        <div className="flex items-center gap-3 mb-6 border-b border-orange-100/40 pb-4">
          <div className="p-3 bg-orange-50 rounded-2xl text-orange-600">
            <BookOpenText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 tracking-tight font-serif italic">{t.storyCornerTitle}</h2>
            <p className="text-xs text-slate-400 font-medium font-sans">{t.storyCornerSub}</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <div className="text-center">
            <h3 className="font-serif text-lg font-bold text-emerald-900 italic tracking-wide">
              &ldquo;{guide.storyCorner.title}&rdquo;
            </h3>
            <div className="w-16 h-0.5 bg-orange-200 mx-auto my-3" />
          </div>

          {/* Story with dropdown letter layout */}
          <div className="text-sm font-serif text-slate-700 leading-relaxed italic relative">
            <p className="indent-4 select-none">
              {guide.storyCorner.story}
            </p>
            <div className="absolute -left-1.5 -top-1.5 text-2xl font-black text-amber-600/10 pointer-events-none select-none">
              &ldquo;
            </div>
          </div>
        </div>
      </motion.section>

      {/* 🛡 Travel Tips Card */}
      <motion.section 
        variants={cardVariants}
        className="bg-white rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-lg shadow-emerald-50/30"
        id="section-travel-tips"
      >
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <div className="p-3 bg-sky-50 rounded-2xl text-sky-600">
            <Lightbulb className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">{t.travelerTipsTitle}</h2>
            <p className="text-xs text-slate-400 font-medium">{t.travelerTipsSub}</p>
          </div>
        </div>

        <div className="space-y-3.5">
          {guide.travelTips.map((tip, idx) => (
            <div 
              key={idx} 
              className="flex gap-3 items-start bg-slate-50/50 hover:bg-sky-50/10 border border-slate-100 rounded-2xl p-4 transition-colors"
            >
              <div className="p-1.5 bg-sky-100 text-sky-700 rounded-lg mt-0.5 shrink-0 font-bold text-xs w-6 h-6 flex items-center justify-center">
                {idx + 1}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">{tip}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 🚨 Emergency & Support Contacts Card */}
      <motion.section 
        variants={cardVariants}
        className="bg-red-50/45 rounded-3xl p-6 md:p-8 border border-red-100/70 shadow-lg shadow-red-50/10"
        id="section-emergency-support"
      >
        <div className="flex items-center gap-3 mb-6 border-b border-red-100 pb-4">
          <div className="p-3 bg-red-100 text-red-600 rounded-2xl animate-pulse">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">{t.emergencyTitle}</h2>
            <p className="text-xs text-red-500 font-bold uppercase tracking-wider">{t.emergencySub} {guide.destination}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Police */}
          <div className="bg-white border border-red-100 rounded-2xl p-4 flex flex-col justify-between hover:shadow-sm transition-all min-w-0">
            <div className="flex items-start gap-2.5 mb-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">{t.police}</span>
                <h4 className="text-sm font-black text-slate-800 break-words">{t.lawEnforcement}</h4>
              </div>
            </div>
            <a 
              href={`tel:${guide.emergencyNumbers?.police || "100"}`}
              className="mt-2 text-xs font-extrabold text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center break-words whitespace-normal"
            >
              <Phone className="w-3 h-3 shrink-0" />
              <span className="break-all">{guide.emergencyNumbers?.police || "100"}</span>
            </a>
          </div>

          {/* Ambulance */}
          <div className="bg-white border border-red-100 rounded-2xl p-4 flex flex-col justify-between hover:shadow-sm transition-all min-w-0">
            <div className="flex items-start gap-2.5 mb-3">
              <div className="p-2 bg-rose-50 text-rose-600 rounded-xl shrink-0">
                <HeartPulse className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">{t.ambulance}</span>
                <h4 className="text-sm font-black text-slate-800 break-words">{t.medicalDistress}</h4>
              </div>
            </div>
            <a 
              href={`tel:${guide.emergencyNumbers?.ambulance || "102"}`}
              className="mt-2 text-xs font-extrabold text-rose-700 bg-rose-50 hover:bg-rose-100 p-2 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center break-words whitespace-normal"
            >
              <Phone className="w-3 h-3 shrink-0" />
              <span className="break-all">{guide.emergencyNumbers?.ambulance || "102"}</span>
            </a>
          </div>

          {/* Nearby Hospital */}
          <div className="bg-white border border-red-100 rounded-2xl p-4 flex flex-col justify-between hover:shadow-sm transition-all min-w-0">
            <div className="flex items-start gap-2.5 mb-3">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">{t.hospital}</span>
                <h4 className="text-sm font-black text-slate-800 line-clamp-2 leading-tight" title={guide.emergencyNumbers?.hospital || "Local Main Hospital"}>
                  {guide.emergencyNumbers?.hospital || "Local Main Hospital"}
                </h4>
                <span className="text-[9px] text-slate-400 font-medium block mt-0.5">
                  🏥 {t.generalHospital}
                </span>
              </div>
            </div>
            <a 
              href={`tel:${guide.emergencyNumbers?.hospitalPhone || "102"}`}
              className="mt-2 text-xs font-extrabold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 p-2 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center break-words whitespace-normal"
            >
              <Phone className="w-3 h-3 shrink-0" />
              <span className="break-all">{guide.emergencyNumbers?.hospitalPhone || "102 (Ambulance Line)"}</span>
            </a>
          </div>

          {/* Tourist Helpline */}
          <div className="bg-white border border-red-100 rounded-2xl p-4 flex flex-col justify-between hover:shadow-sm transition-all min-w-0">
            <div className="flex items-start gap-2.5 mb-3">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">{t.touristCare}</span>
                <h4 className="text-sm font-black text-slate-800 break-words">{t.touristHelpline}</h4>
              </div>
            </div>
            <a 
              href={`tel:${guide.emergencyNumbers?.touristHelpline || "1363"}`}
              className="mt-2 text-xs font-extrabold text-amber-700 bg-amber-50 hover:bg-amber-100 p-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all text-center break-words whitespace-normal"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="break-all">{guide.emergencyNumbers?.touristHelpline || "1363"}</span>
            </a>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export interface HiddenGem {
  name: string;
  description: string;
  estimatedCost: string;
  bestTime: string;
}

export interface LocalDish {
  dishName: string;
  description: string;
  famousRestaurants: string[];
  approxPrice: string;
}

export interface LocalCulture {
  customs: string;
  dressCode: string;
  greetingStyle: string;
  thingsToAvoid: string[];
}

export interface ItineraryTimeSlot {
  title: string;
  activity: string;
}

export interface OneDayItinerary {
  morning: ItineraryTimeSlot;
  afternoon: ItineraryTimeSlot;
  evening: ItineraryTimeSlot;
}

export interface BudgetBreakdownItem {
  item: string;
  cost: string;
}

export interface EstimatedBudget {
  breakdown: BudgetBreakdownItem[];
  totalCost: string;
  summary: string;
}

export interface StoryCorner {
  title: string;
  story: string;
}

export interface WeatherInfo {
  temperature: string;
  bestSeason: string;
  airQuality: string;
}

export interface EmergencyContacts {
  police: string;
  ambulance: string;
  hospital: string;
  hospitalPhone: string;
  touristHelpline: string;
}

export interface TravelGuide {
  destination: string;
  hiddenGems: HiddenGem[];
  localFood: LocalDish[];
  localCulture: LocalCulture;
  oneDayItinerary: OneDayItinerary;
  estimatedBudget: EstimatedBudget;
  storyCorner: StoryCorner;
  travelTips: string[];
  weather: WeatherInfo;
  emergencyNumbers: EmergencyContacts;
  aiExplanation?: string;
  matchScore?: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

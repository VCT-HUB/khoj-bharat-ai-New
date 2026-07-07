import React, { useState, useRef, useEffect } from "react";
import { Send, Sparkles, MessageSquare, Compass, User } from "lucide-react";
import { ChatMessage, TravelGuide } from "../types";
import { LOCALIZATION } from "../localization";

interface ChatSectionProps {
  guide: TravelGuide;
  history: ChatMessage[];
  onSendMessage: (text: string) => Promise<void>;
  isGenerating: boolean;
  travelStyle: string;
  budget: string;
  interests: string[];
  currentLanguage?: string;
}

export default function ChatSection({
  guide,
  history,
  onSendMessage,
  isGenerating,
  travelStyle,
  budget,
  interests,
  currentLanguage = "English",
}: ChatSectionProps) {
  const t = LOCALIZATION[currentLanguage] || LOCALIZATION.English;
  const suggestions = t.chatSuggestions;

  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat when history changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isGenerating]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isGenerating) return;
    onSendMessage(inputText.trim());
    setInputText("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (isGenerating) return;
    onSendMessage(suggestion);
  };

  return (
    <div 
      className="bg-white rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-50/40 overflow-hidden mt-10"
      id="ask-local-ai-section"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-600 to-emerald-700 p-5 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm">
            <Compass className="w-5 h-5 animate-spin-hover" />
          </div>
          <div>
            <h3 className="font-extrabold text-base tracking-tight flex items-center gap-1.5" id="chat-title">
              {t.askLocalAI}
            </h3>
            <p className="text-[10px] opacity-85 font-medium tracking-wide">
              {t.residentStoryteller} {guide.destination}
            </p>
          </div>
        </div>

        <span className="text-[10px] font-bold bg-white/20 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1 uppercase">
          <Sparkles className="w-3 h-3 text-amber-300" /> {t.liveAssistance}
        </span>
      </div>

      {/* Message Log */}
      <div className="h-[380px] overflow-y-auto p-5 space-y-4 bg-slate-50/50" id="chat-messages-container">
        {history.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center px-6 space-y-3">
            <div className="p-4 bg-brand-50 text-brand-600 rounded-full border border-brand-100">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <p className="font-extrabold text-slate-700 text-sm">{t.askAnything} {guide.destination}!</p>
              <p className="text-xs text-slate-400 max-w-sm mt-1">
                {t.chatWelcomeDesc}
              </p>
            </div>
          </div>
        ) : (
          history.map((msg) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${isUser ? "ml-auto flex-row-reverse" : "mr-auto"}`}
              >
                {/* Avatar */}
                <div className={`p-2 rounded-xl h-9 w-9 shrink-0 flex items-center justify-center font-bold text-xs ${
                  isUser 
                    ? "bg-slate-200 text-slate-600" 
                    : "bg-brand-600 text-white shadow-md shadow-brand-600/10"
                }`}>
                  {isUser ? <User className="w-4 h-4" /> : <Compass className="w-4 h-4" />}
                </div>

                {/* Bubble */}
                <div className="space-y-1">
                  <div className={`p-4 rounded-2xl text-xs leading-relaxed ${
                    isUser
                      ? "bg-gradient-to-br from-brand-600 to-emerald-700 text-white rounded-tr-none shadow-md shadow-brand-500/10 font-medium"
                      : "bg-white border border-slate-100 text-slate-700 rounded-tl-none shadow-sm font-medium"
                  }`}>
                    {/* Render helper to display clean format with newlines */}
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                  </div>
                  <span className={`block text-[9px] text-slate-400 font-bold px-1 ${isUser ? "text-right" : "text-left"}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            );
          })
        )}

        {/* Typing indicator */}
        {isGenerating && (
          <div className="flex gap-3 max-w-[80%] mr-auto">
            <div className="p-2 rounded-xl h-9 w-9 bg-brand-600 text-white flex items-center justify-center shrink-0">
              <Compass className="w-4 h-4 animate-spin" />
            </div>
            <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-brand-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-2.5 h-2.5 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2.5 h-2.5 bg-brand-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              <span className="text-[10px] text-slate-400 font-semibold pl-1">{t.typingIndicator}</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestion Chips */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-b border-slate-100 overflow-x-auto whitespace-nowrap flex gap-2 scrollbar-none">
        {suggestions.map((suggestion, idx) => (
          <button
            key={idx}
            type="button"
            disabled={isGenerating}
            onClick={() => handleSuggestionClick(suggestion)}
            className="inline-block bg-white hover:bg-emerald-50 text-slate-600 hover:text-brand-800 border border-slate-200 hover:border-brand-200 text-[10px] font-bold px-3.5 py-1.5 rounded-full cursor-pointer transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Input Box Form */}
      <form onSubmit={handleSubmit} className="p-4 bg-white flex gap-2.5 items-center">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={isGenerating}
          placeholder={`${t.chatPlaceholder} ${guide.destination}...`}
          className="flex-1 bg-slate-50 border border-slate-200 focus:border-brand-500 focus:bg-white text-slate-700 placeholder-slate-400 text-xs font-medium px-4 py-3.5 rounded-2xl outline-none transition-all"
        />
        <button
          type="submit"
          disabled={isGenerating || !inputText.trim()}
          className={`p-3.5 rounded-2xl text-white flex items-center justify-center transition-all ${
            isGenerating || !inputText.trim()
              ? "bg-slate-200 text-slate-400 cursor-not-allowed"
              : "bg-brand-600 hover:bg-brand-700 hover:scale-[1.03] shadow-md shadow-brand-600/10 cursor-pointer"
          }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}


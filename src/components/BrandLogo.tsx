import React from "react";

interface BrandLogoProps {
  className?: string;
}

export default function BrandLogo({ className = "w-10 h-10" }: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      id="khoj-bharat-logo-svg"
    >
      <defs>
        {/* Tricolor background gradients */}
        <linearGradient id="saffronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="100%" stopColor="#FF6600" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#138808" />
          <stop offset="100%" stopColor="#0B5E04" />
        </linearGradient>
        
        {/* Mountain gradient */}
        <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        {/* Dome/Monument gradient */}
        <linearGradient id="monumentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="50%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>

        {/* Magnifying glass handle gradient */}
        <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Glass reflection gradient */}
        <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 1. Indian Flag Themed Background Shield/Squircle */}
      {/* Dynamic flowing tricolor ribbon/shapes inside the squircle */}
      <rect x="4" y="4" width="92" height="92" rx="24" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
      
      {/* Saffron band (Top curve) */}
      <path
        d="M 4 28 C 30 14, 70 38, 96 24 L 96 4 L 4 4 Z"
        fill="url(#saffronGrad)"
        opacity="0.9"
      />

      {/* Green band (Bottom curve) */}
      <path
        d="M 4 76 C 30 62, 70 86, 96 72 L 96 96 L 4 96 Z"
        fill="url(#greenGrad)"
        opacity="0.95"
      />

      {/* Ashoka Chakra Center Hub Detail (Subtle background hub ring) */}
      <circle cx="50" cy="50" r="18" stroke="#000080" strokeWidth="1" strokeDasharray="2 3" opacity="0.12" />

      {/* 2. Majestic Mountains & Historical Monument (Taj Dome) Silhouette */}
      {/* Mountain outline */}
      <path
        d="M 8 76 L 32 46 L 52 68 L 76 38 L 92 68 L 92 76 Z"
        fill="url(#mountainGrad)"
        opacity="0.25"
      />

      {/* Historical Monument Dome in Center-Right */}
      <g opacity="0.85">
        {/* Main Dome */}
        <path
          d="M 44 56 C 44 44, 56 44, 56 56 Z"
          fill="url(#monumentGrad)"
          stroke="#94A3B8"
          strokeWidth="0.75"
        />
        {/* Dome Finial/Spire */}
        <line x1="50" y1="46" x2="50" y2="40" stroke="#64748B" strokeWidth="1" />
        <circle cx="50" cy="40" r="1" fill="#64748B" />
        {/* Left Side Minaret */}
        <rect x="40" y="48" width="2" height="12" fill="url(#monumentGrad)" stroke="#94A3B8" strokeWidth="0.5" />
        <path d="M 39 48 L 43 48 L 41 45 Z" fill="#64748B" />
        {/* Right Side Minaret */}
        <rect x="58" y="48" width="2" height="12" fill="url(#monumentGrad)" stroke="#94A3B8" strokeWidth="0.5" />
        <path d="M 57 48 L 61 48 L 59 45 Z" fill="#64748B" />
        {/* Base Platform */}
        <rect x="36" y="59" width="28" height="3" rx="0.5" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.5" />
      </g>

      {/* 3. The Magnifying Glass looking over the land */}
      <g filter="drop-shadow(0px 3px 5px rgba(0,0,0,0.15))">
        {/* Handle */}
        <line
          x1="57"
          y1="57"
          x2="80"
          y2="80"
          stroke="url(#handleGrad)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Gold/Metal accent band on handle */}
        <line
          x1="60.5"
          y1="60.5"
          x2="63.5"
          y2="63.5"
          stroke="#F59E0B"
          strokeWidth="6.2"
        />
        
        {/* Outer Ring of Magnifying Glass */}
        <circle
          cx="44"
          y="44"
          r="20"
          stroke="#475569"
          strokeWidth="3.5"
          fill="#FFFFFF"
          fillOpacity="0.1"
        />
        {/* Inner golden/amber rim of lens representing premium search */}
        <circle
          cx="44"
          y="44"
          r="18"
          stroke="#F59E0B"
          strokeWidth="1"
          fill="none"
        />
        
        {/* Glass lens reflection */}
        <circle
          cx="44"
          y="44"
          r="17"
          fill="url(#glassReflection)"
        />
      </g>

      {/* 4. AI Discovery Sparkle / Star inside the lens */}
      <path
        d="M 44 34 L 45.5 39.5 L 51 41 L 45.5 42.5 L 44 48 L 42.5 42.5 L 37 41 L 42.5 39.5 Z"
        fill="#FFD700"
        className="animate-pulse"
      />
      <circle cx="44" cy="41" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

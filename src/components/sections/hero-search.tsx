"use client";

import React, { useState } from "react";

/**
 * HeroSearch Component
 * Clones the hero section featuring the "Animexus" headline, trending/ongoing toggle switches,
 * and the integrated search bar with a gradient lime-green button.
 * 
 * Theme: Dark
 * Design System: Cyber-Noir Minimalist (Glassmorphism)
 */
export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState<"trending" | "ongoing">("trending");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would be handled here
  };

  return (
    <section className="pt-8">
      {/* Title and Toggle Container */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#bef264]">
            Animexus – Your Nexus to Anime Insights
          </h1>
          <p className="mt-2 text-white/70 max-w-2xl text-base leading-relaxed">
            Animexus unites trending, ongoing, and top-rated anime in one place
            with a sleek, glass-styled interface powered by the Jikan API.
          </p>
        </div>

        {/* Trending/Ongoing Switcher */}
        <div className="flex items-center gap-2 bg-white/5 rounded-[12px] p-1 border border-white/10 shrink-0">
          <button
            onClick={() => setActiveTab("trending")}
            className={`px-3 py-1.5 rounded-[10px] text-sm transition-all duration-200 font-semibold ${
              activeTab === "trending"
                ? "bg-gradient-to-r from-[#2dd4bf] to-[#bef264] text-[#050607]"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            Trending
          </button>
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`px-3 py-1.5 rounded-[10px] text-sm transition-all duration-200 font-semibold ${
              activeTab === "ongoing"
                ? "bg-gradient-to-r from-[#2dd4bf] to-[#bef264] text-[#050607]"
                : "text-white/80 hover:bg-[#2dd4bf]/20"
            }`}
          >
            Ongoing
          </button>
        </div>
      </div>

      {/* Integrated Search Bar */}
      <form onSubmit={handleSearch} className="mt-4">
        <div className="relative max-w-2xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search anime by name..."
            className="w-full rounded-[15px] bg-white/5 placeholder-white/50 px-4 py-3 text-base outline-none border border-white/10 focus:border-[#2dd4bf]/60 focus:ring-2 focus:ring-[#2dd4bf]/30 text-white transition-all duration-200"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 rounded-[12px] px-4 bg-gradient-to-r from-[#2dd4bf] to-[#bef264] text-[#050607] text-sm font-semibold shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:brightness-110 hover:scale-105 transition-transform duration-200"
          >
            Search
          </button>
        </div>
      </form>

      {/* Horizontal Carousel Area Placeholder */}
      <div className="mt-5">
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4">
            <div className="text-white/70 italic p-4 text-sm">
              Loading content...
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
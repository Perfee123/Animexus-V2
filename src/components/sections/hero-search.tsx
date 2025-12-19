"use client";

import React, { useState, useEffect } from "react";
import { Search, TrendingUp, Calendar, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { searchAnime } from "@/lib/jikan";
import { AnimeCard } from "@/components/AnimeCard";

export default function HeroSearch() {
  const [activeTab, setActiveTab] = useState<"trending" | "ongoing">("trending");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.length > 2) {
        setIsSearching(true);
        try {
          const data = await searchAnime(searchQuery);
          setSearchResults(data.data.slice(0, 6));
        } catch (error) {
          console.error(error);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <section className="pt-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Animexus <span className="text-lime-300">–</span> <br />
            <span className="text-teal-400">Your Nexus to Anime</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-white/60 max-w-xl text-lg leading-relaxed"
          >
            Discover, track, and explore the latest trending and ongoing anime series. 
            Powered by Jikan API for real-time insights.
          </motion.p>
        </div>

        <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-2xl p-1.5 border border-white/10 shrink-0">
          <button
            onClick={() => setActiveTab("trending")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all duration-300 font-semibold ${
              activeTab === "trending"
                ? "bg-lime-400 text-black shadow-[0_0_20px_rgba(190,242,100,0.3)]"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <TrendingUp className="h-4 w-4" />
            Trending
          </button>
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition-all duration-300 font-semibold ${
              activeTab === "ongoing"
                ? "bg-teal-400 text-black shadow-[0_0_20px_rgba(45,212,191,0.3)]"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <Calendar className="h-4 w-4" />
            Ongoing
          </button>
        </div>
      </div>

      <div className="mt-8 relative z-50">
        <div className="relative max-w-2xl group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-white/40 group-focus-within:text-teal-400 transition-colors" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for your favorite anime..."
            className="w-full rounded-2xl bg-white/5 backdrop-blur-xl placeholder-white/30 pl-12 pr-4 py-4 text-lg outline-none border border-white/10 focus:border-teal-400/50 focus:ring-4 focus:ring-teal-400/10 text-white transition-all duration-300"
          />
          {isSearching && (
            <div className="absolute right-4 inset-y-0 flex items-center">
              <Loader2 className="h-5 w-5 animate-spin text-teal-400" />
            </div>
          )}
        </div>

        <AnimatePresence>
          {searchResults.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full mt-4 w-full max-w-4xl p-6 rounded-2xl bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {searchResults.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

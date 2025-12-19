"use client";

import React, { useState, useEffect } from "react";
import { Loader2, TrendingUp } from "lucide-react";
import { getTopAnime } from "@/lib/jikan";
import { AnimeCard } from "@/components/AnimeCard";
import { motion } from "framer-motion";

export default function TopRatedGrid() {
  const [animeList, setAnimeList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTopAnime();
        setAnimeList(data.data.slice(0, 12));
      } catch (error) {
        console.error("Failed to fetch top anime:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="w-full py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-lime-400/10 border border-lime-400/20">
            <TrendingUp className="h-5 w-5 text-lime-400" />
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Top Rated Anime
          </h2>
        </div>
        <button className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
          View All
        </button>
      </div>

      {isLoading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-4 text-white/40">
          <Loader2 className="h-10 w-10 animate-spin text-teal-400" />
          <p className="text-sm font-medium animate-pulse">Fetching global rankings...</p>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {animeList.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </motion.div>
      )}
    </section>
  );
}

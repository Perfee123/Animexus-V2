"use client";

import React, { useState, useEffect } from "react";
import { Loader2, LayoutGrid } from "lucide-react";
import { getAnimeGenres } from "@/lib/jikan";
import { motion } from "framer-motion";

export default function GenreExplorer() {
  const [genres, setGenres] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAnimeGenres();
        // Take first 15 interesting genres
        setGenres(data.data.slice(0, 15));
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="w-full py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-teal-400/10 border border-teal-400/20">
          <LayoutGrid className="h-5 w-5 text-teal-400" />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Explore Genres
        </h2>
      </div>

      <div 
        className="flex flex-wrap gap-3 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[24px] shadow-2xl"
      >
        {isLoading ? (
          <div className="flex items-center justify-start gap-3 text-white/40 py-2">
            <Loader2 className="h-5 w-5 animate-spin text-teal-400" />
            <span className="text-sm font-medium">Categorizing anime...</span>
          </div>
        ) : (
          genres.map((genre, idx) => (
            <motion.button
              key={genre.mal_id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/5 border border-white/10 text-white/80 hover:text-teal-300 hover:border-teal-400/30 transition-all duration-300"
            >
              {genre.name}
              <span className="ml-2 text-[10px] text-white/30 font-normal">{genre.count}</span>
            </motion.button>
          ))
        )}
      </div>
    </section>
  );
}

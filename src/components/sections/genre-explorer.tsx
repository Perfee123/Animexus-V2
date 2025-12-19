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
        setGenres(data.data.slice(0, 18));
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="w-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
          <LayoutGrid className="h-5 w-5 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Explore Genres
        </h2>
      </div>

      <div 
        className="flex flex-wrap gap-3 p-6 rounded-3xl bg-card border border-border shadow-2xl"
      >
        {isLoading ? (
          <div className="flex items-center justify-start gap-3 text-muted-foreground py-2">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <span className="text-sm font-medium">Categorizing anime...</span>
          </div>
        ) : (
          genres.map((genre, idx) => (
            <motion.button
              key={genre.mal_id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-white/5 border border-white/10 text-white/80 hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              {genre.name}
              <span className="ml-2 text-[10px] text-muted-foreground font-normal">{genre.count}</span>
            </motion.button>
          ))
        )}
      </div>
    </section>
  );
}

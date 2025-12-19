"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface AnimeCardProps {
  anime: {
    mal_id: number;
    title: string;
    images: {
      webp: {
        image_url: string;
        large_image_url: string;
      };
    };
    score: number;
    type: string;
    episodes: number;
    genres: { name: string }[];
  };
}

export function AnimeCard({ anime }: AnimeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col gap-3"
    >
      <Link href={`/anime/${anime.mal_id}`} className="relative aspect-[3/4] overflow-hidden rounded-[15px] border border-white/10 bg-white/5">
        <img
          src={anime.images.webp.large_image_url || anime.images.webp.image_url}
          alt={anime.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Score Badge */}
        {anime.score && (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2 py-1 border border-white/20">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-white">{anime.score}</span>
          </div>
        )}

        {/* Info on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex flex-wrap gap-1 mb-2">
            {anime.genres?.slice(0, 2).map((genre, idx) => (
              <span key={idx} className="text-[10px] font-semibold uppercase tracking-wider text-teal-300 bg-teal-400/10 px-2 py-0.5 rounded-full border border-teal-400/20">
                {genre.name}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/70 line-clamp-2">
            {anime.type} • {anime.episodes ? `${anime.episodes} eps` : 'Ongoing'}
          </p>
        </div>
      </Link>

      <div className="px-1">
        <h3 className="text-sm font-semibold text-white line-clamp-1 group-hover:text-lime-300 transition-colors">
          {anime.title}
        </h3>
      </div>
    </motion.div>
  );
}

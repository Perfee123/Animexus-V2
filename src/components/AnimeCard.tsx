"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';

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
    rating?: string;
    genres: { name: string }[];
  };
}

export function AnimeCard({ anime }: AnimeCardProps) {
  const isNSFW = anime.genres?.some(g => ['Hentai', 'Erotica'].includes(g.name)) || anime.rating?.includes('R+');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col gap-3"
    >
      <Link href={`/anime/${anime.mal_id}`} className="relative aspect-[3/4.5] overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-2xl">
        <img
          src={anime.images.webp.large_image_url || anime.images.webp.image_url}
          alt={anime.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center neon-glow"
          >
            <Play fill="currentColor" size={24} className="ml-1" />
          </motion.div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 items-end z-10">
          {anime.score && (
            <div className="flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2 py-1 border border-white/20">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span className="text-xs font-bold text-white">{anime.score}</span>
            </div>
          )}
          {isNSFW && (
            <div className="rounded-full bg-red-600 px-2 py-0.5 border border-red-500/50 shadow-lg shadow-red-600/20">
              <span className="text-[10px] font-black text-white uppercase tracking-tighter">NSFW</span>
            </div>
          )}
        </div>

        {/* Info on hover (Mobile/Desktop) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <div className="flex flex-wrap gap-1 mb-2">
            {anime.genres?.slice(0, 2).map((genre, idx) => (
              <span key={idx} className="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5 rounded-full border border-secondary/20">
                {genre.name}
              </span>
            ))}
          </div>
          <p className="text-[10px] text-white/70 font-medium">
            {anime.type} • {anime.episodes ? `${anime.episodes} episodes` : 'Ongoing'}
          </p>
        </div>
      </Link>

      <div className="px-1 space-y-1">
        <h3 className="text-sm font-bold text-white line-clamp-2 group-hover:text-primary transition-colors leading-snug">
          {anime.title}
        </h3>
        <p className="text-xs text-muted-foreground font-medium">
          {anime.type}
        </p>
      </div>
    </motion.div>
  );
}

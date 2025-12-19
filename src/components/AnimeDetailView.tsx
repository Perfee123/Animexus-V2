"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, Info, Users, Clock, Calendar, ChevronRight } from 'lucide-react';

interface AnimeDetailViewProps {
  anime: any;
  characters: any[];
}

export default function AnimeDetailView({ anime, characters }: AnimeDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'characters'>('overview');

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Hero Banner Section */}
      <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            className="h-full w-full object-cover opacity-30 blur-2xl scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container relative z-10 h-full flex items-end pb-12">
          <div className="flex flex-col md:flex-row gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="shrink-0 hidden md:block"
            >
              <img
                src={anime.images.webp.large_image_url}
                alt={anime.title}
                className="w-64 rounded-2xl border-2 border-white/10 shadow-2xl"
              />
            </motion.div>

            <div className="flex-1 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-wrap gap-2"
              >
                {anime.genres.map((genre: any) => (
                  <span key={genre.mal_id} className="px-3 py-1 rounded-full bg-teal-400/20 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-widest">
                    {genre.name}
                  </span>
                ))}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-black tracking-tighter"
              >
                {anime.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-6 text-white/60 font-medium"
              >
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white text-lg font-bold">{anime.score}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>{anime.popularity} Popularity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{anime.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{anime.season} {anime.year}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <button className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-lime-400 text-black font-black hover:bg-lime-300 transition-all active:scale-95 shadow-[0_0_30px_rgba(190,242,100,0.4)]">
                  <Play className="h-5 w-5 fill-black" />
                  WATCH TRAILER
                </button>
                <button className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 transition-all active:scale-95">
                  ADD TO LIST
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-12">
        <div className="flex gap-1 bg-white/5 p-1 rounded-2xl border border-white/10 w-fit mb-10">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'overview' ? 'bg-teal-400 text-black' : 'text-white/60 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('characters')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'characters' ? 'bg-teal-400 text-black' : 'text-white/60 hover:text-white'
            }`}
          >
            Characters
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            >
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-lime-300">
                    <Info className="h-5 w-5" />
                    Synopsis
                  </h3>
                  <p className="text-white/70 leading-relaxed text-lg italic border-l-4 border-teal-400 pl-6 bg-teal-400/5 py-4 rounded-r-2xl">
                    {anime.synopsis}
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Status', value: anime.status },
                    { label: 'Format', value: anime.type },
                    { label: 'Episodes', value: anime.episodes },
                    { label: 'Source', value: anime.source },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                      <p className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-white font-bold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/5 border border-white/10 p-6 rounded-[30px] shadow-2xl">
                  <h4 className="text-lg font-bold mb-4 text-teal-400 uppercase tracking-widest">Studios</h4>
                  <div className="flex flex-wrap gap-2">
                    {anime.studios.map((studio: any) => (
                      <span key={studio.mal_id} className="px-3 py-1 bg-white/10 rounded-lg text-sm font-medium">
                        {studio.name}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-bold mt-8 mb-4 text-teal-400 uppercase tracking-widest">External Links</h4>
                  <div className="space-y-2">
                    {anime.external?.slice(0, 5).map((link: any, idx: number) => (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                      >
                        <span className="text-sm font-medium">{link.name}</span>
                        <ChevronRight className="h-4 w-4 text-white/30 group-hover:text-teal-400 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="characters"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {characters?.slice(0, 18).map((char: any) => (
                <motion.div
                  key={char.character.mal_id}
                  whileHover={{ y: -5 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <img
                    src={char.character.images.webp.image_url}
                    alt={char.character.name}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-sm font-bold truncate group-hover:text-lime-300 transition-colors">
                      {char.character.name}
                    </p>
                    <p className="text-[10px] text-white/60 font-medium uppercase tracking-wider">
                      {char.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

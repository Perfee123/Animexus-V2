"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, Info, Users, Clock, Calendar, ChevronRight, Share2, Heart, ExternalLink, Youtube, Twitter } from 'lucide-react';
import { useMyList, ListStatus } from '@/hooks/useMyList';
import * as Tooltip from '@radix-ui/react-tooltip';

interface AnimeDetailViewProps {
  anime: any;
  characters: any[];
}

export default function AnimeDetailView({ anime, characters }: AnimeDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'characters' | 'media'>('overview');
  const { addItem, getStatus, removeItem } = useMyList();
  const currentStatus = getStatus(anime.mal_id);

  const handleAddToList = (status: ListStatus) => {
    addItem({
      mal_id: anime.mal_id,
      title: anime.title,
      image_url: anime.images.webp.large_image_url
    }, status);
  };

  const externalLinks = anime.external?.filter((link: any) => 
    link.name.toLowerCase().includes('twitter') || 
    link.name.toLowerCase().includes('youtube') ||
    link.name.toLowerCase().includes('official site')
  ) || [];

  return (
    <div className="relative min-h-screen pb-24">
      {/* Hero Section with Backdrop */}
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={anime.images.webp.large_image_url}
            alt={anime.title}
            className="h-full w-full object-cover opacity-20 blur-xl scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="container relative h-full flex items-end pb-12">
          <div className="flex flex-col md:flex-row gap-10 items-end w-full">
            {/* Poster */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="shrink-0 hidden md:block group relative"
            >
              <img
                src={anime.images.webp.large_image_url}
                alt={anime.title}
                className="w-72 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 rounded-3xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            {/* Title & Core Info */}
            <div className="flex-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-wrap gap-2"
              >
                {anime.genres.map((genre: any) => (
                  <span key={genre.mal_id} className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">
                    {genre.name}
                  </span>
                ))}
              </motion.div>

              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]"
                >
                  {anime.title}
                </motion.h1>
                <p className="text-xl text-muted-foreground font-medium italic">{anime.title_japanese}</p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-8"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Score</span>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary fill-primary" />
                    <span className="text-2xl font-black text-white">{anime.score || 'N/A'}</span>
                  </div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Rank</span>
                  <span className="text-2xl font-black text-white">#{anime.rank || '??'}</span>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Popularity</span>
                  <span className="text-2xl font-black text-white">#{anime.popularity || '??'}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <div className="flex items-center bg-card border border-border rounded-2xl p-1">
                  {(['Watching', 'Plan to Watch', 'Completed'] as ListStatus[]).map((status) => (
                    <button
                      key={status}
                      onClick={() => currentStatus === status ? removeItem(anime.mal_id) : handleAddToList(status)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        currentStatus === status 
                          ? "bg-primary text-white shadow-lg neon-glow" 
                          : "text-muted-foreground hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
                
                <button className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all active:scale-95">
                  <Share2 size={20} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details & Characters */}
          <div className="lg:col-span-8 space-y-16">
            {/* Tabs */}
            <div className="flex gap-2 p-1.5 bg-card border border-border rounded-2xl w-fit">
              {['overview', 'characters', 'media'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`px-8 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${
                    activeTab === tab ? 'bg-primary text-white neon-glow' : 'text-muted-foreground hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  {/* Trailer Embed */}
                  {anime.trailer?.embed_url && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Youtube className="text-primary" />
                        Official Trailer
                      </h3>
                      <div className="aspect-video w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <iframe
                          src={anime.trailer.embed_url}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Info className="text-primary" />
                      Synopsis
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {anime.synopsis}
                    </p>
                  </div>

                  {/* Related Content */}
                  {anime.relations && anime.relations.length > 0 && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white">Related Content</h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {anime.relations.slice(0, 4).map((rel: any, i: number) => (
                          <div key={i} className="p-6 rounded-2xl bg-card border border-border flex flex-col gap-2">
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{rel.relation}</span>
                            {rel.entry.map((entry: any) => (
                              <p key={entry.mal_id} className="text-white font-bold">{entry.name}</p>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'characters' && (
                <motion.div
                  key="characters"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                >
                  <Tooltip.Provider>
                    {characters?.slice(0, 20).map((char: any) => (
                      <Tooltip.Root key={char.character.mal_id}>
                        <Tooltip.Trigger asChild>
                          <motion.div
                            whileHover={{ y: -5 }}
                            className="group relative aspect-[3/4.5] overflow-hidden rounded-2xl border border-white/10 bg-card cursor-pointer"
                          >
                            <img
                              src={char.character.images.webp.image_url}
                              alt={char.character.name}
                              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <p className="text-sm font-bold text-white truncate">{char.character.name}</p>
                              <p className="text-[10px] text-primary font-bold uppercase tracking-wider">{char.role}</p>
                            </div>
                          </motion.div>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="z-50 max-w-[200px] rounded-xl bg-card p-4 text-xs text-white border border-primary/30 shadow-2xl neon-glow animate-in fade-in zoom-in-95 duration-200"
                            sideOffset={5}
                          >
                            <p className="font-bold text-primary mb-1">{char.character.name}</p>
                            <p className="text-muted-foreground leading-relaxed">
                              Role: {char.role}
                              {char.voice_actors?.[0] && `\nVA: ${char.voice_actors[0].person.name}`}
                            </p>
                            <Tooltip.Arrow className="fill-primary/30" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    ))}
                  </Tooltip.Provider>
                </motion.div>
              )}

              {activeTab === 'media' && (
                <motion.div
                  key="media"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {/* Images or other media would go here */}
                  <div className="p-12 rounded-3xl bg-card border border-border border-dashed flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                      <Youtube size={32} className="text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground font-medium">Additional media content currently being indexed.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Stats & Meta */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-[40px] bg-card border border-border space-y-8 shadow-2xl">
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Information</h4>
                <div className="space-y-6">
                  {[
                    { label: 'Type', value: anime.type, icon: Play },
                    { label: 'Episodes', value: anime.episodes || 'Unknown', icon: Youtube },
                    { label: 'Status', value: anime.status, icon: Info },
                    { label: 'Aired', value: anime.aired?.string, icon: Calendar },
                    { label: 'Duration', value: anime.duration, icon: Clock },
                    { label: 'Rating', value: anime.rating, icon: Star },
                    { label: 'Source', value: anime.source, icon: Share2 },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-bold text-white">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em]">External Links</h4>
                <div className="grid grid-cols-1 gap-3">
                  {externalLinks.map((link: any, idx: number) => (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        {link.name.toLowerCase().includes('twitter') ? <Twitter size={18} className="text-[#1DA1F2]" /> : 
                         link.name.toLowerCase().includes('youtube') ? <Youtube size={18} className="text-[#FF0000]" /> : 
                         <ExternalLink size={18} className="text-primary" />}
                        <span className="text-sm font-bold text-white">{link.name}</span>
                      </div>
                      <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>

              {anime.background && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Background</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    {anime.background}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

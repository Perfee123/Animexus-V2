"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, ChevronRight, X, Loader2 } from 'lucide-react';
import { searchAnime, getAnimeGenres } from '@/lib/jikan';
import { AnimeCard } from '@/components/AnimeCard';
import { cn } from '@/lib/utils';

const ExploreView = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState<any[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>(searchParams.get('genre') || '');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = await getAnimeGenres();
        // Sort genres: put Hentai (id 12) at the end if it exists
        const sortedGenres = data.data.sort((a: any, b: any) => {
          if (a.mal_id === 12) return 1;
          if (b.mal_id === 12) return -1;
          return a.name.localeCompare(b.name);
        });
        setGenres(sortedGenres);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    handleSearch(true);
  }, [selectedGenre, selectedType, selectedStatus]);

  const handleSearch = async (reset = false) => {
    setLoading(true);
    const currentPage = reset ? 1 : page;
    try {
      let params = "";
      if (selectedGenre) params += `&genres=${selectedGenre}`;
      if (selectedType) params += `&type=${selectedType}`;
      if (selectedStatus) params += `&status=${selectedStatus}`;

      const data = await searchAnime(query, currentPage, params);
      if (reset) {
        setResults(data.data || []);
      } else {
        setResults(prev => [...prev, ...(data.data || [])]);
      }
      setHasMore(data.pagination.has_next_page);
      setPage(currentPage + 1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 pb-24">
      {/* Header & Search */}
      <section className="relative py-20 overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary/10 via-background to-secondary/10 border border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
        <div className="container relative z-10 mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              EXPLORE <span className="text-primary">ANIME</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover your next favorite series. Filter by genre, status, or search through thousands of titles.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative group">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch(true)}
              placeholder="Search anime..."
              className="w-full bg-white/5 border-2 border-white/10 rounded-full py-6 px-10 text-xl text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all backdrop-blur-xl"
            />
            <button 
              onClick={() => handleSearch(true)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-lg shadow-primary/20"
            >
              <Search size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-6">
        <div className="flex flex-wrap items-center gap-6 p-8 rounded-[2rem] bg-card border border-white/5">
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
            <Filter size={18} />
            Filters
          </div>

          <div className="flex-1 flex flex-wrap gap-4">
            {/* Genre Filter */}
            <select 
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50"
            >
              <option value="">All Genres</option>
              {genres.map(g => (
                <option key={g.mal_id} value={g.mal_id}>{g.name}</option>
              ))}
            </select>

            {/* Type Filter */}
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50"
            >
              <option value="">All Types</option>
              <option value="tv">TV Series</option>
              <option value="movie">Movies</option>
              <option value="ova">OVA</option>
              <option value="special">Special</option>
            </select>

            {/* Status Filter */}
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50"
            >
              <option value="">All Status</option>
              <option value="airing">Currently Airing</option>
              <option value="complete">Completed</option>
              <option value="upcoming">Upcoming</option>
            </select>

            {(selectedGenre || selectedType || selectedStatus || query) && (
              <button 
                onClick={() => {
                  setSelectedGenre('');
                  setSelectedType('');
                  setSelectedStatus('');
                  setQuery('');
                  handleSearch(true);
                }}
                className="flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-white transition-colors uppercase tracking-widest"
              >
                <X size={14} />
                Clear All
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="container mx-auto px-6">
        {loading && results.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-40 space-y-4">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
            <p className="text-muted-foreground font-bold animate-pulse">Summoning Anime...</p>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
              {results.map((anime, idx) => (
                <AnimeCard key={`${anime.mal_id}-${idx}`} anime={anime} />
              ))}
            </div>
            
            {hasMore && (
              <div className="flex justify-center pt-8">
                <button
                  onClick={() => handleSearch()}
                  disabled={loading}
                  className="px-12 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all flex items-center gap-3 active:scale-95 disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      LOAD MORE
                      <ChevronRight size={20} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-40">
            <p className="text-2xl text-muted-foreground font-black">No anime found matching your criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ExploreView;
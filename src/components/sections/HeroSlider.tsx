"use client";

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Play, Info, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface HeroSliderProps {
  trending: any[];
}

const HeroSlider = ({ trending }: HeroSliderProps) => {
  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden rounded-3xl mb-12 group">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        loop={true}
        className="w-full h-full"
      >
        {trending.slice(0, 10).map((anime, index) => (
          <SwiperSlide key={anime.mal_id}>
            <div className="relative w-full h-full">
              {/* Cinematic Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}
              >
                <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content Grid */}
              <div className="relative h-full container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-12">
                {/* Left Side: Info */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="z-10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/30 flex items-center gap-2">
                      <Star size={14} fill="currentColor" />
                      {anime.score} Rating
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-bold backdrop-blur-md">
                      #{index + 1} Trending
                    </div>
                  </div>
                  
                  <h2 className="text-4xl md:text-7xl font-black text-white mb-6 line-clamp-2 leading-tight tracking-tighter">
                    {anime.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-xl leading-relaxed">
                    {anime.synopsis}
                  </p>

                      <div className="flex flex-wrap items-center gap-4">
                        <Link
                          href={`/anime/${anime.mal_id}`}
                          className="px-10 py-5 rounded-full bg-primary text-white font-black flex items-center gap-3 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-95"
                        >
                          <Play size={24} fill="currentColor" />
                          EXPLORE NOW
                        </Link>
                        <Link
                          href={`/anime/${anime.mal_id}`}
                          className="px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold flex items-center gap-2 transition-all hover:bg-white/10 active:scale-95 backdrop-blur-sm"
                        >
                          DETAILS
                        </Link>
                      </div>
                </motion.div>

                {/* Right Side: High-res Poster */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, type: "spring" }}
                  className="hidden md:flex justify-end"
                >
                  <div className="relative group/poster">
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-0 group-hover/poster:opacity-100 transition-opacity duration-700" />
                    <img 
                      src={anime.images.jpg.large_image_url} 
                      alt={anime.title}
                      className="w-[350px] aspect-[2/3] object-cover rounded-[2rem] shadow-2xl border-4 border-white/10 relative z-10 transition-transform duration-500 group-hover/poster:-translate-y-4"
                    />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Navigation Buttons */}
      <div className="absolute bottom-12 right-12 z-10 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;

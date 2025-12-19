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
        {trending.slice(0, 5).map((anime, index) => (
          <SwiperSlide key={anime.mal_id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url(${anime.images.jpg.large_image_url})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full container mx-auto flex flex-col justify-center px-6 md:px-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-2xl"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      {anime.score}
                    </div>
                    <span className="text-muted-foreground text-sm font-medium">
                      {anime.type} • {anime.episodes || '?'} eps
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 line-clamp-2 leading-tight">
                    {anime.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-xl">
                    {anime.synopsis}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/anime/${anime.mal_id}`}
                      className="px-8 py-4 rounded-2xl bg-primary text-white font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 neon-glow"
                    >
                      <Play size={20} fill="currentColor" />
                      Watch Now
                    </Link>
                    <Link
                      href={`/anime/${anime.mal_id}`}
                      className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-2 transition-all hover:bg-white/10 active:scale-95"
                    >
                      <Info size={20} />
                      More Info
                    </Link>
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

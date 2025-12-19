import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Navigation = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-6 md:px-8 max-w-[1400px]">
        {/* Logo */}
        <a className="flex items-center gap-2 group transition-opacity hover:opacity-90" href="/">
          <span className="font-semibold tracking-tight text-white text-lg">
            <span className="text-lime-300">Anime</span>
            <span className="text-lime-300">xus</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            className="text-sm font-medium text-white transition-colors" 
            href="/"
          >
            Home
          </a>
          <a 
            className="text-sm font-medium text-white/70 hover:text-white transition-colors" 
            href="/ratings"
          >
            Ratings
          </a>
          <a 
            className="text-sm font-medium text-white/70 hover:text-white transition-colors" 
            href="/contact"
          >
            Contact
          </a>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <a 
            className="rounded-[12px] px-5 py-2 bg-white/10 text-white/90 hover:bg-white/15 border border-white/15 text-sm font-semibold transition-all duration-200 active:scale-95" 
            href="/login"
          >
            Login
          </a>
          
          {/* Mobile Menu Toggle (Visible only on small screens) */}
          <button className="md:hidden p-2 text-white/70 hover:text-white transition-colors">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
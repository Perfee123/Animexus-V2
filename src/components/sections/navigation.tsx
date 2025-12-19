"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, MessageCircle, RefreshCw, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

    const navLinks = [
      { name: 'Home', href: '/', icon: Home },
      { name: 'Explore', href: '/explore', icon: Heart },
      { name: 'Contact', href: '/contact', icon: MessageCircle },
      { name: 'Updates', href: '/updates', icon: RefreshCw },
    ];

    return (
      <header className="sticky top-0 z-50 w-full solid-header h-16">
        <div className="container mx-auto flex h-full items-center justify-between gap-4 px-4 md:px-8">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group transition-all"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow"
            >
              <div className="w-6 h-6 border-2 border-white rounded-md" />
            </motion.div>
            <span className="font-bold tracking-tighter text-white text-2xl">
              Anime<span className="text-primary">xus</span>
            </span>
          </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-md group",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-white"
                )}
              >
                <div className="flex items-center gap-2">
                  <Icon size={16} className={cn(isActive && "text-primary")} />
                  {link.name}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-1/2" />
              </Link>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <Link 
            href="/my-list"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-semibold transition-all hover:bg-primary/20 active:scale-95"
          >
            <Heart size={16} fill="currentColor" />
            <span>My List</span>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-white transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-card border-b border-border p-4 md:hidden flex flex-col gap-2"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-colors",
                    isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Icon size={18} />
                  <span className="font-medium">{link.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;

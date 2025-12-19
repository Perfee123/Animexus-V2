"use client";

import React from 'react';
import Navigation from '@/components/sections/navigation';
import Footer from '@/components/sections/footer';
import { motion } from 'framer-motion';
import { History, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export default function UpdatesPage() {
    const versions = [
      { version: 'V2.0.5', date: 'Dec 10, 2025', changes: ['Complete Cyber-Noir UI overhaul', 'Added Year filter and custom dropdowns', 'Removed all brand logos', 'Implemented success popups for actions', 'Optimized Hero Slider visuals', 'System status indicator added', 'Privacy & Terms pages integrated', 'Refined character detail hover effects'], status: 'Current' },
      { version: 'V2.0.4', date: 'Dec 05, 2025', changes: ['Enhanced search algorithm', 'Seasonal data synchronization'], status: 'Previous' },
      { version: 'V2.0.3', date: 'Nov 30, 2025', changes: ['Mobile layout optimizations', 'Image lazy loading improved'], status: 'Previous' },
      { version: 'V2.0.2', date: 'Nov 20, 2025', changes: ['Metadata expansion for details', 'Genre explorer redesign'], status: 'Previous' },
      { version: 'V2.0.1', date: 'Nov 10, 2025', changes: ['Social media link sync', 'Rating score precision fix'], status: 'Previous' },
      { version: 'V2.0.0', date: 'Nov 01, 2025', changes: ['Next.js 15 Migration', 'Framer Motion implementation'], status: 'Previous' },
      { version: 'V1.5.0', date: 'Oct 15, 2025', changes: ['My List functionality', 'Quick view modals'], status: 'Previous' },
      { version: 'V1.2.0', date: 'Oct 01, 2025', changes: ['Global search bar v1', 'History tracking'], status: 'Previous' },
      { version: 'V1.1.0', date: 'Sep 15, 2025', changes: ['Stability patches', 'API rate limit handling'], status: 'Previous' },
      { version: 'V1.0.0', date: 'Sep 01, 2025', changes: ['Initial Animexus Launch'], status: 'Birth' },
    ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 md:px-8 py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-5xl font-extrabold text-white flex items-center gap-4 tracking-tighter">
                <History className="text-primary" size={48} />
                Release Notes
              </h1>
              <p className="text-muted-foreground text-lg">Tracking the evolution of Animexus from birth to now.</p>
            </div>

            <div className="px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 flex items-center gap-3">
              <AlertCircle size={20} className="text-primary" />
              <div>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">Current Status</p>
                <p className="text-sm font-bold text-white">Might be discontinued</p>
              </div>
            </div>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-border before:to-transparent">
            {versions.map((v, idx) => (
              <motion.div 
                key={v.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Clock size={18} />
                </div>

                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-3xl bg-card border border-border group-hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-extrabold text-white">{v.version}</h3>
                    <time className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{v.date}</time>
                  </div>
                  <ul className="space-y-3">
                    {v.changes.map((change, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        {change}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex justify-end">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      v.status === 'Current' ? 'bg-primary text-white' : 'bg-white/5 text-muted-foreground'
                    }`}>
                      {v.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

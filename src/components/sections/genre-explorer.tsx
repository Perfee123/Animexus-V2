"use client";

import React from "react";
import { Loader2 } from "lucide-react";

/**
 * GenreExplorer Component
 * 
 * Clones the horizontal genre discovery section with a "Explore Genres" header
 * and a container meant to hold dynamic genre tags.
 * 
 * Key features:
 * - Glassmorphism design consistent with the "Cyber-Noir Minimalist" aesthetic.
 * - Responsive layout following the provided container constraints.
 * - Loading state representation as seen in the target website's screenshots.
 */
export default function GenreExplorer() {
  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white tracking-normal">
          Explore Genres
        </h2>
      </div>

      {/* Glassmorphism Container */}
      <div 
        className="flex flex-wrap gap-2 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-[15px] min-h-[72px] items-center"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 30px 0px"
        }}
      >
        {/* Dynamic Content Placeholder (Loading State) */}
        <div className="flex items-center justify-start gap-3 text-white/80 pl-2">
          <Loader2 
            className="h-6 w-6 animate-spin text-teal-300" 
            strokeWidth={2.5}
          />
          <span className="text-sm font-medium tracking-wide">
            Loading genres...
          </span>
        </div>

        {/* 
          Note: This container is architected to hold dynamic genre tags 
          which would typically follow this structure:
          <button className="px-3 py-1.5 rounded-[10px] text-sm bg-white/10 hover:bg-white/20 transition-colors border border-white/5">
            Genre Name
          </button>
        */}
      </div>
    </section>
  );
}

/**
 * Technical Breakdown:
 * - Header: Uses 'text-xl font-semibold' as per computed styles.
 * - Container Styling: 
 *    - 'bg-white/5' matches the 5% white fill requirement.
 *    - 'backdrop-blur-xl' provides the 20px blur effect.
 *    - 'border-white/10' matches the 10% white border requirement.
 *    - 'rounded-[15px]' matches the specific radius in computed styles.
 * - Typography: Uses Inter (system-ui fallback) with appropriate weights.
 * - Colors: Teal-300 (#5eead4) used for the spinner to match the 'Accent Secondary' theme.
 */
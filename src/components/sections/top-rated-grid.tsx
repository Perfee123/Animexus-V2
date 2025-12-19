"use client";

import React from "react";
import { Loader2 } from "lucide-react";

/**
 * TopRatedGrid Section
 * Clones the "Top Rated" section meant for displaying the anime grid, 
 * including the loading spinner and section typography.
 */
export default function TopRatedGrid() {
  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">
          Top Rated
        </h2>
      </div>

      {/* Grid Content / Loading State */}
      <div className="py-10">
        <div className="flex items-center justify-center gap-3 text-white/80">
          {/* Custom Spinner - using Loader2 from lucide-react to match the visual requirement */}
          <Loader2 
            className="h-6 w-6 animate-spin text-teal-300" 
            aria-hidden="true"
          />
          <span className="text-sm font-medium">
            Loading top rated...
          </span>
        </div>
      </div>

      {/* Note: The grid items would normally be mapped here once data is fetched.
          As per instructions to clone the "loading" state shown in the screenshots,
          we maintain this structure. */}
    </section>
  );
}
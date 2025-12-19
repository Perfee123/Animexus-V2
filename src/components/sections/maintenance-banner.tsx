import React from 'react';
import { AlertTriangle } from 'lucide-react';

/**
 * MaintenanceBanner component
 * Displays a yellow warning banner at the top of the content area
 * indicating that the site is currently under maintenance.
 */
const MaintenanceBanner = () => {
  return (
    <div className="w-full py-4 px-4 sm:px-6 md:px-8">
      <div 
        className="mx-auto max-w-lg flex items-center gap-3 rounded-xl
                  border border-yellow-500/50
                  bg-gradient-to-r from-yellow-400/20 to-amber-400/20
                  px-6 py-3
                  text-yellow-200
                  shadow-lg shadow-yellow-500/20
                  backdrop-blur-sm"
        style={{
          boxShadow: '0 10px 15px -3px rgba(234, 179, 8, 0.2), 0 4px 6px -4px rgba(234, 179, 8, 0.2)'
        }}
      >
        <AlertTriangle 
          className="h-5 w-5 flex-shrink-0 text-yellow-300" 
          aria-hidden="true"
        />
        <p className="text-sm font-semibold leading-tight">
          This site is currently under maintenance and may have bugs
        </p>
      </div>
    </div>
  );
};

export default MaintenanceBanner;
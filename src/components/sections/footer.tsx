import React from "react";

/**
 * Footer component for Animexus website.
 * Features a minimalist glassmorphism design with credits and API attribution.
 * Adheres to the Cyber-Noir Minimalist aesthetic.
 */
const Footer = () => {
  return (
    <footer className="mt-14 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <p className="font-sans">
          Made by <span className="text-lime-300 font-semibold">Perfee</span>
        </p>
        <p className="font-sans">
          Data provided by{" "}
          <a
            href="https://jikan.moe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-200 underline transition-colors duration-200"
          >
            Jikan API
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
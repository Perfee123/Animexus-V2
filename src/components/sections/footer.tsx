import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2 space-y-6">
                <Link href="/" className="flex items-center gap-2">
                  <span className="font-bold tracking-tighter text-white text-xl">
                    Anime<span className="text-primary">xus</span>
                  </span>
                </Link>
                <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                  Your ultimate nexus for anime discovery. Explore trending titles, track your favorites, and dive deep into character insights.
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://github.com/Perfee123" target="_blank" className="p-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://x.com/PERFEE123" target="_blank" className="p-2 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary transition-all">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6">Navigation</h4>
                <ul className="space-y-4">
                  <li><Link href="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">Home</Link></li>
                  <li><Link href="/explore" className="text-muted-foreground text-sm hover:text-primary transition-colors">Explore</Link></li>
                  <li><Link href="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</Link></li>
                  <li><Link href="/updates" className="text-muted-foreground text-sm hover:text-primary transition-colors">Updates</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold mb-6">System Status</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">All Systems Operational</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                    Regular Updates
                  </div>
                  <p className="text-muted-foreground text-[10px] leading-relaxed">
                    Last updated: Dec 10, 2025<br />
                    Version: V2.0.5
                  </p>
                </div>
              </div>
          </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold">
            © 2025 Perfee. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted-foreground text-[10px] hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link href="/terms" className="text-muted-foreground text-[10px] hover:text-white transition-colors">TERMS OF SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

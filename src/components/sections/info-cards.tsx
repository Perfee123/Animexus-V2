import React from 'react';
import { Info, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const InfoCards = () => {
  const cards = [
    {
      title: "What is Anime?",
      description: "Anime is a style of animation originating from Japan, known for vibrant art and complex storytelling. It encompasses many genres and has a massive global following.",
      icon: Sparkles,
      color: "text-primary",
      bg: "bg-primary/5"
    },
    {
      title: "About Animexus",
      description: "Animexus is your premium gateway to the world of anime. We provide up-to-date information on trending titles, ratings, and detailed character insights.",
      icon: Zap,
      color: "text-secondary",
      bg: "bg-secondary/5"
    }
  ];

  return (
    <section className="grid md:grid-cols-2 gap-8">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="relative group p-8 rounded-3xl bg-card border border-border overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
            <card.icon size={120} className={card.color} />
          </div>
          
          <div className="relative space-y-4">
            <div className={`w-12 h-12 rounded-2xl ${card.bg} flex items-center justify-center`}>
              <card.icon size={24} className={card.color} />
            </div>
            <h3 className="text-2xl font-bold text-white">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default InfoCards;

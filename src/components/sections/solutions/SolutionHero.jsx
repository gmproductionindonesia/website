"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SolutionHero({ data }) {
  // Mapping of slug to specific background images (for a unique vibe per solution)
  const bgImages = {
    "government-corporate": "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop",
    "campus-institutional": "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000&auto=format&fit=crop",
    "creative-show-management": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop",
    "concert-entertainment": "https://images.unsplash.com/photo-1540039155732-61ee1f3014c2?q=80&w=2000&auto=format&fit=crop",
    "multimedia-technical": "https://images.unsplash.com/photo-1501281668745-f7f5792203b2?q=80&w=2000&auto=format&fit=crop",
    "exhibition-brand-activation": "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2000&auto=format&fit=crop",
  };

  const bgImage = bgImages[data.slug] || bgImages["concert-entertainment"];

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center bg-zinc-950 overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={data.title}
          fill
          priority
          className="object-cover opacity-20 scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            Solution
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8"
          >
            {data.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light"
          >
            {data.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

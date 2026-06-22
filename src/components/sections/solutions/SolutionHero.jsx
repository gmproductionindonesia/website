"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SolutionHero({ data }) {
  // Mapping of slug to specific background images (for a unique vibe per solution)
  const bgImages = {
    "government-corporate": "/images/goverment/1.JPG",
    "campus-institutional": "/images/campus-institutional/1.jpg",
    "creative-show-management": "/images/creative/1.jpg",
    "concert-entertainment": [
      "/images/entertainment/1.JPG",
      "/images/entertainment/2.jpg",
      "/images/entertainment/3.jpg",
      "/images/entertainment/4.jpg",
      "/images/entertainment/5.jpg",
      "/images/entertainment/6.JPG",
      "/images/entertainment/7.JPG"
    ],
    "multimedia-technical": "/images/multimedia/1.JPG",
    "exhibition-brand-activation": "/images/exhibition/1.JPG",
  };

  const currentBgSource = bgImages[data.slug] || bgImages["concert-entertainment"];
  const isSlider = Array.isArray(currentBgSource);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    if (isSlider) {
      setCurrentIndex((prev) => (prev + 1) % currentBgSource.length);
    }
  }, [isSlider, currentBgSource]);

  const prevSlide = useCallback(() => {
    if (isSlider) {
      setCurrentIndex((prev) => (prev - 1 + currentBgSource.length) % currentBgSource.length);
    }
  }, [isSlider, currentBgSource]);

  useEffect(() => {
    if (isSlider) {
      const timer = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isSlider, nextSlide]);

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center bg-zinc-950 overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {isSlider ? (
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={currentBgSource[currentIndex]}
                alt={`${data.title} slide ${currentIndex + 1}`}
                fill
                priority
                className="object-cover opacity-20 scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-in-out"
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          <Image
            src={currentBgSource}
            alt={data.title}
            fill
            priority
            className="object-cover opacity-20 scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-in-out"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c29b62]/10 border border-[#c29b62]/20 text-[#c29b62] text-sm font-bold uppercase tracking-widest mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#c29b62] animate-pulse"></span>
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

      {/* Slider Controls */}
      {isSlider && (
        <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 pointer-events-none">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-zinc-900/50 hover:bg-[#c29b62] text-white border border-zinc-700 hover:border-[#c29b62] transition-all backdrop-blur-sm pointer-events-auto"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-zinc-900/50 hover:bg-[#c29b62] text-white border border-zinc-700 hover:border-[#c29b62] transition-all backdrop-blur-sm pointer-events-auto"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}

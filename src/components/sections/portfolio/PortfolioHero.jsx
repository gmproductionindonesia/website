"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  "/images/hero/1.JPG",
  "/images/hero/2.JPG",
  "/images/hero/3.jpg",
  "/images/hero/4.webp",
  "/images/hero/5.jpg",
  "/images/hero/6.JPG",
  "/images/hero/7.jpg",
  "/images/hero/8.JPG",
  "/images/hero/9.jpg",
  "/images/hero/10.jpg",
];

export default function PortfolioHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative min-h-[60vh] flex items-center bg-zinc-900 overflow-hidden pt-32 pb-24 lg:pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity grayscale"
            style={{ backgroundImage: `url('${heroImages[currentSlide]}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Slider Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-30 hidden md:block">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-30 hidden md:block">
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 text-left flex flex-col justify-end h-full pointer-events-none">
        <div className="max-w-4xl mt-20 md:mt-32 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-[#c29b62]/30 bg-[#c29b62]/10 backdrop-blur-md text-[#c29b62] text-sm font-semibold tracking-widest uppercase shadow-xl">
              Our Track Record
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Proven Experience. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c29b62] to-amber-300">
              Impeccable Execution.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl"
          >
            Lebih dari dua dekade, kami telah menangani ratusan event berskala nasional dan internasional. Jelajahi portofolio mahakarya kami di berbagai sektor industri.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

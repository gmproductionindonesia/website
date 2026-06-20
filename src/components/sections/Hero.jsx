"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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

export default function Hero() {
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
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Background Image Slider & Overlay */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroImages[currentSlide]}')` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 z-10 bg-slate-900/80" />

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

      {/* Top Right Badge */}
      <div className="absolute top-24 right-4 md:right-12 z-30">
        <span className="px-4 py-1.5 rounded-full bg-black/40 border border-white/10 text-white/80 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-md">
          Selected Event
        </span>
      </div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 lg:px-12 text-left text-white flex-1 flex flex-col justify-center pointer-events-none">
        <div className="max-w-4xl mt-24 md:mt-20 lg:mt-32 pointer-events-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[1.85rem] md:text-[2.4rem] lg:text-[2.9rem] xl:text-[3.4rem] font-extrabold mb-6 tracking-tight leading-[1.1] text-white"
          >
            Professional Event & MICE<br />
            Management Partner for<br />
            Brands, Institutions, and<br />
            Corporations.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-slate-300 max-w-3xl mb-10 leading-relaxed text-justify"
          >
            Berpengalaman merancang event terintegrasi, dengan fokus pada penciptaan ambience yang kuat, pengalaman acara yang berkesan, serta pencapaian objektif klien melalui layanan profesional, sistem kerja terintegrasi, & standar kepuasan pelanggan yang tinggi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start justify-start gap-4 mb-20"
          >
            <Link href="#live-chat" className="px-8 py-4 bg-[#e6b15a] hover:bg-[#d4a04d] text-slate-900 font-bold rounded-lg transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              Hubungi Kami
            </Link>
            <Link href="#services" className="px-8 py-4 bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold rounded-lg transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              Lihat Layanan <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

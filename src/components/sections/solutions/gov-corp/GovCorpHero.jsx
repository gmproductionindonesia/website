"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/goverment/1.JPG",
  "/images/goverment/2.webp",
  "/images/goverment/3.jpg",
  "/images/goverment/4.JPG",
  "/images/goverment/5.JPG"
];

export default function GovCorpHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-32">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
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
              src={images[currentIndex]}
              alt={`Government Corporate slide ${currentIndex + 1}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        {/* Soft gradient overlay - not pure black to keep it modern and bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl mt-24">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.15] mb-8 tracking-tight"
          >
            Solusi Event <br className="hidden md:block" />
            Profesional untuk <br className="hidden md:block" />
            Perusahaan & Pemerintahan
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 leading-relaxed font-light mb-10 max-w-3xl"
          >
            GM Production membantu menghadirkan event corporate dan pemerintahan yang lebih profesional, 
            terstruktur, dan impactful melalui perencanaan yang matang, produksi berkualitas, serta eksekusi yang presisi.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="#live-chat"
              className="inline-flex items-center gap-3 bg-[#c29b62] hover:bg-[#a88654] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#c29b62]/30 hover:-translate-y-1 group"
            >
              Konsultasi Sekarang
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-[#c29b62] text-white border border-white/20 hover:border-[#c29b62] transition-all backdrop-blur-sm pointer-events-auto"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-[#c29b62] text-white border border-white/20 hover:border-[#c29b62] transition-all backdrop-blur-sm pointer-events-auto"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

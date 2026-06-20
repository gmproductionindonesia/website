"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/campus-institutional/1.jpg",
  "/images/campus-institutional/2.JPG",
  "/images/campus-institutional/3.png",
  "/images/campus-institutional/4.JPG"
];

export default function CampusHero() {
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
    <section className="relative min-h-screen flex items-center pt-24 pb-32 overflow-hidden">
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
              alt={`Campus Institutional slide ${currentIndex + 1}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl mt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.15] mb-8 tracking-tight">
              Solusi Event Profesional untuk Kampus dan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Institusi Pendidikan</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light mb-10 max-w-2xl leading-relaxed">
              GM Production membantu menghadirkan event kampus dan institusional yang lebih profesional, engaging, dan terorganisir melalui konsep kreatif, produksi berkualitas, serta eksekusi yang terstruktur.
            </p>

            <Link 
              href="#live-chat"
              className="inline-flex items-center justify-center gap-3 bg-[#C69C6D] hover:bg-[#b08b61] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg group"
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
          className="p-3 rounded-full bg-white/10 hover:bg-orange-500 text-white border border-white/20 hover:border-orange-500 transition-all backdrop-blur-sm pointer-events-auto"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-orange-500 text-white border border-white/20 hover:border-orange-500 transition-all backdrop-blur-sm pointer-events-auto"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}

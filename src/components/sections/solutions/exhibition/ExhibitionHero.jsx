"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/exhibition/1.JPG",
  "/images/exhibition/2.JPG",
  "/images/exhibition/3.jpg",
  "/images/exhibition/4.JPG",
  "/images/exhibition/5.jpg"
];

export default function ExhibitionHero() {
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
              alt={`Exhibition slide ${currentIndex + 1}`}
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl mt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.15] mb-8 tracking-tight">
              Exhibition & Brand Activation untuk Menciptakan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Pengalaman Brand yang Lebih Kuat</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 font-light mb-10 max-w-2xl leading-relaxed">
              GM Production membantu brand, perusahaan, dan institusi menghadirkan exhibition dan activation event yang lebih engaging melalui konsep kreatif, visual experience yang immersive, serta eksekusi produksi yang profesional.
            </p>

            <Link 
              href="#live-chat"
              className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 group"
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

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

const SLIDE_INTERVAL = 3000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, SLIDE_INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    startTimer();
  }, [startTimer]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    startTimer();
  }, [startTimer]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12">
      {/* Background Image Slider — Pure CSS transition on GPU compositor */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              willChange: "opacity",
            }}
          >
            <Image
              src={src}
              alt={`Hero Event ${index + 1}`}
              fill
              sizes="100vw"
              priority={index < 3}
              loading="eager"
              quality={75}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
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


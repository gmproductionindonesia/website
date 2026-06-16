"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MultimediaHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background Image with modern bright overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/85 to-white/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-orange-500"></div>
              <span className="text-orange-600 font-black tracking-[0.2em] uppercase text-sm">
                Multimedia & Technical Production Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
              Dukungan Multimedia & Technical Production untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Event yang Lebih Maksimal dan Profesional</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-medium mb-10 max-w-2xl leading-relaxed">
              GM Production menghadirkan solusi multimedia dan technical production untuk mendukung kualitas visual, audio, dan operasional event agar berjalan lebih optimal, immersive, dan terkoordinasi.
            </p>

            <Link 
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_10px_40px_rgba(15,23,42,0.3)] hover:-translate-y-1 group"
            >
              Konsultasi Sekarang
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CampusHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* Background Image with modern bright overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-orange-400"></div>
              <span className="text-orange-400 font-bold tracking-[0.2em] uppercase text-sm">
                Campus & Institutional Event Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tight">
              Solusi Event Profesional untuk Kampus dan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">Institusi Pendidikan</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-light mb-10 max-w-2xl leading-relaxed">
              GM Production membantu menghadirkan event kampus dan institusional yang lebih profesional, engaging, dan terorganisir melalui konsep kreatif, produksi berkualitas, serta eksekusi yang terstruktur.
            </p>

            <Link 
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#C69C6D] hover:bg-[#b08b61] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg group"
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

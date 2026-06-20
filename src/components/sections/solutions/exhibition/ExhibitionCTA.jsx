"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExhibitionCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-slate-200">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/exhibition/2.JPG")',
        }}
      >
        <div className="absolute inset-0 bg-white/95 backdrop-blur-[1px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
            Let's Build Together
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
            Bangun Kehadiran Brand yang Tak Terlupakan
          </h2>
          
          <p className="text-lg text-slate-600 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Kami memadukan estetika elegan, struktur industrial yang presisi, dan strategi aktivasi untuk menarik lebih banyak audiens ke area Anda.
          </p>

          <Link 
            href="#live-chat"
            className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-slate-900/20 hover:-translate-y-1 group"
          >
            Mulai Konsultasi Project
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

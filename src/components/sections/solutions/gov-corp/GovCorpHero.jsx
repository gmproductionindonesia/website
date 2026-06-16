"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GovCorpHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pt-32 pb-24">
      {/* Background Image - Lighter overlay for a more modern, less dark feel */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000&auto=format&fit=crop"
          alt="Government & Corporate Event"
          fill
          priority
          className="object-cover"
        />
        {/* Soft gradient overlay - not pure black to keep it modern and bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-orange-400 text-sm font-bold uppercase tracking-widest mb-6"
          >
            Government & Corporate Event Solutions
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight"
          >
            Solusi Event <br className="hidden md:block" />
            Profesional untuk <br className="hidden md:block" />
            Perusahaan, Institusi, <br className="hidden md:block" />
            dan Pemerintahan
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
              href="#contact"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 group"
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

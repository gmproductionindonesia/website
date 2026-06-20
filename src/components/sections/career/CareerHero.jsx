"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CareerHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#2e4d4a] overflow-hidden pt-32 pb-24 lg:pb-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/career_team_indo.png"
          alt="Career at GM Production"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay for brighter green tint but keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b3633] via-[#1b3633]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[#2e4d4a]/40 mix-blend-multiply"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 text-left flex flex-col justify-end h-full">
        <div className="max-w-3xl mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-emerald-300 text-sm font-semibold tracking-wider uppercase shadow-xl">
              GM Production Careers
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Jadilah Bagian dari Maestro di Balik <br className="hidden md:block" />
            <span className="text-emerald-300">
              Setiap Mahakarya Acara.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg text-gray-200 font-light leading-relaxed mb-10 max-w-2xl"
          >
            Bergabunglah bersama tim profesional dan bersertifikat kami untuk menciptakan pengalaman yang tak terlupakan, mulai dari panggung spektakuler hingga ekosistem multimedia yang memukau.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4"
          >
            <a href="#positions" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all shadow-lg shadow-emerald-500/20">
              Lihat Posisi Tersedia
            </a>
            <a href="#culture" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm transition-all">
              Pelajari Budaya Kami
            </a>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}

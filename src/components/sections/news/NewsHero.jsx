"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function NewsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-zinc-900 overflow-hidden pt-32 pb-32 lg:pb-48">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/indo_corporate.png"
          alt="Event Insights Background"
          fill
          className="object-cover object-center opacity-40 mix-blend-luminosity grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 text-left flex flex-col justify-end h-full">
        <div className="max-w-4xl mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-emerald-400 text-sm font-semibold tracking-widest uppercase shadow-xl">
              Knowledge Hub
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Beyond Theory: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Real Event Insights
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl"
          >
            Kami tidak membahas teori usang. Temukan pandangan kritis, strategi taktis, dan bedah tuntas kasus lapangan dari sudut pandang praktisi Event Organizer profesional.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

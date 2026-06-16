"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-zinc-900 overflow-hidden pt-32 pb-24 lg:pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/indo_stage_rigging.png"
          alt="Portfolio Background"
          fill
          className="object-cover object-center opacity-30 mix-blend-luminosity grayscale"
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
            <span className="inline-block px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md text-orange-400 text-sm font-semibold tracking-widest uppercase shadow-xl">
              Our Track Record
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6"
          >
            Proven Experience. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Impeccable Execution.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl"
          >
            Lebih dari dua dekade, kami telah menangani ratusan event berskala nasional dan internasional. Jelajahi portofolio mahakarya kami di berbagai sektor industri.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

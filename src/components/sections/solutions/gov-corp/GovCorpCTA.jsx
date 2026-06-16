"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GovCorpCTA() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f172a] rounded-[2rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Siap Mengelevasi Skala Event Anda?
            </h2>
            
            <p className="text-base md:text-lg text-slate-300 font-light mb-10 leading-relaxed">
              Konsultasikan kebutuhan infrastruktur dan eksekusi produksi event Anda 
              bersama tim spesialis GM Production Indonesia.
            </p>

            <Link 
              href="#contact"
              className="inline-flex items-center justify-center bg-[#C69C6D] hover:bg-[#b08b61] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              Hubungi Tim Produksi Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

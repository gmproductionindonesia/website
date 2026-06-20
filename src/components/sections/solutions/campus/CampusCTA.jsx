"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CampusCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-white/10">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/campus-institutional/2.JPG")',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/90"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#C69C6D] text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
            Let's Collaborate
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tight">
            Siap Menghadirkan Event Kampus yang Lebih Profesional & Berkesan?
          </h2>
          
          <p className="text-lg text-slate-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Diskusikan kebutuhan event Anda bersama tim GM Production dan temukan solusi event yang sesuai untuk kampus, institusi, maupun organisasi Anda.
          </p>

          <Link 
            href="#live-chat"
            className="inline-flex items-center justify-center gap-3 bg-[#C69C6D] hover:bg-[#b08b61] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg group"
          >
            Hubungi Kami
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

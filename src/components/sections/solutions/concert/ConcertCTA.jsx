"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConcertCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-slate-200">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1540039155732-611174bf25c0?q=80&w=2070&auto=format&fit=crop")',
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
            Let's Collaborate
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
            Siap Menghadirkan Concert & Entertainment Event yang Lebih Impactful?
          </h2>
          
          <p className="text-lg text-slate-600 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Diskusikan kebutuhan event Anda bersama tim GM Production dan temukan solusi produksi yang sesuai untuk konser, festival, maupun entertainment event Anda.
          </p>

          <Link 
            href="#contact"
            className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-slate-900/20 hover:-translate-y-1 group"
          >
            Hubungi Kami
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star, Clock, Network, RefreshCcw } from "lucide-react";

export default function CreativeWhy() {
  const reasons = [
    {
      icon: <Star className="text-[#c29b62] mb-6" size={32} />,
      title: "Creative & Experience Focused",
      desc: "Konsep acara dirancang untuk menciptakan pengalaman audience yang lebih engaging dan memorable."
    },
    {
      icon: <Clock className="text-[#c29b62] mb-6" size={32} />,
      title: "Professional Show Management",
      desc: "Didukung workflow show management yang lebih terstruktur dan terukur."
    },
    {
      icon: <Network className="text-[#c29b62] mb-6" size={32} />,
      title: "Kolaborasi Creative & Technical yang Solid",
      desc: "Sinkronisasi antara creative direction dan technical production untuk menghasilkan kualitas event yang lebih maksimal."
    },
    {
      icon: <RefreshCcw className="text-[#c29b62] mb-6" size={32} />,
      title: "Tim yang Responsif & Adaptif",
      desc: "Koordinasi cepat dan fleksibel sesuai kebutuhan konsep maupun jalannya acara."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-[#c29b62] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Why GM Production
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Kenapa Banyak Brand & Institusi Memilih GM Production
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-3xl overflow-hidden border border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-slate-800/30">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 hover:bg-white/5 transition-colors"
            >
              <div className="w-14 h-14 rounded-full border border-[#c29b62]/30 flex items-center justify-center bg-[#c29b62]/10 mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                {reason.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

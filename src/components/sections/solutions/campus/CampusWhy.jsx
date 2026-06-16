"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Cpu, RefreshCcw } from "lucide-react";

export default function CampusWhy() {
  const reasons = [
    {
      icon: <CheckCircle className="text-[#C69C6D] mb-6" size={32} />,
      title: "Kreatif & Engaging",
      desc: "Konsep event yang dirancang untuk menciptakan pengalaman audience yang lebih menarik dan interaktif."
    },
    {
      icon: <ShieldCheck className="text-[#C69C6D] mb-6" size={32} />,
      title: "Berpengalaman Menangani Event Institusional",
      desc: "Didukung pengalaman menangani event edukatif, komunitas, hingga entertainment dalam berbagai skala."
    },
    {
      icon: <Cpu className="text-[#C69C6D] mb-6" size={32} />,
      title: "Dukungan Produksi yang Fleksibel",
      desc: "Multimedia, lighting, sound system, hingga operational support dalam satu koordinasi produksi."
    },
    {
      icon: <RefreshCcw className="text-[#C69C6D] mb-6" size={32} />,
      title: "Tim yang Responsif & Adaptif",
      desc: "Koordinasi cepat dan fleksibel sesuai kebutuhan event kampus maupun institusi."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-[#C69C6D] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Why GM Production
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Kenapa Banyak Kampus & Institusi Memilih GM Production
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
              <div className="w-14 h-14 rounded-full border border-[#C69C6D]/30 flex items-center justify-center bg-[#C69C6D]/10 mb-6">
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

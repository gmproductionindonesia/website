"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Cpu, RefreshCcw } from "lucide-react";

export default function GovCorpWhy() {
  const reasons = [
    {
      icon: <CheckCircle className="text-orange-400 mb-6" size={32} />,
      title: "Profesional & Terstruktur",
      desc: "Workflow yang jelas dan terukur untuk memastikan event berjalan lebih efektif."
    },
    {
      icon: <ShieldCheck className="text-orange-400 mb-6" size={32} />,
      title: "Berpengalaman Menangani Event Institusional",
      desc: "Didukung pengalaman menangani event corporate, pemerintahan, hingga event berskala nasional."
    },
    {
      icon: <Cpu className="text-orange-400 mb-6" size={32} />,
      title: "Dukungan Produksi yang Lengkap",
      desc: "Multimedia, lighting, sound system, hingga operational support dalam satu koordinasi."
    },
    {
      icon: <RefreshCcw className="text-orange-400 mb-6" size={32} />,
      title: "Tim yang Responsif & Adaptif",
      desc: "Koordinasi cepat dan fleksibel sesuai kebutuhan event di lapangan."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Why GM Production
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Kenapa Banyak Perusahaan & Government Memilih GM Production
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
              className={`p-8 md:p-10 hover:bg-white/5 transition-colors ${idx === 1 ? 'bg-white/5' : ''}`}
            >
              <div className="w-14 h-14 rounded-full border border-orange-500/30 flex items-center justify-center bg-orange-500/10 mb-6">
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

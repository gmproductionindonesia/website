"use client";

import { motion } from "framer-motion";
import { Mic2, Activity, Music, ShieldAlert } from "lucide-react";

export default function ConcertWhy() {
  const reasons = [
    {
      icon: <Music className="text-orange-500 mb-6" size={32} />,
      title: "Immersive Entertainment Experience",
      desc: "Produksi event yang dirancang untuk menciptakan pengalaman audience yang lebih engaging dan impactful."
    },
    {
      icon: <Activity className="text-orange-500 mb-6" size={32} />,
      title: "Professional Concert Workflow",
      desc: "Didukung workflow produksi dan show management yang lebih terstruktur dan profesional."
    },
    {
      icon: <Mic2 className="text-orange-500 mb-6" size={32} />,
      title: "Dukungan Produksi yang Lengkap",
      desc: "Stage production, multimedia, lighting, sound system, hingga operational support dalam satu koordinasi."
    },
    {
      icon: <ShieldAlert className="text-orange-500 mb-6" size={32} />,
      title: "Tim yang Responsif & Adaptif",
      desc: "Koordinasi cepat dan fleksibel sesuai kebutuhan venue, artist, maupun jalannya acara."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Why GM Production
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Kenapa Banyak Brand & Promotor Memilih GM Production
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-3xl overflow-hidden border border-slate-200 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 bg-[#F8FAFC]">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 hover:bg-white hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-full border border-orange-200 flex items-center justify-center bg-orange-50 mb-6 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                {reason.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Hammer, Sparkles, Move3d, Users } from "lucide-react";

export default function ExhibitionWhy() {
  const reasons = [
    {
      icon: <Hammer className="text-[#c29b62] mb-6" size={32} />,
      title: "In-House Fabrication Workshop",
      desc: "Menjaga kendali penuh atas kualitas material, akurasi ukuran, dan tenggat waktu pengerjaan produksi tanpa operan ke pihak ketiga."
    },
    {
      icon: <Move3d className="text-[#c29b62] mb-6" size={32} />,
      title: "Creative & Technical Synergy",
      desc: "Menyatukan tim desainer kreatif dengan teknisi struktural agar rancangan estetis tetap aman dan memungkinkan untuk dibangun."
    },
    {
      icon: <Sparkles className="text-[#c29b62] mb-6" size={32} />,
      title: "Pengalaman Multisektoral",
      desc: "Mampu menerjemahkan *brand identity* dari berbagai macam industri mulai dari otomotif, teknologi, perbankan, hingga *consumer goods*."
    },
    {
      icon: <Users className="text-[#c29b62] mb-6" size={32} />,
      title: "Pendekatan User-Centric",
      desc: "Mendesain bukan hanya untuk dilihat, tapi memikirkan bagaimana cara audiens bisa merasakan langsung nilai dari produk Anda."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-[#c29b62] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Why GM Production
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Mengapa Mempercayakan Aktivasi Brand Anda Kepada Kami
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
              <div className="w-14 h-14 rounded-full border border-orange-200 flex items-center justify-center bg-[#c29b62]/10 mb-6 shadow-sm">
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

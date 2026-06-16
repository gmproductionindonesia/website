"use client";

import { motion } from "framer-motion";

export default function CampusDeliverables() {
  const deliverables = [
    {
      title: "Creative Event Planning",
      desc: "Perencanaan event yang disusun berdasarkan target audience, konsep acara, dan kebutuhan engagement."
    },
    {
      title: "Interactive Experience",
      desc: "Konsep event yang dirancang untuk menciptakan pengalaman audience yang lebih aktif, seru, dan memorable."
    },
    {
      title: "Technical Production Support",
      desc: "Dukungan multimedia, lighting, sound system, LED, dan technical operation untuk mendukung kualitas event secara maksimal."
    },
    {
      title: "Event Operational Management",
      desc: "Koordinasi timeline, vendor, rundown, dan operational team agar acara berjalan lebih lancar dan terstruktur."
    },
    {
      title: "Documentation & Publication Support",
      desc: "Dokumentasi event dan kebutuhan publikasi untuk membantu memperkuat exposure acara dan institusi."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-4xl mb-16">
          <span className="text-[#C69C6D] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            What We Deliver
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Lebih dari Sekadar Penyelenggara Event
          </h2>
          <p className="text-lg text-slate-300 font-light max-w-2xl leading-relaxed">
            Kami membantu memastikan setiap event kampus dan institusi berjalan lebih terorganisir, menarik, dan memberikan pengalaman yang berkesan bagi audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 bg-slate-800/30 hover:bg-white/5 transition-colors group"
            >
              <div className="w-8 h-1 bg-[#C69C6D] mb-8 group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-lg font-bold text-white mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

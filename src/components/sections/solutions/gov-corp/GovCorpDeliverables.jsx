"use client";

import { motion } from "framer-motion";

export default function GovCorpDeliverables() {
  const deliverables = [
    {
      title: "Strategic Event Planning",
      desc: "Perencanaan event yang disusun berdasarkan kebutuhan audience, flow acara, dan target komunikasi."
    },
    {
      title: "Creative Experience",
      desc: "Konsep event yang dirancang untuk menciptakan pengalaman yang lebih engaging dan memorable."
    },
    {
      title: "Technical Production Support",
      desc: "Dukungan multimedia, lighting, sound system, LED, dan technical operation yang terkoordinasi."
    },
    {
      title: "Operational Management",
      desc: "Koordinasi timeline, vendor, rundown, dan operational team untuk memastikan acara berjalan lancar."
    },
    {
      title: "Documentation & Reporting",
      desc: "Dokumentasi event serta reporting untuk kebutuhan evaluasi dan publikasi."
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <span className="text-[#c29b62] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            What We Deliver
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Lebih dari Sekadar <br />
            Penyelenggara Event
          </h2>
          <p className="text-slate-300 font-light text-lg">
            Kami membantu memastikan setiap event berjalan lebih efektif, profesional, 
            dan sesuai dengan objective perusahaan maupun pemerintahan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border border-white/10 rounded-3xl overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10 bg-slate-800/50 backdrop-blur-sm">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 hover:bg-white/5 transition-colors group"
            >
              <div className="w-8 h-1 bg-[#c29b62] mb-6 transition-all duration-300 group-hover:w-12"></div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function ConcertDeliverables() {
  const deliverables = [
    {
      title: "Immersive Audience Experience",
      desc: "Perencanaan experience yang membantu menciptakan atmosfer event yang lebih hidup dan memorable."
    },
    {
      title: "Professional Stage Production",
      desc: "Produksi stage dan technical setup yang dirancang untuk mendukung kualitas pertunjukan secara maksimal."
    },
    {
      title: "Show & Technical Coordination",
      desc: "Sinkronisasi antara creative show, artist performance, dan technical production agar event berjalan lebih smooth."
    },
    {
      title: "Crowd & Operational Management",
      desc: "Koordinasi operational dan audience flow untuk memastikan event berjalan lebih aman dan terstruktur."
    },
    {
      title: "Event Supervision & Quality Control",
      desc: "Monitoring event secara menyeluruh untuk menjaga kualitas execution selama acara berlangsung."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-4xl mb-16">
          <span className="text-[#c29b62] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            What We Deliver
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Lebih dari Sekadar Menjalankan Pertunjukan
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
            Kami membantu memastikan setiap entertainment event memiliki pengalaman audience yang lebih maksimal, kualitas produksi yang lebih profesional, dan flow acara yang berjalan lebih optimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 md:p-10 bg-[#F8FAFC] border border-slate-200 rounded-3xl hover:bg-white hover:border-orange-300 hover:shadow-xl hover:shadow-[#c29b62]/10 transition-all duration-300 group"
            >
              <div className="w-8 h-1.5 rounded-full bg-slate-300 mb-8 group-hover:bg-[#c29b62] group-hover:w-16 transition-all duration-300"></div>
              <h3 className="text-lg font-black text-slate-900 mb-4 leading-snug tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

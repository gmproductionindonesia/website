"use client";

import { motion } from "framer-motion";

export default function MultimediaDeliverables() {
  const deliverables = [
    {
      title: "Professional Multimedia Experience",
      desc: "Visual multimedia yang dirancang untuk mendukung atmosfer event dan meningkatkan audience engagement."
    },
    {
      title: "Stable & Reliable Technical System",
      desc: "Sistem technical production yang dipersiapkan secara detail untuk memastikan performa event berjalan lebih stabil."
    },
    {
      title: "Integrated Production Coordination",
      desc: "Sinkronisasi antara multimedia, audio, lighting, dan operational team untuk mendukung flow acara secara maksimal."
    },
    {
      title: "Flexible Event Setup",
      desc: "Dukungan setup produksi yang fleksibel untuk berbagai kebutuhan event indoor, outdoor, hybrid, hingga multi-venue."
    },
    {
      title: "Technical Supervision & Quality Control",
      desc: "Monitoring dan quality control untuk memastikan seluruh sistem berjalan sesuai standar produksi."
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="max-w-4xl mb-16">
          <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            What We Deliver
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Lebih dari Sekadar Dukungan Teknis
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
            Kami membantu memastikan setiap event memiliki kualitas visual, audio, dan technical execution yang lebih optimal untuk menciptakan pengalaman acara yang lebih profesional.
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
              className="p-8 md:p-10 bg-[#F8FAFC] border border-slate-200 rounded-3xl hover:bg-white hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group"
            >
              <div className="w-8 h-1.5 rounded-full bg-slate-300 mb-8 group-hover:bg-orange-500 group-hover:w-16 transition-all duration-300"></div>
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

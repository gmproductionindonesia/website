"use client";

import { motion } from "framer-motion";

export default function ConcertStats() {
  const stats = [
    { number: "25+", label: "TAHUN PENGALAMAN" },
    { number: "1000+", label: "EVENT TERSELENGGARA" },
    { number: "500+", label: "CLIENT & PARTNER" },
    { number: "50+", label: "KOTA DI INDONESIA" }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-[#c29b62] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Event Statistics
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Dipercaya Menangani Berbagai Concert & Entertainment Event
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 bg-white rounded-3xl overflow-hidden border border-slate-200 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-10 text-center hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
                {stat.number}
              </h3>
              <p className="text-xs text-slate-500 font-bold tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

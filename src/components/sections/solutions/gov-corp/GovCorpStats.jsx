"use client";

import { motion } from "framer-motion";

export default function GovCorpStats() {
  const stats = [
    { value: "25+", label: "YEARS EXPERIENCE" },
    { value: "5000+", label: "EVENT" },
    { value: "500+", label: "CLIENT & PARTNER" },
    { value: "Nationwide", label: "COVERAGE" },
  ];

  return (
    <section className="py-24 bg-[#FDF8EE] relative z-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#c29b62] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Event Statistics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Dipercaya Menangani Berbagai <br className="hidden md:block" />
            Event Berskala Nasional
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-8 md:p-12 hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

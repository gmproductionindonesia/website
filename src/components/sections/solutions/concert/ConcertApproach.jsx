"use client";

import { motion } from "framer-motion";

export default function ConcertApproach() {
  const steps = [
    {
      num: "01",
      title: "Consultation & Event Objective Mapping",
      desc: "Memahami kebutuhan event, target audience, venue, serta experience yang ingin dihadirkan."
    },
    {
      num: "02",
      title: "Creative & Production Planning",
      desc: "Menyusun konsep produksi, stage flow, technical requirement, dan operational planning."
    },
    {
      num: "03",
      title: "Technical & Operational Preparation",
      desc: "Persiapan produksi, technical rehearsal, vendor coordination, dan venue setup sebelum event berlangsung."
    },
    {
      num: "04",
      title: "Event Execution & Show Coordination",
      desc: "Pelaksanaan event dengan koordinasi produksi, stage management, dan operational team yang profesional."
    },
    {
      num: "05",
      title: "Evaluation & Reporting",
      desc: "Dokumentasi, evaluasi flow event, dan reporting untuk memastikan kualitas acara tetap optimal."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Bagaimana Kami Bekerja
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-2xl p-8 border ${
                idx === 2 ? 'border-slate-800 shadow-xl shadow-slate-900/10 scale-105 z-10' : 'border-slate-200 shadow-lg shadow-slate-200/50'
              } hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative`}
            >
              <h3 className="text-4xl font-black text-slate-800 mb-4 tracking-tighter">
                {step.num}
              </h3>
              <h4 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                {step.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ShieldCheck, LineChart, Landmark } from "lucide-react";

export default function EoValue() {
  const values = [
    {
      title: "Strategi & Eksekusi Terukur",
      description: "Kami bukan sekadar pelaksana teknis, melainkan konsultan strategis Anda. Mulai dari perencanaan konseptual, manajemen acara, hingga pelaporan akhir (event report), kami memastikan setiap detail dirancang secara komprehensif untuk mencapai KPI dan objektif bisnis perusahaan Anda.",
      icon: <LineChart size={32} className="text-orange-500" />
    },
    {
      title: "Mitigasi Risiko & Beban Operasional",
      description: "Setiap event berskala besar memiliki blind spots dan risiko tak terduga. Kami mengambil alih tanggung jawab penuh serta menanggung fixed cost operasional, sehingga Anda dapat menghemat aset paling berharga: waktu, energi, dan pikiran, agar Anda dapat berfokus pada inti bisnis Anda.",
      icon: <ShieldCheck size={32} className="text-orange-500" />
    },
    {
      title: "Stabilitas Finansial & Legalitas",
      description: "Kami menjembatani kompleksitas arus kas melalui permodalan talangan ke pihak ketiga, memberikan keleluasaan termin pembayaran (hingga 60 hari) untuk klien. Layanan kami juga mencakup kepatuhan administrasi perpajakan (PPH 21, 23) serta penerbitan E-faktur di awal.",
      icon: <Landmark size={32} className="text-orange-500" />
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight"
          >
            Mengapa Bisnis Anda Membutuhkan <span className="text-orange-500">Event Organizer Profesional?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 lg:p-10 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-slate-100 dark:border-slate-700">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                {val.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

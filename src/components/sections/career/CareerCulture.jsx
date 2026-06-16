"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Users } from "lucide-react";

export default function CareerCulture() {
  const values = [
    {
      icon: <Lightbulb size={32} className="text-emerald-500" />,
      title: "Innovate to Empower",
      desc: "Kami percaya teknologi dan kreativitas tanpa batas akan menciptakan pengalaman audiens yang tak terlupakan di setiap acara."
    },
    {
      icon: <Rocket size={32} className="text-emerald-500" />,
      title: "Work For Impact",
      desc: "Bertumbuh dan berkolaborasi bersama memberikan dampak positif dan jaminan kesuksesan pada setiap visi acara klien kami."
    },
    {
      icon: <Users size={32} className="text-emerald-500" />,
      title: "Collaborative Growth",
      desc: "Kami percaya kolaborasi lintas divisi yang solid adalah fondasi utama untuk melahirkan mahakarya yang sukses dan aman."
    }
  ];

  return (
    <section id="culture" className="py-24 bg-zinc-900 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6"
          >
            Bekerja dari <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Hati</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl font-light"
          >
            Sebagai "GM Team", DNA ini kami terapkan sehari-hari dalam setiap proses perencanaan hingga eksekusi panggung.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className="mb-8 inline-flex p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

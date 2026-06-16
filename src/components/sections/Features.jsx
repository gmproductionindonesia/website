"use client";

import { motion } from "framer-motion";
import { Award, Zap, Lightbulb, Settings, Layers } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Berpengalaman & Terpercaya",
      description: "Lebih dari 25 tahun jam terbang menangani berbagai skala event dari korporat hingga instansi pemerintah.",
      icon: <Award size={32} className="text-orange-500" />
    },
    {
      title: "Fast Response",
      description: "Tim support kami selalu siaga memberikan respons cepat untuk setiap kebutuhan mendadak Anda.",
      icon: <Zap size={32} className="text-orange-500" />
    },
    {
      title: "Tim Creative Profesional",
      description: "Ide-ide segar dan out of the box dari tim kreatif kami siap membuat event Anda berkesan dan unik.",
      icon: <Lightbulb size={32} className="text-orange-500" />
    },
    {
      title: "End-to-End Event Production Partner",
      description: "Hadir sebagai one-stop solution terintegrasi dengan in-house equipment, show management, tim profesional, serta gudang produksi dan dekorasi mandiri demi kelancaran eksekusi event Anda tanpa batas.",
      icon: <Layers size={32} className="text-orange-500" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Mengapa GM Production Indonesia?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            Alasan mengapa ratusan klien mempercayakan kesuksesan event mereka kepada kami.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700"
            >
              <div className="w-16 h-16 rounded-xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function ExhibitionDeliverables() {
  const deliverables = [
    {
      title: "Impactful Brand Presence",
      desc: "Menonjolkan identitas visual brand Anda di tengah keramaian pameran melalui desain booth yang atraktif dan strategis."
    },
    {
      title: "Memorable Journey",
      desc: "Merancang alur pengunjung (customer journey) yang memikat agar audiens betah berlama-lama di area aktivasi Anda."
    },
    {
      title: "Interactive Engagement",
      desc: "Menghadirkan permainan interaktif, photobooth kreatif, hingga instalasi digital yang merangsang partisipasi aktif audiens."
    },
    {
      title: "High-Quality Fabrication",
      desc: "Mengeksekusi desain menjadi bentuk nyata dengan presisi material, kerapian finishing, dan keamanan struktur yang terjamin."
    },
    {
      title: "On-Point Messaging",
      desc: "Memastikan pesan kampanye promosi Anda tersampaikan secara jelas melalui perpaduan audio visual dan elemen dekorasi ruang."
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
            Lebih dari Sekadar Membangun Stand
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl leading-relaxed">
            Kami mengubah lahan kosong pameran menjadi panggung interaksi yang hidup, di mana setiap sudut dirancang untuk merangkul perhatian dan merebut hati audiens secara langsung.
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

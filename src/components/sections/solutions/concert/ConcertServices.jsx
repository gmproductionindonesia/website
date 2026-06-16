"use client";

import { motion } from "framer-motion";

export default function ConcertServices() {
  const services = [
    {
      num: "01",
      title: "Concert Production",
      desc: "Produksi konser dengan dukungan technical production dan show management yang lebih profesional.",
      list: [
        "Music Concert",
        "Band Performance",
        "Live Music Event",
        "Artist Showcase",
        "Touring Concert",
        "Indoor & Outdoor Concert"
      ]
    },
    {
      num: "02",
      title: "Festival & Entertainment Event",
      desc: "Festival dan entertainment event yang dirancang untuk menghadirkan pengalaman audience yang lebih immersive dan engaging.",
      list: [
        "Festival Production",
        "Community Festival",
        "Entertainment Festival",
        "Cultural Event",
        "Creative Festival",
        "Multi-Stage Event",
        "Youth Festival"
      ]
    },
    {
      num: "03",
      title: "Show & Stage Management",
      desc: "Koordinasi flow acara dan stage production untuk memastikan event berjalan lebih terarah dan profesional.",
      list: [
        "Stage Production",
        "Show Running Management",
        "Rundown Coordination",
        "Artist Performance Management",
        "Backstage Coordination",
        "Technical Cue Management",
        "Performance Scheduling"
      ]
    },
    {
      num: "04",
      title: "Crowd & Operational Management",
      desc: "Pengelolaan audience dan operational support untuk memastikan jalannya event lebih aman dan terorganisir.",
      list: [
        "Crowd Flow Management",
        "Audience Area Coordination",
        "Entry & Exit Flow Planning",
        "Barricade Coordination",
        "Operational Crew Coordination",
        "Venue Flow Supervision"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            What We Handle
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Layanan yang Kami Tangani
          </h2>
        </div>

        {/* 2x2 Grid Layout for 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-800 font-black shadow-sm group-hover:border-orange-400 group-hover:text-orange-500 transition-colors">
                  {service.num}
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">
                {service.desc}
              </p>
              
              <div className="w-full h-px bg-slate-100 mb-8"></div>
              
              <ul className="space-y-4">
                {service.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0"></div>
                    <span className="text-slate-600 text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

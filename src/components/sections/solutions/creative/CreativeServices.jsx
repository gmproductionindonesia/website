"use client";

import { motion } from "framer-motion";

export default function CreativeServices() {
  const services = [
    {
      num: "01",
      title: "Creative Event Development",
      desc: "Pengembangan konsep acara yang dirancang untuk menciptakan pengalaman event yang lebih kuat dan relevan dengan audience.",
      list: [
        "Creative Concept Development",
        "Event Theme Development",
        "Interactive Experience Planning",
        "Audience Engagement Concept",
        "Event Storyline Planning",
        "Creative Presentation Development",
        "Visual Moodboard Planning"
      ]
    },
    {
      num: "02",
      title: "Show & Stage Management",
      desc: "Pengelolaan flow acara dan koordinasi show untuk memastikan event berjalan lebih terarah dan profesional.",
      list: [
        "Rundown Management",
        "Show Flow Design",
        "Stage Direction",
        "Cue & Timeline Management",
        "Stage Coordination",
        "Rehearsal Management",
        "Technical Cue Coordination"
      ]
    },
    {
      num: "03",
      title: "Talent & Performance Coordination",
      desc: "Koordinasi talent dan performance management untuk menciptakan pengalaman acara yang lebih immersive dan terorganisir.",
      list: [
        "Talent Coordination",
        "Performance Scheduling",
        "Artist Handling",
        "MC Coordination",
        "Performer Briefing",
        "Backstage Management",
        "Performance Flow Supervision"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#FDF8EE] border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            What We Handle
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Layanan yang Kami Tangani
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white rounded-[2rem] p-8 md:p-10 border ${idx === 2 ? 'border-orange-400' : 'border-slate-200'} shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
            >
              {idx === 2 && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-800 font-black mb-8 shadow-sm">
                  {service.num}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                
                <div className="w-full h-px bg-slate-100 mb-8"></div>
                
                <ul className="space-y-4">
                  {service.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
                      <span className="text-slate-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

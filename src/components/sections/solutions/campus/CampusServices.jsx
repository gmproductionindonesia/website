"use client";

import { motion } from "framer-motion";

export default function CampusServices() {
  const services = [
    {
      num: "01",
      title: "Campus Event",
      desc: "Event kampus yang dirancang untuk meningkatkan engagement mahasiswa dan menciptakan pengalaman acara yang lebih menarik.",
      list: [
        "Campus Festival",
        "Student Orientation",
        "Graduation Ceremony",
        "Student Gathering",
        "Campus Expo",
        "Music Performance",
        "Faculty Event",
        "Anniversary Campus Event"
      ]
    },
    {
      num: "02",
      title: "Educational & Institutional Event",
      desc: "Event institusional dan edukatif dengan workflow yang lebih profesional dan terorganisir.",
      list: [
        "Seminar & Conference",
        "Workshop",
        "Education Expo",
        "Academic Forum",
        "Institutional Gathering",
        "Public Lecture",
        "Training Program",
        "Hybrid Educational Event"
      ]
    },
    {
      num: "03",
      title: "Organisasi & Creative Event",
      desc: "Event organisasi dan kreatif yang dirancang untuk membangun interaksi audience dan pengalaman yang lebih engaging.",
      list: [
        "Community Festival",
        "Creative Showcase",
        "Youth Event",
        "Art & Cultural Event",
        "Competition Event",
        "Interactive Activation",
        "Entertainment Event"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#FDF8EE] border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#C69C6D] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
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
              className={`bg-white rounded-[2rem] p-8 md:p-10 border ${idx === 2 ? 'border-[#C69C6D]' : 'border-slate-200'} shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 font-black mb-8">
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
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C69C6D] mt-2 shrink-0"></div>
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

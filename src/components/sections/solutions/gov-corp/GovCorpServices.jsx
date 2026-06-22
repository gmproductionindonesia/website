"use client";

import { motion } from "framer-motion";

export default function GovCorpServices() {
  const services = [
    {
      number: "01",
      title: "Corporate Event",
      desc: "Event perusahaan yang dirancang untuk memperkuat engagement, branding, dan pengalaman audience secara profesional.",
      list: [
        "Corporate Gathering",
        "Gala Dinner",
        "Company Anniversary",
        "Product Launching",
        "Awarding Night",
        "Town Hall Meeting",
        "Employee Engagement Event"
      ]
    },
    {
      number: "02",
      title: "Government Event",
      desc: "Event pemerintahan dengan workflow yang lebih terstruktur dan standar operasional yang profesional.",
      list: [
        "Government Ceremony",
        "Official Visit Handling",
        "Institutional Event",
        "Government Gathering",
        "National Seminar",
        "Official Conference",
        "Formal Protocol Event"
      ]
    },
    {
      number: "03",
      title: "MICE Event",
      desc: "Solusi event formal dengan dukungan operasional dan technical production yang lebih optimal.",
      list: [
        "Business Meeting",
        "Conference",
        "Seminar",
        "Workshop",
        "Forum Discussion",
        "Business Expo",
        "Exhibition"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#FDF8EE]">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#c29b62] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            What We Handle
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Layanan yang Kami Tangani
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#c29b62] flex items-center justify-center text-[#c29b62] font-black text-lg mb-6">
                {svc.number}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {svc.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed pb-6 mb-6 border-b border-slate-100">
                {svc.desc}
              </p>
              <ul className="space-y-3">
                {svc.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c29b62] mt-1.5 shrink-0"></span>
                    {item}
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

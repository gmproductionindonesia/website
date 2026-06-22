"use client";

import { motion } from "framer-motion";

export default function ExhibitionServices() {
  const services = [
    {
      num: "01",
      title: "Exhibition & Booth Production",
      desc: "Produksi exhibition booth yang dirancang untuk meningkatkan brand visibility dan pengalaman audience.",
      list: [
        "Exhibition Booth",
        "Experiential Booth",
        "Trade Show Booth",
        "Product Display Area",
        "Exhibition Setup",
        "Modular Booth System",
        "Interactive Booth Experience"
      ]
    },
    {
      num: "02",
      title: "Brand Activation & Experiential Event",
      desc: "Aktivasi brand yang dirancang untuk menciptakan interaksi audience yang lebih engaging dan memorable.",
      list: [
        "Brand Activation",
        "Experiential Marketing Event",
        "Roadshow Activation",
        "Community Activation",
        "Product Launch Activation",
        "Retail Activation",
        "Sampling Event"
      ]
    },
    {
      num: "03",
      title: "Interactive Installation & Experience",
      desc: "Pengalaman visual dan interactive installation untuk meningkatkan audience engagement terhadap brand.",
      list: [
        "Interactive Installation",
        "Immersive Visual Experience",
        "Interactive Multimedia Setup",
        "Photo Experience Area",
        "Audience Interaction Zone",
        "Digital Activation Experience"
      ]
    },
    {
      num: "04",
      title: "Decoration & Event Styling",
      desc: "Dukungan visual dan dekorasi event untuk menciptakan atmosfer brand yang lebih kuat dan premium.",
      list: [
        "Event Decoration",
        "Stage Decoration",
        "Venue Styling",
        "Thematic Decoration",
        "Branding Area Setup",
        "Experiential Space Design"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[#c29b62] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
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
              className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-[#c29b62]/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center text-slate-800 font-black shadow-sm group-hover:border-[#c29b62] group-hover:text-[#c29b62] transition-colors">
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
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c29b62] mt-2 shrink-0"></div>
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

"use client";

import { motion } from "framer-motion";
import { Landmark, GraduationCap, Star, Music, Tv, Store, ArrowRight } from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      icon: <Landmark size={28} />,
      title: "Government & Corporate Event",
      description: "Meeting, conference, gala dinner, gathering, exhibition, hingga corporate activation dengan standar eksekusi profesional.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Campus & Institutional Event",
      description: "Pengelolaan event institusional, seremoni resmi, kunjungan, dan kegiatan pendidikan dengan workflow terstruktur.",
    },
    {
      icon: <Star size={28} />,
      title: "Creative & Show Management",
      description: "Creative concept, stage management, rundown management, talent coordination, hingga show directing.",
    },
    {
      icon: <Music size={28} />,
      title: "Concert & Entertainment Production",
      description: "Produksi konser, festival, artist performance, dan entertainment event dengan dukungan technical production terintegrasi.",
    },
    {
      icon: <Tv size={28} />,
      title: "Multimedia & Equipment Solutions",
      description: "LED screen, lighting, sound system, multimedia support, live streaming, hingga visual production.",
    },
    {
      icon: <Store size={28} />,
      title: "Exhibition & Brand Activation",
      description: "Custom booth production, exhibition setup, dan activation area yang dirancang untuk meningkatkan engagement audience.",
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#c29b62]/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-500/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#c29b62]/10 border border-[#c29b62]/20 text-[#c29b62] font-semibold text-sm mb-6"
          >
            Our Solution
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6"
          >
            Solusi Event & Produksi Profesional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed"
          >
            Dari corporate event hingga national scale production, GM Production menghadirkan solusi end-to-end yang dirancang untuk membantu event berjalan lebih profesional, efektif, dan impactful.
          </motion.p>
        </div>

        {/* Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Background Glow on Hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c29b62]/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#c29b62] group-hover:border-[#c29b62] transition-all duration-500">
                {/* Clone the icon to change its color on hover */}
                <div className="text-[#c29b62] group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-4 group-hover:text-[#c29b62] transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed flex-grow text-sm md:text-base relative z-10">
                {item.description}
              </p>
              
              <a 
                href="#" 
                className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#c29b62] transition-all w-fit"
              >
                <span className="relative overflow-hidden">
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Explore Service</span>
                  <span className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-[#c29b62]">Explore Service</span>
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-[#c29b62]/10 transition-colors">
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

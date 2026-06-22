"use client";

import { motion } from "framer-motion";

export default function CampusSplit() {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/campus-institutional/1.jpg")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-[#c29b62] opacity-50 rounded-tl-3xl"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-[#c29b62] opacity-50 rounded-br-3xl"></div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-[#C69C6D] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Campus & Institutional Event
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tight">
              Event Kampus yang Menarik Membutuhkan Pengalaman yang Tepat
            </h2>
            
            <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
              <p>
                Setiap event kampus dan institusi memiliki tujuan yang berbeda, mulai dari membangun engagement mahasiswa, memperkuat identitas institusi, hingga menciptakan pengalaman audience yang lebih interaktif dan berkesan.
              </p>
              <p>
                GM Production membantu kampus, institusi pendidikan dan organisasi menghadirkan event dengan konsep yang lebih kreatif, workflow yang lebih terstruktur, dan dukungan produksi yang profesional.
              </p>
              <p>
                Dengan pengalaman menangani berbagai event edukatif, organisasi, hingga entertainment campus, kami memahami pentingnya pengalaman audience, koordinasi operasional, serta kualitas produksi dalam setiap acara.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

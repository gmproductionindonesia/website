"use client";

import { motion } from "framer-motion";

export default function MultimediaSplit() {
  return (
    <section className="py-24 bg-white overflow-hidden">
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
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/multimedia/1.JPG")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-50"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-24 h-24 border-t-4 border-l-4 border-[#c29b62] opacity-90 rounded-tl-3xl"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 border-b-4 border-r-4 border-white opacity-90 rounded-br-3xl"></div>
            </div>
          </motion.div>

          {/* Text Side - Light Theme Version */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-[#c29b62] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Multimedia & Technical Production
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
              Technical Production yang Tepat <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c29b62] to-[#a88654]">Menentukan Kualitas Event</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Setiap event membutuhkan dukungan multimedia dan technical production yang stabil, terukur, dan terkoordinasi untuk memastikan pengalaman audience berjalan lebih maksimal.
              </p>
              <p>
                GM Production membantu perusahaan, institusi, promotor, hingga brand menghadirkan event dengan dukungan technical production yang lebih profesional melalui sistem multimedia, audio visual, lighting, hingga operational support yang terintegrasi.
              </p>
              <p className="font-medium text-slate-800">
                Dengan pengalaman menangani berbagai event corporate, entertainment, conference, hingga hybrid event, kami memahami pentingnya kualitas technical execution, reliability system, dan koordinasi produksi dalam setiap acara.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

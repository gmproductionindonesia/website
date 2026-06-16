"use client";

import { motion } from "framer-motion";

export default function ExhibitionSplit() {
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
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-50"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-24 h-24 border-t-4 border-l-4 border-orange-500 opacity-90 rounded-tl-3xl"></div>
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
            <span className="text-orange-500 text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Exhibition & Brand Activation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
              Brand Experience yang Menarik <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Membutuhkan Aktivasi yang Tepat</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Setiap exhibition dan brand activation membutuhkan pengalaman visual dan interaksi audience yang berbeda untuk menciptakan engagement yang lebih kuat dan memorable.
              </p>
              <p>
                GM Production membantu brand, perusahaan, institusi, hingga komunitas menghadirkan activation event dengan konsep yang lebih kreatif, workflow produksi yang terstruktur, serta pengalaman audience yang lebih immersive.
              </p>
              <p className="font-medium text-slate-800">
                Dengan pengalaman menangani berbagai exhibition, activation, dan experiential event, kami memahami pentingnya visual experience, audience interaction, serta kualitas execution dalam setiap aktivitas brand.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

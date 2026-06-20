"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GovCorpSplit() {
  return (
    <section className="py-24 bg-slate-900 text-white border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/goverment/1.JPG"
                alt="Professional Event Execution"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Decorative border matching the old screenshot style but modern */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 border-b-2 border-r-2 border-orange-500 rounded-br-3xl -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Government & Corporate Event
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
              Event yang <br />
              Profesional <br />
              Membutuhkan <br />
              Eksekusi yang Tepat
            </h2>
            
            <div className="space-y-6 text-slate-300 leading-relaxed font-light">
              <p>
                Setiap event memiliki objective yang berbeda, mulai dari membangun citra perusahaan, 
                memperkuat hubungan institusi, hingga menciptakan pengalaman audience yang berkesan.
              </p>
              <p>
                GM Production membantu perusahaan, institusi, dan pemerintahan menghadirkan event dengan 
                workflow yang lebih profesional, koordinasi yang terstruktur, dan dukungan produksi yang terintegrasi.
              </p>
              <p>
                Dengan pengalaman menangani berbagai event corporate dan pemerintahan, kami memahami pentingnya 
                detail, ketepatan waktu, serta kualitas eksekusi di setiap tahap acara.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

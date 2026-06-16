"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CareerTestimonials() {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Show Director",
      quote: "Di GM Production, saya menemukan tempat di mana ide paling gila didukung penuh oleh tim teknis yang luar biasa untuk menjadi kenyataan di atas panggung.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Sarah Wijaya",
      role: "Event Producer",
      quote: "Bekerja di sini memberikan ruang untuk berkreasi dalam tekanan, dan selalu ada apresiasi tinggi atas setiap tetes keringat yang tercurah di lapangan.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Dimas Pratama",
      role: "Multimedia Specialist",
      quote: "Energi di GM sangat positif. Kami bukan sekadar pekerja event, tapi kami adalah arsitek dari setiap momen visual yang memukau ribuan audiens.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6"
          >
            Suara dari <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Belakang Panggung</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl font-light"
          >
            Pendapat GM Team tentang dinamisnya berkarya dan bertumbuh bersama kami.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between h-full relative"
            >
              <div className="text-4xl text-emerald-500/20 absolute top-8 right-8 font-serif">"</div>
              <p className="text-gray-300 leading-relaxed font-light mb-8 italic relative z-10">
                "{testi.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/30">
                  <Image
                    src={testi.image}
                    alt={testi.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testi.name}</h4>
                  <p className="text-emerald-400 text-sm">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

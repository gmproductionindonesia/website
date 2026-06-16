"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutIso() {
  const certificates = [
    { 
      src: "/images/iso/ISO-Certified-2.jpg", 
      title: "ISO 9001 : 2015",
      subtitle: "QUALITY MANAGEMENT SYSTEM" 
    },
    { 
      src: "/images/iso/ISO-Certified-1.jpg", 
      title: "ISO 14001 : 2015",
      subtitle: "ENVIRONMENTAL MANAGEMENT SYSTEM" 
    },
    { 
      src: "/images/iso/ISO-Certified-4.jpg", 
      title: "ISO 37001 : 2016",
      subtitle: "ANTI BRIBERY MANAGEMENT SYSTEM" 
    },
    { 
      src: "/images/iso/ISO-Certified-3.jpg", 
      title: "ISO 45001 : 2018",
      subtitle: "OCCUPATIONAL HEALTH AND SAFETY MANAGEMENT SYSTEM" 
    }
  ];

  return (
    <section className="py-20 bg-[#3f6460]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
            ISO LICENSE
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full max-w-[1400px] mx-auto">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
              className="flex flex-col items-center text-center px-2"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={cert.src}
                  alt={cert.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-wide">
                {cert.title}
              </h3>
              <p className="text-sm md:text-base font-medium text-white/90 italic uppercase max-w-[250px]">
                {cert.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

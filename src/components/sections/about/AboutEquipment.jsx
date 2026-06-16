"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutEquipment() {
  return (
    <section className="relative w-full py-24 md:py-32 flex items-center bg-[#1a1a1a]">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop"
          alt="Production Equipment"
          fill
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
        {/* Subtle gradient overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#3f6460]/95 backdrop-blur-sm max-w-xl md:max-w-2xl rounded-[40px] p-8 md:p-12 lg:p-14 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-wide">
            THE POWER OF EQUIPMENT IN EVENT SUCCESS
          </h2>
          
          <div className="space-y-6 text-slate-100 text-sm md:text-base leading-relaxed">
            <p>
              Great events require more than just good planning—they need the right equipment. From sound and lighting to LED screens and staging, top-quality gear is essential to deliver a smooth, professional experience.
            </p>
            <p>
              As the industry evolves, staying up-to-date with the latest technology is a must. That&apos;s why GM Production Indonesia is not only a trusted event organizer but also one of the largest and most complete equipment rental providers in the country.
            </p>
            <p>
              With a full range of modern equipment and expert support, GM Production Indonesia ensures every event—big or small—runs flawlessly. We don&apos;t just organize events, we power them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

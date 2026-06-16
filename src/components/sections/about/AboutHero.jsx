"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen pt-24 md:pt-32 pb-16 flex items-center overflow-hidden bg-[#2e4d4a]">
      {/* Background Image */}
      <div className="absolute top-0 right-0 w-full md:w-[70%] h-full z-0">
        <Image
          src="/images/merapi.svg"
          alt="Mount Merapi background"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 70vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e4d4a] via-[#2e4d4a]/80 to-transparent"></div>
        {/* Mobile bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2e4d4a] via-[#2e4d4a]/40 to-transparent md:hidden"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-1">
              BORN IN
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 tracking-wide">
              YOGYAKARTA
            </h1>
            
            <p className="text-sm md:text-base leading-relaxed mb-10 text-slate-100 font-light text-justify">
              PT. Gajah Mada Barokah Sukses Makmur was established in 2000 under the brand &quot;GM Production&quot; and is legally registered with the Business Identification Number (NIB): 9120305842961. GM Production is supported by a professional, experienced, and certified team dedicated to providing a variety of services, including Event Solutions, Show Management, Production, Multimedia, Equipment, and Travel Solutions, all integrated within the comprehensive GM Production ecosystem.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg md:text-xl mb-1">VISION:</h3>
                <p className="text-sm md:text-base font-semibold leading-relaxed">
                  To become a leading Event and Marketing Service Provider, both in Indonesia and internationally.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-xl mb-1">MISSION:</h3>
                <p className="text-sm md:text-base font-semibold leading-relaxed">
                  To provide premier and high-quality Event and Marketing Services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

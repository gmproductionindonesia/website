"use client";

import { motion } from "framer-motion";

export default function CampusFeaturesBar() {
  const features = [
    "CREATIVE EVENT EXPERIENCE",
    "EXPERIENCED EVENT TEAM",
    "FLEXIBLE PRODUCTION SUPPORT"
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-6 relative z-30 shadow-sm">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
              className="flex items-center justify-center gap-3 w-full md:w-1/3 py-4 md:py-0"
            >
              <div className="w-4 h-4 rounded-full bg-[#C69C6D]/20 border-2 border-[#C69C6D] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C69C6D]"></div>
              </div>
              <span className="font-bold text-slate-800 tracking-wider text-xs sm:text-sm">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SolutionFeatures({ badges }) {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Services & Capabilities
          </h2>
          <div className="h-1 w-20 bg-orange-500 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-4 p-6 bg-zinc-900 border border-white/5 rounded-2xl hover:border-orange-500/30 hover:bg-zinc-800/80 transition-all duration-300"
            >
              <div className="shrink-0">
                <CheckCircle2 className="text-orange-500 w-6 h-6" />
              </div>
              <span className="text-white font-medium text-lg">
                {badge}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

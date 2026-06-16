"use client";

import { motion } from "framer-motion";

export default function ValueProp() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-20 bg-fixed"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            We’re <span className="text-orange-500">Professional</span>, <span className="text-orange-500">Creative</span>, Collaborative, & Satisfaction <span className="text-orange-500">Guaranteed</span>
          </h2>
          <p className="text-xl text-slate-300">
            Dedikasi penuh dari tim kami untuk menyukseskan setiap momen berharga Anda.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

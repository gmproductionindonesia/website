"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { newsContent } from "@/data/newsContent";

export default function NewsGrid() {
  const [filter, setFilter] = useState("All");

  const filteredNews = filter === "All" 
    ? newsContent 
    : newsContent.filter(item => item.type === filter);

  return (
    <section className="py-24 bg-[#020202] border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All", "Blog", "Article"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === f 
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <Link href={`/harga-paket-eo/${item.slug}`} className="block relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">{item.type}</span>
                </div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {item.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {item.read_time}</span>
                </div>
                
                <Link href={`/harga-paket-eo/${item.slug}`} className="block group-hover:text-emerald-400 transition-colors">
                  <h3 className="text-2xl font-bold text-white leading-tight mb-4 tracking-tight">
                    {item.title}
                  </h3>
                </Link>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {item.excerpt}
                </p>
                
                <Link 
                  href={`/harga-paket-eo/${item.slug}`}
                  className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:text-emerald-300 transition-colors mt-auto group/btn"
                >
                  Baca Selengkapnya
                  <ArrowUpRight size={16} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

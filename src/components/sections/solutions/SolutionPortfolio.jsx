"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Quote, ArrowRight } from "lucide-react";
import { portfolioContent } from "@/data/portfolioContent";

export default function SolutionPortfolio({ categoryName }) {
  // Get matching portfolio items, max 3
  const relatedItems = portfolioContent
    .filter((item) => item.category === categoryName)
    .slice(0, 3);

  if (relatedItems.length === 0) return null;

  return (
    <section className="py-24 bg-zinc-900 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Related Case Studies
            </h2>
            <div className="h-1 w-20 bg-orange-500 mt-4 rounded-full"></div>
          </div>
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors group"
          >
            View All Portfolio
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedItems.map((item, itemIdx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
              className="group flex flex-col bg-black/40 rounded-3xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                    {item.client}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs font-medium text-gray-400 mb-4 pb-4 border-b border-white/5">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-orange-500" /> {item.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} className="text-orange-500" /> {item.location}</span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                
                {/* Testimonial Box */}
                <div className="mt-auto bg-white/5 rounded-2xl p-4 relative">
                  <Quote size={20} className="text-orange-500/20 absolute top-3 left-3" />
                  <p className="text-gray-400 italic text-sm pl-6 relative z-10">
                    "{item.testimonial}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

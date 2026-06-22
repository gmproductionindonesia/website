"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";

export default function PortfolioVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "U_DY8KgM7pI";

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Creative Show Highlight
          </h2>
          <div className="h-1 w-20 bg-[#c29b62] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.15)] border border-white/10 bg-slate-900 group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {/* Thumbnail */}
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Laser Show Thumbnail"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110">
              <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:top-8 md:right-8 z-[999] p-3 bg-white/20 hover:bg-red-600 rounded-full text-white backdrop-blur-sm transition-colors shadow-xl"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* Video Iframe */}
            <div className="w-full h-full max-w-[100vw] max-h-[100vh]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&mute=0`}
                title="GM Production Portfolio Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

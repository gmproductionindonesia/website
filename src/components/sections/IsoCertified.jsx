"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, ChevronLeft, ChevronRight, Maximize, ZoomIn, Share2 } from "lucide-react";
import Image from "next/image";

export default function IsoCertified() {
  const certificates = [
    { src: "/images/iso/ISO-Certified-2.jpg", alt: "ISO 9001:2015 - Quality Management" },
    { src: "/images/iso/ISO-Certified-1.jpg", alt: "ISO 14001:2015 - Environmental Management" },
    { src: "/images/iso/ISO-Certified-3.jpg", alt: "ISO 45001:2018 - Health & Safety" },
    { src: "/images/iso/ISO-Certified-4.jpg", alt: "ISO 37001:2016 - Anti Bribery" }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % certificates.length);
    }
  }, [selectedIndex, certificates.length]);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    }
  }, [selectedIndex, certificates.length]);

  const handleClose = () => setSelectedIndex(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  return (
    <section 
      className="py-20 relative bg-cover bg-center bg-no-repeat bg-fixed border-y border-slate-700 dark:border-slate-800"
      style={{ backgroundImage: "url('/images/goverment/4.JPG')" }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col p-4 md:p-8 gap-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              ISO Certified <CheckCircle2 className="text-green-500" size={36} />
            </h2>
            <p className="text-slate-300 text-lg">
              GM Production Indonesia berkomitmen penuh pada standar manajemen mutu internasional <br className="hidden md:block" />
              Kami bangga telah tersertifikasi 4 standar ISO, membuktikan dedikasi kami terhadap kualitas layanan
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                onClick={() => setSelectedIndex(idx)}
                className="relative aspect-[3/4] bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-700 overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay on hover to indicate it's clickable */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/80 dark:bg-black/50 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100">
                    <ZoomIn className="text-slate-900 dark:text-white" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
            onClick={handleClose}
          >
            {/* Top Navigation Bar */}
            <div
              className="flex items-center justify-between p-4 md:p-6 text-white/80 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-sm font-medium tracking-widest w-24">
                {selectedIndex + 1} / {certificates.length}
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <button className="hover:text-white transition-colors" title="Fullscreen">
                  <Maximize size={20} />
                </button>
                <button className="hover:text-white transition-colors" title="Zoom">
                  <ZoomIn size={20} />
                </button>
                <button className="hover:text-white transition-colors" title="Share">
                  <Share2 size={20} />
                </button>
                <button
                  onClick={handleClose}
                  className="hover:text-white transition-colors ml-2"
                  title="Close"
                >
                  <X size={28} />
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center relative px-4 md:px-16 overflow-hidden">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 md:p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"
              >
                <ChevronLeft size={36} />
              </button>

              {/* Image */}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative w-full max-w-sm md:max-w-none md:h-[85vh] aspect-[3/4]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={certificates[selectedIndex].src}
                  alt={certificates[selectedIndex].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 md:p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-10"
              >
                <ChevronRight size={36} />
              </button>
            </div>

            {/* Bottom info (optional) */}
            <div className="p-6 text-center text-white/70 text-sm z-10">
              {certificates[selectedIndex].alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

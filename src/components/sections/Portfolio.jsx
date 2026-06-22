"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    { 
      id: 1, 
      title: "Government &\nCorporate Event", 
      desc: "Conference International yang melibatkan koordinasi operasional kompleks serta audience berskala nasional.", 
      img: "/images/goverment/3.jpg" 
    },
    { 
      id: 2, 
      title: "Campus &\nInstitutional Event", 
      desc: "Seminar Nasional yang dirancang untuk menghadirkan pengalaman yang terorganisir dan berkesan.", 
      img: "/images/campus-institutional/1.jpg" 
    },
    { 
      id: 3, 
      title: "Creative &\nShow Management", 
      desc: "Pengembangan konsep kreatif, pengaturan show flow, dan pengelolaan jalannya acara untuk menciptakan pengalaman audience yang lebih engaging.", 
      img: "/images/creative/1.jpg" 
    },
    { 
      id: 4, 
      title: "Concert & Entertainment\nProduction", 
      desc: "Entertainment event dengan dukungan stage management, artist coordination, dan crowd experience yang optimal.", 
      img: "/images/entertainment/6.JPG" 
    },
    { 
      id: 5, 
      title: "Multimedia &\nTechnical Production", 
      desc: "Implementasi multimedia dan technical production untuk mendukung kualitas visual, audio, dan operasional event secara menyeluruh.", 
      img: "/images/multimedia/1.JPG" 
    },
    { 
      id: 6, 
      title: "Exhibition &\nBrand Activation", 
      desc: "Activation event yang membantu brand membangun interaksi langsung dengan audience melalui pengalaman yang lebih immersive.", 
      img: "/images/exhibition/1.JPG" 
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center opacity-10 bg-fixed pointer-events-none"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#c29b62] font-bold text-lg md:text-xl mb-3"
            >
              Our Portfolio
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            >
              Event Experience<br />Berskala Nasional
            </motion.h2>
          </div>
          
          <motion.a 
            href="#live-chat"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white hover:text-slate-900 transition-colors duration-300 w-fit"
          >
            Lihat Semua Portfolio <span>&rarr;</span>
          </motion.a>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer border border-white/10"
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.img}')` }}
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 whitespace-pre-line leading-tight drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed drop-shadow-md">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

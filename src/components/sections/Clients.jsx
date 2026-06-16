"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Users, MapPin } from "lucide-react";

export default function Clients() {
  const stats = [
    { number: "25+", label: "YEARS EXPERIENCE", icon: <Clock size={20} className="text-slate-500" /> },
    { number: "2000+", label: "EVENTS", icon: <Calendar size={20} className="text-slate-500" /> },
    { number: "500+", label: "CLIENTS", icon: <Users size={20} className="text-slate-500" /> },
    { number: "Nationwide", label: "COVERAGE", icon: <MapPin size={20} className="text-slate-500" /> },
  ];

  const clients = [
    { name: "HK", image: "HK.png" },
    { name: "Kalbe Farma", image: "Kalbe_Farma.svg.png" },
    { name: "Logo Panjang", image: "Logo-Panjang-HIGHRES.png" },
    { name: "Kemenhub", image: "Logo_Kementerian_Perhubungan_Indonesia_Kemenhub.png" },
    { name: "KAI", image: "Logo_PT_Kereta_Api_Indonesia_(Persero)_2020.svg.png" },
    { name: "SKK Migas", image: "Logo_of_SKK_Migas.svg.png" },
    { name: "Shopee", image: "Shopee_logo.svg.png" },
    { name: "Bank Jatim", image: "bank jatim.png" },
    { name: "Bhinneka", image: "bhinneka.png" },
    { name: "Bank Indonesia", image: "bi.png" },
    { name: "Bank BRI", image: "bri.svg" },
    { name: "BSI", image: "bsi.png" },
    { name: "Caraka", image: "caraka.png" },
    { name: "G20", image: "g20.png" },
    { name: "Gojek", image: "gojek.png" },
    { name: "Grab", image: "grab.svg" },
    { name: "Client 1", image: "image-Photoroom (1).png" },
    { name: "Client 2", image: "image-Photoroom (2).png" },
    { name: "Client 3", image: "image-Photoroom.png" },
    { name: "Injourney", image: "injourney.png" },
    { name: "Jasa Marga", image: "jasa.png" },
    { name: "Kemenparekraf", image: "kemenkraf.png" },
    { name: "Kementerian Industri", image: "kementrian industri.webp" },
    { name: "BTN Syariah", image: "logo-btn-syariah.webp" },
    { name: "Miniso", image: "minisou.webp" },
    { name: "Organda", image: "organda.png" },
    { name: "Pertamina", image: "pertamina.png" },
    { name: "Pupuk Kaltim", image: "pupuk.png" },
    { name: "SIG", image: "sig.svg" },
    { name: "Telkom", image: "telkom.png" },
  ];

  return (
    <section className="py-24 bg-[#fafafa] dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">

        {/* Main Title */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight"
          >
            More Than Production.<br />
            We Deliver Experience
          </motion.h2>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-5xl mx-auto mb-24"
        >
          <div className="flex flex-col md:flex-row border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex-1 p-6 md:p-8 flex items-center gap-4 ${idx !== stats.length - 1 ? "border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800" : ""
                  }`}
              >
                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Clients Title */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Our Clients
          </motion.h3>
        </div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
        >
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 h-24 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow grayscale hover:grayscale-0"
              title={client.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/klien/${client.image}`}
                alt={client.name}
                className={`max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-all ${
                  ["Pertamina", "Bank Jatim"].includes(client.name) 
                    ? "scale-[1.7] lg:scale-[2]" 
                    : client.name === "G20"
                      ? "scale-[1.3] lg:scale-[1.5]"
                      : ""
                }`}
              />
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 max-w-5xl mx-auto bg-slate-900 dark:bg-slate-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl"
        >
          {/* Background decoration for CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c29b62]/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Siap Mengelevasi Skala Event Anda?
            </h3>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Konsultasikan kebutuhan infrastruktur dan eksekusi produksi event Anda bersama tim spesialis GM Production Indonesia.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-3 bg-[#c29b62] hover:bg-[#a88654] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 duration-300"
            >
              Hubungi Tim Produksi Kami
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

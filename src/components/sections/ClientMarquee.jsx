"use client";

import { motion } from "framer-motion";

export default function ClientMarquee() {
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
    <section className="py-12 bg-white dark:bg-slate-950 overflow-hidden relative z-10">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Our Clients Title */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white"
          >
            Our Clients
          </motion.h3>
        </div>
      </div>

      {/* Client Logos Marquee - Full Width */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-marquee whitespace-nowrap items-center w-max py-4">
          {[...clients, ...clients].map((client, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 h-20 w-32 sm:h-24 sm:w-40 mx-3 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-center p-3 hover:shadow-md transition-all grayscale hover:grayscale-0 flex-shrink-0"
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
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CareerPositions() {
  const departments = [
    {
      name: "Produksi & Operasional",
      jobs: [
        { title: "Senior Show Director", type: "Full-Time", location: "Yogyakarta" },
        { title: "Technical Event Manager", type: "Full-Time", location: "Jakarta" },
        { title: "Stage Manager", type: "Contract", location: "Yogyakarta" }
      ]
    },
    {
      name: "Multimedia & Visual",
      jobs: [
        { title: "Creative Visual Designer", type: "Full-Time", location: "Hybrid" },
        { title: "Lighting Programmer", type: "Freelance", location: "Yogyakarta" },
        { title: "Audio Engineer", type: "Full-Time", location: "Jakarta" }
      ]
    },
    {
      name: "Bisnis & Pemasaran",
      jobs: [
        { title: "Senior Account Executive", type: "Full-Time", location: "Jakarta" },
        { title: "Event Sales Specialist", type: "Full-Time", location: "Yogyakarta" }
      ]
    }
  ];

  return (
    <section id="positions" className="py-24 bg-zinc-900 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Pilih <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Peran Anda</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Temukan posisi yang paling sesuai dengan keahlian dan passion Anda di GM Production.
          </p>
        </div>

        <div className="space-y-16">
          {departments.map((dept, deptIdx) => (
            <div key={deptIdx}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
                {dept.name}
              </h3>
              
              <div className="flex flex-col border-t border-white/10">
                {dept.jobs.map((job, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group border-b border-white/10"
                  >
                    <a href="#" className="flex flex-col md:flex-row md:items-center justify-between py-6 px-4 hover:bg-white/[0.03] transition-all duration-300 rounded-xl my-2">
                      <div className="flex-1 mb-4 md:mb-0">
                        <h4 className="text-xl md:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300 tracking-tight mb-2">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 text-sm font-medium">{job.type}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20"></span>
                          <span className="text-gray-400 text-sm">{job.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-end md:w-32">
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                          <ArrowUpRight className="text-white w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-[#020202] border border-emerald-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Belum Menemukan Posisi yang Tepat?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-light">Kami selalu mencari talenta-talenta luar biasa untuk bergabung bersama kami. Kirimkan CV dan Portofolio Anda melalui Open Application.</p>
          <a href="mailto:hr@gmpro.id" className="inline-flex px-8 py-4 bg-white hover:bg-emerald-500 text-black hover:text-white font-semibold rounded-full transition-colors duration-300 shadow-lg">
            Kirim Open Application
          </a>
        </div>
      </div>
    </section>
  );
}

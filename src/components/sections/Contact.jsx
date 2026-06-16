"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Info */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Hubungi tim support kami dan konsultasikan kebutuhan Anda untuk layanan terbaik dari GM Production Indonesia.
              </p>

              <div className="bg-orange-50 dark:bg-slate-800 p-8 rounded-2xl border border-orange-100 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Office Hotline</h3>
                <p className="text-4xl font-extrabold text-orange-500 mb-6 tracking-tight">0818 2625 99</p>
                <p className="text-slate-600 dark:text-slate-400">
                  Senin - Sabtu <br/>
                  09:00 - 17:00 WIB
                </p>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:w-1/2">
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow" placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nomor Telepon / WA</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow" placeholder="0812..." />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Layanan yang Dibutuhkan</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow appearance-none">
                  <option value="">Pilih Layanan</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="concert">Concert & Entertainment</option>
                  <option value="exhibition">Exhibition & Activation</option>
                  <option value="multimedia">Multimedia Support</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Pesan Tambahan</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow" placeholder="Deskripsikan kebutuhan acara Anda..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                Kirim Pesan <Send size={20} />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

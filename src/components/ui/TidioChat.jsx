"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function TidioChat() {
  const [isMounted, setIsMounted] = useState(false);

  // Mencegah hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Kunci/ID Tidio asli
  const tidioCode = "juo39y1po0nrrdddzqomtkykghy93a2x";

  return (
    <>
      {tidioCode !== "YOUR_TIDIO_PUBLIC_KEY" && (
        <Script
          src={`//code.tidio.co/${tidioCode}.js`}
          strategy="lazyOnload"
        />
      )}

      {/* Floating alert untuk mengingatkan developer memasukkan kode Tidio */}
      {tidioCode === "YOUR_TIDIO_PUBLIC_KEY" && (
        <div className="fixed bottom-6 right-6 z-[99] bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white p-4 rounded-2xl shadow-2xl max-w-[280px]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
              <span className="font-bold">AI</span>
            </div>
            <div>
              <p className="text-sm font-bold mb-1">Tidio Chat Menunggu</p>
              <p className="text-xs text-slate-300">
                Tombol WhatsApp telah dihapus. Silakan masukkan kode instalasi Tidio Anda di file <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-400">TidioChat.jsx</code> agar widget AI muncul.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

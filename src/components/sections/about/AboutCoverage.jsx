"use client";

import Image from "next/image";

export default function AboutCoverage() {
  return (
    <section className="bg-[#3f6460] border-t border-white/10 relative w-full h-[60vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full max-w-[1920px] mx-auto">
        <Image
          src="/images/indonesia1.png"
          alt="GM Production Coverage Map"
          fill
          className="object-contain object-center scale-[1.15]"
          sizes="100vw"
        />
      </div>
    </section>
  );
}

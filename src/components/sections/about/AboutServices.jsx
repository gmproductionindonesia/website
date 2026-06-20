"use client";

import Image from "next/image";

export default function AboutServices() {
  return (
    <section className="w-full bg-[#3f6460] relative flex items-center justify-center">
      <div className="relative w-full max-w-7xl mx-auto aspect-[16/9] md:aspect-[21/9] lg:aspect-[2/1]">
        <Image
          src="/images/services.png"
          alt="GM Production Services"
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </section>
  );
}

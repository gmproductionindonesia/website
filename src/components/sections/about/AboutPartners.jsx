"use client";

import Image from "next/image";

export default function AboutPartners() {
  return (
    <section className="py-24 bg-[#fafafa] relative flex items-center justify-center">
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1]">
          <Image
            src="/images/partner.png"
            alt="GM Production Partners"
            fill
            className="object-contain object-center"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}

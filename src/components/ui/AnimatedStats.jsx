"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { CalendarDays, Building2, Users, Globe } from "lucide-react";

function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2.5, ease: "easeOut", delay: 0.2 });
      return controls.stop;
    }
  }, [value, count, isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function AnimatedStats({ className = "" }) {
  const stats = [
    {
      icon: <CalendarDays className="text-[#c29b62] w-7 h-7" />,
      number: 25,
      suffix: "+",
      label: "YEARS EXPERIENCE"
    },
    {
      icon: <Building2 className="text-[#c29b62] w-7 h-7" />,
      number: 5000,
      suffix: "+",
      label: "EVENTS"
    },
    {
      icon: <Users className="text-[#c29b62] w-7 h-7" />,
      number: 500,
      suffix: "+",
      label: "CLIENTS"
    },
    {
      icon: <Globe className="text-[#c29b62] w-7 h-7" />,
      number: null,
      text: "Nationwide",
      label: "COVERAGE"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full grid grid-cols-2 md:grid-cols-4 bg-[#222222] border-y border-white/5 divide-x divide-y md:divide-y-0 divide-white/5 overflow-hidden shadow-2xl ${className}`}
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 py-5 md:py-6 px-4 group hover:bg-white/[0.02] transition-colors duration-500">
          <div className="flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            {stat.icon}
          </div>
          <div className="text-center md:text-left">
            <div className="text-2xl md:text-3xl font-black text-white flex items-center justify-center md:justify-start tracking-tight">
              {stat.number !== null ? <AnimatedNumber value={stat.number} /> : stat.text}
              {stat.suffix && <span>{stat.suffix}</span>}
            </div>
            <div className="text-[10px] md:text-xs font-semibold tracking-widest text-gray-500 uppercase mt-1">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

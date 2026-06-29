"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  // For demo purposes, we set Home as active
  const activeLink = "Home";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/eojogja" },
    { 
      name: "Solution", 
      href: "#",
      dropdown: [
        { name: "Government & Corporate Event Solutions", href: "/corporate-event-organizer" },
        { name: "Campus & Institutional Event Solutions", href: "/jasa-event-organizer-kampus" },
        { name: "Creative & Show Management Solutions", href: "/event-management" },
        { name: "Concert & Entertainment Production Solutions", href: "/jasa-eo-musik" },
        { name: "Multimedia & Technical Production Solutions", href: "/jasa-sewa-sound-system-led-lightning" },
        { name: "Exhibition & Brand Activation Solutions", href: "/jasa-event-organizer-mice" },
      ]
    },
    { name: "Portfolio", href: "/eojakarta" },
    { name: "Career", href: "/career" },
    { name: "News & Insights", href: "/jasa-eo-jakarta" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        isScrolled
          ? "bg-black/60 backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2 border-white/10"
          : "bg-black/20 backdrop-blur-md py-4 border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 mr-8 group ml-2 md:ml-4">
          <Image 
            src="/images/logo-gm.png" 
            alt="GM Production Logo" 
            width={1024} 
            height={807} 
            className="h-10 md:h-12 w-auto object-contain" 
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1.5 font-medium transition-colors text-white/90 hover:text-white py-2 relative"
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown 
                    size={16} 
                    className={`mt-0.5 transition-transform duration-300 ease-out ${
                      activeDropdown === link.name ? "rotate-180 text-[#c29b62]" : "text-white/60"
                    }`} 
                  />
                )}
                
                {/* Hover Underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white/50 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>

              {/* Dropdown Menu */}
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[360px] bg-white/95 backdrop-blur-3xl rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] text-slate-800 flex flex-col mt-4 z-50 p-4 border border-white/50"
                    >
                      {/* Invisible bridge to keep hover state active */}
                      <div className="absolute -top-4 left-0 w-full h-4 bg-transparent" />
                      
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="px-5 py-4 text-[15px] font-medium hover:bg-white/60 hover:text-[#a88654] rounded-2xl transition-all duration-300 group/item flex items-center relative"
                        >
                          <span className="relative z-10 transition-transform duration-300 group-hover/item:translate-x-1.5">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Action Button (Optional desktop add-on for premium feel, matching Contact/CTA) */}
        <div className="hidden lg:flex items-center">
           {/* You can put a CTA button here if needed */}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    className="text-white/90 font-medium py-3 border-b border-white/5 hover:text-white hover:border-white/20 transition-all flex justify-between items-center"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown size={18} className="text-white/50" />
                    )}
                  </Link>
                  {/* Mobile Dropdown */}
                  {link.dropdown && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="pl-6 flex flex-col space-y-1 mt-3 mb-2"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-white/60 text-sm py-2.5 hover:text-white transition-colors flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-white/20 before:rounded-full before:mr-3 hover:before:bg-[#c29b62]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <Image 
                src="/images/logo-gm.png" 
                alt="GM Production Logo" 
                width={240} 
                height={80} 
                className="h-12 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <p className="mb-6 leading-relaxed">
              Event Organizer profesional dan berpengalaman lebih dari 25 tahun yang siap mewujudkan acara impian Anda dengan layanan terbaik, kreatif, dan inovatif.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#c29b62] transition-colors text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#c29b62] transition-colors text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#c29b62] transition-colors text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-[#c29b62] transition-colors">Corporate Event</Link></li>
              <li><Link href="#" className="hover:text-[#c29b62] transition-colors">Concert & Entertainment</Link></li>
              <li><Link href="#" className="hover:text-[#c29b62] transition-colors">Exhibition & Activation</Link></li>
              <li><Link href="#" className="hover:text-[#c29b62] transition-colors">Multimedia & Equipment Solutions</Link></li>
              <li><Link href="#" className="hover:text-[#c29b62] transition-colors">Virtual & Hybrid Event</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#c29b62] shrink-0 mt-1" size={20} />
                <span>Jl. Melon Mundusaren No. 236, Nologaten, Caturtunggal, Depok, Sleman, Yogyakarta</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#c29b62] shrink-0" size={20} />
                <span>0818 2625 99</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#c29b62] shrink-0" size={20} />
                <span>info@gmpro.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} GM Production Indonesia. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#c29b62] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#c29b62] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

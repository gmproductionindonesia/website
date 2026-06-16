import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "GM Production | EO Jogja | Event Organizer MICE & Rental Equipment",
  description: "GM Production Indonesia adalah Event Organizer berpengalaman & terpercaya lebih dari 25 tahun, melayani Corporate Event, Exhibition, Concert & Rental Equipment. Berbasis di Yogyakarta.",
  keywords: "Event Organizer, EO Jogja, GMPro, GM Production Indonesia, Corporate Event, Konser, Exhibition",
  icons: {
    icon: "/images/web.png",
    shortcut: "/images/web.png",
    apple: "/images/web.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Tawk.to Script Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/65abc1234567890abcdef123/1h1a2b3c4'; /* Ganti dengan Property ID Tawk.to Anda */
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}

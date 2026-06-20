import { Inter } from "next/font/google";
import Script from "next/script";
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
      <body className="antialiased min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col">
        {children}
        {/* Start of SleekFlow Embed Code */}
        <Script
          src="https://slceasprodbe932739.z7.web.core.windows.net/widget.js"
          data-companyid="f7a52be7-02af-4bfa-8828-193dc5b89687"
          data-location="southeastasia"
          data-widgetid="78fd3860-1b0a-46b2-9112-21cff4a91124"
          type="module"
          strategy="afterInteractive"
        />
        {/* End of SleekFlow Embed Code */}
        <Script
          id="sleekflow-click-handler"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                document.addEventListener('click', function(e) {
                  const target = e.target.closest('a[href="#live-chat"]');
                  if (target) {
                    e.preventDefault();
                    // Attempt to open SleekFlow widget using common API or trigger button
                    if (window.SleekFlow && typeof window.SleekFlow.open === 'function') {
                      window.SleekFlow.open();
                    } else if (window.sleekflow && typeof window.sleekflow.open === 'function') {
                      window.sleekflow.open();
                    } else {
                      // Attempt to click the widget button if API is unavailable
                      const widgetBtn = document.querySelector('.sleekflow-launcher, #sleekflow-widget, iframe[src*="sleekflow"]');
                      if (widgetBtn) {
                        widgetBtn.click();
                        // Also try posting message if it's an iframe
                        if (widgetBtn.tagName === 'IFRAME') {
                          widgetBtn.contentWindow.postMessage('open', '*');
                        }
                      } else {
                        // Fallback alert
                        alert("Widget Live Chat sedang memuat atau terblokir. Silakan pastikan widget muncul di pojok kanan bawah.");
                      }
                    }
                  }
                });
              }
            `
          }}
        />
      </body>
    </html>
  );
}

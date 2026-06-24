import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "EO Jogja - GM Production Indonesia - MICE - Event Organizer",
  description: "GM Production Indonesia Event Organizer MICE, berpengalaman menangani event corporate, BUMN, dan event multinasional. Equipment Rental, Sound System, Lighting",
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
      </head>
      <body className="antialiased min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col">
        {children}
        {/* Start of SleekFlow Embed Code */}
        <Script
          id="sleekflow-widget"
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
                    
                    // Attempt 1: Global APIs
                    if (window.SleekFlow && typeof window.SleekFlow.open === 'function') {
                      window.SleekFlow.open();
                      return;
                    } 
                    if (window.sleekflow && typeof window.sleekflow.open === 'function') {
                      window.sleekflow.open();
                      return;
                    }
                    
                    // Attempt 2: Find DOM elements including shadow roots
                    let clicked = false;
                    const elements = document.querySelectorAll('sleekflow-widget, [id*="sleekflow"], [class*="sleekflow"], iframe[src*="sleekflow"]');
                    
                    for (let el of elements) {
                      if (el.tagName === 'SCRIPT' || el.tagName === 'LINK') continue;
                      
                      // Check inside shadow root if it exists
                      if (el.shadowRoot) {
                        const shadowBtn = el.shadowRoot.querySelector('button, [role="button"], [class*="launcher"], [class*="button"]');
                        if (shadowBtn) {
                          shadowBtn.click();
                          clicked = true;
                          break;
                        }
                      }
                      
                      // Try clicking the element itself
                      if (el.click) {
                        el.click();
                        clicked = true;
                        break;
                      }
                      
                      // If it's an iframe, try postMessage
                      if (el.tagName === 'IFRAME') {
                        el.contentWindow.postMessage('open', '*');
                        clicked = true;
                        break;
                      }
                    }
                    
                    if (!clicked) {
                      console.warn('Sleekflow widget not found or not fully loaded yet.');
                      // Optional: Fallback to a direct link if you have one, or just do nothing (avoids the alert error)
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

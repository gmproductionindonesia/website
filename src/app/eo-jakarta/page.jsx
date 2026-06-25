import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioVideo from "@/components/sections/portfolio/PortfolioVideo";
import PortfolioGallery from "@/components/sections/portfolio/PortfolioGallery";
import ClientMarquee from "@/components/sections/ClientMarquee";

export const metadata = {
  title: "Portfolio & Track Record | GM Production Indonesia",
  description: "Jelajahi rekam jejak GM Production dalam menangani berbagai event berskala nasional: Konser, Corporate Event, Pameran, dan Acara Kenegaraan.",
  keywords: "Portfolio EO, Event Organizer Terpercaya, GM Production Portfolio, Konser Indonesia, Corporate Event EO",
  openGraph: {
    title: "Portfolio & Track Record | GM Production Indonesia",
    description: "Jelajahi rekam jejak mahakarya GM Production dalam menangani berbagai event berskala nasional.",
    url: "https://gmpro.id/eo-jakarta",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "GM Production Portfolio",
      },
    ],
  },
};

export default function PortfolioPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PortfolioHero />
      <ClientMarquee />
      <PortfolioVideo />
      <PortfolioGallery />
      <Footer />
      <TawkToChat />
    </main>
  );
}

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import NewsHero from "@/components/sections/news/NewsHero";
import NewsGrid from "@/components/sections/news/NewsGrid";

export const metadata = {
  title: "News & Insight | GM Production Indonesia",
  description: "Kumpulan artikel dan panduan kritis dari pakar Event Organizer. Pelajari rahasia sukses acara berskala nasional, manajemen risiko, dan tren EO 2024.",
  keywords: "Tips Event Organizer, Berita EO, Insight Event Nasional, Artikel Event Management, GM Production Blog",
  openGraph: {
    title: "News & Insight | GM Production Indonesia",
    description: "Kumpulan artikel dan panduan kritis dari pakar Event Organizer. Pelajari rahasia sukses acara berskala nasional.",
    url: "https://gmpro.id/jasa-eo-jakarta",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "GM Production News & Insight",
      },
    ],
  },
};

export default function NewsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <NewsHero />
      <NewsGrid />
      <Footer />
      <TawkToChat />
    </main>
  );
}

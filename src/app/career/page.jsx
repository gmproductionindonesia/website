import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import CareerHero from "@/components/sections/career/CareerHero";
import CareerCulture from "@/components/sections/career/CareerCulture";
import CareerTestimonials from "@/components/sections/career/CareerTestimonials";
import CareerPositions from "@/components/sections/career/CareerPositions";

export const metadata = {
  title: "Career | GM Production Indonesia",
  description: "Join our team of event architects. Discover career opportunities at GM Production Indonesia.",
};

export default function CareerPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <CareerHero />
      <CareerCulture />
      <CareerTestimonials />
      <CareerPositions />
      <Footer />
      <TawkToChat />
    </main>
  );
}

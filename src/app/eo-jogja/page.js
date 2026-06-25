import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutIso from "@/components/sections/about/AboutIso";
import AboutCoverage from "@/components/sections/about/AboutCoverage";
import AboutPartners from "@/components/sections/about/AboutPartners";
import AboutServices from "@/components/sections/about/AboutServices";
import AboutEquipment from "@/components/sections/about/AboutEquipment";

export const metadata = {
  title: "About Us | GM Production Indonesia",
  description: "BORN IN YOGYAKARTA. Event Organizer profesional dan berpengalaman lebih dari 25 tahun.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#2e4d4a]">
      <Navbar />
      <AboutHero />
      <AboutIso />
      <AboutCoverage />
      <AboutPartners />
      <AboutEquipment />
      <AboutServices />
      <Footer />
      <TawkToChat />
    </main>
  );
}

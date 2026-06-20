import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import Hero from "@/components/sections/Hero";
import AnimatedStats from "@/components/ui/AnimatedStats";
import ClientMarquee from "@/components/sections/ClientMarquee";
import EoValue from "@/components/sections/EoValue";
import Features from "@/components/sections/Features";
import IsoCertified from "@/components/sections/IsoCertified";
import Solutions from "@/components/sections/Solutions";
import Portfolio from "@/components/sections/Portfolio";
import Clients from "@/components/sections/Clients";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-0">
      <Navbar />
      <Hero />
      <AnimatedStats className="relative z-20" />
      <ClientMarquee />
      <EoValue />
      <Features />
      <IsoCertified />
      <Solutions />
      <Portfolio />
      <Clients />
      <Footer />
      <TawkToChat />
    </main>
  );
}

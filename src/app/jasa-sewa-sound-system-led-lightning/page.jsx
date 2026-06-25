import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import { solutionsContent } from "@/data/solutionsContent";
import SolutionPortfolio from "@/components/sections/solutions/SolutionPortfolio";
import ClientMarquee from "@/components/sections/ClientMarquee";

// Custom Multimedia Components
import MultimediaHero from "@/components/sections/solutions/multimedia/MultimediaHero";
import MultimediaStats from "@/components/sections/solutions/multimedia/MultimediaStats";
import MultimediaSplit from "@/components/sections/solutions/multimedia/MultimediaSplit";
import MultimediaServices from "@/components/sections/solutions/multimedia/MultimediaServices";
import MultimediaDeliverables from "@/components/sections/solutions/multimedia/MultimediaDeliverables";
import MultimediaApproach from "@/components/sections/solutions/multimedia/MultimediaApproach";
import MultimediaWhy from "@/components/sections/solutions/multimedia/MultimediaWhy";
import MultimediaCTA from "@/components/sections/solutions/multimedia/MultimediaCTA";
import MultimediaFeaturesBar from "@/components/sections/solutions/multimedia/MultimediaFeaturesBar";

export async function generateMetadata() {
  const data = solutionsContent.find((s) => s.slug === "multimedia-technical");
  if (!data) return { title: "Multimedia & Technical Production Solutions" };
  return {
    title: `${data.title} | GM Production Indonesia`,
    description: data.description.substring(0, 160),
    openGraph: {
      title: `${data.title} | GM Production`,
      description: data.description.substring(0, 160),
      url: `https://gmpro.id/jasa-sewa-sound-system-led-lightning`,
    },
  };
}

export default function MultimediaSolutionPage() {
  const data = solutionsContent.find((s) => s.slug === "multimedia-technical");
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <MultimediaHero />
      <ClientMarquee />
      <MultimediaFeaturesBar />
      <MultimediaStats />
      <MultimediaSplit />
      <MultimediaServices />
      <MultimediaDeliverables />
      <MultimediaApproach />
      <MultimediaWhy />
      <SolutionPortfolio categoryName={data?.title || "Multimedia & Technical Production"} />
      <MultimediaCTA />
      <Footer />
      <TawkToChat />
    </main>
  );
}

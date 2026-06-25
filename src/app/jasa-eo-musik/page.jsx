import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import { solutionsContent } from "@/data/solutionsContent";
import SolutionPortfolio from "@/components/sections/solutions/SolutionPortfolio";
import ClientMarquee from "@/components/sections/ClientMarquee";

// Custom Concert Components
import ConcertHero from "@/components/sections/solutions/concert/ConcertHero";
import ConcertStats from "@/components/sections/solutions/concert/ConcertStats";
import ConcertSplit from "@/components/sections/solutions/concert/ConcertSplit";
import ConcertServices from "@/components/sections/solutions/concert/ConcertServices";
import ConcertDeliverables from "@/components/sections/solutions/concert/ConcertDeliverables";
import ConcertApproach from "@/components/sections/solutions/concert/ConcertApproach";
import ConcertWhy from "@/components/sections/solutions/concert/ConcertWhy";
import ConcertCTA from "@/components/sections/solutions/concert/ConcertCTA";
import ConcertFeaturesBar from "@/components/sections/solutions/concert/ConcertFeaturesBar";

export async function generateMetadata() {
  const data = solutionsContent.find((s) => s.slug === "concert-entertainment");
  if (!data) return { title: "Concert & Entertainment Production Solutions" };
  return {
    title: `${data.title} | GM Production Indonesia`,
    description: data.description.substring(0, 160),
    openGraph: {
      title: `${data.title} | GM Production`,
      description: data.description.substring(0, 160),
      url: `https://gmpro.id/jasa-eo-musik`,
    },
  };
}

export default function ConcertEventOrganizerPage() {
  const data = solutionsContent.find((s) => s.slug === "concert-entertainment");
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <ConcertHero />
      <ClientMarquee />
      <ConcertFeaturesBar />
      <ConcertStats />
      <ConcertSplit />
      <ConcertServices />
      <ConcertDeliverables />
      <ConcertApproach />
      <ConcertWhy />
      <SolutionPortfolio categoryName={data?.title || "Concert & Entertainment Production"} />
      <ConcertCTA />
      <Footer />
      <TawkToChat />
    </main>
  );
}

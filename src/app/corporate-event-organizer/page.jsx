import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import { solutionsContent } from "@/data/solutionsContent";
import SolutionPortfolio from "@/components/sections/solutions/SolutionPortfolio";
import ClientMarquee from "@/components/sections/ClientMarquee";

// Custom Gov & Corp Components
import GovCorpHero from "@/components/sections/solutions/gov-corp/GovCorpHero";
import GovCorpStats from "@/components/sections/solutions/gov-corp/GovCorpStats";
import GovCorpSplit from "@/components/sections/solutions/gov-corp/GovCorpSplit";
import GovCorpServices from "@/components/sections/solutions/gov-corp/GovCorpServices";
import GovCorpDeliverables from "@/components/sections/solutions/gov-corp/GovCorpDeliverables";
import GovCorpApproach from "@/components/sections/solutions/gov-corp/GovCorpApproach";
import GovCorpWhy from "@/components/sections/solutions/gov-corp/GovCorpWhy";
import GovCorpCTA from "@/components/sections/solutions/gov-corp/GovCorpCTA";
import GovCorpFeaturesBar from "@/components/sections/solutions/gov-corp/GovCorpFeaturesBar";

export async function generateMetadata() {
  const data = solutionsContent.find((s) => s.slug === "government-corporate");
  if (!data) return { title: "Government & Corporate Event Solutions" };
  return {
    title: `${data.title} | GM Production Indonesia`,
    description: data.description.substring(0, 160),
    openGraph: {
      title: `${data.title} | GM Production`,
      description: data.description.substring(0, 160),
      url: `https://gmpro.id/corporate-event-organizer`,
    },
  };
}

export default function CorporateEventOrganizerPage() {
  const data = solutionsContent.find((s) => s.slug === "government-corporate");
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <GovCorpHero />
      <ClientMarquee />
      <GovCorpFeaturesBar />
      <GovCorpStats />
      <GovCorpSplit />
      <GovCorpServices />
      <GovCorpDeliverables />
      <GovCorpApproach />
      <GovCorpWhy />
      <SolutionPortfolio categoryName={data?.title || "Government & Corporate Event"} />
      <GovCorpCTA />
      <Footer />
      <TawkToChat />
    </main>
  );
}

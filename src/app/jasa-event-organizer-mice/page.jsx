import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import { solutionsContent } from "@/data/solutionsContent";
import SolutionPortfolio from "@/components/sections/solutions/SolutionPortfolio";
import ClientMarquee from "@/components/sections/ClientMarquee";

// Custom Exhibition Components
import ExhibitionHero from "@/components/sections/solutions/exhibition/ExhibitionHero";
import ExhibitionStats from "@/components/sections/solutions/exhibition/ExhibitionStats";
import ExhibitionSplit from "@/components/sections/solutions/exhibition/ExhibitionSplit";
import ExhibitionServices from "@/components/sections/solutions/exhibition/ExhibitionServices";
import ExhibitionDeliverables from "@/components/sections/solutions/exhibition/ExhibitionDeliverables";
import ExhibitionApproach from "@/components/sections/solutions/exhibition/ExhibitionApproach";
import ExhibitionWhy from "@/components/sections/solutions/exhibition/ExhibitionWhy";
import ExhibitionCTA from "@/components/sections/solutions/exhibition/ExhibitionCTA";
import ExhibitionFeaturesBar from "@/components/sections/solutions/exhibition/ExhibitionFeaturesBar";

export async function generateMetadata() {
  const data = solutionsContent.find((s) => s.slug === "exhibition-brand-activation");
  if (!data) return { title: "Exhibition & Brand Activation Solutions" };
  return {
    title: `${data.title} | GM Production Indonesia`,
    description: data.description.substring(0, 160),
    openGraph: {
      title: `${data.title} | GM Production`,
      description: data.description.substring(0, 160),
      url: `https://gmpro.id/jasa-event-organizer-mice`,
    },
  };
}

export default function MiceEventOrganizerPage() {
  const data = solutionsContent.find((s) => s.slug === "exhibition-brand-activation");
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <ExhibitionHero />
      <ClientMarquee />
      <ExhibitionFeaturesBar />
      <ExhibitionStats />
      <ExhibitionSplit />
      <ExhibitionServices />
      <ExhibitionDeliverables />
      <ExhibitionApproach />
      <ExhibitionWhy />
      <SolutionPortfolio categoryName={data?.title || "Exhibition & Brand Activation"} />
      <ExhibitionCTA />
      <Footer />
      <TawkToChat />
    </main>
  );
}

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import { solutionsContent } from "@/data/solutionsContent";
import SolutionPortfolio from "@/components/sections/solutions/SolutionPortfolio";
import ClientMarquee from "@/components/sections/ClientMarquee";

// Custom Campus Components
import CampusHero from "@/components/sections/solutions/campus/CampusHero";
import CampusStats from "@/components/sections/solutions/campus/CampusStats";
import CampusSplit from "@/components/sections/solutions/campus/CampusSplit";
import CampusServices from "@/components/sections/solutions/campus/CampusServices";
import CampusDeliverables from "@/components/sections/solutions/campus/CampusDeliverables";
import CampusApproach from "@/components/sections/solutions/campus/CampusApproach";
import CampusWhy from "@/components/sections/solutions/campus/CampusWhy";
import CampusCTA from "@/components/sections/solutions/campus/CampusCTA";
import CampusFeaturesBar from "@/components/sections/solutions/campus/CampusFeaturesBar";

export async function generateMetadata() {
  const data = solutionsContent.find((s) => s.slug === "campus-institutional");
  if (!data) return { title: "Campus & Institutional Event Solutions" };
  return {
    title: `${data.title} | GM Production Indonesia`,
    description: data.description.substring(0, 160),
    openGraph: {
      title: `${data.title} | GM Production`,
      description: data.description.substring(0, 160),
      url: `https://gmpro.id/jasa-event-organizer-kampus`,
    },
  };
}

export default function CampusEventOrganizerPage() {
  const data = solutionsContent.find((s) => s.slug === "campus-institutional");
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <CampusHero />
      <ClientMarquee />
      <CampusFeaturesBar />
      <CampusStats />
      <CampusSplit />
      <CampusServices />
      <CampusDeliverables />
      <CampusApproach />
      <CampusWhy />
      <SolutionPortfolio categoryName={data?.title || "Campus & Institutional Event"} />
      <CampusCTA />
      <Footer />
      <TawkToChat />
    </main>
  );
}

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import { solutionsContent } from "@/data/solutionsContent";
import SolutionPortfolio from "@/components/sections/solutions/SolutionPortfolio";
import ClientMarquee from "@/components/sections/ClientMarquee";

// Custom Creative & Show Management Components
import CreativeHero from "@/components/sections/solutions/creative/CreativeHero";
import CreativeStats from "@/components/sections/solutions/creative/CreativeStats";
import CreativeSplit from "@/components/sections/solutions/creative/CreativeSplit";
import CreativeServices from "@/components/sections/solutions/creative/CreativeServices";
import CreativeDeliverables from "@/components/sections/solutions/creative/CreativeDeliverables";
import CreativeApproach from "@/components/sections/solutions/creative/CreativeApproach";
import CreativeWhy from "@/components/sections/solutions/creative/CreativeWhy";
import CreativeCTA from "@/components/sections/solutions/creative/CreativeCTA";
import CreativeFeaturesBar from "@/components/sections/solutions/creative/CreativeFeaturesBar";

export async function generateMetadata() {
  const data = solutionsContent.find((s) => s.slug === "creative-show-management");
  if (!data) return { title: "Creative & Show Management Solutions" };
  return {
    title: `${data.title} | GM Production Indonesia`,
    description: data.description.substring(0, 160),
    openGraph: {
      title: `${data.title} | GM Production`,
      description: data.description.substring(0, 160),
      url: `https://gmpro.id/event-management`,
    },
  };
}

export default function EventManagementPage() {
  const data = solutionsContent.find((s) => s.slug === "creative-show-management");
  return (
    <main className="bg-slate-50 min-h-screen">
      <Navbar />
      <CreativeHero />
      <ClientMarquee />
      <CreativeFeaturesBar />
      <CreativeStats />
      <CreativeSplit />
      <CreativeServices />
      <CreativeDeliverables />
      <CreativeApproach />
      <CreativeWhy />
      <SolutionPortfolio categoryName={data?.title || "Creative & Show Management"} />
      <CreativeCTA />
      <Footer />
      <TawkToChat />
    </main>
  );
}

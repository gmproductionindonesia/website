import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import { solutionsContent } from "@/data/solutionsContent";
import SolutionHero from "@/components/sections/solutions/SolutionHero";
import SolutionFeatures from "@/components/sections/solutions/SolutionFeatures";
import SolutionPortfolio from "@/components/sections/solutions/SolutionPortfolio";

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

// Custom Campus Components
import CampusHero from "@/components/sections/solutions/campus/CampusHero";
import CampusFeaturesBar from "@/components/sections/solutions/campus/CampusFeaturesBar";
import CampusStats from "@/components/sections/solutions/campus/CampusStats";
import CampusSplit from "@/components/sections/solutions/campus/CampusSplit";
import CampusServices from "@/components/sections/solutions/campus/CampusServices";
import CampusDeliverables from "@/components/sections/solutions/campus/CampusDeliverables";
import CampusApproach from "@/components/sections/solutions/campus/CampusApproach";
import CampusWhy from "@/components/sections/solutions/campus/CampusWhy";
import CampusCTA from "@/components/sections/solutions/campus/CampusCTA";

// Custom Creative Components
import CreativeHero from "@/components/sections/solutions/creative/CreativeHero";
import CreativeFeaturesBar from "@/components/sections/solutions/creative/CreativeFeaturesBar";
import CreativeStats from "@/components/sections/solutions/creative/CreativeStats";
import CreativeSplit from "@/components/sections/solutions/creative/CreativeSplit";
import CreativeServices from "@/components/sections/solutions/creative/CreativeServices";
import CreativeDeliverables from "@/components/sections/solutions/creative/CreativeDeliverables";
import CreativeApproach from "@/components/sections/solutions/creative/CreativeApproach";
import CreativeWhy from "@/components/sections/solutions/creative/CreativeWhy";
import CreativeCTA from "@/components/sections/solutions/creative/CreativeCTA";

// Custom Concert & Entertainment Components
import ConcertHero from "@/components/sections/solutions/concert/ConcertHero";
import ConcertFeaturesBar from "@/components/sections/solutions/concert/ConcertFeaturesBar";
import ConcertStats from "@/components/sections/solutions/concert/ConcertStats";
import ConcertSplit from "@/components/sections/solutions/concert/ConcertSplit";
import ConcertServices from "@/components/sections/solutions/concert/ConcertServices";
import ConcertDeliverables from "@/components/sections/solutions/concert/ConcertDeliverables";
import ConcertApproach from "@/components/sections/solutions/concert/ConcertApproach";
import ConcertWhy from "@/components/sections/solutions/concert/ConcertWhy";
import ConcertCTA from "@/components/sections/solutions/concert/ConcertCTA";

// Custom Multimedia & Technical Production Components
import MultimediaHero from "@/components/sections/solutions/multimedia/MultimediaHero";
import MultimediaFeaturesBar from "@/components/sections/solutions/multimedia/MultimediaFeaturesBar";
import MultimediaStats from "@/components/sections/solutions/multimedia/MultimediaStats";
import MultimediaSplit from "@/components/sections/solutions/multimedia/MultimediaSplit";
import MultimediaServices from "@/components/sections/solutions/multimedia/MultimediaServices";
import MultimediaDeliverables from "@/components/sections/solutions/multimedia/MultimediaDeliverables";
import MultimediaApproach from "@/components/sections/solutions/multimedia/MultimediaApproach";
import MultimediaWhy from "@/components/sections/solutions/multimedia/MultimediaWhy";
import MultimediaCTA from "@/components/sections/solutions/multimedia/MultimediaCTA";

// Custom Exhibition & Brand Activation Components
import ExhibitionHero from "@/components/sections/solutions/exhibition/ExhibitionHero";
import ExhibitionFeaturesBar from "@/components/sections/solutions/exhibition/ExhibitionFeaturesBar";
import ExhibitionStats from "@/components/sections/solutions/exhibition/ExhibitionStats";
import ExhibitionSplit from "@/components/sections/solutions/exhibition/ExhibitionSplit";
import ExhibitionServices from "@/components/sections/solutions/exhibition/ExhibitionServices";
import ExhibitionDeliverables from "@/components/sections/solutions/exhibition/ExhibitionDeliverables";
import ExhibitionApproach from "@/components/sections/solutions/exhibition/ExhibitionApproach";
import ExhibitionWhy from "@/components/sections/solutions/exhibition/ExhibitionWhy";
import ExhibitionCTA from "@/components/sections/solutions/exhibition/ExhibitionCTA";

// Generate metadata for each dynamic page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = solutionsContent.find((s) => s.slug === slug);
  
  if (!data) {
    return { title: "Solution Not Found" };
  }

  return {
    title: `${data.title} | GM Production Indonesia`,
    description: data.description.substring(0, 160),
    openGraph: {
      title: `${data.title} | GM Production`,
      description: data.description.substring(0, 160),
      url: `https://gmpro.id/solutions/${data.slug}`,
    },
  };
}

// Pre-render pages at build time
export function generateStaticParams() {
  return solutionsContent.map((solution) => ({
    slug: solution.slug,
  }));
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const data = solutionsContent.find((s) => s.slug === slug);

  // Trigger Next.js 404 page if slug doesn't match
  if (!data) {
    notFound();
  }

  // Custom Page for Government & Corporate
  if (slug === "government-corporate") {
    return (
      <main className="bg-slate-50 min-h-screen">
        <Navbar />
        <GovCorpHero />
        <GovCorpFeaturesBar />
        <GovCorpStats />
        <GovCorpSplit />
        <GovCorpServices />
        <GovCorpDeliverables />
        <GovCorpApproach />
        <GovCorpWhy />
        <SolutionPortfolio categoryName={data.title} />
        <GovCorpCTA />
        <Footer />
        <TawkToChat />
      </main>
    );
  }

  // Custom Page for Campus & Institutional
  if (slug === "campus-institutional") {
    return (
      <main className="bg-slate-50 min-h-screen">
        <Navbar />
        <CampusHero />
        <CampusFeaturesBar />
        <CampusStats />
        <CampusSplit />
        <CampusServices />
        <CampusDeliverables />
        <CampusApproach />
        <CampusWhy />
        <SolutionPortfolio categoryName={data.title} />
        <CampusCTA />
        <Footer />
        <TawkToChat />
      </main>
    );
  }

  // Custom Page for Creative & Show Management
  if (slug === "creative-show-management") {
    return (
      <main className="bg-slate-50 min-h-screen">
        <Navbar />
        <CreativeHero />
        <CreativeFeaturesBar />
        <CreativeStats />
        <CreativeSplit />
        <CreativeServices />
        <CreativeDeliverables />
        <CreativeApproach />
        <CreativeWhy />
        <SolutionPortfolio categoryName={data.title} />
        <CreativeCTA />
        <Footer />
        <TawkToChat />
      </main>
    );
  }

  // Custom Page for Concert & Entertainment Production
  if (slug === "concert-entertainment") {
    return (
      <main className="bg-white min-h-screen">
        <Navbar />
        <ConcertHero />
        <ConcertFeaturesBar />
        <ConcertStats />
        <ConcertSplit />
        <ConcertServices />
        <ConcertDeliverables />
        <ConcertApproach />
        <ConcertWhy />
        <SolutionPortfolio categoryName={data.title} />
        <ConcertCTA />
        <Footer />
        <TawkToChat />
      </main>
    );
  }

  // Custom Page for Multimedia & Technical Production
  if (slug === "multimedia-technical") {
    return (
      <main className="bg-white min-h-screen">
        <Navbar />
        <MultimediaHero />
        <MultimediaFeaturesBar />
        <MultimediaStats />
        <MultimediaSplit />
        <MultimediaServices />
        <MultimediaDeliverables />
        <MultimediaApproach />
        <MultimediaWhy />
        <SolutionPortfolio categoryName={data.title} />
        <MultimediaCTA />
        <Footer />
        <TawkToChat />
      </main>
    );
  }

  // Custom Page for Exhibition & Brand Activation
  if (slug === "exhibition-brand-activation") {
    return (
      <main className="bg-white min-h-screen">
        <Navbar />
        <ExhibitionHero />
        <ExhibitionFeaturesBar />
        <ExhibitionStats />
        <ExhibitionSplit />
        <ExhibitionServices />
        <ExhibitionDeliverables />
        <ExhibitionApproach />
        <ExhibitionWhy />
        <SolutionPortfolio categoryName={data.title} />
        <ExhibitionCTA />
        <Footer />
        <TawkToChat />
      </main>
    );
  }

  // Generic Page for other solutions
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <SolutionHero data={data} />
      <SolutionFeatures badges={data.badges} />
      <SolutionPortfolio categoryName={data.title} />
      <Footer />
      <TawkToChat />
    </main>
  );
}

import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import { solutionsContent } from "@/data/solutionsContent";
import SolutionHero from "@/components/sections/solutions/SolutionHero";
import SolutionFeatures from "@/components/sections/solutions/SolutionFeatures";
import SolutionPortfolio from "@/components/sections/solutions/SolutionPortfolio";

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

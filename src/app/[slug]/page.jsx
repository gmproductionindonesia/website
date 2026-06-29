import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import TawkToChat from "@/components/ui/TawkToChat";
import { newsContent } from "@/data/newsContent";

// Generate static params for SEO & performance (optional but recommended)
export function generateStaticParams() {
  return newsContent.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic metadata for extreme SEO optimization
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = newsContent.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Article Not Found | GM Production",
    };
  }

  return {
    title: `${post.title} | GM Production Insight`,
    description: post.meta_description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.meta_description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.meta_description,
      images: [post.image],
    },
  };
}

export default async function SingleNewsPage({ params }) {
  const { slug } = await params;
  const post = newsContent.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#050505] min-h-screen flex flex-col">
      <Navbar />
      
      <article className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-4xl">
          
          <Link href="/jasa-eo-jakarta" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors mb-8 text-sm font-semibold uppercase tracking-wider">
            <ArrowLeft size={16} /> Kembali ke News & Insight
          </Link>

          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-bold tracking-widest uppercase mb-6">
              {post.type}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium py-6 border-y border-white/10">
              <span className="flex items-center gap-2"><User size={16} className="text-emerald-500" /> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar size={16} className="text-emerald-500" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-emerald-500" /> {post.read_time}</span>
            </div>
          </div>

          <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12 border border-white/10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div 
            className="text-white [&_p]:text-white [&_p]:text-lg [&_p]:leading-relaxed [&_p]:mb-6 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mb-6 [&_h2]:mt-12 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-emerald-400 [&_h3]:mb-4 [&_h3]:mt-8 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_li]:text-white [&_li]:text-lg [&_li]:mb-2 [&_strong]:text-white [&_strong]:font-bold [&_em]:text-white [&_a]:text-emerald-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action Bottom */}
          <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-900/30 to-[#020202] border border-emerald-500/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Konsultasikan Event Nasional Anda</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-light text-lg">Jangan biarkan acara besar Anda gagal karena vendor yang salah. Diskusikan RAB dan kebutuhan teknis Anda bersama pakar kami secara gratis.</p>
            <a href="#live-chat" target="_blank" rel="noopener noreferrer" className="inline-flex px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full transition-all shadow-lg shadow-emerald-500/20">
              Hubungi Tim Ahli GM
            </a>
          </div>

        </div>
      </article>

      <Footer />
      <TawkToChat />
    </main>
  );
}

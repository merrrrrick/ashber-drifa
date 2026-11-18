import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import IKImage from "@/components/IKImage";
import Footer from "@/components/Footer";
import { wedding } from "@/data/wedding";
import ScrollBasedVelocityImagesDemo from "@/components/ScrollBasedVelocityImagesDemo";

const chapterCovers: Record<string, string> = {
  groom: "wedding/groom/001.jpg",
  bride: "wedding/bride/001.jpg",
  nuptials: "wedding/nuptials/001.jpg",
  photoshoot: "wedding/photoshoot/001.jpg",
  reception: "ashber-drifa/reception/HUS01249.jpg",
};

const chapterLayouts: Record<string, string> = {
  groom: "md:col-span-7",
  bride: "md:col-span-5",
  nuptials: "md:col-span-12",
  photoshoot: "md:col-span-5",
  reception: "md:col-span-7",
};

export default function Home() {
  return (
    <main className="bg-[var(--paper)]">
      <Hero />
      <Navigation />

      <section id="chapters" className="bg-[var(--paper-deep)] py-16 sm:py-20 lg:py-24">
        <div className="page-shell">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-14 sm:flex-row sm:items-end">
            <h2 className="display-heading text-5xl sm:text-6xl lg:text-7xl">The wedding album</h2>
            <p className="max-w-xs text-sm leading-7 text-[var(--muted)]">Five chapters. One day. A lifetime of memories.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-12 md:gap-6">
            {wedding.sections.map((section, index) => (
              <Link
                href={"/" + section.slug}
                key={section.slug}
                className={"chapter-card group aspect-[4/3] " + chapterLayouts[section.slug] + " " + (index === 2 ? "md:aspect-[2.55/1]" : "md:aspect-auto md:h-[340px] lg:h-[420px]")}
              >
                <IKImage src={chapterCovers[section.slug]} alt="" width={1800} className="absolute inset-0 h-full w-full object-cover" />
                <span className="chapter-card-content">
                  <span className="chapter-card-title">{section.name}</span>
                  <span className="chapter-card-arrow" aria-hidden="true"><ArrowUpRight size={19} strokeWidth={1.4} /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell flex min-h-[330px] flex-col items-center justify-center py-24 text-center sm:min-h-[400px]">
        <h2 className="font-editorial text-4xl italic tracking-[-0.035em] sm:text-5xl">Thank you for being part of our story.</h2>
        <div className="mt-5 w-screen max-w-none"><ScrollBasedVelocityImagesDemo /></div>
      </section>

      <Footer />
    </main>
  );
}

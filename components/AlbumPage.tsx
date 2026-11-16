import Link from "next/link";
import Navigation from "@/components/Navigation";
import PhotoGallery from "@/components/PhotoGallery";
import SectionHeader from "@/components/SectionHeader";
import ChapterNavigation from "@/components/ChapterNavigation";
import Footer from "@/components/Footer";
import { wedding } from "@/data/wedding";

interface AlbumPageProps { slug: string; images: string[]; }

export default function AlbumPage({ slug, images }: AlbumPageProps) {
  const currentIndex = wedding.sections.findIndex((section) => section.slug === slug);
  const current = wedding.sections[currentIndex];
  if (!current) return null;
  const previous = currentIndex > 0 ? wedding.sections[currentIndex - 1] : undefined;
  const next = currentIndex < wedding.sections.length - 1 ? wedding.sections[currentIndex + 1] : undefined;

  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <Navigation />
      <section className="page-shell pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pt-20">
        <div className="mb-10 flex items-center justify-between gap-4 text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--muted)] sm:mb-14">
          <Link href="/" className="flex min-h-11 items-center gap-2 transition-colors hover:text-[var(--wine)]"><span aria-hidden="true">←</span> Back to the beginning</Link>
          <span className="shrink-0 tabular-nums">{String(images.length).padStart(2, "0")} photographs</span>
        </div>
        <SectionHeader chapter={current.chapter} title={current.name} description={current.description} />
        <PhotoGallery images={images} variant={slug} />
        <ChapterNavigation previous={previous} next={next} />
      </section>
      <Footer />
    </main>
  );
}

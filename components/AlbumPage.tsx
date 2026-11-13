import Link from "next/link";
import Navigation from "@/components/Navigation";
import PhotoGallery from "@/components/PhotoGallery";
import SectionHeader from "@/components/SectionHeader";
import ChapterNavigation from "@/components/ChapterNavigation";
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
      <section className="mx-auto max-w-[1500px] px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
        <div className="mb-8 flex items-center justify-between text-[9px] uppercase tracking-[0.22em] text-[#817d73]">
          <Link href="/" className="transition hover:text-[#292823]">← Back to the story</Link>
          <span>{String(images.length).padStart(2, "0")} photographs</span>
        </div>
        <SectionHeader chapter={current.chapter} title={current.name} description={current.description} />
        <PhotoGallery images={images} />
        <ChapterNavigation previous={previous} next={next} />
      </section>
      <footer className="border-t border-[var(--line)] px-6 py-8 text-center">
        <p className="font-editorial text-lg">{wedding.groom} <span className="italic">&</span> {wedding.bride}</p>
        <p className="mt-2 text-[9px] uppercase tracking-[0.24em] text-[#817d73]">A day to remember · {wedding.date}</p>
      </footer>
    </main>
  );
}

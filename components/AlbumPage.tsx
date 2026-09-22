import Navigation from "@/components/Navigation";
import PhotoGallery from "@/components/PhotoGallery";
import SectionHeader from "@/components/SectionHeader";
import ChapterNavigation from "@/components/ChapterNavigation";
import { wedding } from "@/data/wedding";

interface AlbumPageProps {
  slug: string;
  images: string[];
}

export default function AlbumPage({
  slug,
  images,
}: AlbumPageProps) {
  const currentIndex = wedding.sections.findIndex(
    (section) => section.slug === slug
  );

  const current = wedding.sections[currentIndex];

  const previous =
    currentIndex > 0
      ? wedding.sections[currentIndex - 1]
      : undefined;

  const next =
    currentIndex < wedding.sections.length - 1
      ? wedding.sections[currentIndex + 1]
      : undefined;

  return (
    <main className="min-h-screen bg-[#f8f6f2]">
      <Navigation />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeader
          chapter={current.chapter}
          title={current.name}
          description={current.description}
        />

        <PhotoGallery images={images} />

        <ChapterNavigation
          previous={previous}
          next={next}
        />
      </section>
    </main>
  );
}
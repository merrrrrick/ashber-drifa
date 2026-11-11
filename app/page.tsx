import Link from "next/link";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import IKImage from "@/components/IKImage";
import { wedding } from "@/data/wedding";

const chapterCovers: Record<string, string> = {
  groom: "wedding/groom/001.jpg",
  bride: "wedding/bride/001.jpg",
  nuptials: "wedding/nuptials/001.jpg",
  photoshoot: "wedding/photoshoot/001.jpg",
  reception: "ashber-drifa/reception/HUS01249.jpg",
};

export default function Home() {
  return (
    <main className="bg-[var(--paper)]">
      <Hero />
      <Navigation />

      <section id="the-story" className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-7 text-[10px] uppercase tracking-[0.36em] text-[#817d73]">A day, a thousand memories</p>
          <h2 className="font-editorial text-5xl font-normal leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Two stories.<br /><span className="italic text-[#8c8376]">One beautiful beginning.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#77736b] sm:text-base">
            Some days stay with us forever. This is a little collection of the people, places and moments that made our day unforgettable.
          </p>
          <p className="mt-8 font-editorial text-xl italic text-[#817d73]">{wedding.groom} & {wedding.bride}</p>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[#f0ede6]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-[#817d73]">The wedding album</p>
              <h2 className="font-editorial text-4xl tracking-[-0.04em] sm:text-5xl">Explore the chapters</h2>
            </div>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-[#817d73] sm:block">01 — 05</span>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-7">
            {wedding.sections.map((section) => (
              <Link href={`/${section.slug}`} key={section.slug} className="group block lg:col-span-3">
                <div className="relative overflow-hidden bg-[#e4dfd5]">
                  <IKImage
                    src={chapterCovers[section.slug]}
                    alt={`${section.name} chapter`}
                    width={1600}
                    className="aspect-[16/9] w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.025]"
                  />
                  <span className="absolute left-4 top-4 bg-[#f7f5f0]/90 px-3 py-2 text-[9px] tracking-[0.2em] text-[#5e5a52]">{section.chapter}</span>
                </div>
                <div className="flex items-start justify-between gap-5 border-b border-[var(--line)] py-5">
                  <div>
                    <h3 className="font-editorial text-3xl tracking-[-0.035em] transition group-hover:italic">{section.name}</h3>
                    <p className="mt-2 max-w-sm text-xs leading-6 text-[#817d73]">{section.description}</p>
                  </div>
                  <span className="mt-2 text-lg text-[#817d73] transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 py-16 text-center sm:py-20">
        <p className="text-[9px] uppercase tracking-[0.34em] text-[#817d73]">With love, always</p>
        <p className="mt-5 font-editorial text-4xl tracking-[-0.04em] sm:text-5xl">{wedding.groom} <span className="italic text-[#8c8376]">&</span> {wedding.bride}</p>
        <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-[#817d73]">{wedding.date} · {wedding.location}</p>
      </footer>
    </main>
  );
}

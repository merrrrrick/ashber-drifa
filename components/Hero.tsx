import { ArrowDown } from "lucide-react";
import { wedding } from "@/data/wedding";
import { imageKitUrl } from "@/lib/imagekit";

export default function Hero() {
  const poster = imageKitUrl("ashber-drifa/hero/poster.jpg");
  const video = imageKitUrl("ashber-drifa/hero/hero-video.mp4");

  return (
    <section className="relative flex min-h-[620px] h-[100svh] max-h-[1100px] w-full items-center justify-center overflow-hidden bg-[#292521] text-white">
      {video ? (
        <video autoPlay muted loop playsInline preload="metadata" poster={poster || undefined} aria-hidden="true" className="absolute inset-0 h-full w-full object-cover">
          <source src={video} type="video/mp4" />
        </video>
      ) : null}
      <div className="absolute inset-0 bg-black/35" />
      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 text-center">
        <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.3em] text-white/85 sm:text-xs">
          {wedding.date} <span className="mx-3 text-white/50">·</span> {wedding.location}, India
        </p>
        <h1 className="font-editorial text-[clamp(4.25rem,12vw,10.5rem)] font-normal leading-[0.82] tracking-[-0.065em]">
          {wedding.groom}<span className="mx-3 inline-block font-normal italic text-white/75 sm:mx-7">&</span>{wedding.bride}
        </h1>
        <p className="mt-9 font-editorial text-xl italic text-white/90 sm:text-2xl">A day to keep forever</p>
      </div>
      <a href="#the-story" className="absolute bottom-8 left-1/2 z-10 flex min-h-11 -translate-x-1/2 items-center gap-3 text-[9px] font-medium uppercase tracking-[0.24em] text-white/85" aria-label="Scroll to discover the wedding story">
        Discover the story <ArrowDown size={14} strokeWidth={1.5} />
      </a>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { wedding } from "@/data/wedding";

const lightHeroVideo = "https://ik.imagekit.io/lhtzzqwy3/ashber-drifa/hero/hero-section2.mov/ik-video.mp4?updatedAt=1794844655990";
const darkHeroVideo = "https://ik.imagekit.io/lhtzzqwy3/ashber-drifa/hero/hero-section1.mov/ik-video.mp4?updatedAt=1794844629931";

export default function Hero() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const syncTheme = () => setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
    syncTheme();
    window.addEventListener("theme-change", syncTheme);
    return () => window.removeEventListener("theme-change", syncTheme);
  }, []);
  const video = theme === "dark" ? darkHeroVideo : lightHeroVideo;
  return (
    <section className="relative flex h-[100svh] min-h-[560px] max-h-[1100px] w-full items-center justify-center overflow-hidden bg-[#292521] text-white">
      <video key={"ambient-" + theme} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="hero-video-ambient absolute inset-0 h-full w-full object-cover">
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/35" />
      <video key={"portrait-" + theme} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="hero-video-portrait relative z-[1] h-full w-full object-cover sm:h-full sm:w-auto sm:max-w-[min(100vw,56.25vh)] sm:object-contain">
        <source src={video} type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-editorial text-[clamp(2.65rem,8vw,7.5rem)] font-normal leading-[0.9] tracking-[-0.045em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]">
          {wedding.groom.toUpperCase()} <span className="font-normal italic text-white/85">&</span> {wedding.bride.toUpperCase()}
        </h1>
        <p className="mt-4 font-editorial text-lg tracking-[0.12em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] sm:text-2xl">8.8.2025</p>
      </div>
      <a href="#the-story" className="absolute bottom-8 left-1/2 z-20 flex min-h-11 -translate-x-1/2 items-center gap-3 text-[9px] font-medium uppercase tracking-[0.24em] text-white/90" aria-label="Scroll to discover the wedding story">
        Discover the story <ArrowDown size={14} strokeWidth={1.5} />
      </a>
    </section>
  );
}

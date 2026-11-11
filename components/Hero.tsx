import { wedding } from "@/data/wedding";

const imageKitUrl =
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ??
  process.env.IMGAE_KIT_URl ??
  "";

export default function Hero() {
  return (
    <section className="relative flex min-h-[680px] h-[92svh] max-h-[1100px] w-full items-center justify-center overflow-hidden bg-[#302e29] text-white">
      {imageKitUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${imageKitUrl}/ashber-drifa/hero/poster.jpg`}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={`${imageKitUrl}/ashber-drifa/hero/hero-video.mp4`} type="video/mp4" />
        </video>
      ) : null}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <p className="mb-8 text-[10px] uppercase tracking-[0.42em] text-white/80 sm:text-xs">
          The beginning of forever
        </p>
        <h1 className="font-editorial text-[clamp(4rem,12vw,9.5rem)] font-normal leading-[.88] tracking-[-0.055em]">
          {wedding.groom}
          <span className="mx-3 inline-block font-normal italic text-white/75 sm:mx-6">&</span>
          {wedding.bride}
        </h1>
        <div className="mt-10 flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-white/85 sm:text-xs">
          <span>{wedding.date}</span>
          <span className="h-px w-7 bg-white/60" />
          <span>{wedding.location}, India</span>
        </div>
      </div>

      <a href="#the-story" className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/80">
        Discover our story
        <span className="h-10 w-px bg-white/60" />
      </a>
    </section>
  );
}

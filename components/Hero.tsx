const imageKitUrl =
  process.env.IMGAE_KIT_URl!;

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] w-full overflow-hidden">
      {/* Hero Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={`${imageKitUrl}/ashber-drifa/hero/poster.jpg`}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src={`${imageKitUrl}/ashber-drifa/hero/hero-video.mp4`}
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <p className="mb-6 text-xs uppercase tracking-[0.4em]">
          Our Wedding
        </p>

        <h1 className="font-serif text-6xl font-light leading-none md:text-8xl">
          {`Groom`}
          <span className="mx-3 font-light italic">&</span>
          {`Bride`}
        </h1>

        <p className="mt-8 text-sm uppercase tracking-[0.3em]">
          20 · 12 · 2026
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Explore
          </span>

          <span className="h-10 w-px bg-white/70" />
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const IMAGEKIT_URL =
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ??
  process.env.IMGAE_KIT_URl ??
  "";

export default function Lightbox({ images, activeIndex, onClose, onPrevious, onNext }: LightboxProps) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, onClose, onPrevious, onNext]);

  if (activeIndex === null) return null;
  const image = images[activeIndex];
  const imageUrl = IMAGEKIT_URL ? `${IMAGEKIT_URL.replace(/\/$/, "")}/${image}?tr=w-2400,q-90,f-auto` : "";

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 55) delta > 0 ? onPrevious() : onNext();
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171613]/[.97] p-4 sm:p-8"
      onClick={onClose}
      onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding photograph viewer"
    >
      <button onClick={onClose} className="absolute right-5 top-5 z-20 p-3 text-white/65 transition hover:text-white sm:right-8 sm:top-8" aria-label="Close gallery">
        <X size={25} strokeWidth={1.3} />
      </button>
      <button onClick={(event) => { event.stopPropagation(); onPrevious(); }} className="absolute left-1 top-1/2 z-20 hidden -translate-y-1/2 p-4 text-white/60 transition hover:text-white sm:block sm:left-5" aria-label="Previous image">
        <ChevronLeft size={34} strokeWidth={1.1} />
      </button>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`Wedding photograph ${activeIndex + 1}`}
          onClick={(event) => event.stopPropagation()}
          className="max-h-[86svh] max-w-[92vw] select-none object-contain"
          draggable={false}
        />
      ) : (
        <p className="text-sm text-white/70">ImageKit URL is not configured.</p>
      )}
      <button onClick={(event) => { event.stopPropagation(); onNext(); }} className="absolute right-1 top-1/2 z-20 hidden -translate-y-1/2 p-4 text-white/60 transition hover:text-white sm:block sm:right-5" aria-label="Next image">
        <ChevronRight size={34} strokeWidth={1.1} />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.25em] text-white/55">
        {String(activeIndex + 1).padStart(2, "0")} <span className="mx-2 text-white/25">/</span> {String(images.length).padStart(2, "0")}
      </div>
    </div>
  );
}

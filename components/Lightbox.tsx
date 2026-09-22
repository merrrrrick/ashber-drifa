"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const IMAGEKIT_URL =
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

export default function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, onClose, onPrevious, onNext]);

  if (activeIndex === null) return null;

  const image = images[activeIndex];

  const imageUrl = `${IMAGEKIT_URL}/${image}?tr=w-2400,q-90,f-auto`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-20 text-white/70 transition hover:text-white"
        aria-label="Close"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      <button
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-4 text-white/60 transition hover:text-white md:left-8"
        aria-label="Previous image"
      >
        <ChevronLeft size={36} strokeWidth={1} />
      </button>

      <img
        src={imageUrl}
        alt="Wedding photograph"
        onClick={(event) => event.stopPropagation()}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />

      <button
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-4 text-white/60 transition hover:text-white md:right-8"
        aria-label="Next image"
      >
        <ChevronRight size={36} strokeWidth={1} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] text-white/50">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
}
"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";
import IKImage from "./IKImage";
import Lightbox from "./Lightbox";

interface PhotoGalleryProps { images: string[]; variant: string; }

export default function PhotoGallery({ images, variant }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const previous = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current - 1 + images.length) % images.length);
  }, [images.length]);
  const next = useCallback(() => {
    setActiveIndex((current) => current === null ? null : (current + 1) % images.length);
  }, [images.length]);
  const featuredFirst = ["groom", "nuptials", "reception"].includes(variant);
  const remainingImages = featuredFirst ? images.slice(1) : images;

  if (!images.length) {
    return <p className="py-24 text-center font-editorial text-3xl italic text-[var(--muted)]">Photographs will be added soon.</p>;
  }

  return (
    <>
      {featuredFirst ? (
        <button type="button" onClick={() => setActiveIndex(0)} aria-label="Open wedding photograph 1" className={"gallery-featured " + (variant === "nuptials" ? "gallery-featured--narrow" : "")}>
          <IKImage src={images[0]} alt={"Ashber and Drifa — " + variant + " photograph 1"} width={2200} priority className="h-auto w-full" />
        </button>
      ) : null}
      <div className={"gallery-columns gallery--" + variant}>
        {remainingImages.map((image, index) => {
          const imageIndex = featuredFirst ? index + 1 : index;
          return (
            <button key={image} type="button" onClick={() => setActiveIndex(imageIndex)} aria-label={"Open wedding photograph " + (imageIndex + 1)} className="gallery-item text-left">
              <IKImage src={image} alt={"Ashber and Drifa wedding photograph " + (imageIndex + 1)} width={1500} className="h-auto w-full" />
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {activeIndex !== null ? (
          <Lightbox key="wedding-lightbox" images={images} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onPrevious={previous} onNext={next} />
        ) : null}
      </AnimatePresence>
    </>
  );
}

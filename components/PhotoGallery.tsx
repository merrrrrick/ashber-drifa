"use client";

import { useState } from "react";
import { motion } from "motion/react";
import IKImage from "./IKImage";
import Lightbox from "./Lightbox";

interface PhotoGalleryProps { images: string[]; }

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const previous = () => {
    if (activeIndex !== null) setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };
  const next = () => {
    if (activeIndex !== null) setActiveIndex((activeIndex + 1) % images.length);
  };

  if (!images.length) {
    return <p className="py-20 text-center font-editorial text-2xl italic text-[#817d73]">Photographs will be added soon.</p>;
  }

  return (
    <>
      <div className="gallery-columns">
        {images.map((image, index) => (
          <motion.button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open wedding photograph ${index + 1}`}
            className="gallery-item group cursor-zoom-in overflow-hidden bg-[#e9e5dc] text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#817d73]"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: Math.min(index % 5 * 0.045, 0.18) }}
          >
            <IKImage
              src={image}
              alt={`Ashber and Drifa wedding photograph ${index + 1}`}
              width={1400}
              className="h-auto w-full"
            />
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={images}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrevious={previous}
        onNext={next}
      />
    </>
  );
}

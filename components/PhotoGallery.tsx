"use client";

import { useState } from "react";
import { motion } from "motion/react";
import IKImage from "./IKImage";
import Lightbox from "./Lightbox";

interface PhotoGalleryProps {
  images: string[];
}

export default function PhotoGallery({
  images,
}: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] =
    useState<number | null>(null);

  const previous = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      activeIndex === 0
        ? images.length - 1
        : activeIndex - 1
    );
  };

  const next = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      activeIndex === images.length - 1
        ? 0
        : activeIndex + 1
    );
  };

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <motion.button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group mb-4 block w-full overflow-hidden text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: Math.min(index * 0.03, 0.3),
            }}
          >
            <IKImage
              src={image}
              alt={`Wedding photograph ${index + 1}`}
              width={1200}
              className="h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
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
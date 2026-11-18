"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/registry/magicui/scroll-based-velocity";
import { imageKitUrl } from "@/lib/imagekit";

const IMAGES_ROW_A = [
  "wedding/groom/001.jpg",
  "wedding/groom/002.jpg",
  "wedding/groom/003.jpg",
  "wedding/groom/004.jpg",
  "wedding/groom/005.jpg",
];

const IMAGES_ROW_B = [
  "wedding/bride/001.jpg",
  "wedding/bride/002.jpg",
  "wedding/bride/003.jpg",
  "wedding/bride/004.jpg",
  "wedding/bride/005.jpg",
];

function ImageRow({ images }: { images: string[] }) {
  return (
    <>
      {images.map((src) => (
        <img
          key={src}
          src={imageKitUrl(src, "w-720,h-480,c-maintain_ratio,q-85,f-auto")}
          alt="Wedding celebration"
          width={360}
          height={240}
          loading="lazy"
          decoding="async"
          className="mx-3 inline-block h-36 w-52 shrink-0 rounded-lg object-cover shadow-sm sm:mx-4 sm:h-40 sm:w-60"
        />
      ))}
    </>
  );
}

export default function ScrollBasedVelocityImagesDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-5 sm:py-8">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={2} direction={1} className="py-2 sm:py-3">
          <ImageRow images={IMAGES_ROW_A} />
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={2} direction={-1} className="py-2 sm:py-3">
          <ImageRow images={IMAGES_ROW_B} />
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[var(--paper)] to-transparent sm:w-1/12" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--paper)] to-transparent sm:w-1/12" />
    </div>
  );
}

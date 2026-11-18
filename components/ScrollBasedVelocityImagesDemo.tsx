"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/registry/magicui/scroll-based-velocity";

const IMAGE_A =
  "https://images.unsplash.com/photo-1749738456487-2af715ab65ea?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_B =
  "https://plus.unsplash.com/premium_photo-1720139288219-e20aa9c8895b?q=80&w=1810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const IMAGES_ROW_A = [IMAGE_A, IMAGE_B, IMAGE_A, IMAGE_B];
const IMAGES_ROW_B = [IMAGE_B, IMAGE_A, IMAGE_B, IMAGE_A];

function ImageRow({ images }: { images: string[] }) {
  return (
    <>
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
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
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-2 sm:py-3">
          <ImageRow images={IMAGES_ROW_A} />
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-2 sm:py-3">
          <ImageRow images={IMAGES_ROW_B} />
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[var(--paper)] to-transparent sm:w-1/12" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[var(--paper)] to-transparent sm:w-1/12" />
    </div>
  );
}

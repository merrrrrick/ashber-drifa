"use client";

import { useEffect, useRef, type TouchEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { imageKitUrl } from "@/lib/imagekit";

interface LightboxProps {
  images: string[];
  activeIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const easing = [0.23, 1, 0.32, 1] as const;

export default function Lightbox({ images, activeIndex, onClose, onPrevious, onNext }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const imageUrl = imageKitUrl(images[activeIndex], "w-2400,q-90,f-auto");
  const transition = reduceMotion ? { duration: 0.01 } : { duration: 0.24, ease: easing };

  useEffect(() => {
    const previousElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus({ preventScroll: true });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      } else if (event.key === "Tab") {
        const buttons = Array.from(dialogRef.current?.querySelectorAll<HTMLButtonElement>("button:not([disabled])") ?? [])
          .filter((button) => button.getClientRects().length > 0);
        if (!buttons.length) return;
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousElement?.focus({ preventScroll: true });
    };
  }, [onClose, onNext, onPrevious]);

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 55) {
      if (delta > 0) onPrevious();
      else onNext();
    }
    touchStartX.current = null;
  };

  return (
    <motion.div
      ref={dialogRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Wedding photograph viewer"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171513]/[.97] p-4 sm:p-8"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={(event) => { event.stopPropagation(); onClose(); }}
        className="absolute right-3 top-3 z-20 flex h-12 w-12 items-center justify-center text-white/75 transition-colors duration-150 hover:text-white sm:right-7 sm:top-7"
        aria-label="Close photograph"
      >
        <X size={25} strokeWidth={1.3} />
      </button>

      <button
        type="button"
        onClick={(event) => { event.stopPropagation(); onPrevious(); }}
        className="absolute left-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-white/65 transition-colors duration-150 hover:text-white sm:flex sm:left-5"
        aria-label="Previous photograph"
      >
        <ChevronLeft size={34} strokeWidth={1.1} />
      </button>

      <div
        className="lightbox-stage flex max-h-[86svh] max-w-[92vw] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => { touchStartX.current = event.touches[0].clientX; }}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => { touchStartX.current = null; }}
      >
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <motion.img
            key={images[activeIndex]}
            src={imageUrl}
            alt={"Ashber and Drifa wedding photograph " + (activeIndex + 1)}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={transition}
            draggable={false}
            className="max-h-[86svh] max-w-[92vw] select-none object-contain"
          />
        ) : (
          <p className="text-sm text-white/75">ImageKit URL is not configured.</p>
        )}
      </div>

      <button
        type="button"
        onClick={(event) => { event.stopPropagation(); onNext(); }}
        className="absolute right-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-white/65 transition-colors duration-150 hover:text-white sm:flex sm:right-5"
        aria-label="Next photograph"
      >
        <ChevronRight size={34} strokeWidth={1.1} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.22em] text-white/60" aria-live="polite">
        {String(activeIndex + 1).padStart(2, "0")} <span className="mx-2 text-white/30">/</span> {String(images.length).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

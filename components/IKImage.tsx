"use client";

interface IKImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const IMAGEKIT_URL =
  process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT ??
  process.env.IMGAE_KIT_URl ??
  "";

export default function IKImage({
  src,
  alt = "",
  className = "",
  width = 1800,
  height,
  priority = false,
}: IKImageProps) {
  const transformation = [`w-${width}`, "q-85", "f-auto"].join(",");
  const url = IMAGEKIT_URL ? `${IMAGEKIT_URL.replace(/\/$/, "")}/${src}?tr=${transformation}` : "";

  if (!url) {
    return (
      <div className={`flex aspect-[4/3] w-full items-center justify-center bg-[#e9e5dc] text-[10px] uppercase tracking-[0.2em] text-[#817d73] ${className}`}>
        ImageKit URL not configured
      </div>
    );
  }

  return (
    <img
      src={url}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
    />
  );
}

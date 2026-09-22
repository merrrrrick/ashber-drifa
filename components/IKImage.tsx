"use client";

interface IKImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
}

const IMAGEKIT_URL =
  process.env.IMGAE_KIT_URl!;

export default function IKImage({
  src,
  alt = "",
  className = "",
  width = 1800,
  height,
}: IKImageProps) {
  const transformation = [
    `w-${width}`,
    "q-80",
    "f-auto",
  ].join(",");

  const url = `${IMAGEKIT_URL}/${src}?tr=${transformation}`;

  return (
    <img
      src={url}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
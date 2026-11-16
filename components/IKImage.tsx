import { imageKitUrl } from "@/lib/imagekit";

interface IKImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  priority?: boolean;
  transformations?: string;
}

export default function IKImage({
  src,
  alt = "",
  className = "",
  width = 1800,
  priority = false,
  transformations,
}: IKImageProps) {
  const url = imageKitUrl(src, transformations ?? "w-" + width + ",q-85,f-auto");
  if (!url) {
    return (
      <div role="img" aria-label={alt || "Wedding photograph unavailable"} className={"flex aspect-[4/3] w-full items-center justify-center bg-[var(--paper-deep)] text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] " + className}>
        Image unavailable
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={url} alt={alt} width={width} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" className={className} />;
}

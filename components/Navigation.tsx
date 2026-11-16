"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { wedding } from "@/data/wedding";
import { imageKitUrl } from "@/lib/imagekit";

const monogramUrl = imageKitUrl(
  "ashber-drifa/hero/monogram.png",
  "w-240,h-240,q-90,f-auto"
);

export default function Navigation() {
  const pathname = usePathname();
  const [monogramFailed, setMonogramFailed] = useState(false);

  return (
    <nav aria-label="Wedding album chapters" className="site-nav sticky top-0 z-50">
      <div className="page-shell flex min-h-[68px] items-center justify-between gap-8">
        <Link
          href="/"
          className="flex min-h-11 shrink-0 items-center justify-center"
          aria-label="Ashber and Drifa — home"
        >
          {monogramUrl && !monogramFailed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={monogramUrl}
              alt="Ashber and Drifa monogram"
              width={120}
              height={120}
              onError={() => setMonogramFailed(true)}
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            />
          ) : (
            <span
              aria-hidden="true"
              className="font-editorial text-[27px] leading-none tracking-[-0.09em] text-[var(--ink)] sm:text-[30px]"
            >
              A<span className="italic text-[var(--wine)]">&</span>D
            </span>
          )}
        </Link>

        <div className="site-nav-links flex min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap pl-2 sm:gap-7 lg:gap-9">
          {wedding.sections.map((section) => {
            const active = pathname === "/" + section.slug;
            return (
              <Link
                key={section.slug}
                href={"/" + section.slug}
                aria-current={active ? "page" : undefined}
                className="nav-link relative flex min-h-11 shrink-0 items-center text-[9px] font-medium uppercase tracking-[0.15em] text-[var(--muted)] transition-colors duration-150 sm:text-[10px] sm:tracking-[0.19em]"
              >
                <span className={active ? "text-[var(--ink)]" : ""}>{section.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

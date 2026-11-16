"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { wedding } from "@/data/wedding";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Wedding album chapters" className="site-nav sticky top-0 z-50">
      <div className="page-shell flex min-h-[68px] items-center justify-between gap-8">
        <Link href="/" className="shrink-0 font-editorial text-[22px] tracking-[-0.035em] sm:text-2xl" aria-label="Ashber and Drifa — home">
          {wedding.groom} <span className="italic text-[var(--wine)]">&</span> {wedding.bride}
        </Link>
        <div className="site-nav-links flex min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap pl-2 sm:gap-7 lg:gap-9">
          {wedding.sections.map((section) => {
            const active = pathname === "/" + section.slug;
            return (
              <Link key={section.slug} href={"/" + section.slug} aria-current={active ? "page" : undefined} className="nav-link relative flex min-h-11 shrink-0 items-center text-[9px] font-medium uppercase tracking-[0.15em] text-[var(--muted)] transition-colors duration-150 sm:text-[10px] sm:tracking-[0.19em]">
                <span className={active ? "text-[var(--ink)]" : ""}>{section.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { wedding } from "@/data/wedding";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--line)] bg-[#f7f5f0]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-8 px-5 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="shrink-0 font-editorial text-lg tracking-[-0.03em] sm:text-xl">
          {wedding.groom} <span className="italic text-[#8c8376]">&</span> {wedding.bride}
        </Link>
        <div className="flex min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 sm:gap-7 lg:gap-9">
          {wedding.sections.map((section) => {
            const active = pathname === `/${section.slug}`;
            return (
              <Link
                key={section.slug}
                href={`/${section.slug}`}
                aria-current={active ? "page" : undefined}
                className={`relative shrink-0 py-1 text-[9px] uppercase tracking-[0.16em] transition-colors sm:text-[10px] sm:tracking-[0.2em] ${active ? "text-[#292823]" : "text-[#817d73] hover:text-[#292823]"}`}
              >
                {section.name}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#292823] transition-all duration-300 ${active ? "w-full" : "w-0"}`} />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

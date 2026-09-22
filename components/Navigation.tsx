"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { wedding } from "@/data/wedding";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#f8f6f2]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="shrink-0 font-serif text-lg tracking-wide"
        >
          {wedding.groom} & {wedding.bride}
        </Link>

        <div className="ml-8 flex gap-8 overflow-x-auto whitespace-nowrap">
          {wedding.sections.map((section) => {
            const active = pathname === `/${section.slug}`;

            return (
              <Link
                key={section.slug}
                href={`/${section.slug}`}
                className={`relative pb-1 text-xs uppercase tracking-[0.18em] transition ${
                  active
                    ? "text-black"
                    : "text-black/50 hover:text-black"
                }`}
              >
                {section.name}

                {active && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-black" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
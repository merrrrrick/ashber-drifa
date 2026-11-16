import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ChapterNavigationProps {
  previous?: { name: string; slug: string; chapter?: string };
  next?: { name: string; slug: string; chapter?: string };
}

export default function ChapterNavigation({ previous, next }: ChapterNavigationProps) {
  return (
    <nav aria-label="Browse wedding chapters" className="mt-24 grid border-t border-[var(--line)] sm:mt-32 md:grid-cols-2">
      {previous ? (
        <Link href={"/" + previous.slug} className="group flex min-h-32 items-center gap-5 border-b border-[var(--line)] py-8 md:border-b-0 md:border-r md:pr-10">
          <ArrowLeft size={18} strokeWidth={1.4} className="shrink-0 text-[var(--wine)] transition-transform duration-150 group-hover:-translate-x-1" />
          <span><span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Previous chapter</span><span className="mt-2 block font-editorial text-3xl tracking-[-0.03em] sm:text-4xl">{previous.name}</span></span>
        </Link>
      ) : <div />}
      {next ? (
        <Link href={"/" + next.slug} className="group flex min-h-32 items-center justify-end gap-5 py-8 text-right md:pl-10">
          <span><span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Continue to</span><span className="mt-2 block font-editorial text-3xl tracking-[-0.03em] sm:text-4xl">{next.name}</span></span>
          <ArrowRight size={18} strokeWidth={1.4} className="shrink-0 text-[var(--wine)] transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      ) : (
        <Link href="/" className="group flex min-h-32 items-center justify-end gap-5 py-8 text-right md:pl-10">
          <span><span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">Return to</span><span className="mt-2 block font-editorial text-3xl tracking-[-0.03em] sm:text-4xl">The beginning</span></span>
          <ArrowRight size={18} strokeWidth={1.4} className="shrink-0 text-[var(--wine)] transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      )}
    </nav>
  );
}

import Link from "next/link";

interface ChapterNavigationProps {
  previous?: { name: string; slug: string; chapter?: string };
  next?: { name: string; slug: string; chapter?: string };
}

export default function ChapterNavigation({ previous, next }: ChapterNavigationProps) {
  return (
    <div className="mt-24 grid border-t border-[var(--line)] sm:mt-32 md:grid-cols-2">
      {previous ? (
        <Link href={`/${previous.slug}`} className="group border-b border-[var(--line)] py-8 md:border-b-0 md:border-r md:pr-10 md:py-10">
          <p className="text-[9px] uppercase tracking-[0.28em] text-[#817d73]">← Previous chapter</p>
          <p className="mt-3 font-editorial text-3xl tracking-[-0.03em] transition group-hover:italic sm:text-4xl">{previous.name}</p>
        </Link>
      ) : <div />}
      {next && (
        <Link href={`/${next.slug}`} className="group py-8 md:py-10 md:pl-10 md:text-right">
          <p className="text-[9px] uppercase tracking-[0.28em] text-[#817d73]">Next chapter →</p>
          <p className="mt-3 font-editorial text-3xl tracking-[-0.03em] transition group-hover:italic sm:text-4xl">{next.name}</p>
        </Link>
      )}
    </div>
  );
}

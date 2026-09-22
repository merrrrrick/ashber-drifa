import Link from "next/link";

interface ChapterNavigationProps {
  previous?: {
    name: string;
    slug: string;
  };

  next?: {
    name: string;
    slug: string;
  };
}

export default function ChapterNavigation({
  previous,
  next,
}: ChapterNavigationProps) {
  return (
    <div className="mt-32 grid border-t border-black/10 md:grid-cols-2">
      {previous ? (
        <Link
          href={`/${previous.slug}`}
          className="group border-b border-black/10 py-10 md:border-b-0 md:border-r md:pr-10"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
            Previous
          </p>

          <p className="mt-3 font-serif text-3xl font-light transition group-hover:italic">
            {previous.name}
          </p>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={`/${next.slug}`}
          className="group py-10 md:pl-10 md:text-right"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
            Next
          </p>

          <p className="mt-3 font-serif text-3xl font-light transition group-hover:italic">
            {next.name}
          </p>
        </Link>
      )}
    </div>
  );
}
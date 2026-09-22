interface SectionHeaderProps {
  chapter: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  chapter,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mb-20">
      <p className="text-xs uppercase tracking-[0.35em] text-black/40">
        Chapter {chapter}
      </p>

      <h1 className="mt-5 font-serif text-5xl font-light tracking-tight md:text-7xl">
        {title}
      </h1>

      <p className="mt-6 max-w-xl text-base leading-7 text-black/55">
        {description}
      </p>
    </header>
  );
}
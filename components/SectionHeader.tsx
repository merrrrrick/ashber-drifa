interface SectionHeaderProps {
  chapter: string;
  title: string;
  description: string;
}

export default function SectionHeader({ chapter, title, description }: SectionHeaderProps) {
  return (
    <header className="mb-12 grid gap-5 pb-2 md:mb-16 md:grid-cols-[1fr_minmax(240px,390px)] md:items-end md:gap-12">
      <div>
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--wine)]">{chapter} / 05</p>
        <h1 className="display-heading text-[clamp(3.8rem,9vw,7.5rem)]">{title}</h1>
      </div>
      <p className="max-w-sm text-sm leading-7 text-[var(--muted)] md:justify-self-end md:text-[15px] md:leading-8">{description}</p>
    </header>
  );
}

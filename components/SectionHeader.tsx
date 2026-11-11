interface SectionHeaderProps {
  chapter: string;
  title: string;
  description: string;
}

export default function SectionHeader({ chapter, title, description }: SectionHeaderProps) {
  return (
    <header className="mb-14 grid gap-8 border-b border-[var(--line)] pb-12 md:mb-20 md:grid-cols-[1fr_ minmax(240px,380px)] md:items-end md:pb-16">
      <div>
        <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#817d73]">Chapter {chapter}</p>
        <h1 className="font-editorial text-6xl font-normal leading-[.95] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">{title}</h1>
      </div>
      <p className="max-w-sm text-sm leading-7 text-[#77736b] md:justify-self-end">{description}</p>
    </header>
  );
}

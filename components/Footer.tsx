import Link from "next/link";
import { wedding } from "@/data/wedding";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] px-6 py-12 text-center sm:py-14">
      <Link href="/" className="font-editorial text-3xl tracking-[-0.04em] sm:text-4xl">{wedding.groom} <span className="italic text-[var(--wine)]">&</span> {wedding.bride}</Link>
      <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">{wedding.date} <span className="mx-2 text-[var(--wine)]">·</span> {wedding.location}, India</p>
      <p className="mt-7 font-editorial text-base italic text-[var(--muted)]">With love, always.</p>
    </footer>
  );
}

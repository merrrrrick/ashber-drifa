import type { CSSProperties } from "react";
import "./GlitchTitle.css";

// Deterministic values keep server and client rendering identical.
const rnd = (i: number, n: number) => {
  const x = Math.sin(i * 127.1 + n * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

type Props = { text: string; className?: string };

export default function GlitchTitle({ text, className = "" }: Props) {
  return (
    <h1 className={`g-title ${className}`} aria-label={text}>
      {Array.from(text).map((c, i) => {
        const roll = c.trim() !== "";
        const n = roll ? 4 + Math.floor(rnd(i, 2) * 11) : 1;
        const style = {
          "--n": n,
          "--start": `${-((n - 1) / n) * 100}%`,
          "--d": `${(i * 0.05 + rnd(i, 3) * 0.25).toFixed(2)}s`,
          "--t": `${(1.6 + rnd(i, 4)).toFixed(2)}s`,
        } as CSSProperties;
        return (
          <span key={i} className={`g-l${roll ? " roll" : ""}`} style={style} aria-hidden="true">
            <span className="g-col">
              {Array.from({ length: n }, (_, k) => <span key={k}>{c}</span>)}
            </span>
          </span>
        );
      })}
    </h1>
  );
}

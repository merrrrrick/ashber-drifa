import type { CSSProperties } from "react";
import "./GlitchTitle.css";

type Props = { date: string; className?: string };

export default function RollingDate({ date, className = "" }: Props) {
  return (
    <p className={`g-date ${className}`} aria-label={date}>
      {Array.from(date).map((character, index) => {
        if (!/\d/.test(character)) {
          return <span key={index} className="g-date-separator" aria-hidden="true">{character}</span>;
        }

        const digit = Number(character);
        const style = {
          "--d": `${(index * 0.12).toFixed(2)}s`,
          "--t": `${(2.1 + (index % 3) * 0.2).toFixed(2)}s`,
          "--end": `${-(digit / 10) * 100}%`,
        } as CSSProperties;

        return (
          <span key={index} className="g-date-digit g-date-roll" style={style} aria-hidden="true">
            <span className="g-date-wheel">
              {Array.from("0123456789").map((digit, wheelIndex) => (
                <span key={wheelIndex}>{digit}</span>
              ))}
            </span>
          </span>
        );
      })}
    </p>
  );
}

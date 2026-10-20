"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Mark from "../site/Mark";

const BARS = Array.from(
  { length: 38 },
  (_, i) => Math.min(100, 20 + Math.abs(Math.sin(i * 1.7) * 60 + Math.cos(i * 0.6) * 20))
);
const RING = 94.2;

const card =
  "absolute z-[2] max-w-[150px] rounded-[14px] border border-line-2 bg-ink-2/90 p-2.5 text-[11px] shadow-[0_20px_40px_-20px_rgba(0,0,0,.8)] backdrop-blur-md motion-safe:animate-bob sm:min-w-[190px] sm:max-w-[220px] sm:px-3.5 sm:py-3 sm:text-xs";
const kicker =
  "mb-1.5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-fg-3";

// The phone and the three cards around it tell the Shama story:
// a ministry uploads, followers are told, they listen anywhere (even offline).
export default function HeroStage() {
  const reduce = useReducedMotion();
  const [pos, setPos] = useState(14);
  const [dl, setDl] = useState(64);

  useEffect(() => {
    if (reduce) return;
    const a = setInterval(() => setPos((p) => (p + 1) % (BARS.length + 6)), 380);
    const b = setInterval(() => setDl((d) => (d >= 100 ? 0 : d + 4)), 160);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, [reduce]);

  return (
    <div
      className="relative h-[480px] min-w-0 sm:h-[520px] md:h-[560px]"
      role="img"
      aria-label="A ministry uploads a sermon, followers are notified, and they listen anywhere, even offline."
    >
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 520 560" preserveAspectRatio="none" aria-hidden="true">
        {["M120 88 C 220 90, 230 180, 260 230", "M420 200 C 360 210, 330 250, 290 270", "M130 480 C 200 470, 230 400, 250 350"].map((d) => (
          <path key={d} d={d} fill="none" stroke="rgba(170,163,255,0.45)" strokeWidth="1.2" strokeDasharray="4 6" className="motion-safe:animate-dash" />
        ))}
      </svg>

      <div className={`${card} left-0 top-10`}>
        <div className={kicker}>
          <i className="h-1.5 w-1.5 rounded-full bg-live shadow-[0_0_8px_var(--color-live)]" />
          New sermon
        </div>
        <b className="block text-[13px] font-semibold text-fg">Oil From Above, Part 2</b>
        <span className="text-fg-2">Samuel Akinwumi · just uploaded</span>
      </div>

      <div className={`${card} right-0 top-[110px] flex items-center gap-2.5 [animation-delay:-2s] sm:top-[150px]`}>
        <svg className="h-7 w-7 flex-none" viewBox="0 0 36 36" aria-hidden="true">
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(196,190,255,.2)" strokeWidth="4" />
          <circle cx="18" cy="18" r="15" fill="none" stroke="#31C277" strokeWidth="4" strokeLinecap="round" strokeDasharray={RING} strokeDashoffset={RING * (1 - dl / 100)} transform="rotate(-90 18 18)" />
        </svg>
        <div>
          <div className={`${kicker} mb-0.5`}>Offline</div>
          <b className="block text-[13px] font-semibold text-fg">
            {dl >= 100 ? "Saved for offline" : `Saving… ${dl}%`}
          </b>
          <span className="text-fg-2">Living A Life Of Grace</span>
        </div>
      </div>

      <div className={`${card} bottom-[24px] left-0 sm:bottom-[50px] sm:left-[18px] [animation-delay:-4s]`}>
        <div className={kicker}>
          <i className="h-1.5 w-1.5 rounded-full bg-brand-2 shadow-[0_0_8px_var(--color-brand-2)]" />
          Following
        </div>
        <b className="block text-[13px] font-semibold text-fg">The Still Waters Global</b>
        <span className="text-fg-2">You&apos;ll be notified of new sermons</span>
      </div>

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[400px] w-[196px] -translate-x-1/2 -translate-y-1/2 -rotate-[4deg] rounded-[42px] bg-[linear-gradient(160deg,#3A3570,#121029_40%,#0B0A18)] p-2.5 shadow-[0_0_0_1px_rgba(196,190,255,.25),0_40px_80px_-20px_rgba(0,0,0,.8),0_0_120px_-20px_rgba(108,99,255,.6)] sm:h-[450px] sm:w-[220px] md:h-[510px] md:w-[250px]"
      >
        <div className="relative grid h-full grid-rows-[auto_1fr_auto_auto_auto] gap-3 overflow-hidden rounded-[33px] bg-[linear-gradient(180deg,#221E52_0%,#121029_55%,#0C0B18_100%)] px-4 pb-4 pt-[38px]">
          <div className="absolute left-1/2 top-2.5 h-[22px] w-[82px] -translate-x-1/2 rounded-full bg-[#05040C]" />
          <div className="text-center text-[10px] uppercase tracking-[0.14em] text-fg-3">Now playing</div>
          <div className="relative grid place-items-end overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_30%_20%,#8F86FF,transparent_55%),linear-gradient(140deg,#483FB2,#1A1640)] p-3.5">
            <Mark className="absolute right-3.5 top-3.5 w-[34px] opacity-90" />
            <strong className="justify-self-start font-display text-[19px] leading-[1.05]">
              Courage, the
              <br />
              Currency of
              <br />
              Destiny
            </strong>
          </div>
          <div>
            <strong className="block text-sm">Courage, the Currency of Destiny</strong>
            <span className="text-xs text-fg-2">Oluwagbemileke Agboola · The Still Waters Global</span>
          </div>
          <div className="flex h-[34px] items-center gap-0.5">
            {BARS.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-sm ${i < pos ? "bg-brand-2" : "bg-[rgba(196,190,255,0.35)]"}`} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-[22px] text-fg-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zM9.5 12 18 18V6z" /></svg>
            <span className="grid h-[46px] w-[46px] place-items-center rounded-full bg-white text-brand">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3v14H7zM14 5h3v14h-3z" /></svg>
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

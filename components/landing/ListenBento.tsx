"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionHead } from "../site/ui";
import Reveal from "../site/Reveal";

const card =
  "relative grid h-full content-between gap-6 overflow-hidden rounded-3xl border border-line bg-[linear-gradient(180deg,rgba(28,25,64,.6),rgba(19,17,42,.6))] p-6";

function CardText({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-fg-2">{children}</p>
    </div>
  );
}

// A search box that types queries and shows the matching row.
const QUERIES: [string, string, string][] = [
  ["courage", "Courage, the Currency of Destiny", "Oluwagbemileke Agboola"],
  ["moses bliss", "You Are Great", "Moses Bliss"],
  ["grace", "Gazing At Grace Charge", "Samuel Akinwumi"],
];

function SearchDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();
  const [q, setQ] = useState(0);
  const [typed, setTyped] = useState(reduce ? QUERIES[0][0] : "");

  useEffect(() => {
    if (!inView || reduce) return;
    const word = QUERIES[q][0];
    if (typed.length < word.length) {
      const t = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 110);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setTyped("");
      setQ((q + 1) % QUERIES.length);
    }, 2200);
    return () => clearTimeout(t);
  }, [inView, reduce, q, typed]);

  const done = typed === QUERIES[q][0];
  return (
    <div ref={ref} className="grid gap-2.5" aria-hidden="true">
      <div className="flex items-center gap-2.5 rounded-full border border-line-2 bg-ink/70 px-4 py-3 text-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fg-3"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <span>{typed}</span>
        <i className="h-4 w-px bg-glow motion-safe:animate-pulse-dot" />
      </div>
      <div
        className={`flex items-center gap-3 rounded-2xl bg-white/5 p-2.5 transition duration-300 ${done ? "opacity-100" : "translate-y-1 opacity-0"}`}
      >
        <span className="h-10 w-10 flex-none rounded-lg bg-[linear-gradient(140deg,#6C63FF,#231C5C)]" />
        <span className="min-w-0">
          <b className="block truncate text-[13px]">{QUERIES[q][1]}</b>
          <span className="text-xs text-fg-2">{QUERIES[q][2]}</span>
        </span>
      </div>
    </div>
  );
}

function NotifyDemo() {
  const rows = [
    ["The Still Waters Global", "Courage, the Currency of Destiny"],
    ["Samuel Akinwumi", "Oil From Above, Part 2"],
  ];
  return (
    <div className="grid gap-2" aria-hidden="true">
      {rows.map(([who, what], i) => (
        <Reveal key={who} delay={0.2 + i * 0.35}>
          <div className="flex items-start gap-2.5 rounded-xl bg-white/5 p-2.5 text-xs">
            <span className="grid h-[26px] w-[26px] flex-none place-items-center rounded-lg bg-brand">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><path d="M12 22a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 22Zm7-6V11a7 7 0 0 0-5.5-6.8V3a1.5 1.5 0 0 0-3 0v1.2A7 7 0 0 0 5 11v5l-2 2v1h18v-1l-2-2Z" /></svg>
            </span>
            <span>
              <b className="block text-fg">{who}</b>
              <span className="text-fg-2">New sermon: {what}</span>
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function Equalizer() {
  return (
    <div className="flex h-[70px] items-end gap-[3px]" aria-hidden="true">
      {Array.from({ length: 24 }, (_, i) => (
        <i
          key={i}
          className="flex-1 origin-bottom rounded-sm bg-brand-2 motion-safe:animate-eq"
          style={{ height: `${40 + ((i * 37) % 60)}%`, animationDelay: `${-(i % 7) * 0.13}s` }}
        />
      ))}
    </div>
  );
}

export default function ListenBento() {
  return (
    <section className="relative py-24">
      <div className="wrap">
        <SectionHead
          pill="Listen"
          title={
            <>
              Made for how you <span className="accent">actually listen.</span>
            </>
          }
        >
          On the bus, at work, in the quiet of the night. Shama keeps the word close.
        </SectionHead>

        <div className="grid gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <div className={card}>
              <SearchDemo />
              <CardText title="Find any message in seconds">
                Search sermons, songs, podcasts and preachers. Can&apos;t find it? Request it and
                we&apos;ll look for it.
              </CardText>
            </div>
          </Reveal>
          <Reveal className="md:col-span-2" delay={0.1}>
            <div className={card}>
              <p className="font-display text-[64px] font-bold leading-none tracking-tight">
                ₦0
              </p>
              <CardText title="Free, always">Every sermon and song on Shama is free to stream.</CardText>
            </div>
          </Reveal>
          <Reveal className="md:col-span-3">
            <div className={card}>
              <NotifyDemo />
              <CardText title="Follow and hear first">
                Subscribe to a channel and get notified the moment a new message drops.
              </CardText>
            </div>
          </Reveal>
          <Reveal className="md:col-span-3" delay={0.1}>
            <div className={card}>
              <Equalizer />
              <CardText title="Download for offline">
                Save messages and worship to your phone and listen without data.
              </CardText>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

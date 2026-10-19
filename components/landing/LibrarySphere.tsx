"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { coverBackground, LibraryItems, Palettes } from "../../lib/site";
import { SectionHead } from "../site/ui";

const N = 64;

// A globe of real sermon and song covers. Drag to spin, tap a cover to see it.
export default function LibrarySphere() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(235);
  const [picked, setPicked] = useState<number | null>(null);

  const tiles = useMemo(
    () =>
      Array.from({ length: N }, (_, i) => {
        // Fibonacci sphere: evenly spread points on a globe.
        const y = 1 - (i / (N - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const th = i * 2.399963;
        const x = Math.cos(th) * r;
        const z = Math.sin(th) * r;
        return {
          lat: (Math.asin(y) * 180) / Math.PI,
          lon: (Math.atan2(x, z) * 180) / Math.PI,
          item: LibraryItems[i % LibraryItems.length],
          bg: coverBackground(Palettes[(i * 3) % Palettes.length]),
        };
      }),
    []
  );

  useEffect(() => {
    const fit = () => setRadius(window.innerWidth < 600 ? 175 : 235);
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const sphere = sphereRef.current;
    if (!wrap || !sphere) return;
    const idle = reduce ? 0 : 0.12;
    let rx = -12, ry = 0, vx = 0, vy = idle;
    let dragging = false, lastX = 0, lastY = 0, moved = 0, raf = 0;
    let visible = true;

    const frame = () => {
      if (!dragging) {
        ry += vy;
        rx += vx;
        vx *= 0.95;
        if (Math.abs(vy) > idle) vy *= 0.97;
        if (Math.abs(vy) < idle) vy = idle;
        rx = Math.max(-40, Math.min(40, rx));
      }
      sphere.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      if (visible) raf = requestAnimationFrame(frame);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(frame);
    });
    io.observe(wrap);

    const down = (e: PointerEvent) => {
      dragging = true;
      moved = 0;
      lastX = e.clientX;
      lastY = e.clientY;
      wrap.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      moved += Math.abs(dx) + Math.abs(dy);
      ry += dx * 0.3;
      rx = Math.max(-40, Math.min(40, rx - dy * 0.3));
      vy = dx * 0.3;
      vx = -dy * 0.1;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const up = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      if (moved < 6) {
        const hit = document
          .elementsFromPoint(e.clientX, e.clientY)
          .find((el) => el instanceof HTMLElement && el.dataset.tile);
        if (hit instanceof HTMLElement) setPicked(Number(hit.dataset.tile));
      }
    };
    const cancel = () => (dragging = false);

    wrap.addEventListener("pointerdown", down);
    wrap.addEventListener("pointermove", move);
    wrap.addEventListener("pointerup", up);
    wrap.addEventListener("pointercancel", cancel);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      wrap.removeEventListener("pointerdown", down);
      wrap.removeEventListener("pointermove", move);
      wrap.removeEventListener("pointerup", up);
      wrap.removeEventListener("pointercancel", cancel);
    };
  }, [reduce]);

  const current = picked === null ? null : tiles[picked];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="wrap">
        <SectionHead
          pill="The library"
          title={
            <>
              Hundreds of sermons and songs, <span className="accent">in one place.</span>
            </>
          }
        >
          Spin the globe and tap any cover. Every tile is a real sermon, song or podcast from a
          ministry on Shama.
        </SectionHead>

        <div
          ref={wrapRef}
          className="relative h-[440px] cursor-grab touch-pan-y select-none [perspective:1400px] active:cursor-grabbing sm:h-[560px]"
          aria-label="Sermons and songs on Shama. Drag to spin, tap a cover to see it."
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(108,99,255,.35),transparent_70%)]" />
          <span className="absolute right-0 top-2.5 text-xs text-fg-3">Drag to spin · tap a cover</span>
          <div ref={sphereRef} className="absolute left-1/2 top-1/2 h-0 w-0 [transform-style:preserve-3d]">
            {tiles.map((t, i) => (
              <button
                key={i}
                type="button"
                data-tile={i}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setPicked(i);
                  }
                }}
                aria-label={`${t.item[0]} by ${t.item[1]}`}
                style={{
                  background: t.bg,
                  transform: `rotateY(${t.lon}deg) rotateX(${-t.lat}deg) translateZ(${radius}px)`,
                }}
                className={`absolute -ml-9 -mt-9 grid h-[72px] w-[72px] content-end gap-0.5 overflow-hidden rounded-[14px] border border-white/15 p-[7px] text-left shadow-[0_10px_30px_-10px_rgba(0,0,0,.8)] transition-[filter,box-shadow] [backface-visibility:hidden] hover:brightness-115 hover:shadow-[0_0_0_2px_#fff,0_0_40px_rgba(143,134,255,.9)] sm:-ml-[46px] sm:-mt-[46px] sm:h-[92px] sm:w-[92px] sm:p-[9px] ${
                  picked === i ? "shadow-[0_0_0_2px_#fff,0_0_40px_rgba(143,134,255,.9)] brightness-115" : ""
                }`}
              >
                <span className="absolute left-2 top-[7px] font-mono text-[8px] uppercase tracking-[0.08em] text-white/80">
                  {t.item[2]}
                </span>
                <b className="font-display text-[9px] font-semibold leading-[1.1] text-white [text-shadow:0_1px_6px_rgba(0,0,0,.5)] sm:text-[11px]">
                  {t.item[0]}
                </b>
                <small className="hidden text-[9px] leading-[1.2] text-white/75 sm:block">{t.item[1]}</small>
              </button>
            ))}
          </div>
        </div>

        <div
          aria-live="polite"
          className="relative z-[2] mx-auto -mt-10 grid max-w-[520px] grid-cols-[auto_minmax(0,1fr)] items-center gap-3.5 rounded-[18px] border border-line-2 bg-ink-2/90 px-3.5 py-3 backdrop-blur-md"
        >
          <div
            className="h-12 w-12 rounded-[10px] bg-ink-3"
            style={current ? { background: current.bg } : undefined}
          />
          <div className="min-w-0">
            <strong className="block truncate text-sm">
              {current ? current.item[0] : "Tap a cover to see it"}
            </strong>
            <span className="text-xs text-fg-2">
              {current
                ? `${current.item[1]} · ${current.item[2]} · listen free on the Shama app`
                : "Sermons, worship and podcasts, free on Shama"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

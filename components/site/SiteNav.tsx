"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SiteLinks, STUDIO_URL } from "../../lib/site";

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-ink/95 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="wrap flex items-center justify-between gap-4 py-4">
        <Link href="/" className="inline-flex items-center" aria-label="Shama home">
          <Image
            src="/icons/shamaLogo.svg"
            alt="Shama"
            width={166}
            height={47}
            priority
            className="h-7 w-auto md:h-9"
          />
        </Link>

        <div className="hidden items-center gap-7 text-sm text-fg-2 md:flex">
          {SiteLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors hover:text-fg ${pathname === l.href ? "text-fg" : ""}`}
            >
              {l.name}
            </Link>
          ))}
          <a href={STUDIO_URL} className="transition-colors hover:text-fg">
            For ministries
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/#waitlist"
            className="glow-btn hidden whitespace-nowrap rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-px sm:inline-flex"
          >
            Join the waitlist
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-0.5 w-4 rounded bg-fg transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-4 rounded bg-fg transition ${open ? "top-1.5 -rotate-45" : "top-2.5"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="wrap grid gap-1 pb-6 md:hidden">
          {SiteLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-3 font-display text-2xl text-fg-2 hover:bg-white/5 hover:text-fg"
            >
              {l.name}
            </Link>
          ))}
          <a
            href={STUDIO_URL}
            className="rounded-xl px-3 py-3 font-display text-2xl text-fg-2 hover:bg-white/5 hover:text-fg"
          >
            For ministries
          </a>
          <Link
            href="/#waitlist"
            onClick={() => setOpen(false)}
            className="glow-btn mt-3 rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Join the waitlist
          </Link>
        </div>
      )}
    </header>
  );
}

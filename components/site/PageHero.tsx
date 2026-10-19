import React from "react";
import { Pill } from "./ui";

// Dark hero used by the inner pages. The old photo, if given, sits faintly
// behind the grid so the pages keep some of their imagery.
export default function PageHero({
  pill,
  title,
  image,
  children,
}: {
  pill: string;
  title: React.ReactNode;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-24 md:pt-40">
      {image && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-[0.18] grayscale [mask-image:linear-gradient(180deg,#000_30%,transparent)]"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}
      <div className="grid-bg" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(108,99,255,0.38),rgba(72,63,178,0.14)_45%,transparent_75%)]" />
      <div className="wrap relative grid justify-items-center gap-6 text-center">
        <Pill>{pill}</Pill>
        <h1 className="max-w-[16ch] text-[clamp(40px,6.2vw,76px)] font-semibold leading-[0.98]">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}

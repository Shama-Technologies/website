import Link from "next/link";
import React from "react";

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-brand/10 px-3 py-1.5 text-xs font-medium text-[#CFCBFF]">
      <i className="h-1.5 w-1.5 rounded-full bg-brand-2 shadow-[0_0_10px_var(--color-brand-2)]" />
      {children}
    </span>
  );
}

export function SectionHead({
  pill,
  title,
  children,
}: {
  pill: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-12 grid grid-cols-1 justify-items-center gap-4 text-center">
      <Pill>{pill}</Pill>
      <h2 className="max-w-[18ch] text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.05]">
        {title}
      </h2>
      {children && <p className="max-w-[56ch] text-fg-2">{children}</p>}
    </div>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition duration-200";
const variants = {
  primary: `${base} glow-btn bg-brand text-white hover:-translate-y-px`,
  ghost: `${base} border border-line-2 bg-white/[0.03] hover:bg-white/[0.07]`,
};

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
}) {
  const cls = `${variants[variant]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

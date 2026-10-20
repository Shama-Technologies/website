import Link from "next/link";
import { DONATE_URL } from "../../lib/site";
import Reveal from "../site/Reveal";
import { SectionHead } from "../site/ui";

const cards = [
  {
    title: "Partner with us",
    body: "Ministries, brands and creators: collaborate on content, events and outreach.",
    cta: "Become a partner",
    href: "/partner",
  },
  {
    title: "Become an ambassador",
    body: "Represent Shama on your campus or in your church and grow as a leader.",
    cta: "Join the programme",
    href: "/ambassador",
  },
  {
    title: "Give",
    body: "Your gift helps keep Shama free and puts the gospel in more hands.",
    cta: "Donate",
    href: DONATE_URL,
  },
];

const cls =
  "group relative grid h-full content-between gap-10 overflow-hidden rounded-3xl border border-line bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-line-2 hover:bg-brand/10";

function Arrow() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full border border-line-2 transition group-hover:border-transparent group-hover:bg-brand">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </span>
  );
}

export default function JoinCards() {
  return (
    <section className="py-24">
      <div className="wrap">
        <SectionHead
          pill="Get involved"
          title={
            <>
              Build this <span className="accent">with us.</span>
            </>
          }
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((c, i) => {
            const inner = (
              <>
                <div className="grid gap-2">
                  <h3 className="text-2xl font-semibold">{c.title}</h3>
                  <p className="text-sm text-fg-2">{c.body}</p>
                </div>
                <span className="flex items-center justify-between text-sm font-semibold">
                  {c.cta}
                  <Arrow />
                </span>
              </>
            );
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                {c.href.startsWith("/") ? (
                  <Link href={c.href} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

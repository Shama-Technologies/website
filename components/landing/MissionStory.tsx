import Reveal from "../site/Reveal";
import { Pill } from "../site/ui";

const values = [
  ["Faith-centred", "Christ at the centre of everything we put out."],
  ["Community", "Believers and ministries growing together."],
  ["Integrity", "Honest content, honest platform."],
  ["Accessibility", "The word within reach of everyone, everywhere."],
  ["Inspiration", "Content that lifts and strengthens."],
];

export default function MissionStory() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
        <Reveal className="grid content-start justify-items-start gap-5 lg:sticky lg:top-28">
          <Pill>Why Shama</Pill>
          <h2 className="text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.05]">
            Preserving the message, <span className="accent">for this generation and the next.</span>
          </h2>
          <p className="max-w-[52ch] text-fg-2">
            So many life-changing sermons live on a single hard drive, or a WhatsApp forward that
            gets lost. Shama gives every ministry one home for its messages, and every believer
            one place to find them.
          </p>
        </Reveal>
        <ol className="grid gap-3">
          {values.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <li className="group flex items-center gap-5 rounded-2xl border border-line bg-white/[0.02] p-5 transition-colors hover:border-line-2 hover:bg-brand/10">
                <span className="font-mono text-xs text-fg-3 transition-colors group-hover:text-glow">
                  0{i + 1}
                </span>
                <span className="grid gap-0.5">
                  <b className="font-display text-xl font-semibold">{title}</b>
                  <span className="text-sm text-fg-2">{body}</span>
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

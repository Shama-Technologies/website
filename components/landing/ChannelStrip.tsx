import { Channels } from "../../lib/site";

const initials = (name: string) =>
  name
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function ChannelStrip() {
  const row = (hidden: boolean) =>
    Channels.map(([name, color]) => (
      <span
        key={`${name}-${hidden}`}
        aria-hidden={hidden || undefined}
        className="inline-flex items-center gap-2.5 whitespace-nowrap font-display text-lg text-fg-2"
      >
        <i
          style={{ background: color }}
          className="grid h-[26px] w-[26px] place-items-center rounded-full text-[11px] font-semibold not-italic text-white"
        >
          {initials(name)}
        </i>
        {name}
      </span>
    ));

  return (
    <section aria-label="Ministries on Shama" className="overflow-hidden border-y border-line py-6">
      <p className="mb-5 text-center text-[11px] uppercase tracking-[0.24em] text-fg-3">
        Ministries already on Shama
      </p>
      <div className="flex w-max gap-12 motion-safe:animate-marquee motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center">
        {row(false)}
        <span className="contents motion-reduce:hidden">{row(true)}</span>
      </div>
    </section>
  );
}

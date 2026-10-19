import CountUp from "./CountUp";
import HeroStage from "./HeroStage";
import Waitlist from "./Waitlist";
import { Pill } from "../site/ui";

function Store({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-xl border border-line bg-white/[0.03] px-3.5 py-2 text-xs text-fg-2">
      {icon}
      <span>
        Coming soon
        <b className="block text-[13px] font-semibold text-fg">{name}</b>
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-28 md:pt-32">
      <div className="grid-bg" />
      <div className="pointer-events-none absolute left-1/2 top-[58%] h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,rgba(108,99,255,0.42),rgba(72,63,178,0.18)_45%,transparent_75%)]" />
      <div className="wrap relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="grid min-w-0 content-start justify-items-start gap-[22px]">
          <Pill>Coming soon to Android &amp; iOS</Pill>
          <h1 className="text-[clamp(40px,6.2vw,78px)] font-semibold leading-[0.98]">
            Kingdom content, <span className="accent">anytime, anywhere.</span>
          </h1>
          <p className="max-w-[46ch] text-[17px] leading-relaxed text-fg-2">
            Stream and download sermons, worship and podcasts from the ministries you love. Follow
            their channels and hear the moment something new drops.
          </p>
          <Waitlist />
          <div className="flex flex-wrap gap-2.5" aria-label="App stores">
            <Store
              name="Google Play"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.6 2.2 13.4 12l-9.8 9.8c-.4-.2-.6-.6-.6-1.1V3.3c0-.5.2-.9.6-1.1Zm11 11 2.6 2.6-11.4 6.5 8.8-9.1Zm3.9-3.9 2.9 1.7c.8.5.8 1.6 0 2.1l-2.9 1.7-2.8-2.8 2.8-2.7ZM5.8 1.7l11.4 6.5-2.6 2.6-8.8-9.1Z" /></svg>
              }
            />
            <Store
              name="App Store"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1ZM13.9 4.9c.7-.9 1.2-2.1 1.1-3.3-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.2 1.1.1 2.3-.6 3-1.5Z" /></svg>
              }
            />
          </div>
          <div className="flex flex-wrap gap-9 pt-1.5">
            {[
              [10000, "Sermons & songs"],
              [500, "Preachers & artists"],
            ].map(([n, label]) => (
              <div key={label}>
                <b className="block font-display text-[34px] font-semibold tracking-tight">
                  <CountUp to={n as number} suffix="+" />
                </b>
                <span className="text-xs uppercase tracking-[0.12em] text-fg-3">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <HeroStage />
      </div>
    </section>
  );
}

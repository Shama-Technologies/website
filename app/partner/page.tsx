import Image from "next/image";
import PartnerForm from "../../components/forms/PartnerForm";
import PageHero from "../../components/site/PageHero";
import Reveal from "../../components/site/Reveal";
import { Button, Pill, SectionHead } from "../../components/site/ui";
import { DonationOption, PartnershipTypes, PartnerWithUs } from "../../lib/data";
import { DONATE_URL } from "../../lib/site";

export const metadata = {
  title: 'Partner With Us | Shama — Spread the Kingdom Message',
  description: 'Partner with Shama through content collaborations, ministry partnerships, sponsorships, or donations. Help us make faith-based content accessible to Christians worldwide.',
  keywords: 'partner with shama, christian ministry partnership, gospel sponsorship, donate christian platform, kingdom content',
  openGraph: {
    title: 'Partner With Us | Shama',
    description: 'Collaborate with Shama to spread the Gospel. Content partnerships, ministry partnerships, sponsorships and donations available.',
    url: 'https://shamaapp.com/partner',
    siteName: 'Shama',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Shama: Kingdom content, anytime, anywhere.' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner With Us | Shama',
    description: 'Collaborate with Shama to spread the Gospel globally.',
    images: ['/og-image.jpg'],
  },
}

export default function PartnerPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        pill="Partner with Shama"
        image="/images/partnerHeroBg.png"
        title={
          <>
            Join us in spreading <span className="accent">the Kingdom message.</span>
          </>
        }
      >
        <p className="max-w-[52ch] text-[17px] text-fg-2">
          Help spread the message of the Kingdom and build a stronger Christian community, through
          content, ministry, sponsorship or giving.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          <Button href="/partner#partner-form">Partner with us</Button>
          <Button href={DONATE_URL} variant="ghost">
            Donate
          </Button>
        </div>
      </PageHero>

      <section className="py-24">
        <div className="wrap">
          <SectionHead
            pill="Ways to partner"
            title={
              <>
                Four ways to <span className="accent">work together.</span>
              </>
            }
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PartnershipTypes.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="group h-full overflow-hidden rounded-3xl border border-line bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-line-2">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.img}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale-[40%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,var(--color-ink))]" />
                  </div>
                  <div className="grid gap-1.5 p-5">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-fg-2">{p.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="wrap grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <Reveal className="grid grid-cols-1 content-start justify-items-start gap-5 lg:sticky lg:top-28">
            <Pill>Why partner</Pill>
            <h2 className="text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.05]">
              Your partnership <span className="accent">goes further than you think.</span>
            </h2>
            <p className="max-w-[46ch] text-fg-2">
              Let&apos;s work together to amplify the message of the Kingdom.
            </p>
          </Reveal>
          <ol className="grid gap-3">
            {PartnerWithUs.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06}>
                <div className="group flex gap-5 rounded-2xl border border-line bg-white/[0.02] p-5 transition-colors hover:border-line-2 hover:bg-brand/10">
                  <span className="pt-1 font-mono text-xs text-fg-3 transition-colors group-hover:text-glow">
                    0{i + 1}
                  </span>
                  <span className="grid gap-1">
                    <b className="font-display text-xl font-semibold">{p.title}</b>
                    <span className="text-sm text-fg-2">{p.description}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="donate" className="scroll-mt-24 py-24">
        <div className="wrap">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] border border-line-2 bg-[radial-gradient(circle_at_85%_0%,rgba(143,134,255,.4),transparent_50%),linear-gradient(140deg,#221E52,#121029_70%)] p-6 md:p-12">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
                <div className="grid grid-cols-1 content-start justify-items-start gap-5">
                  <Pill>Give</Pill>
                  <h2 className="text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.05]">
                    Keep the word <span className="accent">free for everyone.</span>
                  </h2>
                  <p className="max-w-[44ch] text-fg-2">
                    Every gift helps us bring more ministries on board and put the gospel in more hands.
                  </p>
                  <Button href={DONATE_URL}>Donate now</Button>
                </div>
                <ol className="grid gap-2.5">
                  {DonationOption.map((d, i) => (
                    <li key={d.title} className="flex items-start gap-4 rounded-2xl border border-line bg-ink/50 p-4 backdrop-blur">
                      <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-brand font-mono text-xs text-white shadow-[0_0_24px_-4px_var(--color-brand-2)]">
                        {i + 1}
                      </span>
                      <span className="grid gap-0.5">
                        <b className="font-display text-lg font-semibold">{d.title}</b>
                        <span className="text-sm text-fg-2">{d.description}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="partner-form" className="scroll-mt-24 py-24">
        <div className="wrap max-w-[920px]">
          <SectionHead
            pill="Get in touch"
            title={
              <>
                Let&apos;s <span className="accent">talk.</span>
              </>
            }
          >
            Tell us about you and how you&apos;d like to partner. We reply within a few days.
          </SectionHead>
          <div className="rounded-[28px] border border-line bg-white/[0.02] p-6 md:p-10">
            <PartnerForm />
          </div>
        </div>
      </section>
    </main>
  );
}

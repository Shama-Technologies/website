import ForMinistries from "../../components/landing/ForMinistries";
import JoinCards from "../../components/landing/JoinCards";
import PageHero from "../../components/site/PageHero";
import Reveal from "../../components/site/Reveal";
import { Pill, SectionHead } from "../../components/site/ui";

export const metadata = {
  title: 'About Us | Shama — Our Mission & Vision',
  description: 'Learn about Shama — a gospel digital platform founded in 2024 to preserve Christian heritage digitally and create a centralized space for believers to grow in faith and community.',
  keywords: 'about shama, christian platform mission, gospel digital platform, christian community, faith based app',
  openGraph: {
    title: 'About Us | Shama — Our Mission & Vision',
    description: 'Shama was founded to bridge the gap between God\'s word and His people in the digital age.',
    url: 'https://shamaapp.com/about-us',
    siteName: 'Shama',
    images: [{ url: 'https://shamaapp.com/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Shama',
    description: 'Shama was founded to bridge the gap between God\'s word and His people in the digital age.',
    images: ['https://shamaapp.com/og-image.png'],
  },
}

const story = [
  [
    "2024",
    "A mandate",
    "We received a mandate from God to preserve the heritage of the Christian faith digitally. Shama was established as a gospel digital platform to bridge the gap between God's word and His people.",
  ],
  [
    "The problem",
    "Lost in the noise",
    "Social media is flooded with content, making it hard to discern truth from deception. Kingdom content struggles to get the visibility it deserves, held back by censorship and propaganda.",
  ],
  [
    "Shama",
    "A refuge",
    "One centralised space where Christians can stream, download and engage with Christian content, built to aid spiritual growth, strengthen community and enrich the Christian journey.",
  ],
];

const values = [
  ["Faith-centred", "Christ at the centre of everything we put out."],
  ["Community", "Believers and ministries growing together."],
  ["Integrity", "Honest content, honest platform."],
  ["Accessibility", "The word within reach of everyone, everywhere."],
  ["Inspiration", "Content that lifts and strengthens."],
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        pill="About Shama"
        image="/images/AboutHeroBg.png"
        title={
          <>
            Bridging God&apos;s word <span className="accent">and His people.</span>
          </>
        }
      >
        <p className="max-w-[52ch] text-[17px] text-fg-2">
          Empowering Christians worldwide to grow in faith and community.
        </p>
      </PageHero>

      <section className="py-24">
        <div className="wrap">
          <SectionHead
            pill="Our story"
            title={
              <>
                Why we <span className="accent">exist.</span>
              </>
            }
          />
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {story.map(([kicker, title, body], i) => (
              <Reveal as="li" key={title} delay={i * 0.1}>
                <div className="relative grid h-full content-start gap-4 rounded-3xl border border-line bg-white/[0.02] p-6">
                  <span className="w-fit rounded-full border border-line-2 bg-ink px-3 py-1.5 font-mono text-xs text-glow">
                    {kicker}
                  </span>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-fg-2">{body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12">
        <div className="wrap grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            [
              "Vision",
              "To be the leading digital platform that empowers Christians worldwide to grow in faith, knowledge, and community through seamless access to high-quality godly content.",
            ],
            [
              "Mission",
              "To create a centralised digital space where Christians can easily stream, download, and engage with diverse Christian content, inspiring spiritual growth, fostering community and supporting the Christian journey.",
            ],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-[28px] border border-line-2 bg-[radial-gradient(circle_at_90%_0%,rgba(143,134,255,.35),transparent_55%),linear-gradient(140deg,#221E52,#121029_70%)] p-8 md:p-10">
                <Pill>{title}</Pill>
                <p className="mt-6 font-display text-[clamp(22px,2.4vw,30px)] font-medium leading-snug tracking-tight">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="wrap">
          <SectionHead
            pill="What defines us"
            title={
              <>
                Five values, <span className="accent">one compass.</span>
              </>
            }
          >
            Our values shape the Shama culture: who we are, what we do every day, and how we serve
            the diverse streams of the body of Christ.
          </SectionHead>
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {values.map(([title, body], i) => (
              <Reveal as="li" key={title} delay={i * 0.06}>
                <div className="group grid h-full content-between gap-10 rounded-3xl border border-line bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-line-2 hover:bg-brand/10">
                  <span className="font-mono text-xs text-fg-3 transition-colors group-hover:text-glow">
                    0{i + 1}
                  </span>
                  <span className="grid gap-1">
                    <b className="font-display text-xl font-semibold">{title}</b>
                    <span className="text-sm text-fg-2">{body}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <ForMinistries />
      <JoinCards />
    </main>
  );
}

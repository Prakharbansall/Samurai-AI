import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Eye, Gem } from "lucide-react";
import aboutImg from "@/assets/about-ai.jpg";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { FounderStory } from "@/components/FounderStory";
import { WhyPlatformGrid, Testimonials, RoadmapTimeline } from "@/components/sections";
import { COMPANY, GROWTH_STRATEGY } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us - Samurai Technology | Mission, Vision & Team" },
      { name: "description", content: `Learn about ${COMPANY.name}, founded in ${COMPANY.incorporationYear}. Our mission, vision, founder story, and commitment to enterprise AI infrastructure.` },
      { property: "og:title", content: "About Samurai Technology - Enterprise AI Platform" },
      { property: "og:description", content: "An AI-first company building scalable enterprise infrastructure for intelligent business operations." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Our Mission", desc: "To make enterprise-grade AI infrastructure accessible, practical, and transformative for organisations of every size - enabling them to deploy intelligence at scale without building from scratch." },
  { icon: Eye, title: "Our Vision", desc: "A world where every enterprise operates on intelligent infrastructure - where AI amplifies human capability, automates the routine, and unlocks strategic potential across every industry." },
  { icon: Gem, title: "Our Values", desc: "Integrity in every engagement, innovation in every module, security in every layer, and an unwavering commitment to measurable outcomes for our partners." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={<>Building India's <span className="gradient-text">AI infrastructure</span></>}
        subtitle={`${COMPANY.name} is an AI-first technology company developing ${COMPANY.product} - modular, enterprise-grade infrastructure for intelligent business operations.`}
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/10 blur-2xl" />
            <img src={aboutImg} alt="Samurai AI Platform technology" width={1200} height={1000} loading="lazy" className="w-full rounded-3xl border border-border shadow-elegant" />
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              center={false}
              eyebrow="Company Overview"
              title={<>Registered, funded, and <span className="gradient-text">building</span></>}
              subtitle={`Incorporated in ${COMPANY.incorporationYear} under CIN ${COMPANY.cin}, Samurai Technology is headquartered in Bhopal, Madhya Pradesh. We are building the AI platform that Indian enterprises need - scalable, secure, and designed for the complexity of modern business operations.`}
            />
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="glass rounded-xl p-4"><p className="text-muted-foreground">Founder & CEO</p><p className="mt-1 font-semibold">{COMPANY.founder}</p></div>
              <div className="glass rounded-xl p-4"><p className="text-muted-foreground">Incorporated</p><p className="mt-1 font-semibold">{COMPANY.established}</p></div>
              <div className="glass rounded-xl p-4"><p className="text-muted-foreground">Legal Entity</p><p className="mt-1 font-semibold text-xs leading-snug">{COMPANY.name}</p></div>
              <div className="glass rounded-xl p-4"><p className="text-muted-foreground">Registered Office</p><p className="mt-1 font-semibold text-xs leading-snug">Bhopal, MP – 462024</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} className="glass card-hover rounded-2xl p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl [background-image:var(--gradient-primary)]">
                <v.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Founder Story" title={<>The vision behind <span className="gradient-text">Samurai AI</span></>} />
        <div className="mt-14"><FounderStory /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Growth Strategy" title={<>Our path to <span className="gradient-text">scale</span></>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GROWTH_STRATEGY.map((g, i) => (
            <Reveal key={g.phase} delay={i * 80} className="glass card-hover rounded-2xl p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">{g.phase}</span>
              <h3 className="mt-3 text-lg font-semibold">{g.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{g.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Why Samurai AI" title={<>What sets our platform <span className="gradient-text">apart</span></>} />
        <div className="mt-14"><WhyPlatformGrid /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Product Roadmap" title={<>Where we're <span className="gradient-text">headed</span></>} subtitle="A transparent look at our platform evolution." />
        <div className="mt-14"><RoadmapTimeline /></div>
        <Reveal className="mt-8 text-center">
          <Button asChild variant="neon">
            <Link to="/roadmap">View full roadmap <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading eyebrow="Testimonials" title={<>What our partners <span className="gradient-text">say</span></>} />
        <div className="mt-14"><Testimonials /></div>
      </section>

      <CtaBand />
    </>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <Reveal className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
        <div className="pointer-events-none absolute inset-0 [background:var(--gradient-hero)]" />
        <h2 className="relative text-3xl font-bold sm:text-4xl">Ready to deploy enterprise AI?</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
          Request a demo, join early access, or speak with our team about how Samurai AI Platform fits your organisation.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl"><Link to="/contact">Request Demo <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button asChild variant="neon" size="xl"><Link to="/#early-access">Get Early Access</Link></Button>
        </div>
      </Reveal>
    </section>
  );
}

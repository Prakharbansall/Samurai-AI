import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Sparkles, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-ai.jpg";
import aboutImg from "@/assets/about-ai.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ContactSection } from "@/components/ContactSection";
import { DashboardPreview } from "@/components/DashboardPreview";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductShowcase } from "@/components/ProductShowcase";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import {
  PlatformFeaturesGrid, WhyPlatformGrid, UseCasesGrid, PlatformPillars,
  IndustriesGrid, Testimonials, FAQAccordion,
} from "@/components/sections";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samurai AI Platform - Enterprise AI Infrastructure" },
      { name: "description", content: "Samurai AI Platform is enterprise-grade AI infrastructure for intelligent workflows, automation, and data intelligence. Built by Samurai Technology Private Limited." },
      { property: "og:title", content: "Samurai AI Platform - Enterprise AI Infrastructure" },
      { property: "og:description", content: "Deploy enterprise AI at scale with modular, API-first infrastructure built for reliability and growth." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const stats = [
  { value: "99.9%", label: "Platform Uptime" },
  { value: "40+", label: "Enterprise Modules" },
  { value: "15+", label: "Industry Verticals" },
  { value: "24/7", label: "Infrastructure Monitoring" },
];

const valueProps = [
  "Reduce operational costs through intelligent workflow automation",
  "Deploy AI across teams without building infrastructure from scratch",
  "Make faster, data-driven decisions with unified intelligence dashboards",
  "Scale securely with enterprise-grade architecture and compliance controls",
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" width={1600} height={1200} className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
          <div className="absolute inset-0 [background:var(--gradient-hero)]" />
        </div>
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />

        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Enterprise AI infrastructure, built in India
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
              The AI Platform for{" "}
              <span className="gradient-text">Ambitious Enterprises</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {COMPANY.product} unifies intelligent workflows, conversational AI, and data
              intelligence into a single, scalable ecosystem - so your organisation can
              deploy AI with confidence and measure real business outcomes.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Request Demo <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="neon" size="xl">
                <Link to="/#early-access"><Play className="h-4 w-4" /> Get Early Access</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 px-5 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="glass rounded-2xl p-5 text-center">
              <p className="gradient-text font-display text-3xl font-bold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Command Center"
          title={<>Your operations, <span className="gradient-text">unified</span></>}
          subtitle="A single dashboard for workflows, AI performance, team analytics, and business intelligence - designed for leaders and operators alike."
        />
        <div className="mt-14"><DashboardPreview /></div>
      </section>

      {/* PROBLEM / VALUE */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
            <img
              src={aboutImg}
              alt="Samurai AI Platform architecture visualisation"
              width={1200}
              height={1000}
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-elegant animate-float"
            />
          </Reveal>
          <div>
            <SectionHeading
              center={false}
              eyebrow="Why Samurai AI"
              title={<>AI infrastructure that delivers <span className="gradient-text">measurable outcomes</span></>}
              subtitle={`${COMPANY.name} built ${COMPANY.product} to solve a critical challenge: enterprises need AI that works across their entire organisation - not fragmented tools that create integration debt. Our modular, API-first platform lets you deploy intelligence where it matters most.`}
            />
            <ul className="mt-6 space-y-3">
              {valueProps.map((p, i) => (
                <Reveal as="li" key={p} delay={i * 70} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-muted-foreground">{p}</span>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200} className="mt-8">
              <Button asChild variant="hero">
                <Link to="/platform">Explore the platform <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="How It Works"
          title={<>From integration to <span className="gradient-text">intelligence</span></>}
          subtitle="Four steps to deploying enterprise AI without disrupting your existing operations."
        />
        <div className="mt-14"><HowItWorks /></div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Product Showcase"
          title={<>Purpose-built for <span className="gradient-text">every team</span></>}
          subtitle="Workflow builders, AI consoles, and intelligence dashboards - all connected through one platform."
        />
        <div className="mt-14"><ProductShowcase /></div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Platform"
          title={<>Modular AI <span className="gradient-text">ecosystem</span></>}
          subtitle="Activate the modules you need today and expand as your AI strategy matures - no rip-and-replace required."
        />
        <div className="mt-14"><PlatformFeaturesGrid /></div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Use Cases"
          title={<>Proven outcomes across <span className="gradient-text">industries</span></>}
          subtitle="Real business results from organisations deploying Samurai AI Platform."
        />
        <div className="mt-14"><UseCasesGrid /></div>
      </section>

      {/* WHY PLATFORM */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Why Samurai AI"
            title={<>Enterprise-grade <span className="gradient-text">by design</span></>}
            subtitle="Scalable architecture, modular design, and the reliability your organisation demands."
          />
          <div className="mt-14"><WhyPlatformGrid /></div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Architecture"
            title={<>Built on <span className="gradient-text">enterprise pillars</span></>}
            subtitle="Scalability, modularity, reliability, and API-first design at the core of everything we build."
          />
        </div>
        <div className="mt-14"><PlatformPillars /></div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Industries"
          title={<>AI infrastructure for <span className="gradient-text">every sector</span></>}
          subtitle="Adaptable platform modules delivering value across diverse industry verticals."
        />
        <div className="mt-14"><IndustriesGrid /></div>
      </section>


      {/* EARLY ACCESS */}
      <section id="early-access" className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Early Access"
          title={<>Be first to deploy <span className="gradient-text">enterprise AI</span></>}
          subtitle="Join our waitlist for priority onboarding, dedicated support, and preferred pricing at launch."
        />
        <div className="mt-14"><EarlyAccessForm /></div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Answers to <span className="gradient-text">common questions</span></>}
          subtitle="Everything you need to know about the Samurai AI Platform."
        />
        <div className="mt-14"><FAQAccordion /></div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Contact"
          title={<>Ready to transform your <span className="gradient-text">operations?</span></>}
          subtitle="Schedule a demo, speak with our sales team, or ask us anything about the platform."
        />
        <div className="mt-14"><ContactSection /></div>
      </section>
    </>
  );
}

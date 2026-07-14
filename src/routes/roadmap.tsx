import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { RoadmapTimeline } from "@/components/sections";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { GROWTH_STRATEGY } from "@/lib/site-data";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Product Roadmap - Samurai AI Platform | Future Vision" },
      { name: "description", content: "Explore the Samurai AI Platform product roadmap and growth strategy. See what we're building and where enterprise AI infrastructure is heading." },
      { property: "og:title", content: "Product Roadmap - Samurai AI" },
      { property: "og:description", content: "Our vision for the future of enterprise AI infrastructure." },
      { property: "og:url", content: "/roadmap" },
    ],
    links: [{ rel: "canonical", href: "/roadmap" }],
  }),
  component: RoadmapPage,
});

function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="Roadmap"
        title={<>Building the future of <span className="gradient-text">enterprise AI</span></>}
        subtitle="Our product roadmap reflects a long-term commitment to scalable, modular AI infrastructure - designed to evolve with your business and the industry."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Product Roadmap"
          title={<>What we're <span className="gradient-text">shipping next</span></>}
          subtitle="Transparent milestones so you can plan your AI strategy with confidence."
        />
        <div className="mt-14"><RoadmapTimeline /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Growth Strategy"
          title={<>Our path to <span className="gradient-text">global scale</span></>}
          subtitle="A phased approach to building the AI infrastructure ecosystem enterprises need."
        />
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
        <Reveal className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute inset-0 [background:var(--gradient-hero)]" />
          <h2 className="relative text-2xl font-bold sm:text-3xl">Shape the roadmap with us</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Early access partners influence platform priorities. Join the programme and help define the future of enterprise AI.
          </p>
          <div className="relative mt-8">
            <Button asChild variant="hero" size="xl">
              <Link to="/#early-access">Request Early Access <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

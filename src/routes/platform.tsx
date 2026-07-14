import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { PlatformFeaturesGrid, UseCasesGrid, PlatformPillars, IndustriesGrid, FAQAccordion } from "@/components/sections";
import { ProductShowcase } from "@/components/ProductShowcase";
import { HowItWorks } from "@/components/HowItWorks";
import { CtaBand } from "./about";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "AI Platform - Samurai AI | Enterprise Intelligence Infrastructure" },
      { name: "description", content: "Explore the Samurai AI Platform - modular, API-first enterprise AI infrastructure for intelligent workflows, automation, and data intelligence at scale." },
      { property: "og:title", content: "Samurai AI Platform - Enterprise AI Infrastructure" },
      { property: "og:description", content: "Unified AI platform for workflows, conversational AI, data intelligence, and enterprise automation." },
      { property: "og:url", content: "/platform" },
    ],
    links: [{ rel: "canonical", href: "/platform" }],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title={<>Enterprise AI <span className="gradient-text">infrastructure</span> built to scale</>}
        subtitle="Samurai AI Platform unifies intelligent workflows, conversational AI, and data intelligence into a single, modular ecosystem - so your organisation can deploy AI with confidence."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Platform Modules"
          title={<>Everything you need in <span className="gradient-text">one ecosystem</span></>}
          subtitle="Composable modules that integrate seamlessly with your existing infrastructure through secure APIs."
        />
        <div className="mt-14"><PlatformFeaturesGrid /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="Product Showcase"
          title={<>See the platform <span className="gradient-text">in action</span></>}
          subtitle="Purpose-built interfaces for every team - from workflow design to AI operations and executive analytics."
        />
        <div className="mt-14"><ProductShowcase /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading
          eyebrow="How It Works"
          title={<>From integration to <span className="gradient-text">intelligence</span></>}
          subtitle="A streamlined path to deploying enterprise AI without disrupting your operations."
        />
        <div className="mt-14"><HowItWorks /></div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Architecture" title={<>Built on <span className="gradient-text">enterprise pillars</span></>} subtitle="Scalable, modular, and reliable by design." />
        </div>
        <div className="mt-14"><PlatformPillars /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Use Cases" title={<>Real outcomes for <span className="gradient-text">real businesses</span></>} />
        <div className="mt-14"><UseCasesGrid /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Industries" title={<>Trusted across <span className="gradient-text">every sector</span></>} />
        <div className="mt-14"><IndustriesGrid /></div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="FAQ" title={<>Platform <span className="gradient-text">questions</span></>} />
        <div className="mt-14"><FAQAccordion /></div>
      </section>

      <CtaBand />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { FAQAccordion } from "@/components/sections";
import { SectionHeading } from "@/components/SectionHeading";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sales - Samurai AI Platform | Request a Demo" },
      { name: "description", content: `Contact ${COMPANY.name} for demos, sales enquiries, and platform support. Reach us at ${COMPANY.email} or visit our registered office in Bhopal, Madhya Pradesh.` },
      { property: "og:title", content: "Contact Samurai AI - Request a Demo" },
      { property: "og:description", content: "Schedule a demo, speak with sales, or get platform support." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's discuss your <span className="gradient-text">AI strategy</span></>}
        subtitle="Whether you're evaluating enterprise AI platforms or ready to deploy, our team is here to help. We respond within one business day."
      />

      <section className="mx-auto max-w-7xl px-5 py-12">
        <ContactSection />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="FAQ" title={<>Before you <span className="gradient-text">reach out</span></>} />
        <div className="mt-14"><FAQAccordion /></div>
      </section>
    </>
  );
}

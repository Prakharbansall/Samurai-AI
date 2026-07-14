import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions - Samurai AI" },
      { name: "description", content: "Read the terms and conditions governing the use of Samurai Technology Private Limited's website and Samurai AI Platform." },
      { property: "og:title", content: "Terms & Conditions - Samurai AI" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  { h: "1. Acceptance of Terms", p: `By accessing or using the website and platform of ${COMPANY.name}, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our website or platform.` },
  { h: "2. Platform Services", p: "We provide access to the Samurai AI Platform, including intelligent workflows, conversational AI, data intelligence, automation modules, and related enterprise AI infrastructure. The scope, modules, and pricing of any engagement are defined in a separate agreement or order form." },
  { h: "3. Intellectual Property", p: "All content on this website - including text, graphics, logos and software - is the property of the company or its licensors and is protected by applicable intellectual property laws. You may not reproduce or distribute it without prior written consent." },
  { h: "4. Acceptable Use", p: "You agree not to misuse our website or platform, including attempting unauthorised access, interfering with functionality, or using our platform for unlawful purposes." },
  { h: "5. Client Responsibilities", p: "For project engagements, clients are responsible for providing accurate information, timely feedback and any data or access required for delivery. Delays in these may affect timelines." },
  { h: "6. Payments", p: "Fees, payment schedules and terms are specified in the applicable proposal or contract. Unless otherwise stated, invoices are due within the agreed period." },
  { h: "7. Limitation of Liability", p: "To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from the use of our website or platform. Our total liability is limited to the amount paid for the relevant platform subscription or agreement." },
  { h: "8. Confidentiality", p: "We treat client information as confidential and expect the same in return. Confidentiality obligations are further detailed in individual engagement agreements." },
  { h: "9. Termination", p: "Either party may terminate an engagement in accordance with the terms of the applicable agreement. Provisions relating to intellectual property, confidentiality and liability survive termination." },
  { h: "10. Governing Law", p: "These Terms are governed by the laws of India, and any disputes are subject to the exclusive jurisdiction of the courts of Madhya Pradesh." },
  { h: "11. Contact", p: `For questions about these Terms, contact us at ${COMPANY.email} or ${COMPANY.phone}.` },
];

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title={<>Terms &amp; <span className="gradient-text">Conditions</span></>} subtitle="Please read these terms carefully before using the Samurai AI Platform." />
      <section className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-sm text-muted-foreground">Last updated: July 2026</p>
        <div className="mt-8 space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.h} delay={i * 25}>
              <h2 className="text-xl font-semibold">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

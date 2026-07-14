import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy - Samurai AI" },
      { name: "description", content: "Read how Samurai Technology Private Limited collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy - Samurai AI" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  { h: "1. Introduction", p: `This Privacy Policy explains how ${COMPANY.name} ("we", "us", "our") collects, uses, discloses and safeguards your information when you visit our website or use the Samurai AI Platform. By using our website you consent to the practices described here.` },
  { h: "2. Information We Collect", p: "We may collect personal information you provide directly - such as your name, email address, phone number, and company details when you contact us, request a demo, or join our early access programme. We also collect limited technical data such as your browser type, device information, and usage patterns to improve our platform and website." },
  { h: "3. How We Use Your Information", p: "We use your information to respond to enquiries, deliver and improve our platform, communicate updates, personalise your experience, and comply with legal obligations. We do not sell your personal information to third parties." },
  { h: "4. Data Security", p: "We apply appropriate technical and organisational measures - including encryption, access controls and secure infrastructure - to protect your data against unauthorised access, loss or misuse. No method of transmission over the internet is completely secure, but we work continuously to safeguard your information." },
  { h: "5. Cookies", p: "Our website may use cookies and similar technologies to enhance functionality and analyse usage. You can control cookies through your browser settings, though some features may not function properly if disabled." },
  { h: "6. Third-Party Services", p: "We may use trusted third-party providers for analytics, hosting and communication. These providers are only given the information necessary to perform their functions and are obligated to protect your data." },
  { h: "7. Your Rights", p: "Depending on your location, you may have the right to access, correct, delete or restrict the processing of your personal data. To exercise these rights, please contact us using the details below." },
  { h: "8. Changes to This Policy", p: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised effective date." },
  { h: "9. Contact Us", p: `If you have questions about this Privacy Policy, contact us at ${COMPANY.email} or ${COMPANY.phone}, or write to us at ${COMPANY.address}.` },
];

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title={<>Privacy <span className="gradient-text">Policy</span></>} subtitle="Your privacy matters to us. Here's how we handle your data." />
      <section className="mx-auto max-w-3xl px-5 py-12">
        <p className="text-sm text-muted-foreground">Last updated: March 2026</p>
        <div className="mt-8 space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.h} delay={i * 30}>
              <h2 className="text-xl font-semibold">{s.h}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

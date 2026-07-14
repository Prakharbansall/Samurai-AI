import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, MessageCircle, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { FAQAccordion } from "@/components/sections";
import { HELP_ARTICLES, COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "Help Center - Samurai AI Platform | Documentation & Support" },
      { name: "description", content: "Find answers, guides, and support resources for the Samurai AI Platform. Browse documentation, FAQs, and contact our support team." },
      { property: "og:title", content: "Help Center - Samurai AI" },
      { property: "og:description", content: "Documentation, guides, and support for the Samurai AI Platform." },
      { property: "og:url", content: "/help" },
    ],
    links: [{ rel: "canonical", href: "/help" }],
  }),
  component: HelpPage,
});

function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title={<>How can we <span className="gradient-text">help you?</span></>}
        subtitle="Browse guides, documentation, and frequently asked questions - or reach out to our support team directly."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { icon: BookOpen, title: "Documentation", desc: "Platform guides, API references, and integration tutorials.", action: "Browse articles below" },
            { icon: MessageCircle, title: "Community", desc: "Connect with other platform users and share best practices.", action: "Coming soon" },
            { icon: Mail, title: "Email Support", desc: "Reach our support team for technical assistance.", action: COMPANY.supportEmail },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 80} className="glass card-hover rounded-2xl p-6 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl [background-image:var(--gradient-primary)]">
                <card.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
              <p className="mt-3 text-xs font-medium text-primary">
                {card.title === "Email Support" ? (
                  <a href={`mailto:${COMPANY.supportEmail}`} className="hover:underline">{card.action}</a>
                ) : card.action}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Guides" title={<>Platform <span className="gradient-text">documentation</span></>} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {HELP_ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={i * 50} className="glass card-hover rounded-2xl p-6">
              <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-primary">{a.category}</span>
              <h3 className="mt-4 text-base font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="FAQ" title={<>Frequently asked <span className="gradient-text">questions</span></>} />
        <div className="mt-14"><FAQAccordion /></div>
      </section>
    </>
  );
}

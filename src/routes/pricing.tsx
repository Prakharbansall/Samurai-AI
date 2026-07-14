import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing - Samurai AI Platform | Flexible Enterprise Plans" },
      { name: "description", content: "Explore Samurai AI Platform pricing tiers. Flexible, usage-based plans for teams of every size - from early adoption to enterprise deployment." },
      { property: "og:title", content: "Pricing - Samurai AI Platform" },
      { property: "og:description", content: "Transparent, scalable pricing for enterprise AI infrastructure." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Plans that <span className="gradient-text">scale with you</span></>}
        subtitle="Transparent, usage-based pricing designed for every stage of your AI journey. Full pricing launches with our public release - join early access for preferred rates."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100} className={cn(
              "relative flex flex-col rounded-2xl p-7",
              tier.highlighted ? "glass border-2 border-primary shadow-[var(--glow-primary)]" : "glass card-hover",
            )}>
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="mt-2 text-3xl font-bold gradient-text">{tier.price}</p>
              <p className="mt-3 text-sm text-muted-foreground">{tier.desc}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button asChild variant={tier.highlighted ? "hero" : "neon"} className="mt-8 w-full">
                <Link to={tier.cta === "Contact Sales" ? "/contact" : "/#early-access"}>
                  {tier.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-16 text-center">
        <Reveal className="glass rounded-2xl p-8">
          <h3 className="text-lg font-semibold">Need a custom enterprise agreement?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Our sales team works with large organisations on dedicated infrastructure, custom SLAs, compliance requirements, and volume pricing.
          </p>
          <Button asChild variant="hero" className="mt-5">
            <Link to="/contact">Contact Sales <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}

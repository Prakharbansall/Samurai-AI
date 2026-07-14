import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, ArrowRight, Rocket, Heart, GraduationCap, Globe } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers - Samurai AI" },
      { name: "description", content: "Join Samurai Technology and build the future of AI. Explore open roles in machine learning, engineering, product and more." },
      { property: "og:title", content: "Careers - Samurai AI" },
      { property: "og:description", content: "Build the future of AI with a passionate, innovative team." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const perks = [
  { icon: Rocket, title: "Platform engineering", desc: "Build and scale production AI infrastructure used by enterprises across industries." },
  { icon: Heart, title: "People-first culture", desc: "Flexible working, supportive teams, and genuine work-life balance." },
  { icon: GraduationCap, title: "Continuous learning", desc: "Learning budgets, mentorship, and time to grow your expertise." },
  { icon: Globe, title: "Global ambition", desc: "Help build AI infrastructure in India that competes on the world stage." },
];

const roles = [
  { title: "Machine Learning Engineer", type: "Full-time", location: "Bhopal / Remote" },
  { title: "AI Software Developer", type: "Full-time", location: "Bhopal / Remote" },
  { title: "Data Scientist", type: "Full-time", location: "Remote" },
  { title: "Generative AI Engineer", type: "Full-time", location: "Bhopal / Remote" },
  { title: "AI Product Designer", type: "Contract", location: "Remote" },
  { title: "Business Development Executive", type: "Full-time", location: "Bhopal" },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build the <span className="gradient-text">future of AI</span> with us</>}
        subtitle="We're building the team that will power the next generation of enterprise AI infrastructure. Join us."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionHeading eyebrow="Why Join Us" title={<>Life at <span className="gradient-text">Samurai Technology</span></>} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="glass card-hover rounded-2xl p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl [background-image:var(--gradient-primary)]">
                <p.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading eyebrow="Open Roles" title={<>Current <span className="gradient-text">opportunities</span></>} />
        <div className="mt-12 space-y-4">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 50} className="glass card-hover flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-primary" /> {r.type}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" /> {r.location}</span>
                </div>
              </div>
              <Button asChild variant="neon" size="sm">
                <a href={`mailto:${COMPANY.email}?subject=Application: ${encodeURIComponent(r.title)}`}>Apply <ArrowRight className="h-4 w-4" /></a>
              </Button>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center text-sm text-muted-foreground">
          Don't see the right role? Send your CV to{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
        </Reveal>
      </section>
    </>
  );
}

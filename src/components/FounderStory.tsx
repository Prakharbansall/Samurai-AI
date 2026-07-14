import { FOUNDER_STORY, COMPANY } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function FounderStory() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-5">
      <Reveal className="lg:col-span-2">
        <div className="glass relative overflow-hidden rounded-3xl p-8 text-center">
          <div className="pointer-events-none absolute inset-0 [background:var(--gradient-hero)] opacity-40" />
          <div className="relative">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full [background-image:var(--gradient-primary)] font-display text-3xl font-bold text-primary-foreground">
              CC
            </div>
            <h3 className="mt-5 text-xl font-bold">{COMPANY.founder}</h3>
            <p className="mt-1 text-sm text-primary">Founder & CEO</p>
            <p className="mt-1 text-xs text-muted-foreground">{COMPANY.name}</p>
          </div>
        </div>
      </Reveal>
      <div className="lg:col-span-3">
        <Reveal>
          <h3 className="text-2xl font-bold sm:text-3xl">{FOUNDER_STORY.headline}</h3>
        </Reveal>
        <div className="mt-6 space-y-4">
          {FOUNDER_STORY.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

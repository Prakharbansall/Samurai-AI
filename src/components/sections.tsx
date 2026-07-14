import { useState } from "react";
import { ChevronDown, Quote } from "lucide-react";
import {
  PLATFORM_FEATURES, WHY_PLATFORM, USE_CASES, PLATFORM_PILLARS,
  INDUSTRIES, TESTIMONIALS, FAQS, ROADMAP, PROCESS,
} from "@/lib/site-data";
import { DynamicIcon } from "@/components/DynamicIcon";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function PlatformFeaturesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {PLATFORM_FEATURES.map((s, i) => (
        <Reveal key={s.title} delay={(i % 4) * 80} className="glass card-hover group rounded-2xl p-6">
          <div className="grid h-12 w-12 place-items-center rounded-xl [background-image:var(--gradient-primary)] transition-transform group-hover:scale-110">
            <DynamicIcon name={s.icon} className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function ServicesGrid() {
  return <PlatformFeaturesGrid />;
}

export function WhyPlatformGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {WHY_PLATFORM.map((w, i) => (
        <Reveal key={w.title} delay={(i % 4) * 80} className="glass card-hover rounded-2xl p-6">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">
            <DynamicIcon name={w.icon} className="h-5 w-5" />
          </div>
          <h3 className="mt-5 text-base font-semibold">{w.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function UseCasesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {USE_CASES.map((uc, i) => (
        <Reveal key={uc.title} delay={i * 80} className="glass card-hover rounded-2xl p-7">
          <div className="grid h-12 w-12 place-items-center rounded-xl [background-image:var(--gradient-primary)]">
            <DynamicIcon name={uc.icon} className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="mt-5 text-lg font-semibold">{uc.title}</h3>
          <p className="mt-2 text-sm font-medium text-primary">{uc.outcome}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{uc.audience}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function PlatformPillars() {
  const items = [...PLATFORM_PILLARS, ...PLATFORM_PILLARS];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-4">
        {items.map((p, i) => (
          <span key={`${p.title}-${i}`} className="glass inline-flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium text-foreground">
            <DynamicIcon name={p.icon} className="h-4 w-4 text-primary" />
            {p.title}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return <PlatformPillars />;
}

export function ProcessTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
      <div className="space-y-6">
        {PROCESS.map((p, i) => (
          <Reveal key={p.title} delay={i * 60} className="relative flex items-start gap-5 pl-0">
            <div className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full [background-image:var(--gradient-primary)] font-display text-sm font-bold text-primary-foreground shadow-[var(--glow-primary)]">
              {i + 1}
            </div>
            <div className="glass card-hover flex-1 rounded-2xl p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function RoadmapTimeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
      <div className="space-y-6">
        {ROADMAP.map((r, i) => (
          <Reveal key={r.quarter} delay={i * 60} className="relative flex items-start gap-5">
            <div className={cn(
              "relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-[10px] font-bold text-primary-foreground shadow-[var(--glow-primary)]",
              r.status === "completed" ? "[background-image:var(--gradient-primary)]" :
              r.status === "in-progress" ? "border-2 border-primary bg-primary/20 text-primary" :
              "border border-border bg-secondary text-muted-foreground",
            )}>
              {r.quarter.replace("Q", "").slice(0, 3)}
            </div>
            <div className="glass card-hover flex-1 rounded-2xl p-5">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <span className={cn(
                  "rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                  r.status === "completed" && "bg-green-500/20 text-green-400",
                  r.status === "in-progress" && "bg-primary/20 text-primary",
                  r.status === "planned" && "bg-secondary text-muted-foreground",
                )}>
                  {r.status === "completed" ? "Shipped" : r.status === "in-progress" ? "In Progress" : "Planned"}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{r.quarter}</p>
              <ul className="mt-3 space-y-1.5">
                {r.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function IndustriesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {INDUSTRIES.map((ind, i) => (
        <Reveal key={ind.title} delay={(i % 4) * 80} className="glass card-hover rounded-2xl p-6">
          <div className="grid h-12 w-12 place-items-center rounded-xl [background-image:var(--gradient-primary)]">
            <DynamicIcon name={ind.icon} className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="mt-5 text-lg font-semibold">{ind.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {TESTIMONIALS.map((t, i) => (
        <Reveal key={t.name} delay={(i % 2) * 90} className="glass card-hover rounded-2xl p-7">
          <Quote className="h-8 w-8 text-primary/60" />
          <p className="mt-4 text-base leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-6 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full [background-image:var(--gradient-primary)] font-display text-sm font-bold text-primary-foreground">
              {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div>
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {FAQS.map((f, i) => (
        <Reveal key={f.q} delay={i * 40} className="glass overflow-hidden rounded-2xl">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 p-5 text-left"
          >
            <span className="font-medium">{f.q}</span>
            <ChevronDown className={cn("h-5 w-5 shrink-0 text-primary transition-transform", open === i && "rotate-180")} />
          </button>
          <div className={cn("grid transition-all duration-300", open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
            <div className="overflow-hidden">
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
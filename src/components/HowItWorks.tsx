import { HOW_IT_WORKS } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function HowItWorks() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {HOW_IT_WORKS.map((step, i) => (
        <Reveal key={step.title} delay={i * 80} className="relative">
          <div className="glass card-hover h-full rounded-2xl p-6">
            <div className="grid h-10 w-10 place-items-center rounded-full [background-image:var(--gradient-primary)] font-display text-sm font-bold text-primary-foreground">
              {i + 1}
            </div>
            <h3 className="mt-5 text-base font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
          </div>
          {i < HOW_IT_WORKS.length - 1 && (
            <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-primary to-transparent lg:block" />
          )}
        </Reveal>
      ))}
    </div>
  );
}

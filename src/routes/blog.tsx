import { createFileRoute } from "@tanstack/react-router";
import { Calendar, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BLOG_POSTS } from "@/lib/site-data";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights - Samurai AI Platform | AI Strategy & Industry Perspectives" },
      { name: "description", content: "Insights, analysis, and perspectives on enterprise AI infrastructure, platform strategy, and intelligent automation from the Samurai Technology team." },
      { property: "og:title", content: "Insights - Samurai AI Platform" },
      { property: "og:description", content: "Enterprise AI strategy, platform insights, and industry perspectives." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={<>Perspectives on <span className="gradient-text">enterprise AI</span></>}
        subtitle="Strategic insights, platform thinking, and industry analysis from the team building Samurai AI Platform."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p, i) => (
            <Reveal as="article" key={p.title} delay={(i % 3) * 80} className="glass card-hover group flex flex-col rounded-2xl p-6">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-secondary/60 px-3 py-1 font-medium text-primary">{p.tag}</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

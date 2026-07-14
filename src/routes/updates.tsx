import { createFileRoute } from "@tanstack/react-router";
import { Tag } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { RELEASE_NOTES } from "@/lib/site-data";

export const Route = createFileRoute("/updates")({
  head: () => ({
    meta: [
      { title: "Release Notes - Samurai AI Platform | Product Updates" },
      { name: "description", content: "Stay current with Samurai AI Platform release notes and product updates. See the latest features, improvements, and platform enhancements." },
      { property: "og:title", content: "Release Notes - Samurai AI Platform" },
      { property: "og:description", content: "Latest product updates and release notes for the Samurai AI Platform." },
      { property: "og:url", content: "/updates" },
    ],
    links: [{ rel: "canonical", href: "/updates" }],
  }),
  component: UpdatesPage,
});

function UpdatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Release Notes"
        title={<>Product <span className="gradient-text">updates</span></>}
        subtitle="Track every platform enhancement, new module, and infrastructure improvement as we build toward the future of enterprise AI."
      />

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="space-y-8">
          {RELEASE_NOTES.map((note, i) => (
            <Reveal key={note.version} delay={i * 60} className="glass rounded-2xl p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                  <Tag className="h-3 w-3" /> {note.version}
                </span>
                <span className="text-xs text-muted-foreground">{note.date}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{note.title}</h3>
              <ul className="mt-4 space-y-2">
                {note.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { POSTS } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Roofing Blog — Tips & News from Pat Wright Roofing" },
      { name: "description", content: "Roofing tips, maintenance guides and Irish weather advice from Pat Wright Roofing in Dublin." },
    ],
  }),
  component: Blog,
});

function Blog() {
  return (
    <SiteLayout>
      <PageHero title="Roofing Tips & News" subtitle="Expert advice for Irish homeowners" image="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1800&q=80" />
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {POSTS.map((p) => (
            <article key={p.slug} className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition flex flex-col">
              <div className="h-48 bg-gradient-to-br from-charcoal to-amber-brand-dark flex items-end p-4">
                <span className="bg-amber-brand text-charcoal px-3 py-1 rounded text-xs font-bold">{p.category}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs text-muted-foreground mb-2">{p.date}</div>
                <h2 className="font-bold text-xl text-charcoal mb-3">{p.title}</h2>
                <p className="text-sm text-muted-foreground mb-5 flex-1">{p.excerpt}</p>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="text-amber-brand-dark font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

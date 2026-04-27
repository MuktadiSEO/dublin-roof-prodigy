import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { RatingBadge } from "@/components/RatingBadge";
import { TESTIMONIALS } from "@/lib/site";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Pat Wright Roofing Dublin" },
      { name: "description", content: "Read what Dublin homeowners say about Pat Wright Roofing. 4.7★ on Google." },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <SiteLayout>
      <PageHero title="What Our Customers Say" subtitle="Real reviews from real Dublin customers" image="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1800&q=80" />
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10"><RatingBadge /></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex mb-3">{[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-brand text-amber-brand" />)}</div>
              <p className="text-foreground mb-5 italic">"{t.text}"</p>
              <div>
                <div className="font-bold text-charcoal">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://www.google.com/search?q=Pat+Wright+Roofing+Dublin" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-amber-brand text-charcoal px-7 py-3.5 rounded-md font-bold hover:bg-amber-brand-dark transition">
            Leave us a review on Google
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}

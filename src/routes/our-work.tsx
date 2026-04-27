import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ContactCTA } from "@/components/ContactCTA";
import { PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work — Pat Wright Roofing Dublin Portfolio" },
      { name: "description", content: "Browse recent roofing projects completed by Pat Wright Roofing across Dublin." },
    ],
  }),
  component: OurWork,
});

const FILTERS = ["All", "Flat Roofing", "Roof Repair", "Rubber Roofing", "Chimney"];

function OurWork() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <PageHero title="Our Work" subtitle="A selection of roofing projects across Dublin" image="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1800&q=80" />
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition ${filter === f ? "bg-amber-brand text-charcoal" : "bg-secondary text-charcoal hover:bg-secondary/70"}`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg group">
              <img src={p.src} alt={p.category} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <span className="text-white font-bold">{p.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ContactCTA />
    </SiteLayout>
  );
}

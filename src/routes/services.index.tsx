import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactCTA } from "@/components/ContactCTA";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Roofing Services in Dublin — Pat Wright Roofing" },
      { name: "description", content: "Full range of roofing services in Dublin: flat roofing, EPDM, repairs, chimney work, fascia & soffit, and 24/7 emergency response." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        title="All Roofing Services"
        subtitle="Comprehensive roofing solutions for Dublin homes and businesses"
        image="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1800&q=80"
      />
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl font-bold text-charcoal mb-4">Roofing Done Right, First Time</h2>
          <p className="text-muted-foreground">
            From routine maintenance to large-scale replacements, Pat Wright Roofing offers a complete suite of services across Dublin and the surrounding counties. Every job is backed by 20+ years of experience, full insurance, and a 24/7 emergency line.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </section>
      <ContactCTA />
    </SiteLayout>
  );
}

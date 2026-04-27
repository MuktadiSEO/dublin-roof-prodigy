import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactCTA } from "@/components/ContactCTA";
import { SERVICES } from "@/lib/site";
import { Check, ArrowRight, Shield, Award, Clock, ThumbsUp } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} in Dublin — Pat Wright Roofing` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.title} — Pat Wright Roofing` },
          { property: "og:description", content: loaderData.service.short },
          { property: "og:image", content: loaderData.service.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <Link to="/services" className="text-amber-brand-dark font-semibold">View all services →</Link>
      </div>
    </SiteLayout>
  ),
  component: ServicePage,
});

const benefitsBySlug: Record<string, string[]> = {
  "flat-roofing": ["Watertight, durable installations", "Modern materials including EPDM and felt", "Suitable for extensions, garages and commercial buildings", "Long manufacturer warranties", "Fast, clean installation"],
  "roof-repair": ["Same-day inspections available", "Leak detection and tracing", "Slate, tile and flat roof repairs", "Honest assessments — no upselling", "Fully insured workmanship"],
  "rubber-roofing": ["50+ year material lifespan", "100% waterproof seamless finish", "Resistant to UV and Irish weather", "Low maintenance", "Eco-friendly material"],
  "felt-roofing": ["Cost-effective flat roof solution", "Three-layer torch-on systems", "Reliable for sheds, garages and dormers", "10–20 year lifespan", "Fast installation"],
  "roof-replacement": ["Full strip and re-roof", "Premium materials and underlay", "Improved insulation options", "Increases home value", "Decades of trouble-free protection"],
  "fascia-soffit": ["uPVC fascia, soffit and guttering", "Wide range of colours", "Maintenance-free finish", "Improved kerb appeal", "Protects roof timbers"],
  "chimney-repairs": ["Re-pointing and lead flashing", "Chimney capping and cowls", "Stack rebuilds", "Pot replacement", "Bird and weather protection"],
  "emergency-roofing": ["24/7 callouts across Dublin", "Rapid temporary repairs", "Storm damage specialists", "Insurance-friendly reports", "Permanent fix follow-up"],
};

function ServicePage() {
  const { service } = Route.useLoaderData();
  const benefits = benefitsBySlug[service.slug] || [];
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);
  const isEmergency = service.slug === "emergency-roofing";

  return (
    <SiteLayout>
      <section className="relative h-[50vh] min-h-[340px] flex items-center text-white overflow-hidden">
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <Link to="/services" className="text-amber-brand mb-3 inline-block hover:underline">← All Services</Link>
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">{service.title}</h1>
          {isEmergency && <div className="mt-4 inline-block bg-amber-brand text-charcoal font-bold px-4 py-2 rounded">⚡ Available 24 Hours, 7 Days a Week</div>}
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="prose max-w-none mb-10">
          <h2 className="text-3xl font-bold text-charcoal mb-5">Professional {service.title} Across Dublin</h2>
          <p className="text-muted-foreground text-lg mb-4">
            {service.short} At Pat Wright Roofing, we bring over two decades of hands-on experience to every {service.title.toLowerCase()} job we take on — whether it's a small domestic project or a large commercial installation.
          </p>
          <p className="text-muted-foreground mb-4">
            Our team uses only premium materials sourced from trusted suppliers, paired with proven installation techniques refined over years of working on Irish properties. We understand the demands the local climate places on a roof, and we build accordingly.
          </p>
          <p className="text-muted-foreground">
            From the initial free quote through to the final clean-up, you'll deal directly with experienced craftsmen who take genuine pride in their work. No hidden fees, no shortcuts — just a job done properly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-5">Key Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <Check className="w-5 h-5 text-amber-brand-dark mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary/50 rounded-xl p-7">
            <h3 className="text-2xl font-bold text-charcoal mb-5">Why Pat Wright Roofing?</h3>
            <div className="space-y-4">
              {[
                { Icon: Award, t: "20+ years of trade experience" },
                { Icon: Shield, t: "Fully insured & guaranteed" },
                { Icon: Clock, t: "24/7 availability for emergencies" },
                { Icon: ThumbsUp, t: "4.7★ rated on Google" },
              ].map(({ Icon, t }) => (
                <div key={t} className="flex gap-3 items-center">
                  <Icon className="w-5 h-5 text-amber-brand-dark" /> <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-charcoal text-white rounded-2xl p-10 text-center">
          <h3 className="text-3xl font-bold mb-3">Get a Free Quote Today</h3>
          <p className="text-white/80 mb-6">Talk to our team about your {service.title.toLowerCase()} project. No obligation, no pressure.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-brand text-charcoal px-7 py-3.5 rounded-md font-bold hover:bg-amber-brand-dark transition">
            Request Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-14 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Related Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="bg-white p-5 rounded-lg border border-border hover:border-amber-brand hover:shadow-md transition text-center">
                <div className="font-semibold text-charcoal">{r.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { RatingBadge } from "@/components/RatingBadge";
import { ContactCTA } from "@/components/ContactCTA";
import { Award, Shield, Eye, HardHat, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pat Wright Roofing — Dublin's Family Roofing Business" },
      { name: "description", content: "Pat Wright Roofing has served Dublin for over 20 years. Family-run, fully insured, 4.7★ on Google." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero title="About Pat Wright Roofing" subtitle="A family roofing business serving Dublin for over 20 years" image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80" />

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-charcoal mb-5">Our Story</h2>
        <div className="space-y-4 text-muted-foreground text-lg">
          <p>Pat Wright Roofing was founded with a simple goal: provide Dublin homeowners with honest, high-quality roofing they can rely on for decades. Two decades on, we're still doing exactly that.</p>
          <p>Based in Ballsbridge, our team of skilled craftsmen works across Dublin and surrounding counties, tackling everything from small leak repairs to full commercial roof installations. We've built our reputation one satisfied customer at a time — a reputation reflected in our 4.7★ Google rating.</p>
          <p>What sets us apart is our family-business approach: you'll always speak with someone who knows your job, our quotes are clear and final, and we treat every property like our own.</p>
        </div>
      </section>

      <section className="py-16 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { Icon: Award, t: "Quality", d: "Premium materials, expert craftsmanship." },
              { Icon: Shield, t: "Reliability", d: "Show up on time, finish what we start." },
              { Icon: Eye, t: "Transparency", d: "Honest quotes, no hidden costs." },
              { Icon: HardHat, t: "Safety", d: "Fully insured, safe site practices." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="bg-white p-7 rounded-xl text-center border border-border">
                <div className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-amber-brand/15 text-amber-brand-dark mb-4"><Icon className="w-7 h-7" /></div>
                <h3 className="font-bold text-charcoal text-lg mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-charcoal mb-10 text-center">Meet The Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Pat Wright", role: "Founder & Master Roofer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
            { name: "Michael Doyle", role: "Senior Project Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" },
          ].map((m) => (
            <div key={m.name} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
              <img src={m.img} alt={m.name} className="w-full h-72 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-charcoal">{m.name}</h3>
                <p className="text-amber-brand-dark font-medium">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-secondary/40 text-center">
        <RatingBadge />
        <div className="mt-8">
          <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-brand text-charcoal px-7 py-3.5 rounded-md font-bold hover:bg-amber-brand-dark transition">
            Work With Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <ContactCTA />
    </SiteLayout>
  );
}

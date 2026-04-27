import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ServiceCard } from "@/components/ServiceCard";
import { RatingBadge } from "@/components/RatingBadge";
import { ContactCTA } from "@/components/ContactCTA";
import { SERVICES, TESTIMONIALS, POSTS, PROJECTS, SITE } from "@/lib/site";
import { Clock, Shield, Award, FileText, Star, ArrowRight, Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pat Wright Roofing — Dublin's Trusted Roofing Experts" },
      { name: "description", content: "Professional roofing services across Dublin. Flat roofs, repairs, EPDM, chimneys and 24/7 emergency response. 4.7★ on Google." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[88vh] min-h-[560px] flex items-center text-white overflow-hidden">
        <img src="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=1920&q=80" alt="Dublin rooftops at dusk" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl fade-in-up">
            <div className="inline-block bg-amber-brand text-charcoal px-3 py-1 rounded text-sm font-semibold mb-5">
              ⚡ 24/7 Emergency Service
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
              Dublin's Trusted <span className="text-amber-brand">Roofing</span> Experts
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8">
              Professional roofing services across Dublin and Ireland — available 24/7. Quality craftsmanship, fair pricing, fully insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-amber-brand text-charcoal px-7 py-3.5 rounded-md font-bold text-lg hover:bg-amber-brand-dark transition">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-7 py-3.5 rounded-md font-semibold text-lg hover:bg-white/20 transition">
                Our Services
              </Link>
            </div>
            <RatingBadge dark />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { Icon: Clock, title: "24/7 Availability", text: "Emergency response anytime" },
            { Icon: Award, title: "20+ Years Experience", text: "Skilled Dublin craftsmen" },
            { Icon: Shield, title: "Fully Insured", text: "Protected workmanship" },
            { Icon: FileText, title: "Free Quotes", text: "Honest, no-obligation pricing" },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="text-center">
              <div className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-amber-brand/15 text-amber-brand-dark mb-3">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-charcoal">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-amber-brand-dark font-semibold mb-2 uppercase tracking-wider text-sm">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Our Roofing Services</h2>
            <p className="text-muted-foreground">From minor repairs to full roof replacements, we deliver quality across every job.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICES.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80" alt="Pat Wright Roofing team" className="rounded-xl shadow-xl w-full h-[420px] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-amber-brand text-charcoal p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold">20+</div>
              <div className="text-sm font-semibold">Years Experience</div>
            </div>
          </div>
          <div>
            <p className="text-amber-brand-dark font-semibold mb-2 uppercase tracking-wider text-sm">About Us</p>
            <h2 className="text-4xl font-bold text-charcoal mb-5">A Family Roofing Business You Can Trust</h2>
            <p className="text-muted-foreground mb-4">
              Pat Wright Roofing has been serving Dublin homeowners and businesses for over two decades. Built on a foundation of honest pricing, quality workmanship, and genuine care for every project we take on.
            </p>
            <p className="text-muted-foreground mb-6">
              Whether it's a small repair or a full roof replacement, our team brings the same dedication and skill — and we're available 24/7 when you need us most.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-md font-semibold hover:bg-charcoal/90 transition">
              About Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-amber-brand font-semibold mb-2 uppercase tracking-wider text-sm">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
            <RatingBadge dark />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-white/5 backdrop-blur p-7 rounded-xl border border-white/10">
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-brand text-amber-brand" />)}
                </div>
                <p className="text-white/85 mb-5 italic">"{t.text}"</p>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-white/60">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/testimonials" className="inline-flex items-center gap-2 bg-amber-brand text-charcoal px-6 py-3 rounded-md font-semibold hover:bg-amber-brand-dark transition">
              See All Testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio snapshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-amber-brand-dark font-semibold mb-2 uppercase tracking-wider text-sm">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Our Recent Work</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROJECTS.slice(0, 4).map((p, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg group">
                <img src={p.src} alt={p.category} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition flex items-end p-4">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition">{p.category}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/our-work" className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-md font-semibold hover:bg-charcoal/90 transition">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-amber-brand-dark font-semibold mb-2 uppercase tracking-wider text-sm">From the Blog</p>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Roofing Tips & News</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {POSTS.slice(0, 3).map((p) => (
              <article key={p.slug} className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg transition">
                <div className="p-6">
                  <div className="text-xs text-muted-foreground mb-2">{p.date} · {p.category}</div>
                  <h3 className="font-bold text-lg text-charcoal mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="text-amber-brand-dark font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </SiteLayout>
  );
}

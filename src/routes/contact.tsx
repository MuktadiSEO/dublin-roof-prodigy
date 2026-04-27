import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { RatingBadge } from "@/components/RatingBadge";
import { SITE, SERVICES } from "@/lib/site";
import { MapPin, Phone, Clock, Mail, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pat Wright Roofing — Dublin" },
      { name: "description", content: "Get in touch with Pat Wright Roofing in Ballsbridge, Dublin. Free quotes, 24/7 emergency response." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <PageHero title="Get in Touch" subtitle="Free quotes, fast responses, available 24/7" />

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Contact Details</h2>
            <div className="space-y-5 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-brand/15 text-amber-brand-dark flex items-center justify-center shrink-0"><MapPin className="w-5 h-5" /></div>
                <div><div className="font-bold text-charcoal">Address</div><div className="text-muted-foreground">{SITE.address}</div></div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-brand/15 text-amber-brand-dark flex items-center justify-center shrink-0"><Phone className="w-5 h-5" /></div>
                <div><div className="font-bold text-charcoal">Phone</div><a href={SITE.phoneHref} className="text-muted-foreground hover:text-amber-brand-dark">{SITE.phone}</a></div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-brand/15 text-amber-brand-dark flex items-center justify-center shrink-0"><Clock className="w-5 h-5" /></div>
                <div><div className="font-bold text-charcoal">Hours</div><div className="text-muted-foreground">{SITE.hours}</div></div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-brand/15 text-amber-brand-dark flex items-center justify-center shrink-0"><Mail className="w-5 h-5" /></div>
                <div><div className="font-bold text-charcoal">Email</div><div className="text-muted-foreground">info@patwrightroofing.ie</div></div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border h-72">
              <iframe
                title="Pat Wright Roofing location"
                width="100%"
                height="100%"
                loading="lazy"
                src="https://www.google.com/maps?q=37+Nutley+Ave,+Ballsbridge,+Dublin&output=embed"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-charcoal mb-2">Request a Free Quote</h2>
            <p className="text-muted-foreground mb-6">Fill in the form and we'll get back to you within 24 hours.</p>
            {submitted ? (
              <div className="bg-amber-brand/15 border border-amber-brand text-charcoal p-6 rounded-lg text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto text-amber-brand-dark mb-3" />
                <h3 className="font-bold text-xl mb-1">Thank you!</h3>
                <p>Your request has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                {[
                  { label: "Name", type: "text", name: "name" },
                  { label: "Email", type: "email", name: "email" },
                  { label: "Phone", type: "tel", name: "phone" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-sm font-semibold mb-1.5 text-charcoal">{f.label}</label>
                    <input required type={f.type} name={f.name} className="w-full px-4 py-2.5 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-amber-brand" />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-charcoal">Service Required</label>
                  <select required className="w-full px-4 py-2.5 rounded-md border border-input bg-white focus:outline-none focus:ring-2 focus:ring-amber-brand">
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5 text-charcoal">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-2.5 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-amber-brand" />
                </div>
                <button type="submit" className="w-full bg-amber-brand text-charcoal py-3.5 rounded-md font-bold hover:bg-amber-brand-dark transition">
                  Send Request
                </button>
              </form>
            )}
            <div className="mt-6 flex justify-center"><RatingBadge /></div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Hammer } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/90 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
            <span className="bg-amber-brand text-charcoal p-2 rounded"><Hammer className="w-5 h-5" /></span>
            <span>Pat Wright <span className="text-amber-brand">Roofing</span></span>
          </Link>
          <p className="text-sm text-white/70">
            Dublin's trusted roofing contractor. Quality craftsmanship, fair pricing, and 24/7 service.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-amber-brand">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-amber-brand">Home</Link></li>
            <li><Link to="/services" className="hover:text-amber-brand">Services</Link></li>
            <li><Link to="/about" className="hover:text-amber-brand">About Us</Link></li>
            <li><Link to="/our-work" className="hover:text-amber-brand">Our Work</Link></li>
            <li><Link to="/blog" className="hover:text-amber-brand">Blog</Link></li>
            <li><Link to="/testimonials" className="hover:text-amber-brand">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-amber-brand">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-amber-brand">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-amber-brand">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-amber-brand">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-amber-brand mt-0.5 shrink-0" /> {SITE.address}</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-amber-brand mt-0.5 shrink-0" /> <a href={SITE.phoneHref} className="hover:text-amber-brand">{SITE.phone}</a></li>
            <li className="flex gap-2"><Clock className="w-4 h-4 text-amber-brand mt-0.5 shrink-0" /> {SITE.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Pat Wright Roofing. All rights reserved.</p>
          <p>Dublin, Ireland · Fully Insured</p>
        </div>
      </div>
    </footer>
  );
}

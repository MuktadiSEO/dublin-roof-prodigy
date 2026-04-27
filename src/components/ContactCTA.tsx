import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="relative bg-charcoal text-white py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1632759145355-8b8f3ab6c5f6?w=1800&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Need a Roofing Expert? We're Available 24/7</h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">Free quotes, fast response, and quality craftsmanship across Dublin and Ireland.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 bg-amber-brand text-charcoal px-7 py-3.5 rounded-md font-bold text-lg hover:bg-amber-brand-dark transition">
            <Phone className="w-5 h-5" /> {SITE.phone}
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-charcoal px-7 py-3.5 rounded-md font-semibold hover:bg-white/90 transition">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown, Hammer } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/our-work", label: "Our Work" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-white shadow-md">
      <div className="bg-amber-brand text-charcoal text-sm">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span className="font-medium hidden sm:block">⚡ Available 24/7 — Emergency Roofing Across Dublin</span>
          <a href={SITE.phoneHref} className="font-bold flex items-center gap-1.5 ml-auto">
            <Phone className="w-3.5 h-3.5" /> {SITE.phone}
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="bg-amber-brand text-charcoal p-2 rounded"><Hammer className="w-5 h-5" /></span>
          <span>Pat Wright <span className="text-amber-brand">Roofing</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link to="/" className="hover:text-amber-brand transition">Home</Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link to="/services" className="hover:text-amber-brand transition flex items-center gap-1">
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-3 w-64">
                <div className="bg-white text-charcoal rounded-lg shadow-xl py-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="block px-4 py-2 hover:bg-amber-brand/20 hover:text-charcoal transition"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-amber-brand transition">About</Link>
          <Link to="/our-work" className="hover:text-amber-brand transition">Our Work</Link>
          <Link to="/blog" className="hover:text-amber-brand transition">Blog</Link>
          <Link to="/testimonials" className="hover:text-amber-brand transition">Testimonials</Link>
          <Link to="/contact" className="bg-amber-brand text-charcoal px-5 py-2 rounded-md font-semibold hover:bg-amber-brand-dark transition">
            Free Quote
          </Link>
        </nav>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-charcoal border-t border-white/10 px-4 py-4 space-y-1">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2 hover:text-amber-brand">
              {n.label}
            </Link>
          ))}
          <Link to="/services" onClick={() => setOpen(false)} className="block py-2 font-semibold text-amber-brand">
            All Services
          </Link>
          <div className="pl-4 space-y-1">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                onClick={() => setOpen(false)}
                className="block py-1.5 text-sm text-white/80 hover:text-amber-brand"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

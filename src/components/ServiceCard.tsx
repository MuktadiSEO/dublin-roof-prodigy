import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/site";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-44 overflow-hidden">
        <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 text-charcoal">{service.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{service.short}</p>
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          className="inline-flex items-center gap-1 text-sm font-semibold text-amber-brand-dark hover:gap-2 transition-all"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

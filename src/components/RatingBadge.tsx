import { Star } from "lucide-react";
import { SITE } from "@/lib/site";

export function RatingBadge({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-3 rounded-full px-4 py-2 ${dark ? "bg-white/10 text-white backdrop-blur" : "bg-white border border-border shadow-sm"}`}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className={`w-4 h-4 ${i <= Math.round(SITE.rating) ? "fill-amber-brand text-amber-brand" : "text-muted-foreground"}`} />
        ))}
      </div>
      <span className="text-sm font-semibold">{SITE.rating}★ on Google</span>
      <span className={`text-xs ${dark ? "text-white/70" : "text-muted-foreground"}`}>({SITE.reviews} reviews)</span>
    </div>
  );
}

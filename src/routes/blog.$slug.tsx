import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ContactCTA } from "@/components/ContactCTA";
import { POSTS } from "@/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.post.title} — Pat Wright Roofing Blog` },
      { name: "description", content: loaderData.post.excerpt },
    ] : [],
  }),
  notFoundComponent: () => (
    <SiteLayout>
      <div className="py-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-amber-brand-dark font-semibold">Back to blog →</Link>
      </div>
    </SiteLayout>
  ),
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();

  return (
    <SiteLayout>
      <section className="bg-charcoal text-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Link to="/blog" className="text-amber-brand mb-4 inline-block hover:underline">← Back to blog</Link>
          <div className="text-white/70 text-sm mb-3">{post.date} · {post.category}</div>
          <h1 className="text-4xl md:text-5xl font-bold">{post.title}</h1>
        </div>
      </section>
      <article className="py-16 max-w-3xl mx-auto px-4 prose prose-lg">
        <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
        <p>Living in Dublin means dealing with weather that can change three times before lunch. Your roof bears the brunt of it — wind-driven rain, the occasional storm, and long damp winters. That's why understanding the basics of roof care is so valuable for any homeowner.</p>
        <h2 className="text-2xl font-bold text-charcoal mt-8 mb-3">Key Things to Know</h2>
        <p>The lifespan of a typical Irish roof depends on materials, exposure and how well it's been maintained. Slate and tile roofs can last 50–80 years; flat felt roofs typically 15–20 years; modern EPDM rubber roofs over 50.</p>
        <p>Annual visual inspections are the single most important thing you can do. Look for slipped slates, blocked gutters, lead flashing damage around chimneys, and any sign of moss or staining on ceilings inside.</p>
        <h2 className="text-2xl font-bold text-charcoal mt-8 mb-3">When to Call a Professional</h2>
        <p>If you spot anything you're unsure about — or if you've had a recent storm — get a qualified roofer to take a look. Early intervention is always cheaper than waiting for a leak to develop. Pat Wright Roofing offers free quotes on all jobs across Dublin.</p>
        <p className="mt-8 italic text-muted-foreground">This article is for general guidance. For advice on your specific roof, contact our team.</p>
      </article>
      <ContactCTA />
    </SiteLayout>
  );
}

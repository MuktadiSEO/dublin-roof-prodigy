import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-amber-brand px-4 py-2 text-sm font-semibold text-charcoal hover:bg-amber-brand-dark">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pat Wright Roofing — Dublin's Trusted Roofing Experts" },
      { name: "description", content: "Pat Wright Roofing offers professional flat roofing, repairs, EPDM, chimney work and 24/7 emergency service across Dublin, Ireland." },
      { name: "author", content: "Pat Wright Roofing" },
      { property: "og:title", content: "Pat Wright Roofing — Dublin's Trusted Roofing Experts" },
      { property: "og:description", content: "Pat Wright Roofing offers professional flat roofing, repairs, EPDM, chimney work and 24/7 emergency service across Dublin, Ireland." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Pat Wright Roofing — Dublin's Trusted Roofing Experts" },
      { name: "twitter:description", content: "Pat Wright Roofing offers professional flat roofing, repairs, EPDM, chimney work and 24/7 emergency service across Dublin, Ireland." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a859de99-29c2-4a4c-b09f-658fd621324d/id-preview-8d6d28c6--3ad4797b-4b58-4125-8709-5aec9be73817.lovable.app-1777299390560.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a859de99-29c2-4a4c-b09f-658fd621324d/id-preview-8d6d28c6--3ad4797b-4b58-4125-8709-5aec9be73817.lovable.app-1777299390560.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

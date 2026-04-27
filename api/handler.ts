// Vercel Edge Function — invokes the TanStack Start Worker bundle for all routes.
// Vercel's Edge Runtime is compatible with the Cloudflare Worker fetch handler API.
// @ts-ignore - resolved at build time after `bun run build` produces dist/server/index.js
import worker from "../dist/server/index.js";

export const config = { runtime: "edge" };

export default async function handler(request: Request) {
  const ctx = {
    waitUntil: (_p: Promise<unknown>) => {},
    passThroughOnException: () => {},
  };
  // @ts-ignore
  return worker.fetch(request, {}, ctx);
}

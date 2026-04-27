import worker from "../dist/server/index.js";

export const config = { runtime: "edge" };

export default async function handler(request: Request, ctx: any) {
  // The TanStack Start build outputs a Cloudflare Worker module.
  // Vercel Edge Runtime is API-compatible with Workers (fetch handler),
  // so we can invoke it directly. Pass an empty env object — extend as needed.
  return worker.fetch(request, {}, ctx);
}

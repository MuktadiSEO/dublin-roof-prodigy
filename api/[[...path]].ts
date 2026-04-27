// Vercel Edge Function that runs the TanStack Start (Cloudflare Worker) bundle.
// Vercel Edge Runtime is fetch-handler compatible with Workers.
import worker from "../dist/server/index.js";

export const config = {
  runtime: "edge",
};

export default async function handler(request: Request) {
  const ctx = {
    waitUntil: (_p: Promise<unknown>) => {},
    passThroughOnException: () => {},
  };
  return worker.fetch(request, {}, ctx as any);
}

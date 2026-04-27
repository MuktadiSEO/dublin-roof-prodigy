// Vercel Node.js Serverless Function — invokes the TanStack Start Worker bundle.
// We use the Node runtime (not Edge) because the bundle imports node:events,
// node:async_hooks, node:stream, and node:stream/web, which Vercel's Edge
// Runtime does not support but Node serverless does.
// @ts-ignore - resolved at build time after `bun run build` produces dist/server/index.js
import worker from "../dist/server/index.js";

export const config = {
  runtime: "nodejs20.x",
};

// Vercel's Node runtime supports the Web `Request`/`Response` standard when
// the function exports a default fetch-style handler.
export default async function handler(request: Request): Promise<Response> {
  const ctx = {
    waitUntil: (_p: Promise<unknown>) => {},
    passThroughOnException: () => {},
  };
  // @ts-ignore
  return worker.fetch(request, {}, ctx);
}

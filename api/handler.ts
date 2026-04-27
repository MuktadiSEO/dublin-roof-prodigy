// @ts-ignore - resolved at build time after `bun run build` produces dist/server/index.js
import worker from "../dist/server/index.js";

export const config = {
  runtime: "nodejs20.x",
};

function getOrigin(req: any) {
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const protocol = req.headers["x-forwarded-proto"] || "https";

  return `${protocol}://${host}`;
}

async function toWebRequest(req: any) {
  const url = new URL(req.url || "/", getOrigin(req));
  const headers = new Headers();

  for (const [key, value] of Object.entries(req.headers ?? {})) {
    if (Array.isArray(value)) {
      for (const entry of value) headers.append(key, entry);
    } else if (typeof value === "string") {
      headers.set(key, value);
    }
  }

  const method = req.method || "GET";
  const hasBody = method !== "GET" && method !== "HEAD";

  return new Request(url, {
    method,
    headers,
    body: hasBody ? req : undefined,
    duplex: hasBody ? "half" : undefined,
  });
}

async function sendWebResponse(response: Response, res: any) {
  res.statusCode = response.status;

  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (!response.body) {
    res.end();
    return;
  }

  const reader = response.body.getReader();

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
    res.end();
  } catch (error) {
    res.destroy(error as Error);
  }
}

export default async function handler(req: any, res: any) {
  const request = await toWebRequest(req);
  const ctx = {
    waitUntil: (_promise: Promise<unknown>) => {},
    passThroughOnException: () => {},
  };

  // @ts-ignore
  const response = await worker.fetch(request, {}, ctx);
  await sendWebResponse(response, res);
}

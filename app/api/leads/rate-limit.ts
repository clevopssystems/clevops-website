/**
 * A best-effort, in-memory sliding-window limiter.
 *
 * LIMITATION: state lives in the memory of one server instance. On `next
 * start` or a single long-lived server it is a real limit. On serverless hosts
 * (Vercel and similar) each warm instance keeps its own window and a cold start
 * resets it, so it slows down a single client hammering the form but is not a
 * global guarantee. For a hard, shared limit, back this with a store such as
 * Upstash Redis or Vercel KV; the honeypot and server-side validation remain
 * the primary spam defences either way.
 *
 * PRODUCTION NOTE: before sending significant paid traffic to the site,
 * replace this with a persistent limiter (e.g. Upstash Ratelimit). Nothing
 * else in the route has to change: keep the rateLimit(key) signature.
 */

const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const MAX_KEYS = 5_000;

const hits = new Map<string, number[]>();

export type RateLimitResult = { allowed: true } | { allowed: false; retryAfterSeconds: number };

export function rateLimit(key: string, now = Date.now()): RateLimitResult {
  const windowStart = now - WINDOW_MS;
  const recent = (hits.get(key) ?? []).filter((time) => time > windowStart);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil((recent[0] + WINDOW_MS - now) / 1000)) };
  }

  recent.push(now);
  hits.set(key, recent);

  // Keep memory bounded: drop expired keys, then the oldest if still too many.
  if (hits.size > MAX_KEYS) {
    for (const [storedKey, times] of hits) {
      if (times[times.length - 1] <= windowStart) hits.delete(storedKey);
    }
    while (hits.size > MAX_KEYS) {
      const oldest = hits.keys().next().value;
      if (oldest === undefined) break;
      hits.delete(oldest);
    }
  }

  return { allowed: true };
}

/**
 * The client's address as reported by the platform proxy. X-Real-IP comes
 * first because the proxy sets it outright (Vercel does); the first
 * X-Forwarded-For entry is only a fallback, since a proxy that appends to that
 * header rather than replacing it leaves the first entry client-controlled.
 */
export function clientKey(headers: Headers): string {
  const real = headers.get("x-real-ip")?.trim();
  const forwarded = headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return real || forwarded || "unknown";
}

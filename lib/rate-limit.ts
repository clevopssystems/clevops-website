import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  reset: number; // Unix timestamp ms
}

const LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

// In-memory fallback — one counter per serverless instance.
// Effective for dev and low-traffic Vercel deployments; for high-traffic
// production use, set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
// to activate the sliding-window Redis limiter instead.
const ipHits = new Map<string, { count: number; reset: number }>();

function inMemoryLimit(ip: string): RateLimitResult {
  const now = Date.now();
  const entry = ipHits.get(ip);

  if (!entry || entry.reset < now) {
    ipHits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return { success: true, remaining: LIMIT - 1, reset: now + WINDOW_MS };
  }

  entry.count += 1;
  if (entry.count > LIMIT) {
    return { success: false, remaining: 0, reset: entry.reset };
  }
  return { success: true, remaining: LIMIT - entry.count, reset: entry.reset };
}

let ratelimiter: Ratelimit | null = null;

function getUpstashLimiter(): Ratelimit | null {
  if (ratelimiter) return ratelimiter;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  ratelimiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(LIMIT, "1 h"),
    prefix: "clevops:contact",
  });
  return ratelimiter;
}

export async function checkRateLimit(ip: string): Promise<RateLimitResult> {
  const limiter = getUpstashLimiter();
  if (limiter) {
    try {
      const r = await limiter.limit(ip);
      return { success: r.success, remaining: r.remaining, reset: r.reset };
    } catch (err) {
      console.error(
        "[RateLimit] Upstash error, falling back to memory:",
        err instanceof Error ? err.message : "Unknown"
      );
    }
  }
  return inMemoryLimit(ip);
}

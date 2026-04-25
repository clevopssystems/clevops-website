import { createHash, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  ADMIN_COOKIE,
  signSession,
  SESSION_COOKIE_OPTIONS,
} from "@/lib/admin-auth";

const schema = z.object({
  username: z.string().min(1).max(100),
  password: z.string().min(1).max(200),
});

// In-memory rate limit for login failures (resets on cold start — good enough for personal CRM)
const failures = new Map<string, { count: number; resetAt: number }>();
const MAX_FAILURES = 10;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = failures.get(ip);
  if (!entry || entry.resetAt < now) return false;
  return entry.count >= MAX_FAILURES;
}

function recordFailure(ip: string): void {
  const now = Date.now();
  const entry = failures.get(ip);
  if (!entry || entry.resetAt < now) {
    failures.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else {
    entry.count += 1;
  }
}

// Hash both values before comparing so timingSafeEqual always sees equal-length buffers
function safeCompare(a: string, b: string): boolean {
  const bufA = Buffer.from(createHash("sha256").update(a).digest("hex"), "utf8");
  const bufB = Buffer.from(createHash("sha256").update(b).digest("hex"), "utf8");
  return timingSafeEqual(bufA, bufB);
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many failed attempts. Try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

  const { username, password } = result.data;

  const validUsername = process.env.ADMIN_USERNAME;
  const validPassword = process.env.ADMIN_PASSWORD;

  if (!validUsername || !validPassword) {
    console.error("[Admin] ADMIN_USERNAME or ADMIN_PASSWORD env vars are not set");
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const usernameOk = safeCompare(username, validUsername);
  const passwordOk = safeCompare(password, validPassword);

  if (!usernameOk || !passwordOk) {
    recordFailure(ip);
    // Constant-time delay to slow brute force even on serverless cold starts
    await new Promise((r) => setTimeout(r, 400));
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = signSession(username);
  const res = NextResponse.json({ success: true });
  res.cookies.set(ADMIN_COOKIE, token, SESSION_COOKIE_OPTIONS);
  return res;
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
